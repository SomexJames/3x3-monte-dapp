import { useContext } from "react";
import { GlobalState } from "../global_states/global_state";
import { GamePageSelector } from "../pages/start_page_comp/base_selector_comp/game_page_selector";

export function MainMenu() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;
    function mainMenu() {
        setGameInfo(prev => {
            return {
                ...prev,
                currentBet: null,
                level: 0,
                cards: [],
                message: null,
                gameOver: false
            }
        });
        return (<GamePageSelector />)
    }

    return (
        <div className="buttons">
            <button className="button" onClick={() => mainMenu()}>Main Menu</button>
        </div>
    )
    
}