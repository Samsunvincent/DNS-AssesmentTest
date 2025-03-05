const mongoose = require('mongoose');

let registerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            //   required: [true, "Name is required"],
            trim: true,
            minlength: [3, "Name must be at least 3 characters long"],
        },
        email: {
            type: String,
            //   required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email address",
            ],
        },
    

        password: {
            type: String,
            //   required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"],
        },
        
        
    },
    { timestamps: true } 
);

// Export the schema as a model
module.exports = mongoose.model('useData', registerSchema);