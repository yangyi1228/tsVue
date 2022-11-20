import express from 'express'

function role(req,res){
    if((req.headers.token = 'monitoken')){
        res.send({
            code:200,
            msg:'获取成功',
            data:[
                {roleName:'管理员',roleId:1,authority:[1,2,4,5,6,7,8,9]},
                {roleName:'普通用户',roleId:2,authority:[1,2,3,4]},
            ]
        })
    } else{
        res.send({
            code:201,
            msg:'获取失败'
        })
    }
}

const router = new express.Router()
router.get('/role',role)

export default router