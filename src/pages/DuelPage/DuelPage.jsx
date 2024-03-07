import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

import './duelpage.css'

export function DuelPage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }

    return (
        <>
            <h1>Get ready for the duel</h1>
            <h2>Choose any player you want to play agianst</h2>
            <p> <b>Remember</b> if you win, the other player has move back ... debemos definir esto, por ahora no se </p>
            <Button 
            type={'button'}
            click={handleNavigate}
            label={'Let`s Go'}
            disabled={false}
             />
        </>
    )
}