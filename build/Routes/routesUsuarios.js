"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RoutesUsuarios = /** @class */ (function () {
    function RoutesUsuarios() {
        this.router = express_1.Router();
        this.config();
    }
    RoutesUsuarios.prototype.config = function () {
        this.router.get("/", function (req, res) { return res.send("findAll"); });
        this.router.get("/:id", function (req, res) { return res.send("Obteniendo el id " + req.params.id); });
        this.router.post("/", function (req, res) {
            var body = req.body;
            res.json({
                usuario: body
            });
        });
        this.router.put("/:id", function (req, res) { return res.send("actualizando el id " + req.params.id); });
        this.router.delete("/:id", function (req, res) { return res.send("Eliminando el id " + req.params.id); });
    };
    return RoutesUsuarios;
}());
var routesUsuarios = new RoutesUsuarios();
exports.default = routesUsuarios.router;
