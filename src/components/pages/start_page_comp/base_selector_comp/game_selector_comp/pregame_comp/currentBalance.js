import { useContext, useEffect } from "react";
import { GlobalState } from "../../../../../global_states/global_state";


export function GetMyBalance() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    var balance = currentUserInfo.balance;
    const updateBalance = currentUserInfo.updateBalance;
    const signerAddress = currentUserInfo.signerAddress;
    const erc20 = currentUserInfo.erc20;

    useEffect(() => {
        async function getBalance() {
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
        };
        getBalance();
    },[currentUserInfo.updateBalance]);

    return (
        <h3>Your Current Balance is: {balance/1E18}</h3>
    )
}