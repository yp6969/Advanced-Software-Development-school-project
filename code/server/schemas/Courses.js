const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        idCourses: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        studentAndGrade: [{
            id_stu: {
                type: String,
                require: true,
                min: 8,
                max: 9,
                unique: true,
            },
            grade: {
                type: Number,
                require: true,
                min: 1,
                max: 3,
                unique: true,
            }
        }
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Courses", CoursesSchema);