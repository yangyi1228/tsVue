import express from "express";

function login(req,res){
    const data = req.query
    if(data.userName === 'admin' && data.userPass === '123456'){
        res.send({
            code:200,
            msg:'登录成功',
            token:'monitoken'
        })
    }else{
        res.send({
            code:201,
            msg:'登录失败'
        })
    }
}


const router = new express.Router()
router.post('/login',login)
export default router;

