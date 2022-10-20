

export const queries = {
    getAllSolicitudes: 'SELECT * FROM Solicitud'
    ,addNewSolicitud: 
    'INSERT INTO Solicitud ('+
    'Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, '+
    'TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)' +
    'VALUES (SUBSTRING((SELECT TipoSolicitud FROM TipoSolicitud WHERE IDTipo=@IdTipoSolicitud),1,3) + (SELECT (CONVERT(VARCHAR,GETDATE(),112)) + (SELECT (CONVERT(VARCHAR,DATEPART(hh, GETDATE())))) + (SELECT(CONVERT(VARCHAR,DATEPART(n, GETDATE())))) + (SELECT(CONVERT(VARCHAR,DATEPART(s, GETDATE())))) + (SELECT(CONVERT(VARCHAR,DATEPART(ms, GETDATE())))) ), '+
    '@Descripcion, (SELECT CONVERT(VARCHAR, GETDATE(), 23)), NULL, NULL, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, 1)'
    ,getSolicitudById: 'SELECT * FROM Solicitud WHERE IDSolicitud = @id'
    ,deleteSolicitudById: 'DELETE FROM Solicitud WHERE IDSolicitud = @id'
    ,updateSolicitudAsignadaById: 'UPDATE Solicitud SET IDResponsable = @IDResponsable, IDEstado = 2 WHERE IDSolicitud = @id'
    ,getTipoSolicitud: 'SELECT * FROM TipoSolicitud'
}

