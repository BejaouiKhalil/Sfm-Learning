const course = `
    type Course{
       id : ID!
       name: String
       type: String 
    }

    input inputCourse{
        name:String
        type:String
    }

    type Query{
        courses:[Course]
        course(id:ID!):Course
        findCourseByName(name:String):Course
        findCourseByClass(class_id:ID!):Course
    }
    type Mutation{
        addCourse(input : inputCourse!):Course  
    }
`
module.exports = course