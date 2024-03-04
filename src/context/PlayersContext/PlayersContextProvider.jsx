/* eslint-disable react/prop-types */
import { useState } from "react";
import { PlayersContext } from "./PlayersContext";
import { useEffect } from "react";

export function PlayersContextProvider({ children }) {
    const [players, setPlayers] = useState([])
    const [query, setQuery] = useState('')
    const [playerTurn, setPlayerTurn] = useState(0)
    const playerName = players[playerTurn]?.name


    const changePlayerTurn = () => {
        if (playerTurn === players.length - 1) {
            setPlayerTurn(0)
        }
        else {
            setPlayerTurn((prevState) => {
                return prevState + 1
            })
        }
    }

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
            players,
            playerName,
            changePlayerTurn
        }}>
            {children}
        </PlayersContext.Provider>
    )
}