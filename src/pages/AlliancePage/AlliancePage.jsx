import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";

import './alliancepage.css'

export function AlliancePage() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/trivia')
    }

    return (
        <section className="page-section">
            <img src="/logo.svg" alt="Space Quest Logo" className="logo"/>
            <h1 className="page-title">Get ready to make an aliance</h1>
            <h2 className="page-subtitle">Choose any player you want to play with</h2>
            <p className="page-content"> <b>Remember</b> work together, answer right the question and move foward DIFINIR CUANTO squares each </p>
            <Button 
            type={'button'}
            click={handleNavigate}
            label={'Let`s Go'}
            disabled={false}
             />
        </section>
    )

}
