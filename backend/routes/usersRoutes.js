const express = require('express');
const router = express.Router();


const usersActions = require('../actions/usersActions');

//router.get('/users', usersActions.getAllUser);
router.post('/users', usersActions.getUser);
router.post('/addUsers', usersActions.saveUser);
router.put('/users/:id', usersActions.updateUser);
router.delete('/users/:id', usersActions.deleteUser);

module.exports = router;