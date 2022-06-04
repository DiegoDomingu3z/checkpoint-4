
// TODO figure out how to convert C to F for weather update


export class Weather {
    constructor(data) {
        this.name = data.name
        this.weather = data.main.temp
    }


    get Template() {
        return `
        <div class="col-12 text-end">
        <h3>
        <div>${this.weather}</div>
      <div>${this.name}</div>
      </h3>
    </div>
        
    `

    }
}