import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

import './everyonepage.css'

export function EveryonePage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }

    return (
        <>
            <h1>Get ready</h1>
            <h2>All players are going to play together</h2>
            <p> <b>Remember</b> Work as a team, 
            answer wrong and everyone go back CASILLAS POR RETROCEDER squares, get it right and move DEFINIR CASILLAS squares </p>
            <Button 
            type={'button'}
            click={handleNavigate}
            label={'Let`s Go'}
            disabled={false}
             />
        </>
    )
}