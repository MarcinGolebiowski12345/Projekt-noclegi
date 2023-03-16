const express = require('express');
const router = express.Router();

const hotelActions = require('../actions/hotelsActions');

router.get('/hotels', hotelActions.getAllHotel);
router.get('/hotels/:id', hotelActions.getHotel);
router.put('/hotels', hotelActions.updateHotel);
router.post('/hotels', hotelActions.saveHotel);
router.delete('/hotels/:id', hotelActions.deleteHotel);

module.exports = router;


