import axios, { AxiosRequestConfig } from 'axios'

export const URL: string = 'http://localhost:8080/library'

const WORDS_API = axios.create({
    baseURL: URL,
    headers: {
        'Content-type': 'application/json'
    }
})

WORDS_API.interceptors.request.use(
    function (request: AxiosRequestConfig) {
                return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default WORDS_API