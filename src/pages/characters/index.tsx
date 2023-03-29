import { useState } from "react"
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"
import { iCharacters } from "../../types/characters"
import { iInfo } from "../../types/info";

export default function CharactersPage() {

    const [httpLink, setHttpLink] = useState('https://rickandmortyapi.com/api/character?page=2')
    const { data: characters } = useFetch<iCharacters[]>(httpLink);
    const { info: info } = useFetch<iInfo>(httpLink);

    return (
        <div className="flex flex-col bg-gradient-to-b from-blue-700 to-blue-900">
            <div className="flex ml-auto mr-auto">
                <img className="w-96 lg:w-128 backInDown" src="/img/characters.png" alt="" />
            </div>
            <section className="w-3/4 md:w-auto ml-auto mr-auto">
                <Link to="/"><img className="w-12 md:w-36" src="/img/back.png" alt="" /></Link>
                <ul className="flex flex-col justify-center text-center md:grid md:grid-cols-2 lg:grid-cols-3">
                    {characters?.map(response => {

                        return (
                            <li className="mr-auto ml-auto bg-orange-500 mt-5 mb-5 md:ml-5 md:mr-5">
                                <h3 className="mt-5 mb-5 text-white">{response.name}</h3>
                                <img className="rounded-md" src={response.image} />
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}