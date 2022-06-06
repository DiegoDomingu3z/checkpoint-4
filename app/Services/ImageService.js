import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js"




class ImageService{


    async getImg(){
        const res = await sandboxApi.get('images')
        document.body.style.backgroundImage = img
        console.log('getIMG', res.data);
        ProxyState.img = new Image(res.data)
        console.log('img in proxy',ProxyState.img);
    }

}


export const imageService = new ImageService()