import HeaderOrganism from "../organisms/HeaderOrganism";

function HomeTemplate() {
    return(
        <>
            <HeaderOrganism/>
            <div className="absolute inset-x-1/2 inset-y-56 -translate-x-1/2 h-fit w-fit flex flex-col items-center gap-14">
                <h1 className="text-8xl">TasmanJs</h1>
                <p className="text-4xl w-fit text-center">Todas as suas tarefas em um só lugar!</p>
                <div className="flex flex-row gap-6 justify-center">
                    <button className="bg-gray-800 text-gray-100 p-5 rounded-full cursor-pointer border-gray-600 hover:bg-gray-600">Get Started</button>
                    <button className="bg-gray-800 text-gray-100 p-5 rounded-full cursor-pointer border-gray-600 hover:bg-gray-600">GitHub</button>
                </div>
            </div>
        </>
    );
}
export default HomeTemplate