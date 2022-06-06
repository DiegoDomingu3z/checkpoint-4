



export class Image{
    constructor(data){
        this.img = data.largeImgUrl
        this.tags = data.tags
        this.author = data.author
    }


    get Template(){
        return `
        <div>${this.author}</div>
        <div>${this.tags}</div>
        
        `
        
    }



}