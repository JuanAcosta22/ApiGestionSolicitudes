
export const queries = {
    getAllSolicitudes: 'select * from Solicitud order by IDSolicitud desc'
    ,addNewSolicitud: 
    'insert into Solicitud ('+
    'Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, '+
    'TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)' +
    'values (SUBSTRING((SELECT TipoSolicitud from TipoSolicitud where IDTipo=@IdTipoSolicitud),1,3) + (SELECT (CONVERT(VARCHAR,GETDATE(),112) + CONVERT(VARCHAR,(SELECT MAX(IDSolicitud) FROM Solicitud)+1))), '+
    '@Descripcion, GETDATE(), @FechaRespuesta, @IDResponsable, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, @IDEstado)'
    ,getSolicitudById: 'select * from Solicitud where IDSolicitud = @id'
    ,deleteSolicitudById: 'delete from Solicitud where IDSolicitud = @id'
    ,updateSolicitudAsignadaById: 'update Solicitud set IDResponsable = @IDResponsable, IDEstado = 2 where IDSolicitud = @id'
}