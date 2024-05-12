import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://localhost:8888'
} else {
    baseURL = 'http://localhost:8888'
}

// 拦截器
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.request.use((config) => {
    // config.headers['Accept'] = 'application/vnd.dpexpo.v1+json'
    config.baseURL = baseURL
    config.timeout = 10000
    return config;
}, (error) => {
    return Promise.reject(error)
})

// axios的get请求
export function fetchGet(url: string, params: any) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            console.log(err, '1')
            reject(err)
        })
    })
}

// axios的post请求
export function fetchPost(url: string,
    data: any) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default axios