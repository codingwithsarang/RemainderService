const cron = require('node-cron')

const email = require('../services/ticket-service.js')
const sender = require('../config/emailService')


const setupJobs = ()=>{
    cron.schedule('*/1 * * * *',async ()=>{
        const response = await email.fetchPendingEmail()
        response.forEach((res)=>{
            sender.sendMail({
                to: res.dataValues.recepientEmail,
                subject: res.dataValues.subject,
                text: res.dataValues.content
            },async(err, data)=>{
               if(err){
                console.log(err)
               }else{
                console.log(data)
                await email.update(res.dataValues.id, {status:'SUCCESS'})
               }
            })
        })

        console.log(response)
    })
}

module.exports = setupJobs