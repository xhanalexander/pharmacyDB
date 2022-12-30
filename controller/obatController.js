const Obats = require('../model/ModelObat')

const GetAll = async (req, res) => {
   try {
      const obats = await Obats.find().sort({ kode: 1 }).populate('produsen')
      res.status(200).json({ data: obats })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

const create = async (req, res) => {
   try {
      const obat = await Obats.create(req.body)
      res.status(201).json({ data: obat })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

const updates = async (req, res) => {
   try {
      const { id } = req.params
      const { kode, nama, kategori, jumlah, satuan, harga, expired, produsen } = req.body

      const check = await Obats.findOne({
         nama,
         _id: { $ne: id }
      })
      if (check) {
         return res.status(400).json({ message: 'obat sudah ada' })
      }

      const hasil = await Obats.findOneAndUpdate(
         { _id: id },
         { kode, nama, kategori, jumlah, satuan, harga, expired, produsen },
         { new: true, runValidators: true }
      )

      if (!hasil) {
         return res.status(400).json({ message: 'obat tidak ditemukan' })
      }

      res.status(200).json({ data: hasil })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

const deletes = async (req, res) => {
   try {
      const { id } = req.params
      const hasil = await Obats.findOne({ _id: id })
      if (!hasil) {
         return res.status(400).json({ message: 'obat tidak ditemukan' })
      }
      
      hasil.remove()
      res.status(200).json({ message: 'obat berhasil dihapus' })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

module.exports = {
   GetAll,
   create,
   updates,
   deletes
}



