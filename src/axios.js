import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://mmc-server.onrender.com'
})

export default instance;