import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTime(){
    var time = new Date();
    time.toTimeString()
    document.getElementById('date-time').innerText = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
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
        _drawTime()
        
    }


    async getWeather(){
        try {
            console.log('getting weather');
            console.log('this is the weather',ProxyState.weather)
        await weatherService.getWeather()
        } catch (error) {
            console.log(error);
            Pop.toast(error.message, 'error')
        }
    }


    seeFa(){
        document.getElementById('temp').innerHTML = ProxyState.weather.fTemp
    }

    seeCelsius(){
        document.getElementById('temp').innerHTML = ProxyState.weather.Temp

    }

   
}


setInterval(_drawTime, 100)
