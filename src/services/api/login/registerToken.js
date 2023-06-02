import asyncStorage from "@utils/asyncStorage";
import Config from "../../../utils/apiURLs";
import { instance } from "../../instance";
export default registerToken = async (accessToken, userId, userName) => {
    let token = await asyncStorage.getDeviceToken('deviceToken');
    if (token) {
        let response = await instance.post(
            `${Config.REGISTER_TOKEN}?token=${accessToken}`, JSON.stringify({
                apn_token: {
                    user_id: userId,
                    token: token,
                },
            })
        );
        let responseJson = await response.json();
        return responseJson;
    } else {
        return {};
    }
}