import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();
MySQL.instance;

router.get('/tipocambio', (req: Request, res: Response) => {
  const query = `
        select *
        from tab_tipo_cambio`;

  MySQL.ejecutarQuery(query, (err: any, islas: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        error: err,
      });
    } else {
      res.json({
        ok: true,
        data: islas,
      });
    }
  });
});

router.get('/tipocambio/:fecha', (req: Request, res: Response) => {
  const escapedFecha = MySQL.instance.cnn.escape(req.params.fecha);
  const query = `
        select *
        from tab_tipo_cambio 
        where FECHATIPOCAMBIO = ${escapedFecha}`;

  MySQL.ejecutarQuery(query, (err: any, isla: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        error: err,
      });
    } else {
      res.json({
        ok: true,
        data: isla[0],
      });
    }
  });
});

module.exports = router;
