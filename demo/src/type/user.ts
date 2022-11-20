export interface IUserList {
    id:number,
    nickName:string,
    userName:string,
    role:RoleListInt
}
export interface RoleListInt{
    roleName:string,
    roleId:number,
    authority?:number[]
}

interface selectDataInt{
    roleId:number,
    nickName:string
}
interface ActiveInt{
    id:number,
    nickName:string,
    userName:string,
    role:number
}
export class InitData{
    selectData:selectDataInt = {
        nickName:'',
        roleId:0
    }
    list:IUserList[]=[]
    roleList:RoleListInt[] = []
    isShow=false
    active:ActiveInt = {
        id:0,
        nickName:'',
        userName:'',
        role:0
    }
}