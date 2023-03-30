import axios from "axios";
import { useState, useEffect } from "react";

export function SingleCharacter<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [location, setlocation] = useState<T | null>(null);
    const [origin, setorigin] = useState<T | null>(null);

    useEffect(() => {
        async function getData() {
            await axios.get(url)
                .then(response => {
                    setData(response.data);
                    setlocation(response.data.location)
                    setorigin(response.data.origin)
                })
        }
        getData()
    }, [url])
    return { data, location, origin }
}
