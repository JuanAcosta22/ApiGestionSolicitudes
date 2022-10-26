import { getConnection, sql, queries } from '../database';


export const getSolicitudes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllSolicitudes);    
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const addSolicitud = async (req, res) => {
    const { Descripcion, IDResponsable, 
        CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud } = req.body

    if ( Descripcion == null || CorreoSolicitante == null || NombreSolicitante == null 
        || ApellidoSolicitante == null || TelefonoSolicitante == null || NombreEmpresa == null ||
        IdTipoSolicitud == null ){
            return res.status(400).json({msg:'Información incompleta o erronea, validar los datos enviados'})
        }

    try {
        const pool = await getConnection()
        await pool.request()
        .input('Descripcion', sql.VarChar, Descripcion)
        .input('IDResponsable', sql.Int, IDResponsable)
        .input('CorreoSolicitante', sql.VarChar, CorreoSolicitante)
        .input('NombreSolicitante', sql.VarChar, NombreSolicitante)
        .input('ApellidoSolicitante', sql.VarChar, ApellidoSolicitante)
        .input('TelefonoSolicitante', sql.VarChar, TelefonoSolicitante)
        .input('NombreEmpresa', sql.VarChar, NombreEmpresa)
        .input('IdTipoSolicitud', sql.Int, IdTipoSolicitud)
        .query(queries.addNewSolicitud)
    
        res.status(201).json({ Descripcion, IDResponsable, 
            CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getSolicitudById = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.getSolicitudById);    
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteSolicitudById = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().input("Id", id).query(queries.deleteSolicitudById);    
        res.status(200).json('Se elimino el registro de forma exitosa '+ { result });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateSolicitud = async (req, res) => {
    const { Descripcion, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, 
        TelefonoSolicitante, NombreEmpresa, Responsable, FechaRespuesta, Nombre  } = req.body
    
        try {
            const id = req.params.id;
            console.log(id);
            const pool = await getConnection()
            await pool.request()
            .input('id', sql.VarChar, id)
            .input('Descripcion', sql.VarChar, Descripcion)
            .input('CorreoSolicitante', sql.VarChar, CorreoSolicitante)
            .input('NombreSolicitante', sql.VarChar, NombreSolicitante)
            .input('ApellidoSolicitante', sql.VarChar, ApellidoSolicitante)
            .input('TelefonoSolicitante', sql.VarChar, TelefonoSolicitante)
            .input('NombreEmpresa', sql.VarChar, NombreEmpresa)
            .query(queries.updateSolicitud)

            res.status(201).json( 'Actualización exitosa' );
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};

export const getTipoSolicitud = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTipoSolicitud);    
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getResponsable = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getResponsable);    
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEstado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getEstado);    
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};