"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
mysql_1.default.instance;
router.get('/tipocambio', (req, res) => {
    const query = `
        select *
        from tab_tipo_cambio`;
    mysql_1.default.ejecutarQuery(query, (err, islas) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                data: islas,
            });
        }
    });
});
router.get('/tipocambio/:fecha', (req, res) => {
    const escapedFecha = mysql_1.default.instance.cnn.escape(req.params.fecha);
    const query = `
        select *
        from tab_tipo_cambio 
        where FECHATIPOCAMBIO = ${escapedFecha}`;
    mysql_1.default.ejecutarQuery(query, (err, isla) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            });
        }
        else {
            res.json({
                ok: true,
                data: isla[0],
            });
        }
    });
});
module.exports = router;
//# sourceMappingURL=tabTipoCambio.js.map