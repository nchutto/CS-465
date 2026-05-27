require('../models/travlr');
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const travel = async function(req, res) {
    try {
        const trips = await Trip.find({});
        res.render('travel', {
            title: 'Travlr Getaways',
            trips
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    travel
};