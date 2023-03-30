import { useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCharacter } from "../../../hooks/singleCharacter";
import { iOriginLocation } from "../../../types/originLocation";
import { iSingleCharacter } from "../../../types/singleCharacter";

export default function Character() {

    const { id } = useParams()
    const [httpLink, setHttpLink] = useState(`https://rickandmortyapi.com/api/character/${id}`)
    const { data: character } = SingleCharacter<iSingleCharacter>(httpLink);
    const { location: location } = SingleCharacter<iOriginLocation[]>(httpLink);
    const { origin: origin } = SingleCharacter<iOriginLocation[]>(httpLink);

    return (
        <div className="bg-background-characters-mobile md:bg-background-characters h-150 bg-center bg-no-repeat bg-black">
            <div className="flex justify-center">
                <img className="" src="/img/characterinfo.png" alt="" />
            </div>
            <div className="w-3/4 flex flex-col mr-auto ml-auto text-center mt-10">
                <h2 className="bg-orange-700 w-96 font-bold text-3xl text-white mr-auto ml-auto">{character?.name}</h2>
                <img className="w-96 mr-auto ml-auto" src={character?.image} alt="" />
            </div>
            
        </div>
    )
}