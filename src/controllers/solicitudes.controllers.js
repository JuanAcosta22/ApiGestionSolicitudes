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
    const { Descripcion, FechaRespuesta, IDResponsable, 
        CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado } = req.body

    if ( Descripcion == null || CorreoSolicitante == null || NombreSolicitante == null 
        || ApellidoSolicitante == null || TelefonoSolicitante == null || NombreEmpresa == null ||
        IdTipoSolicitud == null || IDEstado == null ){
            return res.status(400).json({msg:'Información incompleta o erronea, validar los datos enviados'})
        }

    try {
        const pool = await getConnection()
        await pool.request()
        .input('Descripcion', sql.VarChar, Descripcion)
        .input('FechaRespuesta', sql.Date, FechaRespuesta)
        .input('IDResponsable', sql.Int, IDResponsable)
        .input('CorreoSolicitante', sql.VarChar, CorreoSolicitante)
        .input('NombreSolicitante', sql.VarChar, NombreSolicitante)
        .input('ApellidoSolicitante', sql.VarChar, ApellidoSolicitante)
        .input('TelefonoSolicitante', sql.VarChar, TelefonoSolicitante)
        .input('NombreEmpresa', sql.VarChar, NombreEmpresa)
        .input('IdTipoSolicitud', sql.Int, IdTipoSolicitud)
        .input('IDEstado', sql.Int, IDEstado)
        .query(queries.addNewSolicitud)
    
        res.status(201).json({ Descripcion, FechaRespuesta, IDResponsable, 
            CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado });
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

export const updateSolicitudAsignadaById = async (req, res) => {
    const { IDResponsable } = req.body;
    const { id } = req.params;

    if ( IDResponsable == null ){
            return res.status(400).json({msg:'Información incompleta o erronea, validar los datos enviados'})
        }
    
        try {
            const pool = await getConnection()
            const result = await pool.request()
            .input("Id", sql.Int, id)
            .input('IDResponsable', sql.Int, IDResponsable)
            .query(queries.updateSolicitudAsignadaById)

            res.status(201).json( 'Actualización exitosa' );
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};
