"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdUserController = exports.getAllUserController = exports.createUserController = exports.getByIdUserUseCase = exports.getAllUserUseCase = exports.createUserUseCase = exports.mysqlUserRepository = void 0;
const CreateUserUseCase_1 = require("../application/CreateUserUseCase");
const GetAllUserUseCase_1 = require("../application/GetAllUserUseCase");
const GetByIdUserUseCase_1 = require("../application/GetByIdUserUseCase");
const CreateUserController_1 = require("./controllers/CreateUserController");
const GetAllUserController_1 = require("./controllers/GetAllUserController");
const GetByIdUserController_1 = require("./controllers/GetByIdUserController");
const MysqlUserRepository_1 = require("./MysqlUserRepository");
exports.mysqlUserRepository = new MysqlUserRepository_1.MysqlUserRepository();
exports.createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(exports.mysqlUserRepository);
exports.getAllUserUseCase = new GetAllUserUseCase_1.GetAllUserUseCase(exports.mysqlUserRepository);
exports.getByIdUserUseCase = new GetByIdUserUseCase_1.GetByIdUserUseCase(exports.mysqlUserRepository);
//_______________________________________________________________________________
exports.createUserController = new CreateUserController_1.CreateUserController(exports.createUserUseCase);
exports.getAllUserController = new GetAllUserController_1.GetAllUserController(exports.getAllUserUseCase);
exports.getByIdUserController = new GetByIdUserController_1.GetByIdUserController(exports.getByIdUserUseCase);
