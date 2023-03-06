const Hotel = require('../db/models/modelsHotel');

class HotelsActions {
    async saveHotel(req, res) {
        const name = req.body.name;
        const region = req.body.region;
        const place = req.body.place;
        const advanteges = req.body.advanteges;
        const owner = req.body.owner;
        const price = req.body.price;

        let newHotel;
        try{
            newHotel = new Hotel({
                name,
                region,
                place,
                advanteges,
                owner,
                price,
            });
            await newHotel.save();
        } catch (err){
            return res.status(422).json({ message: err.message });
        } 
        res.status(200).json(newHotel);
    }

    async getAllHotel(req, res) {
        const doc = await Hotel.find({});
        res.status(200).json(doc);
    }

    async getHotel(req, res) {
        const id = req.params.id;
        const hotel= await Hotel.findOne({_id: id});
        res.status(200).json(user);
    }

    async deleteHotel(req, res) {
        const id = req.params.id;
        await Hotel.deleteOne({ _id: id });
        res.sendStatus(204);
      }
}

module.exports = new HotelsActions();













