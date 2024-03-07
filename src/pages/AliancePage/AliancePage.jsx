import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

import './aliancepage.css'

export function AliancePage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }

    return (
        <>
            <h1>Get ready to make an aliance</h1>
            <h2>Choose any player you want to play with</h2>
            <p> <b>Remember</b> work together, answer right the question and move foward DIFINIR CUANTO squares each </p>
            <Button 
            type={'button'}
            click={handleNavigate}
            label={'Let`s Go'}
            disabled={false}
             />
        </>
    )
}