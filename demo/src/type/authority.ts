export interface ListInt{
    id:number,
    name:string
}

export class InitData{
    id:number
    authority:number[]
    list:ListInt[] = []
    constructor(id:number,authority:number[]){
        this.id = id
        this.authority = authority
    }
    treeRef:any
}