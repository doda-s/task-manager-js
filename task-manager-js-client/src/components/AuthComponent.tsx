import '../styles/Auth.css'

function AuthComponent() {
    return(
        <div className='w-72'>
            <div className="flex justify-center p-5">
                <p className='text-3xl'>Sign Up</p>
            </div>      
            <div className="flex flex-col gap-4">
                <section>
                    <input className='w-full h-10 p-2.5 border' type="text" name="username" placeholder='Usuário'/>
                </section>
                <section>
                    <input className="w-full h-10 p-2.5 border" type="password" name="password" placeholder='Senha'/>
                </section>
                <section className='flex justify-center'>
                    <button>Sign Up</button>
                </section>
                <p className='self-center'>Possui uma conta? <a href="#">Login</a></p>
            </div>
        </div>
    );
}

export default AuthComponent;