const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United', 'Alaska']},
  airport: { type: String, default: 'SEA', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA']},
  flightNo: { type: Number, min: 10, max: 9999},
  departs: { type: String, default: new Date().toLocaleString()
    }
  } , {
  timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)