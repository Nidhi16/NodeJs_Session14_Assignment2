// Load the required modules
var bodyParser = require('body-parser');
var express = require('express');
var Teacher = require('../models/model');

var router = express.Router();

// Teachers list endpoint
router.route('/teachers')
    // Fetching all teachers
    .get(function(request, response){
        Teacher.find(function(err, results) {
            if (err) {
                response.send(err);
            } else {
                response.json(results);
            }
        });
    })
    // Create teacher endpoint
    .post(function(request, response){
        var data = request.body;
        var newTeacher = new Teacher();
        newTeacher.name = data.name;
        newTeacher.age = data.age;
        newTeacher.gender = data.gender;
        newTeacher.department = data.department;
        newTeacher.school = data.school;
        newTeacher.joining_date = data.joining_date;

        // save the newly created teacher object
        newTeacher.save(function (err, result) {
            if (err) {
                response.send(err);
            } else {
                response.json(result);
            }
        });
    });

router.route('/teachers/:id')
    // create put request endpoint
    .put(function(request, response){
        var id = request.params.id;   // Fetching id from the request parameter
        // Find teacher object on the basis of id
        Teacher.findOne({_id:id}, function(err, teacher){
            for(prop in request.body){
                teacher[prop]=request.body[prop];
            }

            // save the teacher
            teacher.save(function(err) {
                if (err)
                    response.send(err);

                response.json(teacher);
            });
        });
    })
    // Read a single teacher object
    .get(function(request, response){
        Teacher.findOne({_id:request.params.id},function(err, teacher) {
            if(err)
                response.send(err);

            response.json(teacher);
        });
    })
    // Delete endpoint to delete a single teacher object
    .delete(function(request, response){
        // response.send("This is the delete request");
        Teacher.remove({
            _id: request.params.id
        }, function(err, teacher) {
            if (err)
                response.send(err);

            response.status(204).json({ message: 'Teacher Successfully deleted' });
        });
    });

// Export router object
module.exports = router;