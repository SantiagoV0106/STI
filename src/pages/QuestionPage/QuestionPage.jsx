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
                <p>Duel</p>
                <p>Aliance</p>
                <p>Everyone</p>
            </section>
        </>

    )
}