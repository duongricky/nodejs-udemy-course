const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//Create user
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Get list users
router.get('/users', async (req, res) => {
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((error) => {
    //     res.send(error)
    // })
    try {
        const user = await User.find({})
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Get detail user
router.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.send(error)
    })
})

//Update user
router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!user) {
            res.status(404).send()
        }
        
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router