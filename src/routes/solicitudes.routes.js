import { Router } from 'express';
import { getSolicitudes, addSolicitud, getSolicitudById ,deleteSolicitudById, updateSolicitudAsignadaById, } from '../controllers/solicitudes.controllers';

const router = Router()

//Obtener solicitudes
router.get('/api/solicitudes', getSolicitudes);

//Crear solicitudes
router.post('/api/solicitudes', addSolicitud);

//Obtener solicitudes por id
router.get('/api/solicitudes/:id', getSolicitudById);

//Eliminar solicitudes
router.delete('/api/solicitudes/:id', deleteSolicitudById);

//Editar solicitud
router.put('/api/solicitudes/:id', updateSolicitudAsignadaById);

export default router;