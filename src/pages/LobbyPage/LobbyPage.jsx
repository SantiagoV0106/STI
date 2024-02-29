import { usePlayers } from '../../hooks/usePlayers'
import '../LobbyPage/LobbyPage.css'
import { Link } from 'react-router-dom'
export function LobbyPage() {

    const { handleSubmit, handleInput, query, hasPlayers, players } = usePlayers()
    return (
        <>
            <h1>Space Quest</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="player"
                    id="player"
                    placeholder='Enter player name'
                    onChange={handleInput}
                    value={query} />
                <button
                    type="submit">Add player</button>
            </form>
            <ul>
                {
                    hasPlayers ?
                        players.map(({ id, name }) => {
                            return <li key={id}>{name}</li>
                        }) : <p>Add players to start!</p>
                }
            </ul>
            <Link to='/question-type'>
                <button>Start game</button>
            </Link>
        </>
    )
}