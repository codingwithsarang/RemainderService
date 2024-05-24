const express = require('express')

const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const { create } = require('./controllers/ticket-controller')
const setupJobs = require('./utils/jobs')

function setupServer(){
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.post("/api/v1/tickets",create)

    // setupJobs()
    app.listen(PORT,()=>{
        console.log('server is running on port no',PORT)
    })
}


setupServer() 