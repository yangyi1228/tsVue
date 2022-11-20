import express from 'express'

function authority(req, res) {
  if ((req.headers.token = 'monitoken')) {
    res.send({
      code: 200,
      msg: '获取成功',
      data: [
        {id:1,name:'牛逼1'},
        {id:2,name:'牛逼2'},
        {id:3,name:'牛逼3'},
        {id:4,name:'牛逼4'},
        {id:5,name:'牛逼5'},
        {id:6,name:'牛逼6'},
        {id:7,name:'牛逼7'},
        {id:8,name:'牛逼8'},
        {id:9,name:'牛逼9'},
      ],
    })
  } else {
    res.send({
      code: 201,
      msg: '获取失败',
    })
  }
}

const router = new express.Router()
router.get('/authority',authority)
export default router
