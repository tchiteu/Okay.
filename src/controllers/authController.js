const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/cadastro', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registrar' });
    }
});

module.exports = app => app.use('/auth', router);