import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://18.118.35.192:8081/api'
})