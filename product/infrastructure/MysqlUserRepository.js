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
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../database/mysql");
const User_1 = require("../domain/User");
class MysqlUserRepository {
    /* Esta función obtiene todos los usuarios de la base de datos mediante una consulta*/
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataUser = Object.values(JSON.parse(JSON.stringify(data)));
                return dataUser.map((user) => new User_1.User(user.id, user.name, user.email, user.password));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            /*Esta función recibe un userId y realiza una consulta SQL para obtener el usuario correspondiente a ese identificador.*/
            const sql = "SELECT * FROM users WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result[0].id, result[0].name, result[0].email, result[0].password);
            }
            catch (error) {
                return null;
            }
        });
    }
    createUser(
    /*Esta función recibe los datos de un nuevo usuario y realiza una consulta SQL para insertar esos datos en la tabla users.*/
    name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO users (name, email, password ) VALUES (?, ?, ?)";
            const params = [name, email, password];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new User_1.User(result.insertId, name, email, password);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
