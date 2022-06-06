import { timeService } from "../Services/TimeService.js";




export class TimeController{
    constructor(){
        console.log('time controller is working');
    }




    async getTime(){
        try {
            timeService.getTime()
            console.log('getting time');
        } catch (error) {
            
        }
    }

}