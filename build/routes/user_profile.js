"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const User = require("../models/user_profile");
const userProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userProfile;
    try {
        userProfile = yield User.findById(req.params.id);
        if (!userProfile) {
            return res.send(404).json({
                message: "Error: User not found"
            });
        }
    }
    catch (error) {
        return res.send(500).json({
            message: "Error: Server internal error"
        });
    }
    res.user = userProfile;
    next();
});
//Add user
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userProfile = new User({
        name: req.body.name,
        email: req.body.emailId
    });
    try {
        const newUser = yield userProfile.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        return res.send(500).json({
            message: "Error: Server internal error"
        });
    }
}));
//Get User
router.get("/:id", userProfile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(res.user);
}));
//Update user
router.patch("/:id", userProfile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.name) {
        res.user.name = req.body.name;
    }
    if (req.body.email) {
        res.user.email = req.body.email;
    }
    try {
        const updateUserProfile = yield res.user.save();
        res.status(204).json(updateUserProfile);
    }
    catch (error) {
        res.status(500).json({
            message: "Error: Server internal error"
        });
    }
}));
//Delete user
router.delete("/:id", userProfile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.user.deleteOne();
        res.status(204).json({
            message: "Delete successful"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error: Server internal error"
        });
    }
}));
module.exports = router;
