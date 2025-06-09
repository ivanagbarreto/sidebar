import {Link} from "react-router"

export const Sidebar = () =>{
    return(
        <nav>
            <div>

            </div>
            <div>
                <Link to={"#"}
                className="flex flex-row mt-5"
                >
                    <span className="ml-3 text-xl"></span>
                </Link>
            </div>
        </nav>
    )
}