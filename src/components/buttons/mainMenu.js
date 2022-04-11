import { useContext } from "react";
import { GlobalState } from "../global_states/global_state";

export function MainMenu() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;
    function mainMenu() {
        setGameInfo(prev => {
            return {
                ...prev,
                currentBet: null
            }
        });
    }

    return (
        <div className="buttons">
            <button className="button" onClick={() => mainMenu()}>Main Menu</button>
        </div>
    )
    
}