import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCharacter } from "../../../hooks/singleCharacter";
import { iOriginLocation } from "../../../types/originLocation";
import { iSingleCharacter } from "../../../types/singleCharacter";
import { useNavigate } from "react-router-dom";
import Favorit from "../../../components/favorit";

export default function Character() {

    const { id } = useParams()
    const [httpLink, setHttpLink] = useState(`https://rickandmortyapi.com/api/character/${id}`)
    const { data: character } = SingleCharacter<iSingleCharacter>(httpLink);
    const { location: location } = SingleCharacter<iOriginLocation>(httpLink);
    const { origin: origin } = SingleCharacter<iOriginLocation>(httpLink);
    const navigate = useNavigate();

    return (
        <div className="bg-paleta-marrom bg-background-characters bg-cover bg-no-repeat md:min-h-screen">
            <div className="flex justify-center">
                <img className="backInDown" src="/img/characterinfo.png" alt="" />
            </div>
            <div className="flex justify-center mb-10">
                <img className="w-12 md:w-36 fadeInDown" src="/img/back.png" alt="" onClick={() => navigate(-1)} />
            </div>
            <section className="w-2/4 justify-center mr-auto ml-auto md:w-auto flex flex-col md:flex-row">
                <div className="flex flex-col text-center ms:w-full backInLeft">
                    <h2 className="bg-orange-700 w-full font-bold text-3xl text-white mr-auto ml-auto">{character?.name}</h2>
                    <img className="w-full mr-auto ml-auto" src={character?.image} alt="" />
                </div>
                <div className="bg-green-600 rounded-lg text-white text-center text-xl ms:w-full backInRight">
                    <Favorit name={character?.id} />
                    <h3 className="mt-3 mb-3">Status: {character?.status}</h3>
                    <h3 className="mt-3 mb-3">Species: {character?.species}</h3>
                    <h3 className="mt-3 mb-3">Gender: {character?.gender}</h3>
                    <h3 className="mt-3 mb-3">Origin: {origin?.name}</h3>
                    <h3 className="mt-3 mb-3">Last location: {location?.name}</h3>
                </div>
            </section>
        </div>
    )
}