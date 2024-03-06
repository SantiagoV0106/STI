import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Error fetching data')
                }
                const data = await res.json()
                setData(data)
                
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        // return () => fetchData()
    }, [url])
    return { data, loading, error }
}

