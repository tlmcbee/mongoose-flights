const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA']
  },
  arrival: Date
})

const flightSchema = new Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United', 'Alaska']},
  airport: { type: String, default: 'SEA', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA']},
  flightNo: { type: Number, min: 10, max: 9999},
  departs: { 
    type: Date, 
    default: function () {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()
    const finalDate = new Date(year + 1, month, day )
    return finalDate
  }},
  destinations: [destinationSchema],
  } , {
  timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)