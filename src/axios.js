import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://makemycake-backend.herokuapp.com'
})

export default instance;