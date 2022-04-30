import axios from "axios"
import dotenv from 'dotenv'

dotenv.config({path:'../../.env'})

console.log('key',process.env.WEATHER_KEY)
console.log('API Link',process.env.WEATHER_API)


export default axios.create({
    baseURL:process.env.WEATHER_API
})