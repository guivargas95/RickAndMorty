import { useEffect, useState } from "react"

export default function Favorites(props: any) {

    const name = props.name;
    let [isFavorite, setIsFavorite] = useState(localStorage.getItem(name));

    useEffect(() => {
        setIsFavorite(localStorage.getItem(name))
    }, [localStorage.getItem(name)])

    function Changefavorit() {

        if (localStorage.getItem(name) == null || localStorage.getItem(name) == "false") {
            localStorage.setItem(name, "true")
            setIsFavorite("true")
            console.log(localStorage)
        }

        else if (localStorage.getItem(name) == "true") {
            localStorage.setItem(name, "false")
            setIsFavorite("false")
        }
    }


    return (
        <div>
            {isFavorite == "true" && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/star.png" onClick={Changefavorit} /></button>
            )}
            {isFavorite == "false" && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/blackstar.png" onClick={Changefavorit} /></button>
            )}
            {isFavorite == null && (
                <button><img className="w-12 mr-auto ml-auto" src="/img/blackstar.png" onClick={Changefavorit} /></button>
            )}
        </div>
    )

}