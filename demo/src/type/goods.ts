export interface IListInt{
    id:number,
    title:string,
    introduce:string,
    userId:number
}
export interface selectDataInt{
    title:string,
    introduce:string,
    page:number,
    count:number,
    pageSize:number
}
export class InitData{
    selectData:selectDataInt={
        title:'',
        introduce:'',
        page:1,
        count:0,
        pageSize:7
    }
    list:IListInt[]=[]
}
