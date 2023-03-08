const User = require('../db/models/modelsUser');

class UsersActions {
    async saveUser(req, res) {
        const name = req.body.name;
        const surname = req.body.surname;
        const password = req.body.password;
        const login = req.body.login;

        let newUser;
        try{
            newUser = new User({
                name,
                surname,
                password,
                login,
            });
            await newUser.save();
        } catch (err){
            return res.status(422).json({ message: err.message });
        } 
        res.status(200).json(newUser);
    }

    async getAllUser(req, res) {
        const doc = await User.find({});
        res.status(200).json(doc);
    }

    async getUser(req, res) {
        const login = req.body.login;
        const password = req.body.password;
        const user = await User.find({
            login: login,
            password: password,
        });
        res.status(200).json(user);
        console.log(user);
    }
   
    async updateUser(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const password = req.body.password;
        const login = req.body.login;

        const user = await User.findOne({ _id: id });
        user.name = name;
        user.surname = surname;
        user.password = password;
        user.login = login;
        await user.save();

        res.status(201).json(user);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.sendStatus(204);
      }
}

module.exports = new UsersActions();
