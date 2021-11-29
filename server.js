const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const mysql = require('mysql2')
// const bluebird = require('bluebird')
const PORT = process.env.PORT || 3000

const MysqlSetting = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}
require('dotenv').config()

// let mysqlConnection = null;
// const getMysqlConnection = async () => {
//   // Check to see if connection exists and is not in the "closing" state
//   if (!mysqlConnection || mysqlConnection?.connection?._closing) {
//     mysqlConnection = await createNewMysqlConnection();
//   }
//   return mysqlConnection;
// }

// const createNewMysqlConnection = async () => {
//   const connection = await mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     Promise: bluebird,
//   })

//   // You can do something here to handle the connection
//   // being closed when it occurs.
// //   connection.connection.stream.on('close', () => {
// //     console.log("MySQL connection closed");
// //   });
//   return connection;
// }

// const con = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// })

// con.connect((err) => {
//   if (err) {
//     throw err
//   } 
//   console.log('SQLConnected')
// })

express()
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use('/img', express.static(__dirname + '/dist/img/'))
  .use('/css', express.static(__dirname + '/dist/css/'))
  .use('/js', express.static(__dirname + '/dist/js/'))

  .get('/api/hello', (req, res) => {
      res.send('hello i am express')
    })

  .get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/show', async (req, res) => {
    const pool = await mysql.createPool(MysqlSetting)
    const promisePool = pool.promise()
    const [rows, fields] = await promisePool.query('SELECT * from battle_record')
    res.send(rows)
    await pool.end()
  })
  
  // 変更よてい
  .post('/add',  async (req, res, next) =>{
      try {
          console.log(req.body)
        const getpass = req.body.password
        const BattleData = req.body
        delete BattleData.password
        if (getpass === process.env.PASSFROMDISCO) {
            const con = await getMysqlConnection()
              con.query(
              'insert into battle_record set ?',
              BattleData,
              (err, result, fields) => {
                if (err) throw err;
                    console.log(result)
                    res.redirect('/show')
                }
            )
          }else {
            console.log('password from discord invalid else')
            res.send('password invalid')
        }
        
      } catch (err){
        console.log('password from discord invalid')
      }
}
)
  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
