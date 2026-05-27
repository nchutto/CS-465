const mongoose = require('mongoose');
require('./app_server/models/travlr');

const Trip = mongoose.model('trips');

mongoose.connect('mongodb://127.0.0.1:27017/travlr');

const trips = [
  {
    code: 'SEA01',
    name: 'Sea Explorer',
    length: '7 nights',
    start: new Date('2024-06-15'),
    resort: 'Ocean View Resort',
    perPerson: '$1299',
    image: 'sea.jpg',
    description: 'Enjoy beautiful ocean views and relaxing beach adventures.'
  },
  {
    code: 'MTN01',
    name: 'Mountain Escape',
    length: '5 nights',
    start: new Date('2024-07-10'),
    resort: 'Peak Lodge',
    perPerson: '$999',
    image: 'mountain.jpg',
    description: 'A scenic mountain getaway with hiking and fresh air.'
  }
];

Trip.insertMany(trips)
  .then(() => {
    console.log('Trips added successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });