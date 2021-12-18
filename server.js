const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')
const mysql = require('mysql2')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const MysqlSetting = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: 'date' 
}

const pool = mysql.createPool(MysqlSetting)
const promisePool = pool.promise()

const wrap = fn => (req, res, next) => fn(req, res, next).catch(next)

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
  .get('/show', wrap(async (req, res) => {
    const [rows, fields] = await promisePool.query('SELECT * from battle_record')
    console.log(rows)
    res.send(rows)
  }))
  
  .post('/add',  wrap(async (req, res, next) =>{
        console.log(req.body)
        const getpass = req.body.password
        const BattleData = req.body
        delete BattleData.password
        if (getpass === process.env.PASSFROMDISCO) {
          const [rows, fields] = await promisePool.query('insert into battle_record set ?', BattleData)
          res.status(200).json(BattleData)
          }else {
            throw new Error('password invalid')
        }
      }
      ))

  .listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
