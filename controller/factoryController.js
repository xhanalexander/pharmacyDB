
const Factory = require('../model/Pabrik')

const GetAll = async (req, res) => {
   try {
      const factory = await Factory.find();
      res.status(200).json({data: factory})
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

const create = async (req, res) => {
   try {
      const factory = await Factory.create(req.body)
      res.status(201).json({data: factory})
   } catch (err) {
      res.status(500).json({ message: err.message })
   }

}

module.exports = {
   GetAll,
   create
}



