const Order = require('../model/Order')
const Obat = require('../model/ModelObat')

const CheckOut = async (req, res) => {
   try {
      const { obat, jumlah } = req.body

      const obatData = await Obat.findOne({ _id: obat })
      if (!obatData) {
         return res.status(404).json({ message: 'Obat tidak ditemukan' })
      }

      let total = 0
      total += obatData.harga * jumlah

      await obatData.save()

      const hasil = new Order({
         date: new Date(),
         obat,
         total: total,
         jumlah
      })

      await hasil.save();
      res.status(201).json({data: hasil, message: 'Berhasil Checkout' })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
};

module.exports = {
   CheckOut
}

