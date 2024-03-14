/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from 'react-router'
import './Question.css'

export function Question({ url }) {
    const { data, loading, error } = useFetch(url)
    const [sortedOptions, setSortedOptions] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [moves, setMoves] = useState(0)

    const navigate = useNavigate()

    const itemStyle = {
        cursor: "pointer",
        margin: '0 0 20px',
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

        const difficulty = data[0].difficulty.toLowerCase()
        const moveAmout = isCorrect
            ? difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 5
            : difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 3
        setMoves(moveAmout)

        if (selectedOption) {
            setTimeout(() => {
                navigate('/turn')
            }, 5000);
        }

    }

    if (loading) {
        return <p className='get-ready'>Get ready!</p>
    }

    if (error) {
        return <p>Fail to get question</p>
    }


    const hasOptions = sortedOptions.length > 0


    return (
        <section className='question-section'>
            <img src="/logo.svg" alt="Space Quest Logo" className='logo' />
            {
                data.map((question) => {
                    return (
                        <>
                            <h1 className='q-type'> It`s a {question.difficulty} question </h1>
                            <h2 key={question.id} className='question'> {question.question} </h2>
                            <ul className='answers-section'>
                                {hasOptions ?

                                    sortedOptions.map((item, i) => <li
                                        className={
                                            selectedAnswer === item ? item === question.correctAnswer ? 'correct' : 'incorrect' : ''}
                                        key={i}
                                        style={itemStyle}
                                        onClick={
                                            () => handleSelect(item)

                                        } > {item} </li>)
                                    :
                                    <p>Waiting for options</p>
                                }
                            </ul>

                            {selectedAnswer && (
                                <p className='correct-answer'>
                                    <br />
                                    <span>
                                        {
                                            isCorrect ? '' : `Correct answer : ${question.correctAnswer}`
                                        }
                                    </span>
                                </p>
                            )}
                        </>

                    )
                })
            }
        </section>
    )

}