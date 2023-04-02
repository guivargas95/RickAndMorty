import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Favorit from "../../../components/favorit";
import { SomeCharacters } from "../../../hooks/someCharacters";
import { iCharacters } from "../../../types/characters";

export default function FavoritCharacters() {

    let local = localStorage;
    let favoritList: any[] = [];
    let emptyString = ""

    for (let key in local) {
        if (localStorage.getItem(key) == "true") {
            favoritList.push(key)
        }
    }
    if (favoritList.length != 0) {
        favoritList.forEach(element => {
            emptyString = emptyString + element + ","
        });
    }
    
    let [httpSearchString, setHttpSearchString] = useState(emptyString)
    let [haveFavorit, setHaveFavorit] = useState(true)
    const [httpLink, setHttpLink] = useState(`https://rickandmortyapi.com/api/character/${httpSearchString}`)
    const { data: characters } = SomeCharacters<iCharacters[]>(httpLink);

    useEffect(() => {
        favoritList = []
        emptyString = ""
        for (let key in local) {
            if (localStorage.getItem(key) == "true") {
                favoritList.push(key)
            }
        }
        if (favoritList.length != 0) {
            favoritList.forEach(element => {
                emptyString = emptyString + element + ","
            });
            setHttpSearchString(emptyString)
            setHttpLink(`https://rickandmortyapi.com/api/character/${httpSearchString}`)
        }
        else {
            setHaveFavorit(false)
        }
    }, [localStorage, httpLink, httpSearchString, favoritList, local, characters])


    return (
        <div className="flex flex-col bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen">
            <div className="flex ml-auto mr-auto">
                <img className="w-96 lg:w-128 backInDown" src="/img/favorits.png" alt="" />
            </div>
            <section className="md:w-auto ml-auto mr-auto">
                <Link to="/"><img className="w-12 md:w-36 fadeInDown" src="/img/back.png" /></Link>
                <ul className="flex flex-col justify-center text-center md:grid md:grid-cols-2 lg:grid-cols-3">
                    {haveFavorit == true && (characters?.map(response => {
                        return (
                            <li className="mr-auto ml-auto bg-orange-500 mt-5 mb-5 md:ml-5 md:mr-5 fadeInDown" key={response.id}>
                                <Link to={`/characters/single/${response.id}`}><h2 className="flex justify-center items-center w-72 h-24 text-white text-2xl">{response.name}</h2></Link>
                                <Link to={`/characters/single/${response.id}`}><img className="rounded-md" src={response.image} /></Link>
                                <div className="flex justify-center text-xl">
                                    <h3 className="mr-1 ml-1">Status:</h3>
                                    {response?.status == "Alive" && (<h3 className="bg-green-600 rounded-lg mr-1 ml-1 font-bold">{response.status}</h3>)}
                                    {response?.status == "Dead" && (<h3 className="bg-red-600 rounded-lg mr-1 ml-1 font-bold">{response.status}</h3>)}
                                    {response?.status == "unknown" && (<h3 className="bg-yellow-500 rounded-lg mr-1 ml-1 font-bold">{response.status}</h3>)}
                                </div>
                                <div>
                                    <Favorit name={response.id} />
                                </div>
                            </li>
                        )
                    }))}
                </ul>
                {haveFavorit == false && (
                    <div className="text-center text-3xl font-bold flex flex-col justify-center">
                        <div>
                            <h2 className="mt-20">Sowwy :c You don't have favorits yet</h2>
                        </div>
                        <div className="flex justify-center">
                            <h2>To choose your favorit characters: </h2>
                            <Link to="/characters/1"><button className="bg-green-400 rounded-lg">Click Here</button></Link>
                        </div>

                    </div>
                )}
            </section>
        </div>
    )
}

