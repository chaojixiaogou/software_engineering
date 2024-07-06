// 导入mysql数据库
const mysql = require('mysql')

// 建立数据库连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '20031031fy',
    database: 'test'
})
//git test333
// 对外暴露数据库
module.exports = db

