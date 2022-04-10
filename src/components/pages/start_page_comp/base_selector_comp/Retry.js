import { UpdateUser } from "../../../buttons/updateUser"

export function Retry() {
    
    return (
            <div class="rt-container">
                        <div class="pregame_background">
                            <div class="box">
                                <h3>Trying to connect...</h3>
                                <p>Please check your Web3 Chrome extension (i.e. "MetaMask")</p>
                                <p>Once connected, click "Retry"</p>
                                <UpdateUser prop="retry"/>
                            </div>
                        </div>
                    </div>
    )
}