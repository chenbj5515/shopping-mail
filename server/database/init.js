const mongoose = require('mongoose')
const db = "mongodb://localhost/cbj-db"
const glob = require('glob')
const { resolve } = require('path')

exports.initSchema = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
    mongoose.connect(db)
    let maxConnectTimes = 0

    return  new Promise((resolve, reject) => {
        mongoose.connection.on('disconnected', () => {
            console.log('**********数据库断开***********')
            if(maxConnectTimes <= 3) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请运维处理')
            }
        })
        
        mongoose.connection.on('error', () => {
            console.log('**********数据库错误***********')
            if(maxConnectTimes <= 3) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请运维处理')
            }
        })
    
        mongoose.connection.once('open', () => {
            console.log('数据库连接成功  ')
            resolve()
        })
    })
        


    
}