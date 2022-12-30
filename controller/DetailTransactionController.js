const Order = require('../model/Order')

const GetTransaction = async (req, res) => {
   try {
      const transaction = await Order.find()
      .select('date Obat jumlah total')
      .populate({path : 'obat', sort: {'kode': 1}, populate: {path: 'produsen', select: 'nama'}})
      res.status(200).json({data: transaction})
   } catch (err) {
      res.status(500).json({ message: err.message })
   }
}

module.exports = {
   GetTransaction,
}



