const mongoose = require('mongoose');

const loyaltyProgramsSchema = new mongoose.Schema({
    _id: Number,
    programID:String,
    programName:String,
    currencyName:String,
    processingTime:String,
    description:String,
    enrollmentLink:String,
    tncLink:String

});

const LoyaltyPrograms = mongoose.model('LoyaltyPrograms', loyaltyProgramsSchema);

module.exports = LoyaltyPrograms;