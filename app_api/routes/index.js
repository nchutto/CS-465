const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const auth = jwt.expressjwt({
    secret: 'S0uth3rnN3wH@mpsh1r3Un1v3rs1tyC0mput3rSc13nc3',
    algorithms: ['HS256']
});

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

router.post('/trips', auth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', auth, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', auth, tripsController.tripsDeleteTrip);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;