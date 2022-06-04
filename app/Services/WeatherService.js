import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";





class WeatherService{
    async getWeather(){
        const res = await sandboxApi.get('weather')
        ProxyState.weather = new Weather(res.data)
        console.log('weatherService', res.data);
        console.log('proxy', ProxyState.weather);

    }
    
}


export const weatherService = new WeatherService()