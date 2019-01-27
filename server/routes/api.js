const express = require('express');
const User = require('../models/user');

const router = express.Router();

// get a list of injas from data base
router.get('/user', function(req, res, next){
    res.send({type: "GET"});
});

// add a new ninja to the db
router.post('/user', function(req, res, next){
    // var user = new user(req.body);
    // user.save();
    console.log(req.body);
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
    
});


//update a ninja to the db
router.put('/user/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        })
    });
})

//Delete 
router.delete('/user/:id', function(req, res, next){
    // console.log(req.params.id);
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
    
})


module.exports = router;