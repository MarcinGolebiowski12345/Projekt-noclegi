const express = require('express');
const router = express.Router();

const hotelActions = require('../actions/hotelsActions');

router.get('/hotels', hotelActions.getAllHotel);
router.get('/hotels/:id', hotelActions.getHotel);
router.post('/hotels', hotelActions.saveHotel);
router.delete('/hotels/:id', usersActions.deleteHotel);

module.exports = router;


