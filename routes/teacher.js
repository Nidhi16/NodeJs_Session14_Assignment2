var express = require('express');

var router = express.Router();

router.route('/teachers')
    .get(function(request, response){
        response.send("This is default get");
    })
    .post(function(request, response){
        response.send("This is post request");
    });

router.route('/teachers/:id')
    .put(function(request, response){
        response.send("This is the put request");
    })
    .get(function(request, response){
        response.send("This is the second get request");
    })
    .delete(function(request, response){
        response.send("This is the delete request");
    });

module.exports = router;