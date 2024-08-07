import { useContext } from "react"
import { ethers } from "ethers"
import { useEffect } from "react"
import { GlobalState } from "../../../../../global_states/global_state"


export function PlaceBet() {
    const { currentGameInfo, setGameInfo, currentUserInfo, setCurrentUserInfo } = useContext(GlobalState);
    const signer = currentUserInfo.signer;
    const signerAddress = currentUserInfo.signerAddress;
    const erc20 = currentUserInfo.erc20;
    const inputValue = currentGameInfo.inputValue;
    const balance = currentUserInfo.balance;
    const cards = currentGameInfo.cards;
    var deck = currentGameInfo.deck;
    var player = currentGameInfo.player;
    var dealer = currentGameInfo.dealer;
    var message = currentGameInfo.message;
    
    const updateBet = e => {
        setGameInfo(prev => {
            return {
                ...prev,
                inputValue: e.target.value
            }
        })
    }

    const transactionHandler = async (currentBet) => {
        var tx;
        try {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Awaiting transaction status..."
                }
            });
            tx = await erc20.connect(signer).transfer("0xe1c85AeeEDc1bE0492B4bd70Ad512058aCdB0bA2", ethers.utils.parseUnits(currentBet, 18));
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Awaiting transaction to be mined..."
                }
            });
            await tx.wait();
            return true;
        } catch(e) {
            if (e.code == "ACTION_REJECTED") {
                return false;
            } else {
                return true;
            }
        }
    }

    const placeBet = async (e) => {
        e.preventDefault();
        let newBalance = await erc20.balanceOf(signerAddress);
            newBalance = newBalance/1E18;
            if (newBalance != balance || balance == "-") {
                setCurrentUserInfo(prev => {
                    return {
                        ...prev,
                        balance: newBalance
                    }
                })
            }
        const currentBet = currentGameInfo.inputValue;
        if (currentBet % 10 != 0) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Must be divisble by 10"
                }
            })
        } else if (currentBet > balance) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Not enough KBUX"
                }
            });
        } else if (currentBet == 0 || currentBet === null) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    currentBet: "freePlay",
                    level: 1,
                    message: null
                }
            });
        } else {
            const res = await transactionHandler(currentBet);
            if (!res) {
                setGameInfo(prev => {
                    return {
                        ...prev,
                        message: "User rejected transaction. Try again"
                    }
                });
            } else {
                setGameInfo(prev => {
                    return {
                        ...prev,
                        currentBet: currentBet/10 - 1,
                        level: 1,
                        message: null
                    }
                });
                setGameInfo(prev => {
                    return {
                        ...prev,
                        inputValue: null
                    }
                });
            }  
        }
    }
    return (
        <div className="input-bet">
            <form onSubmit={placeBet}>
                <input type="text" placeholder="enter here to deposit" value={inputValue} onChange={updateBet}/>
                <button onClick={placeBet}>Insert Tokens</button>
            </form>
            <p>{message}</p>
        </div>
        
    )
}