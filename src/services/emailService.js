const sender = require('../config/emailService')


const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody)=>{
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    })
}

module.exports = {
    sendBasicEmail
}