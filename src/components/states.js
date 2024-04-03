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
          contractAddress: "0xF848ad73488D71a707D7a50217376Cf7459535df",
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