import { ethers } from "ethers";



export const handleEthAccReq = async () => {
    const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const _ethReqP = await currProvider.send("eth_requestAccounts", []).catch(e => 
        e.code === -32002 ? 
            false :
            console.log(e)
    );
    
    return _ethReqP
}