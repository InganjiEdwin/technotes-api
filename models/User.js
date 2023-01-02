const mongoose = require('mongoose')

const userSChema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    roles:{
        type: [String],
        default: ["Employee"]
    },
    active:{
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('User',userSChema)