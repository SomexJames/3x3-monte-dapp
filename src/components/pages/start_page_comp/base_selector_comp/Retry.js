import { UpdateUser } from "../../../buttons/updateUser"

export function Retry() {
    
    return (
            <div className="rt-container">
                        <div className="pregame_background">
                            <div className="box">
                                <h3>Trying to connect...</h3>
                                <p>Please check your Web3 Chrome extension (i.e. "MetaMask")</p>
                                <p>Once connected, click "Retry"</p>
                                <UpdateUser prop="retry"/>
                            </div>
                        </div>
                    </div>
    )
}