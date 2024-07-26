import { useContext } from "react"
import { GlobalState } from "../global_states/global_state"


export function WinningCard(j) {
        return (
                <div className="right-card" key={j}>
                    <p>Correct Card!</p>
                </div>
        )

}

export function CorrectCard(j) {
    return (
            <div className="right-card" key={j}>
                <p>This was the correct card</p>
            </div>
    )

}

export function JackPotCard() {
    return (
            <div className="card">
                You Win!
            </div>
    )
}

export function GuessCard(ind) {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const level = currentGameInfo.level;
    var cards = currentGameInfo.cards;
    function checkCard(e) {
        let winner = Math.floor(Math.random() * level*3);
        for (let j = 0; j < level * 3; j++) {
            if (e.target.id == winner && winner == j) {
                cards.push(WinningCard(j))
            } else if (winner == j) {
                cards.push(CorrectCard(j))
            } else if (e.target.id == j) {
                cards.push(SelectedCard(j));
            } else {
                cards.push(BlankCard(j))
            }
        }
        setGameInfo(prev => {
            if (e.target.id == winner && level <= 3) {
                return {
                    ...prev,
                    cards,
                    gameOver: true,
                    level: level + 1
                }
            } else if (e.target.id != winner) {
                return {
                    ...prev,
                    cards,
                    gameOver: true,
                    level: 0
                }
            } else {
                return {
                    ...prev,
                    cards,
                    gameOver: true
                }
            }
        })
    }
    return (
        
            <div className="card" id={ind} key={ind} onClick={(e) => checkCard(e)}>
                
            </div>
        
    )
}

export function SelectedCard(j) {
    return (
            <div className="selected-card" key={j}>
                
            </div>
    )
}

export function BlankCard(j) {
    return (
            <div className="blank-card" key={j}>
                
            </div>
    )
}