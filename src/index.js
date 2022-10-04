import app from './app';

app.listen(app.get('port'));

console.log('Conexion exitosa al servidor por el puerto', app.get('port'));