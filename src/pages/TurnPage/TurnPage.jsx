import { Link } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";

export function TurnPage() {
    const { playerName, changePlayerTurn } = usePlayers()

    return (
        <>
            <h1>Is {playerName} turn!</h1>
            <p onClick={changePlayerTurn}>
                <Link to='/question-type'>
                    Continue
                </Link>
            </p>
        </>
    )
}