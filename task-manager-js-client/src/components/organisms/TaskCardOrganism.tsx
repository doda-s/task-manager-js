import { CheckIcon } from "@heroicons/react/16/solid";

interface TaskCardProps {
    id: number
    title: string;
    completed: boolean
}

function TaskCardOrganism({ id, title, completed }: TaskCardProps) {
    return(
        <div className=" flex flex-row bg-[#F3F4F6] h-fit p-8 w-3xl items-center justify-between shadow-md">
            <span className={"text-[##1E1E1E] text-2xl overflow-hidden whitespace-nowrap text-ellipsis block mr-8 " + [completed?"line-through":""]}>{title}</span>
            <div>
                <CheckIcon className="h-12 w-12 text-green-500 hover:scale-115 transition-all duration-100 cursor-pointer"/>
            </div>
        </div>
    );
 }
 export default TaskCardOrganism;