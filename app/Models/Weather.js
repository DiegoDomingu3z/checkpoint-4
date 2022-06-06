
// TODO figure out how to convert C to F for weather update
// TODO create template and create an onclick to switch between them


export class Weather {
    constructor(data) {
        this.name = data.name
        this.weather = data.main.temp
    }


    get Template() {
        return `
        <div class="col-12 text-end">
        <h3>
        <div id="temp"> ${this.Temp}
        </div
       
      <div >${this.name}</div>
      </h3>
    </div>
        
    `

    }

    get Celsius(){
        var celsius = this.weather - 273
        return celsius 
    }

      get far(){
        var celsius = this.weather - 273
        var far = celsius * 1.8 + 32
        return far

    }
    
    get Temp(){
return `
<div onclick="app.weatherController.seeFa()" class="selectable">${this.Celsius.toFixed(0)} &#176</div>
`
    }

    get fTemp(){
        return `
        <div onclick="app.weatherController.seeCelsius()" class="selectable">${this.far.toFixed(0)} &#176</div>
        `
    }
    
}