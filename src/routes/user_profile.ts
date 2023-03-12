const express = require("express");
const router = express.Router();
const User = require("../models/user_profile");
const ObjectId = require("mongoose").Types.ObjectId;

const userProfile = async (req: any, res: any, next: any) => {
    let userProfile;

    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Error: invalid user id"
            });
        }

        userProfile = await User.findById(req.params.id);
        if(!userProfile) {
            return res.status(404).json({
                message: "Error: User not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: `Error: Server internal error ${error}`
        });
    }

    res.user = userProfile;
    next();
}

//Add user
router.post("/", async (req: any, res: any) => {
    const userProfile = new User({
        name: req.body.name,
        emailId: req.body.emailId
    });

    try {
        const newUser = await userProfile.save();
        res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({
            message: `Error: Server internal error ${error}`
        });
    }
});

//Get User
router.get("/:id", userProfile, (req: any, res: any) => {
    res.status(200).json(res.user);
});

//Update user
router.patch("/:id", userProfile, async (req: any, res: any) => {
    if(req.body.name) {
        res.user.name = req.body.name;
    }
    if(req.body.emailId) {
        res.user.emailId = req.body.emailId;
    }

    try {
        const updateUserProfile = await res.user.save();
        res.status(200).json(updateUserProfile);
    } catch (error) {
        res.status(500).json({
            message: `Error: Server internal error ${error}`
        });
    }
});

//Delete user
router.delete("/:id", userProfile, async (req: any, res: any) => {
    try {
        await res.user.deleteOne();
        res.status(200).json({
            message: "Delete successful"
        });
    } catch (error) {
        res.status(500).json({
            message: `Error: Server internal error ${error}`
        });
    }
});

module.exports = router;

