import { Sidebar } from "../components/Sidebar"
import { useAppDispatch } from "../store/store";
import {openSideBar} from "../store/sidebarSlice"

export const HomeDashboard = () =>{

    const dispatch = useAppDispatch();

    return (
        <>
        <div className="w-full lg:w-[1024px] m-auto flex flex-col justify-start relative">
        <Sidebar/>

        <header className="h-14 bg-blue-950 flex flex-row justify-between text-white"> 
            <div className="w-2/12 flex flex-row justify-center items-center">
                <button className="bg-transparent hover:bg-blue-500 font-semibold
                hover:text-white py-2 px-4 border
                border-white hover:border-transparent rounded active:scale-95
                "
                onClick={()=> dispatch (openSideBar())}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30}><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>
            <span className="flex justify-center items-center w-10/12 bg-blue-600"></span>
        </header>
        <main className="h-[600px]">
            <section className="h-full bg-gray-200">esto es el cuerpo</section>
        </main>
        <footer className="h-14 bg-blue-950 flex justify-center items-center text-white">esto es el footer</footer>

        </div>
        </>
    )
}