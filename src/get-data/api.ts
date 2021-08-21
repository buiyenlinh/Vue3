import axios from "axios";
const APIAuth = axios.create({
    baseURL: "https://api-nienluan.sharenows.com/api/v1/product/"
})

export default APIAuth;