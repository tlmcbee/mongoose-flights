const Flight = require('../models/flight')

module.exports = {
  new: newFlight,
  create,
  index
}

function newFlight(req, res) {
  const newFlight = new Flight()
  res.render('flights/new' , {
    errorMsg: '',
    newFlight })
}

async function create(req, res) {
  // console.log(req.body)
  res.redirect('/flights')
  try {
    await Flight.create(req.body)
  } catch (err) {
      console.log(err)
      res.render('flights/new' , { errorMsg: err.message})
  }
}

async function index(req, res) {
  const flights = await Flight.find({})
  res.render('flights/index' , { flights})
}