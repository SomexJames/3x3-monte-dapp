import { useEffect } from "react"
import { PreBetMessage } from "./pregame_comp/preBetMsg"
import { PlaceBet } from "./pregame_comp/placeBet"
import { useContext } from "react"
import { GlobalState } from "../../../../global_states/global_state"
import { GetMyBalance } from "./pregame_comp/currentBalance"
import { Buy } from "./pregame_comp/buy"


export function PreGamePage() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;

        return (
            <>
                <PreBetMessage />
                <PlaceBet />
                <GetMyBalance />
                <Buy />
            </>
        )
}
