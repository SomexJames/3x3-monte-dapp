import { useState, useEffect, useContext } from "react"
import { GlobalState } from "../../../../../global_states/global_state";
import { ethers } from "ethers";

export function Buy() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending } = useContext(GlobalState);
    const [value, setValue] = useState({inputValue: ""});
    const provider = currentUserInfo.provider;
    const updateBalance = currentUserInfo.updateBalance;
    const signer = currentUserInfo.signer;
    const signerAddress = currentUserInfo.signerAddress;
    const contractAddress = currentUserInfo.contractAddress;
    const erc20 = currentUserInfo.erc20;
    
    useEffect(() => {
        var value = value;
    },[value.inputValue])

    const updateValue = (e) => {
        setValue(prev => {
            return {
                ...prev,
                inputValue: e.target.value
            }
        })
    }

    

    const placeOrder = async (e) => {
        e.preventDefault();
        const buySize = value.inputValue;

        await erc20
            .connect(signer)
            .exchange({value: ethers.utils.parseEther(String(buySize/5000))})
            .catch(e => e.code == "INSUFFICIENT_FUNDS" ? alert("MetaMask says: INSUFFICENT FUNDS") : alert(e));
            
        setCurrentUserInfo(prev => {
            return {
                ...prev,
                updateBalance: updateBalance + 1
            }
        });

    }

    return (
        <>
            <p>0.1 ETH = 500 BVJM</p>
            <form onSubmit={placeOrder}>
                <input type="text" placeholder="enter here to buy" value={value.inputValue} onChange={updateValue}/>
                <button onClick={placeOrder}>Buy</button>
            </form>
            <p>Estimated total: {value.inputValue/5000} ETH</p>
        </>
    )
}