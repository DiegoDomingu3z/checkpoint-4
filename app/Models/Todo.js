


export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this.description =  data.description
    }


    get Template(){
return `
<div class="bg-light text-dark ">
<div>
  ${this.description}
</div>
</div>

`

    }


}