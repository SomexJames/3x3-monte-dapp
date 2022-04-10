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

    const placeBet = async (e) => {
        e.preventDefault();
        let newBalance = await erc20.balanceOf(signerAddress);
            newBalance = String(newBalance);
            if (newBalance != String(balance) || balance == "-") {
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
                    message: "Not enough BVJM tokens"
                }
            });
        } else if (currentBet == 0) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    currentBet: "freePlay",
                    level: 1,
                    message: null
                }
            });
        } else {
            await erc20.connect(signer).transfer("0xa00D2f69DaAF2DA3d4F7b5967230e8D1D0631211", ethers.utils.parseUnits(currentBet, 18));
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