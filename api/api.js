import express from "express"
import login from './login.js'
import commodityList from './commodityList.js'
import nick from './nick.js'
import role from './role.js'
import authority from './authority.js'
import cors from "cors"

const app = express()
app.use(cors())
app.use('/api',login)
app.use('/api',commodityList)
app.use('/api',nick)
app.use('/api',role)
app.use('/api',authority)

app.listen(8888,()=>{
    console.log("http://127.0.0.1:8888");
})