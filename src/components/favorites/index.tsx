import { useEffect, useState } from "react"

export default function Favorit(props: any) {

    const name = props.name;
    let [isFavorit, setIsFavorit] = useState(localStorage.getItem(name));

    useEffect(() => {
        setIsFavorit(localStorage.getItem(name))
    }, [localStorage.getItem(name)])

    function Changefavorit() {

        if (localStorage.getItem(name) == null || localStorage.getItem(name) == "false") {
            localStorage.setItem(name, "true")
            setIsFavorit("true")
            console.log(localStorage)
        }

        else if (localStorage.getItem(name) == "true") {
            localStorage.setItem(name, "false")
            setIsFavorit("false")
        }
    }


    return (
        <div>
            {isFavorit == "true" && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/star.png" onClick={Changefavorit} /></button>
            )}
            {isFavorit == "false" && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/blackstar.png" onClick={Changefavorit} /></button>
            )}
            {isFavorit == null && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/blackstar.png" onClick={Changefavorit} /></button>
            )}
        </div>
    )

}