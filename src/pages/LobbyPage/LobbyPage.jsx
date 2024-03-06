import { usePlayers } from '../../hooks/usePlayers'
import '../LobbyPage/LobbyPage.css'
import { Link } from 'react-router-dom'
export function LobbyPage() {

    const { handleSubmit, handleInput, query, hasPlayers, players } = usePlayers()
    return (
        <>
            <section className='lobby-container'>
                <img src="/logo.svg" alt="" />

                <form onSubmit={handleSubmit} className='lobby-form'>
                    <fieldset className='add-players'>
                        <input
                            type="text"
                            name="player"
                            id="player"
                            placeholder='Enter player name'
                            onChange={handleInput}
                            value={query} />
                        <button
                            type="submit">Add</button>
                    </fieldset>
                </form>
                <ul className='players-list'>
                    {
                        hasPlayers ?
                            players.map(({ id, name }) => {
                                return <li key={id}>{name}</li>
                            }) : <p className='start-msg'>Add players to start!</p>
                    }
                </ul>
                <Link to='/turn'>
                    <button className='start-btn'>Start game</button>
                </Link>
            </section>
        </>
    )
}