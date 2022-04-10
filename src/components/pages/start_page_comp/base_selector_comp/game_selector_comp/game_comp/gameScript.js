import { useContext, useEffect} from "react";
import { GlobalState } from "../../../../../global_states/global_state";
import { GameStart } from "./gameStart";
import { WinningCard, BlankCard, JackPotCard } from "../../../../../functions/createCards";
import { NewGame } from "../../../../../buttons/newGame";
import { Continue } from "../../../../../buttons/continue";


export function GameScript() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const erc20 = currentUserInfo.erc20;
    const contractAddress = currentUserInfo.contractAddress;
    const signerAddress = currentUserInfo.signerAddress;
    const gameOver = currentGameInfo.gameOver;
    const level = currentGameInfo.level;
    var cards = currentGameInfo.cards;
    useEffect(() => {
        
    }, [currentGameInfo.gameOver, currentGameInfo.cards]);

    if (!gameOver) {
        return (<GameStart />)
    } else if (level == 0) {
        return (
            <>
                <h3>Game Over!</h3>
                <div className="game-area">
                    <div className="cards">
                            {cards}
                    </div>
                </div>
                <NewGame />  
            </>
        )
    } else if (level == 4) {
        if (currentBet != "freePlay") {
            erc20.sendPayout(contractAddress, ethers.utils.parseUnits(1500, 18), signerAddress);
        }
        return (
            <>
                <h3>You Win!</h3>
                <div className="game-area">
                    <div className="cards">
                        {cards}
                    </div>
                </div>
                <NewGame />
            </>
        )
    } else {
        return (
            <>
                <h3>Nice! Click "continue" to move onto the next board!</h3>
                <div className="game-area">
                    <div className="cards">
                        {cards}
                    </div>
                </div>
                <Continue />
            </>
        )
    }
}