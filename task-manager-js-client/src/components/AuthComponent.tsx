import { useState } from 'react';
import '../styles/Auth.css'

function AuthComponent() {
    const [action, setAction] = useState("Sign Up")

    return(
        <div className='w-72 pt-6 pb-6'>
            <div className="flex justify-center gap-2.5">
                <p className='text-3xl'>{action}</p>
            </div>
            <div className='bg-gray-50 h-0.5 rounded-full w-16 justify-self-center mt-2.5 mb-3'>

            </div>   
            <div className="flex flex-col gap-4">
                <section>
                    <input className='w-full h-10 p-2.5 border' type="text" name="username" placeholder='Usuário'/>
                </section>
                <section>
                    <input className="w-full h-10 p-2.5 border" type="password" name="password" placeholder='Senha'/>
                </section>
                <section className='flex justify-center'>
                    <button>{action==="Sign Up"?"Criar":"Entrar"}</button>
                </section>
                {action==="Sign Up"? <p className='self-center'>Possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Login")}>Entrar</span>.</p>:<p className='self-center'>Não possui uma conta? <span className='text-blue-500 cursor-pointer' onClick={()=> setAction("Sign Up")}>Criar</span>.</p>}
            </div>
        </div>
    );
}

export default AuthComponent;