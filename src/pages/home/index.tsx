export default function Home() {

    return (
        <div className="flex bg-background-mobile md:bg-background bg-cover bg-current bg-no-repeat h-screen">
            <div className="flex flex-col text-center mr-auto ml-auto mt-auto mb-auto">
                <img src="/img/Logo.png" alt="" />
                <h1 className="text-3xl">Welcome to asd asd asd asdasd</h1>
                <div className="mt-5 mb-5 flex flex-col ml-auto mr-auto">
                    <button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2">Characters</button>
                    <button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2">Locations</button>
                    <button className="text-white bg-purple-900 rounded-md h-8 w-24 mt-2 mb-2">Episodes</button>
                </div>


            </div>

        </div>
    )
}