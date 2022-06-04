import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTime(){
    var time = new Date();
    document.getElementById('date-time').innerText = time
}

function _draw(){
    let weather = ProxyState.weather
    document.getElementById('weather').innerHTML = weather.Template
}


export class WeatherController{
    constructor(){
        console.log('weather controller is working');
        this.getWeather()
        ProxyState.on('weather', _draw)
        _draw()
        _drawTime()
    }


    async getWeather(){
        try {
            console.log('getting weather');
        await weatherService.getWeather()
        } catch (error) {
            console.log(error);
            Pop.toast(error.message, 'error')
        }
    }
}


setInterval(_drawTime, 100)
