import { Link } from 'react-router-dom'
import '../QuestionPage/QuestionPage.css'

export function QuestionPage() {
    return (
        <>
            <img src="/logo.svg" alt="Space Quest Logo" className='logo' />
            <section className='question-types'>
                {
                    triviaOptions.map(({ id, label, color, route }) => {
                        return <Link to={route} key={id}>
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
        color: 'blue',
        route: '/trivia'
    },
    {
        id: 2,
        label: 'Duel',
        color: 'yellow',
        route: '/duel'
    },
    {
        id: 3,
        label: 'Alliance',
        color: 'green',
        route: '/alliance'
    },
    {
        id: 4,
        label: 'Everyone',
        color: 'red',
        route: '/everyone'
    },
]