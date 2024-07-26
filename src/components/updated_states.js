import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GlobalState } from "./global_states/global_state"
import { GamePage } from "./site_stuff/game_page";


export const OnConnect = async () => {
    
    const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await currProvider.send("eth_requestAccounts", []);
    const signer = currProvider.getSigner();
    const signerAddress = await signer.getAddress();

    const updatedStates = {
        provider: currProvider,
        signer: signer,
        signerAddress: signerAddress,
        balance: "-"
    }
    
    return (updatedStates)
  };