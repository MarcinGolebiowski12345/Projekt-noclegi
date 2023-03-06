const express = require('express');
const router = express.Router();

const hotelActions = require('../actions/hotelsActions');

router.get('/hotels', hotelActions.getAllHotels);
router.get('/hotels/{id}', hotelActions.getHotels);
router.post('/hotels', hotelActions.saveHotel);

module.exports = router;