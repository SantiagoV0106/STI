import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

export function EveryonePage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }



    return (
        <section className="page-section">
            <img src="/logo.svg" alt="Space Quest Logo" className="logo" />
            <h1 className="page-title">Get ready</h1>
            <h2 className="page-subtitle">All players are going to play together</h2>
            <p className="page-content"> <b>Remember</b> work as a team,
                answer wrong and everyone go back 3 squares, get it right and move 5 squares </p>
            <Button
                type={'button'}
                click={handleNavigate}
                label={'Let`s Go'}
                disabled={false}
            />
        </section>
    )
}