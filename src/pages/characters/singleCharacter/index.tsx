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

    console.log(`Esse aqui é o ID: ${id}`)
    console.log(origin)

    return (
        <div>
            <p>{character?.name}</p>
        </div>
    )
}