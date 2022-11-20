export interface ILoginFormInt{
    userName:string,
    userPass:string
}

export class LoginData{
    ruleForm:ILoginFormInt = {
        userName: '',
        userPass: '',
    }
}