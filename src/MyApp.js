import { StartPage } from "./components/pages/StartPage";
import { GlobalStateDefault, GlobalStates } from "./components/states";


export default function MyApp() {

    return (
        <GlobalStateDefault>
            <StartPage />
        </GlobalStateDefault>
    )

}