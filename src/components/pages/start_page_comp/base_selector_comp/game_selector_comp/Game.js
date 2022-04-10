import { useContext, useEffect } from "react"
import { GlobalState } from "../../../../global_states/global_state"
import { GameScript } from "./game_comp/gameScript"

export function Game() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const signer = currentUserInfo.signer;
    var signerAddress = currentUserInfo.signerAddress;
    console.log("body just ran");
    useEffect(() => {
        async function getAddress() {
            const currSignerAddress = await signer.getAddress();
            if (currSignerAddress !== currSignerAddress && signerAddress !== "-"){
                signerAddress = currSignerAddress;
                setCurrentUserInfo(prev => {
                    return {
                        ...prev,
                        signerAddress
                    }
                })
            }
        }
        getAddress();
    }, [currentUserInfo.signerAddress])
    return (
        <div className="rt-container" id="main">
                <GameScript />
        </div>
    )
}