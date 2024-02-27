import axios from 'axios'

export default (content_type = 'application/json', use_token = true) => {
    let token = ""
    let headers = {
        Accept: 'application/json',
        'Content-Type': content_type,
    }
    // if(use_token) {
    //     token = JSON.parse(localStorage.getItem("trackr")).access
    //     headers[' Authorization'] = `Bearer ${token}`
    // }
    const Api = axios.create({
        baseURL: process.env.VUE_APP_BASE,
        withCredentials: false,
        headers: headers,
    })
    return Api;
}
