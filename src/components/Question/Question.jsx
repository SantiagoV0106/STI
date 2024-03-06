/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from 'react-router'

export function Question({ url }) {
    const { data, loading, error } = useFetch(url)
    const [sortedOptions, setSortedOptions] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)

    const navigate = useNavigate()

    const itemStyle = {
        cursor: "pointer",
        margin: '0 0 20px'
    }

    useEffect(() => {

        if (data) {
            const allOptions = [data[0].correctAnswer, ...data[0].incorrectAnswers]
            const sortedAnswers = allOptions.sort(() => Math.random() - 0.5)
            console.log(sortedAnswers);
            setSortedOptions(sortedAnswers)
        }


    }, [data])

    const handleSelect = (selectedOption) => {
        setSelectedAnswer(selectedOption)
        setIsCorrect(selectedOption === data[0].correctAnswer)
        console.log(isCorrect);

        if (selectedOption === data[0].correctAnswer) {
            setTimeout(() => {
                navigate('/turn')
            }, 1000);
        }

    }

    if (loading) {
        return <p>Get ready</p>
    }

    if (error) {
        return <p>Fail to get question</p>
    }

    if (data) {
        console.log(data);
        console.log(data[0].incorrectAnswers);

    }

    return (
        <>
            {
                data.map((question) => {
                    return (
                        <>
                            <p key={question.id}> {question.question} </p>
                            <ul>
                                {
                                    sortedOptions.map((item, i) => <li
                                        className={
                                            selectedAnswer === item ? item === question.correctAnswer ? 'correct' : 'incorrect' : ''}
                                        key={i}
                                        style={itemStyle}
                                        onClick={
                                            () => handleSelect(item)

                                        } > {item} </li>)
                                }
                            </ul>

                            {selectedAnswer && (
                                <p>{isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.'}</p>
                            )}
                        </>

                    )
                })
            }
        </>
    )

}