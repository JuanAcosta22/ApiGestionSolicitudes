import { Router } from 'express';
import { getSolicitudes, addSolicitud, getSolicitudById ,deleteSolicitudById, updateSolicitudAsignadaById, } from '../controllers/solicitudes.controllers';

const router = Router()

//Obtener solicitudes
router.get('/solicitudes', getSolicitudes);

//Crear solicitudes
router.post('/solicitudes', addSolicitud);

//Obtener solicitudes por id
router.get('/solicitudes/:id', getSolicitudById);

//Eliminar solicitudes
router.delete('/solicitudes/:id', deleteSolicitudById);

//Editar solicitud
router.put('/solicitudes/:id', updateSolicitudAsignadaById);

export default router;