import express from 'express'

function commodityList(req, res) {
  if ((req.headers.token = 'monitoken')) {
    res.send({
      code: 200,
      msg: '获取成功',
      data: [
        { id: 1, title: '旺旺碎冰冰', introduce: '这款旺旺碎冰冰，超级好吃', userId:1 },
        { id: 2, title: '旺仔牛奶', introduce: '旺仔牛奶相信大家都喝过，小时候常常能在电视上看见', userId:1 },
        { id: 3, title: '喜之郎', introduce: '喜之郎品牌，6666', userId:1 },
        { id: 4, title: '德芙', introduce: '德芙纵享丝滑', userId:1 },
        { id: 5, title: '麻辣王子', introduce: '湖南人自己的辣条', userId:1 },
        { id: 6, title: '伊利纯牛奶', introduce: '伊利自己家的牛下的奶', userId:1 },
        { id: 7, title: 'T97咖啡', introduce: '咖啡你冲不冲，冲冲冲冲冲', userId:1 },
        { id: 8, title: '旺旺碎冰冰', introduce: '这款旺旺碎冰冰，超级好吃', userId:1 },
        { id: 9, title: '旺仔牛奶', introduce: '旺仔牛奶相信大家都喝过，小时候常常能在电视上看见', userId:1 },
        { id: 10, title: '喜之郎', introduce: '喜之郎品牌，6666', userId:1 },
        { id: 11, title: '德芙', introduce: '德芙纵享丝滑', userId:1 },
        { id: 12, title: '麻辣王子', introduce: '湖南人自己的辣条', userId:1 },
        { id: 13, title: '伊利纯牛奶', introduce: '伊利自己家的牛下的奶', userId:1 },
        { id: 14, title: 'T97咖啡', introduce: '咖啡你冲不冲，冲冲冲冲冲', userId:1 },
        { id: 15, title: '旺旺碎冰冰', introduce: '这款旺旺碎冰冰，超级好吃', userId:1 },
        { id: 16, title: '旺仔牛奶', introduce: '旺仔牛奶相信大家都喝过，小时候常常能在电视上看见', userId:1 },
        { id: 17, title: '喜之郎', introduce: '喜之郎品牌，6666', userId:1 },
        { id: 18, title: '德芙', introduce: '德芙纵享丝滑', userId:1 },
        { id: 19, title: '麻辣王子', introduce: '湖南人自己的辣条', userId:1 },
        { id: 20, title: '伊利纯牛奶', introduce: '伊利自己家的牛下的奶', userId:1 },
        { id: 21, title: 'T97咖啡', introduce: '咖啡你冲不冲，冲冲冲冲冲', userId:1 },
        { id: 22, title: '伊利纯牛奶', introduce: '伊利自己家的牛下的奶', userId:1 },
        { id: 23, title: 'T97咖啡', introduce: '咖啡你冲不冲，冲冲冲冲冲', userId:1 },
        { id: 24, title: '旺旺碎冰冰', introduce: '这款旺旺碎冰冰，超级好吃', userId:1 },
        { id: 25, title: '旺仔牛奶', introduce: '旺仔牛奶相信大家都喝过，小时候常常能在电视上看见', userId:1 },
        { id: 26, title: '喜之郎', introduce: '喜之郎品牌，6666', userId:1 },
        { id: 27, title: '德芙', introduce: '德芙纵享丝滑', userId:1 },
        { id: 28, title: '麻辣王子', introduce: '湖南人自己的辣条', userId:1 },
        { id: 29, title: '伊利纯牛奶', introduce: '伊利自己家的牛下的奶', userId:1 },
        { id: 30, title: 'T97咖啡', introduce: '咖啡你冲不冲，冲冲冲冲冲', userId:1 },
      ],
    })
  }else{
    res.send({
        code:201,
        msg:'获取失败'
    })
  }
}

const router = new express.Router()
router.get('/commodityList',commodityList)
export default router
