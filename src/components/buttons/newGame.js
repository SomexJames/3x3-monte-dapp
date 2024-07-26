import { useContext } from "react";
import { GlobalState } from "../global_states/global_state";


export function NewGame() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const gameOver = currentGameInfo.gameOver;
    const level = currentGameInfo.level;
    const currentBet = currentGameInfo.currentBet;

    function newGame() {
        if (currentBet === 0) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    gameOver: false,
                    cards: [],
                    currentBet: null
                }
            });
        } else if (currentBet == "freePlay") {
            setGameInfo(prev => {
                return {
                    ...prev,
                    gameOver: false,
                    cards: [],
                    level: 1
                }
            })
        } else {
            setGameInfo(prev => {
                return {
                    ...prev,
                    gameOver: false,
                    cards: [],
                    level: 1,
                    currentBet: currentBet - 1
                }
            });
        }
    }
    return (
        <div className="buttons">
            <button className="button" onClick={() => newGame()}>Start New Game</button>
        </div>
    )
}