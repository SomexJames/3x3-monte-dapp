import StartPage from "./components/pages/StartPage";
import GlobalStateDefault from "./components/states";


function MyApp() {
    return (
        <>
            <GlobalStateDefault>
                <StartPage />
            </GlobalStateDefault>
        </>   
    );
}

export default MyApp;