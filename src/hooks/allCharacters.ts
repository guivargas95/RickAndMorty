import axios from "axios";
import { useState, useEffect } from "react";

export function AllCharacters<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [info, setInfo] = useState<T | null>(null);

    useEffect(() => {
        async function getData() {
            await axios.get(url)
                .then(response => {
                    setData(response.data.results);
                    setInfo(response.data.info)
                })
        }
        getData()
    }, [url])
    return { data, info }
}
