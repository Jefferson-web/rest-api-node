"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routesUsuarios_1 = __importDefault(require("./Routes/routesUsuarios"));
var body_parser_1 = __importDefault(require("body-parser"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // parse application/x-www-form-urlencoded
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(body_parser_1.default.json());
    };
    Server.prototype.routes = function () {
        this.app.use("/api/usuarios", routesUsuarios_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'));
        console.log('El puerto ' + this.app.get('port') + ' esta habilitado.');
    };
    return Server;
}());
var server = new Server();
server.start();
