import { useContext } from "react";
import { GlobalState } from "../global_states/global_state";


export function Continue() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const gameOver = currentGameInfo.gameOver;
    const level = currentGameInfo.level;
    function cont() {
        setGameInfo(prev => {
            return {
                ...prev,
                gameOver: false,
                cards: []
            }
        })
    }
    return (
        <div className="buttons">
            <button onClick={() => cont()} className="button">Continue</button>
        </div>
    )
}