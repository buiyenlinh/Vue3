import axios from "axios";
// const APIAuth = axios.create({
//     baseURL: "https://api-nienluan.sharenows.com/api/v1/product/"
// })

axios.defaults.baseURL = "http://localhost:8082/api/";
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

// export default APIAuth;