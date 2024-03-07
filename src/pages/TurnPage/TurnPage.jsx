/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import './TurnPage.css'

export function TurnPage() {
    const { playerName, changePlayerTurn } = usePlayers()

    return (
        <>
            <article className="turn-article">
                <img src="/earth.svg" alt="Earth image" className="turn-image" />
                <h1 className="turn-msg">Is <span style={{color: 'white'}}>{playerName}'s</span> turn!</h1>
                <Link to='/question-type'>
                    <p onClick={changePlayerTurn} className="continue">
                        Continue
                    </p>
                </Link>
            </article>
        </>
    )
}