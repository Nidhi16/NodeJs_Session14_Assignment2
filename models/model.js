var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var teacherSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    department: String,
    school: String,
    joining_date: Date,
});

var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
