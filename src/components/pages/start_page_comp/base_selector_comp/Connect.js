import { UpdateUser } from "../../../buttons/updateUser"


export function Connect() {

    return (
            <div className="rt-container">
                <div className="pregame_background">
                    <div className="box">
                        <h3>Click "Connect" to connect to your Web3 Wallet!</h3>
                        <UpdateUser prop="connect"/>
                    </div>
                </div>
            </div>
    )
}