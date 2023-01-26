import axios from "axios";
import { useRouter } from "next/router";

type userInputs = {
    inputUserName: string
    inputPassword: string
}
export const logIn: Function = async ({ inputUserName, inputPassword }: userInputs) => {

    try {
        const user = axios.post(
            "https://good-movies-371412.ue.r.appspot.com/api/token",
            {
                username: inputUserName.toLowerCase().trim(),
                password: inputPassword,
            }
        );
        const res = await user;
        localStorage.setItem("token", res.data.access);
    } catch {
        alert("Wrong username or password");
    }

}