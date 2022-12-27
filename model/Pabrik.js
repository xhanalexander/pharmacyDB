const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')

const Pabrik = new Schema({
   nama: {
      type: String,
      required: [true, 'nama pabrik harus diisi']
   },
}, {timestamps: true})

module.exports = model('Pabrik', Pabrik)

