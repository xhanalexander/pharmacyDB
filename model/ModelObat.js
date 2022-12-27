const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');

const ObatSchema = new Schema({
   kode: {
      type: String,
      maxLength: [4,'kode obat tidak boleh lebih dari 4 karakter'],
      required: [true, 'kode obat harus diisi']
   },
   nama: {
      type: String,
      required: [true, 'nama obat harus diisi']
   },
   kategori: {
      type: String,
      required: [true, 'golongan obat harus diisi']
   },
   jumlah: {
      type: Number,
      required: [true, 'jumlah obat harus diisi']
   },
   satuan: {
      type: String,
      required: [true, 'satuan obat harus diisi']
   },
   harga: {
      type: Number,
      required: [true, 'harga obat harus diisi']
   },
   produsen: {
      type: mongoose.Types.ObjectId,
      ref: 'Pabrik',
      required: true
   },

});

module.exports = model('Obat', ObatSchema)