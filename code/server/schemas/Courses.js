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
                min: 3,
                max: 20,
                unique: true,
            },
            grade: {
                type: String,
                require: true,
                min: 3,
                max: 20,
                unique: true,
            }
        }
        ],
        password: {
            type: String,
            required: true,
            min: 6,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Courses", CoursesSchema);