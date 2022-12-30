const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');

const ObatSchema = new Schema({
   kode: {
      type: String,
      maxLength: [4,'kode obat tidak boleh lebih dari 4 karakter'],
      required: [true, 'Silahkan Input Kode Obat...!']
   },
   nama: {
      type: String,
      required: [true, 'Silahkan Input Nama Obat...!']
   },
   kategori: {
      type: String,
      required: [true, 'Silahkan Masukan Golongan Obat...!']
   },
   jumlah: {
      type: Number,
      required: [true, 'Silahkan Input Jumlah Obat...!']
   },
   satuan: {
      type: String,
      required: [true, 'Silahkan Input Satuan Obat...!']
   },
   harga: {
      type: Number,
      required: [true, 'Silahkan Masukkan Harga Obat...!']
   },
   expired: {
      type: Date,
      required: [true, 'Silahkan Masukkan Tanggal Kadaluarasa']
   },
   produsen: {
      type: mongoose.Types.ObjectId,
      ref: 'Pabrik',
      required: true
   },

});

module.exports = model('Obat', ObatSchema)