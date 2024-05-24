const sender = require('../config/emailService')
const TicketRepository = require('../repositroy/ticket-repository')

const ticketRepository = new TicketRepository()

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody)=>{
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    })
}

const createNotification = async(data)=>{
    try {
        const response = await ticketRepository.create(data)
        return response
    } catch (error) {
        throw error
    }
}

const update = async (ticketId,status )=>{
    try {
        const response = await ticketRepository.update(ticketId, status)
        return response
    } catch (error) {
        throw error
    }
}

const fetchPendingEmail = async(timestamp)=>{
    try {
        const response = await ticketRepository.get({status: 'PENDING'})
        return response
    } catch (error) {
        throw error
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmail,
    createNotification,
    update
}