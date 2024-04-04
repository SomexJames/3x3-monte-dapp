import { useEffect, useContext } from "react";
import { GlobalState } from "../../global_states/global_state";
import { Connect } from "./base_selector_comp/Connect";
import { GamePageSelector } from "./base_selector_comp/game_page_selector";
import { Retry } from "./base_selector_comp/Retry";


export function BaseSelector() {
    const { currentUserInfo, setCurrentUserInfo, accReqPending, setAccReqPending } = useContext(GlobalState);
    const contractAddress = currentUserInfo.contractAddress;
    var provider = currentUserInfo.provider;
    var signer = currentUserInfo.signer;
    var signerAddress = currentUserInfo.signerAddress;
    var erc20 = currentUserInfo.erc20;

    useEffect(() => {
        const sessStorage = JSON.parse(sessionStorage.getItem(accReqPending));
        setAccReqPending((prevAccReqPending) => {
            if (prevAccReqPending !== sessStorage && sessStorage !== null) {
                return sessStorage;
            }
            return prevAccReqPending;
        });
    }, [accReqPending, setAccReqPending]);

    if (accReqPending) {
        return <Retry />;
    }

    if (signerAddress !== "-") {
        return <GamePageSelector />;
    }

    return <Connect />;
}