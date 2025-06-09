import {Link} from "react-router"

export const Sidebar = () =>{
    return(
        <nav>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={50}><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
            </div>
            <div>
                <Link to={"#"}
                className="flex flex-row mt-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={20}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    <span className="ml-3 text-xl"> Perfil </span>
                </Link>
                                <Link to={"#"}
                className="flex flex-row mt-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={20}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    <span className="ml-3 text-xl"> Ordenes </span>
                </Link>
                                <Link to={"#"}
                className="flex flex-row mt-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={20}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    <span className="ml-3 text-xl"> Productos </span>
                </Link>
            </div>
        </nav>
    )
}