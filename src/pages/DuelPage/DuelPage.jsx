import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

export function DuelPage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }

    return (
        <section className="page-section">
            <img src="/logo.svg" alt="Space Quest Logo" className="logo" />
            <h1 className="page-title">Get ready for the duel</h1>
            <h2 className="page-subtitle">Choose any player you want to play agianst</h2>
            <p className="page-content"> <b>Remember</b> if you win, the other player has move back ... debemos definir esto, por ahora no se </p>
            <Button
                type={'button'}
                click={handleNavigate}
                label={'Let`s Go'}
                disabled={false}
            />
        </section>
    )
}