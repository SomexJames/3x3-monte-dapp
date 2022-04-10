import { useEffect, useContext } from "react";
import { GlobalState } from "../../../global_states/global_state";
import { Game } from "./game_selector_comp/Game";
import { PreGamePage } from "./game_selector_comp/Pregame";

export function GamePageSelector() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;
    useEffect(() => {
        // setCurrentUserInfo(prev => {
        //     return {
        //         ...prev,
        //         currentBet
        //     }
        // })
    },[currentGameInfo.currentBet])

    if (currentBet !== null) {
        return (
                <Game />
        )
    } else {
        return (
            <PreGamePage />
        )
    }
}