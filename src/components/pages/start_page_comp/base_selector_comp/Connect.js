import { UpdateUser } from "../../../buttons/updateUser"

export function Connect() {

    return (
            <div class="rt-container">
                        <div class="pregame_background">
                            <div class="box">
                                <h3>Click "Connect" to connect to your Web3 Wallet!</h3>
                                <UpdateUser prop="connect"/>
                            </div>
                        </div>
                    </div>
    )
}