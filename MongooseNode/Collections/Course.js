const Course = require("mongoose");
const schema = new Course.Schema({

      CourseID: { 
        type: String, 
        required: true, 
        unique: true 
    },
      CourseName: { 
        type: String, 
        required: true 
    },
      CourseFee: { 
        type: Number, 
        required: true 
    },
      CourseDuration: { 
        type: String, 
        required: true 
    } 
    
    
})
const model4 =  Course.model("Course",schema);
module.exports = model4;