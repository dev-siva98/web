import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://192.168.43.105:9000/user'
})

export default instance;