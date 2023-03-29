import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="flex bg-background-mobile md:bg-background bg-cover bg-current bg-no-repeat h-screen">
            <div className="flex flex-col text-center mr-auto ml-auto mt-auto mb-auto">
                <img className="animate-bounce lg:w-140" src="/img/Logo.png" alt="" />
                <div className="mt-5 mb-5 flex flex-col ml-auto mr-auto zoomInUp">
                    <Link to="/characters"><button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2 hover:font-bold lg:text-2xl lg:w-32">Characters</button></Link>
                    <button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2 hover:font-bold lg:text-2xl lg:w-32">Locations</button>
                    <button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2 hover:font-bold lg:text-2xl lg:w-32">Episodes</button>
                </div>


            </div>

        </div>
    )
}