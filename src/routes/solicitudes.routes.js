import { Router } from 'express';
import { getSolicitudes, addSolicitud, getSolicitudById ,deleteSolicitudById, updateSolicitud, getTipoSolicitud, getResponsable, getEstado } from '../controllers/solicitudes.controllers';

const router = Router()

//Obtener solicitudes
router.get('/solicitudes', getSolicitudes);

//Crear solicitudes
router.post('/solicitud', addSolicitud);

//Obtener solicitudes por id
router.get('/solicitud/:id', getSolicitudById);

//Eliminar solicitud
router.delete('/solicitud/:id', deleteSolicitudById);

//Editar solicitud
router.put('/solicitud/:id', updateSolicitud);

//Obtener tipos de solicitudes
router.get('/tipoSolicitud', getTipoSolicitud);

//Obtener tipos responsable
router.get('/responsable', getResponsable);

//Obtener tipos estado
router.get('/nombre', getEstado);

export default router;