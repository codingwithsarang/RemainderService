const {createNotification} = require('../services/ticket-service')


const create = async(req,res)=>{
    try {
        const response = await createNotification(req.body) 
        return res.status(201).json({
            success: true,
            data: response,
            message: 'successfully fetched notification data',
            error : {}
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: 'something went wrong'
        })
    }
}


module.exports = {
    create
}