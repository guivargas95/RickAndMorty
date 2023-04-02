import { useState, SetStateAction } from "react"
import { Link, useParams } from "react-router-dom";
import Favorit from "../../components/favorit";
import { AllCharacters } from "../../hooks/allCharacters"
import { iCharacters } from "../../types/characters"
import { iInfo } from "../../types/info";

export default function CharactersPage() {

    const { page } = useParams();
    const [httpLink, setHttpLink] = useState(`https://rickandmortyapi.com/api/character?page=${page}`)
    const { data: characters } = AllCharacters<iCharacters[]>(httpLink);
    const { info: info } = AllCharacters<iInfo>(httpLink);
    const [stringToSearch, setStringToSearch] = useState('');
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setStringToSearch(event.target.value);
    };

    function nextPage() {
        setHttpLink(`${info?.next}`)
    }

    function previousPage() {
        if (info?.prev != null) {
            setHttpLink(`${info?.prev}`)
        }
    }

    function urlToSearch() {
        if (stringToSearch != "") {

            setHttpLink(`https://rickandmortyapi.com/api/character/?name=${stringToSearch.replace(" ", "%20")}`);
        }
    }

    return (
        <div className="flex flex-col bg-gradient-to-b from-blue-700 to-blue-900">
            <div className="flex ml-auto mr-auto">
                <img className="w-96 lg:w-128 backInDown" src="/img/characters.png" alt="" />
            </div>
            <section className="md:w-auto ml-auto mr-auto">
                <Link to="/"><img className="w-12 md:w-36 fadeInDown" src="/img/back.png" /></Link>
                <div className="flex justify-center">
                    <input className="bg-amber-100 shadow-sm shadow-black border-solid border-2 border-grey-light" placeholder="Name of character" onChange={handleChange} value={stringToSearch} id="" />
                    <button className="bg-green-600 font-bold text-white rounded-lg" onClick={urlToSearch}>Search!</button>
                </div>
                <ul className="flex flex-col justify-center text-center md:grid md:grid-cols-2 lg:grid-cols-3">
                    {characters?.map(response => {

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
                    })}
                </ul>
                <div className="flex justify-center mt-10 mb-10">
                    {info?.prev != null && (
                        <Link to={`/characters/${parseInt(page!) - 1}`}><button onClick={previousPage}><img className="w-12" src="/img/previous.png" /></button></Link>
                    )}
                    <p className="text-2xl ml-5 mr-5">{page}</p>
                    {info?.next != null && (
                        <Link to={`/characters/${parseInt(page!) + 1}`}><button onClick={nextPage}><img className="w-12" src="/img/next.png" /></button></Link>
                    )}

                </div>
            </section>
        </div>
    )
}
