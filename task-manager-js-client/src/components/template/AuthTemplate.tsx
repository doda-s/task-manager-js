import { useState } from 'react';
import { Auth } from '../../services/auth';
import '../../styles/Auth.css'
import { useNavigate } from 'react-router-dom';

const authService = new Auth()

function AuthComponent() {
    const [action, setAction] = useState("Sign Up");
    const [usernameTextInput, setUsernameTextInput] = useState('');
    const [passwordTextInput, setPasswordTextInput] = useState('');
    const [warningText, setWarningText] = useState(false);
    const navigate = useNavigate();

    const signIn = async () => {
        console.log("Debug SignIn") // Debug
        authService.signIn(usernameTextInput, passwordTextInput).then(response => {
            setUsernameTextInput('');
            setPasswordTextInput('');
            console.log(response) // debug
            if (response.status == 200) {
                navigate('/dashboard');
                return;
            }
        })
    }
    
    const signUp = async () => {
        console.log("Debug SignUp") // Debug
        authService.signUp(usernameTextInput, passwordTextInput).then(response => {
            setUsernameTextInput('');
            setPasswordTextInput('');
            console.log(response) // debug
            if (response.status == 200) {
                navigate('/dashboard');
                return;
            }
            if (response.status == 401) {
                setWarningText(response.data.message);
                return
            }
        })
    }

    return(
        
        <div className='h-min w-80'>
            <div className="flex justify-center gap-2.5">
                <p className='text-3xl'>{action}</p>
            </div>
            <div className='bg-gray-800 h-0.5 rounded-full w-16 justify-self-center mt-2.5 mb-3'>
            </div>
            <div className="flex flex-col gap-4">
                <section>
                    <input className='w-full h-10 p-2.5 border' type="text" name="username" placeholder='Usuário' value={usernameTextInput} onChange={(e) => setUsernameTextInput(e.target.value)}/>
                </section>
                <section>
                    <input className="w-full h-10 p-2.5 border" type="password" name="password" placeholder='Senha' value={passwordTextInput} onChange={(e) => setPasswordTextInput(e.target.value)}/>
                </section>
                <section className='flex justify-center'>
                    {action==="Sign Up"?<button className='cursor-pointer' onClick={signUp}>Criar</button>:<button className='cursor-pointer' onClick={signIn}>Entrar</button>}
                </section>
                {action==="Sign Up"? <p className='self-center'>Possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Login")}>Entrar</span>.</p>:<p className='self-center'>Não possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Sign Up")}>Criar</span>.</p>}
                <span className={'self-center text-[#B67280]'}>{warningText}</span>
            </div>
        </div>
    
    );
}
export default AuthComponent;