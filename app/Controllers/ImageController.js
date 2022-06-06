import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
    let img = ProxyState.img
    document.getElementById('img').innerHTML = img.Template

}




export class ImageController{
    constructor(){
        console.log('image controller is working');
        this.getImg()
        ProxyState.on('img', _draw)
        
    }

   async getImg(){
        try {
            await imageService.getImg()
            console.log('getting IMG');
        } catch (error) {
            console.log(error);
            Pop.toast(error.message, 'error')
        }
    }


    
}