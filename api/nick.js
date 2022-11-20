import express from 'express'

function nick(req,res){
    if((req.headers.token = 'monitoken')){
        res.send({
            code:200,
            msg:'获取成功',
            data:[
                {id:1,nickName:'小明',userName:'小明',role:{roleId:1}},
                {id:2,nickName:'小红',userName:'小红',role:{roleId:2}},
                {id:3,nickName:'小绿',userName:'小绿',role:{roleId:2}},
            ]
        })
    }else{
        res.send({
            code:201,
            msg:'获取失败'
        })
    }
}

const router = new express.Router()
router.get('/nick',nick)
export default router