

export const queries = {
     getAllSolicitudes: 
     `SELECT * FROM Solicitud order by IDSolicitud asc`
    ,addNewSolicitud: 
    `INSERT INTO Solicitud 
    (Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)
    VALUES 
    ('MVM' + SUBSTRING((SELECT TipoSolicitud FROM TipoSolicitud WHERE IDTipo=@IdTipoSolicitud),1,1) + '-' + (SELECT (CONVERT(VARCHAR,GETDATE(),112)) + (SELECT (CONVERT(VARCHAR,DATEPART(hh, GETDATE())))) 
    + (SELECT(CONVERT(VARCHAR,DATEPART(n, GETDATE())))) + (SELECT(CONVERT(VARCHAR,DATEPART(s, GETDATE())))) + (SELECT(CONVERT(VARCHAR,DATEPART(ms, GETDATE())))) ),
    @Descripcion, (SELECT CONVERT(VARCHAR, GETDATE(), 23)), NULL, NULL, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, 1)`
    ,getSolicitudById: 
    `SELECT * FROM Solicitud WHERE IDSolicitud = @id`
    ,deleteSolicitudById: 
    `DELETE FROM Solicitud WHERE IDSolicitud = @id`
    ,updateSolicitud: 
    `UPDATE Solicitud 
    SET Descripcion=@Descripcion, CorreoSolicitante=@CorreoSolicitante, 
    NombreSolicitante=@NombreSolicitante, ApellidoSolicitante=@ApellidoSolicitante, 
    TelefonoSolicitante=@TelefonoSolicitante, NombreEmpresa=@NombreEmpresa where IDSolicitud = @id`
    ,getTipoSolicitud: 
    `SELECT * FROM TipoSolicitud`
    ,getEstado: 
    `SELECT * FROM Estado`
    ,getResponsable: 
    `SELECT * FROM Responsable`
}

