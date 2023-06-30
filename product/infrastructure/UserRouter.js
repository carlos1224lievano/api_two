"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", dependencies_2.getAllUserController.run.bind(dependencies_2.getAllUserController));
exports.userRouter.get("/:id", dependencies_3.getByIdUserController.run.bind(dependencies_3.getByIdUserController));
exports.userRouter.post("/", dependencies_1.createUserController.run.bind(dependencies_1.createUserController));
