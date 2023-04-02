import axios from "axios";
import { useState, useEffect } from "react";

export function SomeCharacters<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [info, setInfo] = useState<T | null>(null);

    useEffect(() => {
        async function getData() {
            await axios.get(url)
                .then(response => {
                    setData(response.data);
                    setInfo(response.data.info)
                })
        }
        getData()
        
    }, [url])
    return { data, info }
}