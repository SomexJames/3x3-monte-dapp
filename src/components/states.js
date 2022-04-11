import React from "react"
import { useState, useEffect, createContext } from "react";
import { useContext, useMemo } from "react";
import { GlobalState } from "./global_states/global_state";
import { ethers } from "ethers";


export function GlobalStateDefault({ children })  {

  const [ accReqPending, setAccReqPending ] = useState(
    null
  );

  const [currentUserInfo, setCurrentUserInfo] = useState(() => {
    return {
          provider: "-",
          signer: "-",
          signerAddress: "-",
          balance: "-",
          erc20: "-",
          contractAddress: "0xbbf8Ca1DCB0968Ced01bA88dc96F967Fd8734ceA",
          updateBalance: 0
        }
    }
  );

  const [currentGameInfo, setGameInfo] = useState(() => {
    return {
            level: 0,
            cards: [],
            inputValue: '',
            currentBet: null,
            gameOver: false,
            message: null
          }
        }
      );

  const globalStateValue = useMemo(() => ({ currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending}));

  return (
    <GlobalState.Provider value={globalStateValue}>
      {children}
    </GlobalState.Provider>
    )

}