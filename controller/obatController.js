// const { create } = require('../model/Pabrik')
const Obats = require('../model/ModelObat')
// const Pabriks = require('../models/pabrikModel')

const GetAll = async (req, res) => {
   try {
      const obats = await Obats.find().sort({ kode: 1 })
      res.status(200).json({data: obats})
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

const create = async (req, res) => {
   try {
      const obat = await Obats.create(req.body)
      res.status(201).json({data: obat})
   } catch (err) {
      res.status(500).json({ message: err.message })
   }

}

module.exports = {
   GetAll,
   create
}



