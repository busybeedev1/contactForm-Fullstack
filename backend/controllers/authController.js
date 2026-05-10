// 

import Auth from "../models/authModel.js";

export const createUSer = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            address,
            country,
            state,
            username,
            password
        } = req.body;

        // validate first
        if (
            !firstName ||
            !lastName ||
            !email ||
            !address ||
            !country ||
            !state ||
            !username ||
            !password
        ) {
            return res.status(400).json({
                message: "Please fill out all the fields"
            });
        }

        // create user
        const newUser = await Auth.create({
            firstName,
            lastName,
            email,
            address,
            country,
            state,
            username,
            password
        });

        return res.status(201).json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        // console.log(error.message);

        // return res.status(500).json({
        //     message: "Internal Server Error"
        // });
            console.log("FULL ERROR:", error);

            return res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
