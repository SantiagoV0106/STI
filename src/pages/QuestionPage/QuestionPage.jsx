import { Link } from 'react-router-dom'
import '../QuestionPage/QuestionPage.css'

export function QuestionPage() {
    return (
        <>
            <img src="/logo.svg" alt="Space Quest Logo" />
            <section className='question-types'>
                {
                    triviaOptions.map(({id, label, color}) => {
                        return <Link to='/trivia' key={id}>
                        <p className={`options ${color}`}>{label}</p>
                    </Link>
                    })
                }
                
            </section>
        </>

    )
}

const triviaOptions = [
    {
        id: 1,
        label: 'Individual',
        color: 'blue'
    },
    {
        id: 2,
        label: 'Duel',
        color: 'yellow'
    },
    {
        id: 3,
        label: 'Aliance',
        color: 'green'
    },
    {
        id: 4,
        label: 'Everyone',
        color: 'red'
    },
]