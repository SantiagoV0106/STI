/* eslint-disable react/prop-types */
import { useState } from "react";
import { PlayersContext } from "./PlayersContext";
import { useEffect } from "react";

export function PlayersContextProvider({ children }) {
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
        <PlayersContext.Provider value={{
            handleInput,
            handleSubmit,
            hasPlayers,
            query,
            players
        }}>
            {children}
        </PlayersContext.Provider>
    )
}