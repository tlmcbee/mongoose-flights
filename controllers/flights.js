const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
  new: newFlight,
  create,
  index,
  show
}

function newFlight(req, res) {
  const newFlight = new Flight()
  res.render('flights/new' , {
    title: "Add a Flight",
    errorMsg: '',
    newFlight })
}

async function create(req, res) {
  // console.log(req.body)
  res.redirect('/flights')
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Flight.create(req.body)
  } catch (err) {
      console.log(err)
      res.render('flights/new' , { errorMsg: err.message})
  }
}

async function index(req, res) {
  const flights = await Flight.find({})
  res.render('flights/index' , { 
    title: 'All Flights',
    flights})
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id)
  const tickets = await Ticket.find({flight: flight._id})

  res.render('flights/show', {
    title: 'Flight Data',
    flight,
    tickets
  })
}