import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext/PlayersContext";

export function usePlayers() {
    const playersContext = useContext(PlayersContext)

    if (!playersContext) {
        throw new Error('usePlayers hook component use should be within its context Provider <PlayersContextProvider>')
    }

    const {
        handleInput,
        handleSubmit,
        hasPlayers,
        query,
        players,
        playerName,
        changePlayerTurn,
        deletePlayer
    } = playersContext

    return {
        handleInput,
        handleSubmit,
        hasPlayers,
        query,
        players,
        playerName,
        changePlayerTurn,
        deletePlayer
    }
}