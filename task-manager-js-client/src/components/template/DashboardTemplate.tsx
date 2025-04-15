import HeaderOrganism from "../organisms/HeaderOrganism";
import FooterOrganism from "../organisms/FooterOrganism";
import { useEffect, useState } from "react";
import { TasksService } from "../../services/tasks";
import TaskCardOrganism from "../organisms/TaskCardOrganism";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

const tasksService = new TasksService()

interface Task {
    taskId: number;
    title: string;
    completed: boolean;
}

function DashboardTemplate() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [textInputValue, setTextInputValue] = useState('');
    const navigate = useNavigate()

    const getAllTasks = () => {
        tasksService.allTasks().then(response => {
            if (response.status == 401) {
                navigate('/auth');
            }
            setTasks(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }
    useEffect(getAllTasks, []);

    const createTaskButtonClick = async () => {
        if (textInputValue.trim() === "") return;
        try {
            await tasksService.addTask(textInputValue);
            setTextInputValue("");
            getAllTasks();
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    };

    return(
        <>
            <HeaderOrganism showAuthButtons={false}/>
            <div className="pt-32 pb-16">
                <div className="flex flex-col items-center">
                    <span className="text-5xl text-[##1E1E1E]">Pronto para concluir suas tarefas?</span>
                    <div className="w-180 h-0.5 rounded-full bg-[#1E1E1E] mt-10 mb-7"></div>
                </div>
                <div>
                    <div className="flex flex-row justify-center gap-3">
                        <input type="text" placeholder="Adicionar task." className="border-b-[#1E1E1E]" value={textInputValue} onChange={(e) => setTextInputValue(e.target.value)} />
                        <button className='bg-[#F3F4F6] p-3.5 flex flex-row gap-2 cursor-pointer border-[##1E1E1E]' onClick={createTaskButtonClick}><PlusIcon className='h-6 w-6'/> Criar Tarefa</button>
                    </div>
                    <div className="flex flex-col gap-6 items-center pt-10">
                        <span className={loading? "":"hidden"}>Loading...</span>
                        <span className={tasks? "hidden":""}>Nada para mostrar...</span>
                        {tasks.map(task => (
                            <TaskCardOrganism
                                key={task.taskId}
                                id={task.taskId}
                                title={task.title}
                                completed={task.completed}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <FooterOrganism/>
        </>
    );
}
export default DashboardTemplate;