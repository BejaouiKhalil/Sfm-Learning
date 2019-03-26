const course = require('./../../../models/Course.js');

module.exports = {
    Query:{
        courses: () => course.find(),
        course: (_,{id}) => course.findById(id)
    },
    Mutation:{
        addCourse : (_,{input}) => console.log("Course adding :"+input)
    }
}