import axios from "axios"


const fetch = axios.create({
    baseURL: "",
    timeout: 200000,
})


fetch.interceptors.request.use(config => {
    return config
})


fetch.interceptors.response.use(res => {
    return res
})
export default fetch
