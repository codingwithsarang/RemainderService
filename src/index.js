const express = require('express')

const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const { sendBasicEmail } = require('./services/emailService')


function setupServer(){
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    sendBasicEmail(
        'Support@gmail.com',
        'sarangjoshi196@gmail.com',
        'checking the email service working or not',
        'hey, how are you!'
    )
    app.listen(PORT,()=>{
        console.log('server is running on port no',PORT)
    })
}


setupServer()