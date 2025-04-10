import '../../styles/Header.css'

function HeaderOrganism() {
    return(
        <header className='flex justify-between items-center pl-10 pr-10 bg-gray-900 text-white'>
            <span id="logo" className="text-4xl mt-2 mb-2">TasmanJs</span>
            <div className='flex gap-7'>
                <button className='cursor-pointer'>Sign Up</button>
                <button className='cursor-pointer'>Login</button>
            </div>
        </header>
    );
}
export default HeaderOrganism