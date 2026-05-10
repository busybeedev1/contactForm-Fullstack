// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import { Timestamp } from "mongodb";


// const authSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },

//     lastName: {
//         type: String,
//         required: true,
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
//     },

//     address: {
//         type:String,
//         // required:true,
//     },

//     country: {
//         type:String,
//         // required:true
//     },

//     state: {
//         type:String,
//         // required:true
//     },

//     username: {
//         type:String,
//         required:true,
//         unique:true
//     },

//     password: {
//         type:String,
//         required:true
//     }
// }, { timestamps: true });

// // password hashing
// // READ ABOUT HOOKS IN NODEJS
// // mongoos hoos allow us the run operation PRE or POST of an operation
// authSchema.pre("save", async function(){
//     if(!this.isModified("password")) return;
//     this.password = await bcrypt.hash(this.password, 10)
// });

// export default mongoose.model("Auth", authSchema);


import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const authSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    address: {
        type: String,
    },

    country: {
        type: String,
    },

    state: {
        type: String,
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

}, { timestamps: true });


// HASH PASSWORD BEFORE SAVING

authSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});
// authSchema.pre("save", async function() {

//     // only hash if password was modified
//     if (!this.isModified("password")) {
//         // return next();
//     }

//     try {
//         this.password = await bcrypt.hash(this.password, 10);
//         next();

//     } catch (error) {
//         next(error);
//     }
// });

export default mongoose.model("Auth", authSchema);