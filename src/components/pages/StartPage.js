import { Header } from "./start_page_comp/header"
import { useContext, useState } from "react"
import { GlobalState } from "../global_states/global_state"
import { BaseSelector } from "./start_page_comp/base_selector"


function StartPage() {
    const { currentUserInfo, setCurrentUserInfo, accReqPending, setAccReqPending } = useContext(GlobalState);

    return (
        <>
            <Header />
            <BaseSelector />
        </>
        

    )
}


export default StartPage;