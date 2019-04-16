const koa = require('koa')
const app = new koa()
const { connect, initSchema }  = require('./database/init.js')
const mongoose = require('mongoose')

;(async () => {
    await connect()
    initSchema()
    const User = mongoose.model('User')
    let oneUser = new User({userName: 'cbj01', password: '123456'})
    oneUser.save().then(() => {
        console.log('插入成功')
    })
    let user = await User.findOne({}).exec()
    console.log('user===========',user)
})()




app.use(async ctx => {
    ctx.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000, () => {
    console.log('服务启动，端口3000')
})