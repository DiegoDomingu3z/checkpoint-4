import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
let quote = ProxyState.quote
document.getElementById('quote').innerHTML = quote.Template
}



export class QuoteController{
    constructor(){
        console.log('quote controller is working');
        this.getQuote()
        ProxyState.on('quote', _draw)
    }


   async getQuote(){
        try {
          await quoteService.getQuote()
          console.log('getting quote');  
        } catch (error) {
            console.log(error);
            Pop.toast(error.message, 'error')
            
        }
    }
}