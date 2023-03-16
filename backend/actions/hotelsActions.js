const Hotel = require('../db/models/modelsHotel');

class HotelsActions {
    async saveHotel(req, res) {
        const name = req.body.name;
        const region = req.body.region;
        const place = req.body.place;
        const advantages = req.body.advantages;
        const owner = req.body.owner;
        const price = req.body.price;

        let hotel;
        try{
            hotel = new Hotel({
                name,
                region,
                place,
                advantages,
                owner,
                price,
            });
            await hotel.save();
        } catch (err){
            return res.status(422).json({ message: err.message });
        } 
        res.status(200).json(hotel);
        console.log(hotel);
    }

    async getAllHotel(req, res) {
        const doc = await Hotel.find({});
        res.status(200).json(doc);
    }

    async getHotel(req, res) {
        const id = req.params.id;
        const hotel= await Hotel.findOne({_id: id});
        res.status(200).json(hotel);
    }

    async updateHotel(req, res) {
        const id = req.body._id;
        const name = req.body.name;
        const region = req.body.region;
        const place = req.body.place;
        const advantages = req.body.advantages;
        const owner = req.body.owner;
        const price = req.body.price;

        const hotel = await Hotel.findOne({ _id: id });
        hotel.name = name;
        hotel.region = region;
        hotel.place = place;
        hotel.advantages = advantages;
        hotel.owner = owner;
        hotel.price = price;
        await hotel.save();

        res.status(201).json(hotel);
    }

    async deleteHotel(req, res) {
        const id = req.params.id;
        await Hotel.deleteOne({ _id: id });
        res.sendStatus(204);
      }
}

module.exports = new HotelsActions();