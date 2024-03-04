/* eslint-disable react/prop-types */
import { useFetch } from "../../hooks/useFetch"
export function Question({url}) {

    const { data, loading, error } = useFetch(url)

    if (loading) {
        return <p>Get ready</p>
    }

    if (error) {
        return <p>Fail to get question</p>
    }

    return (
        <>
            {
                data.map((question) => {
                    return(
                        <p key={question.id}> {question.question} </p>
                    )
                })
            }
        </>
    )

}