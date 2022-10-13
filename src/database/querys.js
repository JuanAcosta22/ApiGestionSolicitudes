

export const queries = {
    getAllSolicitudes: 'select * from Solicitud order by IDSolicitud desc'
    ,addNewSolicitud: 
    'insert into Solicitud ('+
    'Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, '+
    'TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)' +
    'values (SUBSTRING((SELECT TipoSolicitud from TipoSolicitud where IDTipo=@IdTipoSolicitud),1,3) + (SELECT (CONVERT(VARCHAR,GETDATE(),112)) + (SELECT (CONVERT(VARCHAR,DATEPART(hh, getdate())))) + (SELECT(CONVERT(VARCHAR,DATEPART(n, getdate())))) + (SELECT(CONVERT(VARCHAR,DATEPART(s, getdate())))) + (SELECT(CONVERT(VARCHAR,DATEPART(ms, getdate())))) ), '+
    '@Descripcion, GETDATE(), NULL, NULL, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, 1)'
    ,getSolicitudById: 'select * from Solicitud where IDSolicitud = @id'
    ,deleteSolicitudById: 'delete from Solicitud where IDSolicitud = @id'
    ,updateSolicitudAsignadaById: 'update Solicitud set IDResponsable = @IDResponsable, IDEstado = 2 where IDSolicitud = @id'
}

