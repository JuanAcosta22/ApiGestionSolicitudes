import sql from 'mssql';

 const dbConfig = {
   user: 'jdaqui',
   password: 'Valeteamo22*',
   server: 'localhost', 
   database: 'gestionsolicitudes',
   options: { 
     trustServerCertificate: true,
   }
    //  user: 'jovenesmvm',
    //  password: '0^618Bjt37y@',
    //  database: 'gestionsolicitudes2',
    //  server: 'gestionsolicitudes2.database.windows.net',
    //  pool: {
    //    max: 10,
    //    min: 0,
    //    idleTimeoutMillis: 30000
    //  },
    //  options: {
    //    encrypt: true,
    //    trustServerCertificate: false
    //  }
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbConfig);
    return pool;
  } catch (error) {
      console.log('Error al conectar con la base de datos', error);
    }
};

export { sql };