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
exports.CreateUserUseCase = void 0;
/* un caso de uso (use case) relacionado con la creación de usuarios.*/
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    /*Esta función run toma tres argumentos de tipo cadena (name, email y password) y
    devuelve una promesa que eventualmente resuelve en un objeto User recién creado o en null.*/
    run(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.createUser(name, email, password);
                return user;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
