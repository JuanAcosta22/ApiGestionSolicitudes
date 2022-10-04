import express from 'express';
import config from './config';
import solicitudesRoutes from './routes/solicitudes.routes';

const app = express();

//Configuracion
app.set('port', config.port);

//Intermedios
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(solicitudesRoutes);

export default app;