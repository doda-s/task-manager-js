import { useRef, useState } from 'react';
import '../../styles/Auth.css'

function AuthComponent() {
    const [action, setAction] = useState("Sign Up");
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    

    return(
        
        <div className='h-min w-80'>
            <div className="flex justify-center gap-2.5">
                <p className='text-3xl'>{action}</p>
            </div>
            <div className='bg-gray-50 h-0.5 rounded-full w-16 justify-self-center mt-2.5 mb-3'>
            </div>
            <div className="flex flex-col gap-4">
                <section>
                    <input className='w-full h-10 p-2.5 border' type="text" name="username" placeholder='Usuário' ref={usernameInputRef}/>
                </section>
                <section>
                    <input className="w-full h-10 p-2.5 border" type="password" name="password" placeholder='Senha' ref={passwordInputRef}/>
                </section>
                <section className='flex justify-center'>
                    {action==="Sign Up"?<button>Criar</button>:<button>Entrar</button>}
                </section>
                {action==="Sign Up"? <p className='self-center'>Possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Login")}>Entrar</span>.</p>:<p className='self-center'>Não possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Sign Up")}>Criar</span>.</p>}
            </div>
        </div>
    
    );
}

export default AuthComponent;