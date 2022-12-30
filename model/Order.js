const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');

const orderScheme = new Schema({
   date: {
      type: Date,
      default: Date.now,
      required: [true, 'Silahkan Input Tanggal Order...!']
   },
   obat: {
      type: mongoose.Types.ObjectId,
      ref: 'Obat',
      required: [true, 'Silahkan Input Kode Obat...!']
   },
   jumlah: {
      type: Number,
      required: [true, 'Silahkan Input Jumlah Obat...!']
   },
   total: {
      type: Number,
      required: [true, 'Silahkan Masukkan Harga Obat...!']
   },

});

module.exports = model('Order', orderScheme)