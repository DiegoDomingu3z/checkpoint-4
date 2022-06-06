


export class Quote{
    constructor(data){
        this.author = data.author
        this.content = data.content
        this.id = data.id
    }


    get Template(){
        return `
        <div class="author selectable headers"><h6>${this.content}</h6></div>
        <div class="hide headers">"${this.author}"</div>
        `
    }
}