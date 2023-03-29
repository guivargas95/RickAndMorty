import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { iCharacters } from "../../types/characters"
import { iInfo } from "../../types/info";

export default function CharactersPage(){

    const [httpLink, setHttpLink] = useState('https://rickandmortyapi.com/api/character?page=2')
    const {data: characters} = useFetch<iCharacters[]>(httpLink);
    const {info: info} = useFetch<iInfo>(httpLink);
  
    return(
        <div className="flex flex-col bg-background-characters bg-cover">
            <div className="flex ml-auto mr-auto">
                <img className="w-96 lg:w-128 backInDown" src="/img/characters.png" alt="" />
            </div>
            <section className="w-3/4 ml-auto mr-auto">
                <ul className="flex flex-col justify-center text-center">
                    {characters?.map(response =>{

                        return(
                            <li className="mr-auto ml-auto bg-black mt-5 mb-5">
                                <h3 className="mt-5 mb-5 text-white">{response.name}</h3>
                                <img className="rounded-md" src={response.image}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}