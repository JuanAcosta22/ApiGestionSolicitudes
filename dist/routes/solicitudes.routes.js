"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _solicitudes = require("../controllers/solicitudes.controllers");

var router = (0, _express.Router)(); //Obtener solicitudes

router.get('/solicitudes', _solicitudes.getSolicitudes); //Crear solicitudes

router.post('/solicitudes', _solicitudes.addSolicitud); //Obtener solicitudes por id

router.get('/solicitudes/:id', _solicitudes.getSolicitudById); //Eliminar solicitudes

router["delete"]('/solicitudes/:id', _solicitudes.deleteSolicitudById); //Editar solicitud

router.put('/solicitudes/:id', _solicitudes.updateSolicitudAsignadaById); //Obtener tipos de solicitudes

router.get('/tipoSolicitud', _solicitudes.getTipoSolicitud);
var _default = router;
exports["default"] = _default;