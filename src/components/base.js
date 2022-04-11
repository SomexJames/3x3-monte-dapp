import { GlobalState } from "./global_states/global_state"
import { useContext } from "react";
import { handleEthAccReq } from "./functions/handleEthAccReq";
import { useState } from "react";




export function Base() {
    const { currentUserInfo, setCurrentUserInfo } = useContext(GlobalState);
    const [ accReqPending, setAccReqPending] = useState(false);;

    const updateUser = async () => {
        const _accReqPending = sessionStorage.getItem(accReqPending);
        const _ethReqP = await handleEthAccReq();
        if (_accReqPending == "false") {
            if (_ethReqP) {
                setAccReqPending(() => {
                    sessionStorage.setItem(accReqPending, true)});
            } else {
                setAccReqPending(() => {
                    sessionStorage.setItem(accReqPending, false);
                });
            }
        } else {
            setAccReqPending(() => {
                sessionStorage.setItem(accReqPending, _accReqPending)});
        };
    }
        return (
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">
                            <div class="pregame_background">
                                <div class="box">
                                    <h3>Click "Connect" to connect to your Web3 Wallet!</h3>
                                    <button onClick={() => updateUser()}>Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}