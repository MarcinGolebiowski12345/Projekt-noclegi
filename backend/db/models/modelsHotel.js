const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    advanteges: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;