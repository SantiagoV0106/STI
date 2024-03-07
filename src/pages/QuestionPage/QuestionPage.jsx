import { Link } from 'react-router-dom'
import '../QuestionPage/QuestionPage.css'

export function QuestionPage() {
    return (
        <>
            <h1 style={{ margin: '0 auto', width: 'max-content' }}>Space Quest</h1>
            <section className='question-types'>
                <Link to='/trivia'>
                    <p>Individual</p>
                </Link>
                <Link to={'/duel'}>
                    <p>Duel</p>
                </Link>
                <Link to={'/aliance'}>
                    <p>Aliance</p>
                </Link>
                <Link to={'/everyone'}>
                    <p>Everyone</p>
                </Link>
            </section>
        </>

    )
}