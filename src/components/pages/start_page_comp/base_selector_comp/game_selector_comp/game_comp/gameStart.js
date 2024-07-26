import { useContext } from "react";
import { GlobalState } from "../../../../../global_states/global_state";
import { GuessCard } from "../../../../../functions/createCards";


export function GameStart() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const level = currentGameInfo.level;
    const currentBet = currentGameInfo.currentBet;
    var preCardsArr = [];

    for (let i = 0; i < level*3; i++) {
        preCardsArr.push(GuessCard(i));
    }

    if (currentBet == "freePlay") {
        return (
            <>
                <h3>Choose the right card to move onto the next level!</h3>
                <p>Free Play: No Payout</p>
                <div className="game-area">
                    <div className="cards">
                        {preCardsArr}
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h3>Choose the right card to move onto the next level!</h3>
                <p>Plays remaining: {currentBet}</p>
                <div className="game-area">
                    <div className="cards">
                        {preCardsArr}
                    </div>
                </div>
            </>
        )
    }
}