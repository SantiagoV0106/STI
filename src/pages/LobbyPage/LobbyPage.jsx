import { useState } from 'react'
import '../LobbyPage/LobbyPage.css'
import { useEffect } from 'react'
export function LobbyPage() {
    const [players, setPlayers] = useState([])
    const [query, setQuery] = useState('')

    const handleInput = ({ target }) => {
        setQuery(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const playerClass = {
            id: crypto.randomUUID(),
            name: query
        }
        setPlayers([...players, playerClass])
        setQuery('')
    }

    const hasPlayers = players.length > 0

    useEffect(() => {
        console.log(players);
    }, [players])
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
            <button>Start game</button>
        </>
    )
}