import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/"
});

export const userAPI = {
    signup(login: string, password: string) {
        debugger
        return instance.post(`/auth/register`, {
            "login": login, "pass": password, "admin": false, "deck": [
                {"deckId": 1, "ratings": [{"id": 1, "checks": 5, "rating": 4.5}]}
            ]
        })
    }
}