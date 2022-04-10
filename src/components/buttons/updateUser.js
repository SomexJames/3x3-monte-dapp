import { ethers } from "ethers"
import { useContext } from "react";
import { GlobalState } from "../global_states/global_state";
import { handleEthAccReq } from "../functions/handleEthAccReq";
import erc20abi from "../../ERC20abi.json"

export function UpdateUser(prop) {
    const { currentUserInfo, setCurrentUserInfo, accReqPending, setAccReqPending } = useContext(GlobalState);
    const contractAddress = currentUserInfo.contractAddress;
    var provider = currentUserInfo.provider;
    var signer = currentUserInfo.signer;
    var signerAddress = currentUserInfo.signerAddress;
    var erc20 = currentUserInfo.erc20;
    const updateUser = async () => {
        try {
            if (!window.ethereum)
                throw new Error('No crypto wallet found. Please install "MetaMask" in the Chrome Extensions Store')
        } catch (err) {
            alert(err)
        }
        provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        if (accReqPending === null) {
            setAccReqPending(true);
        }
        const _ethReqP = await handleEthAccReq();
        if (!_ethReqP) {
            sessionStorage.setItem(accReqPending, true);
            setAccReqPending(true);
        } else {
            signer = provider.getSigner();
            signerAddress = await signer.getAddress().catch(e => console.log(e));
            erc20 = new ethers.Contract(contractAddress, erc20abi, signer);
            sessionStorage.setItem(accReqPending, false);
            setAccReqPending(false);
            setCurrentUserInfo(prev => {
                    return {
                        ...prev,
                        provider,
                        signer,
                        signerAddress,
                        erc20
                    }
                });
        }

    }
    if (prop.prop == "connect") {
        return (
            <button className="button" onClick={() => updateUser()}>Connect</button>
        )
    }
    else if (prop.prop == "retry") {
        return (
            <button className="button" onClick={() => updateUser()}>Retry</button>
        )
    }
    else {
        return (
            <button className="button" onClick={() => updateUser()}>!Error</button>
        )
    }
}