var bodyParser = require('body-parser');
var express = require('express');
var Teacher = require('../models/model');

var router = express.Router();

router.route('/teachers')
    .get(function(request, response){
        // Teacher.find(err, )
        Teacher.find(function(err, results) {
            if (err) {
                response.send(err);
            } else {
                response.json(results);
            }
        });
    })
    .post(function(request, response){
        // response.send("This is post request");
        var data = request.body;
        var newTeacher = new Teacher();
        newTeacher.name = data.name;
        newTeacher.age = data.age;
        newTeacher.gender = data.gender;
        newTeacher.department = data.department;
        newTeacher.school = data.school;
        newTeacher.joining_date = data.joining_date;

        newTeacher.save(function (err, result) {
            if (err) {
                response.send(err);
            } else {
                response.json(result);
            }
        })
    });

router.route('/teachers/:id')
    .put(function(request, response){
        // response.send("This is the put request");
        var id = request.params.id;
        Teacher.findOne({_id:id}, function(err, teacher){
            for(prop in request.body){
                teacher[prop]=request.body[prop];
            }

            // save the movie
            teacher.save(function(err) {
                if (err)
                    response.send(err);

                response.json(teacher);
            });
        })
    })
    .get(function(request, response){
        // response.send("This is the second get request");
        Teacher.findOne({_id:request.params.id},function(err, teacher) {
            if(err)
                response.send(err);

            response.json(teacher);
        });
    })
    .delete(function(request, response){
        // response.send("This is the delete request");
        Teacher.remove({
            _id: request.params.id
        }, function(err, teacher) {
            if (err)
                response.send(err);

            response.json({ message: 'Teacher Successfully deleted' });
        });
    });

module.exports = router;