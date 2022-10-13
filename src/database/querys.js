
export const queries = {
    getAllSolicitudes: 'select * from Solicitud order by IDSolicitud desc'
    ,addNewSolicitud: 
    'insert into Solicitud ('+
    'Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, '+
    'TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)' +
    'values (SUBSTRING((SELECT TipoSolicitud from TipoSolicitud where IDTipo=@IdTipoSolicitud),1,3) + select(CONVERT(VARCHAR,GETDATE(),112) + CONVERT(VARCHAR,DATEPART(hh, getdate()))+CONVERT(VARCHAR,DATEPART(n, getdate()))+CONVERT(VARCHAR,DATEPART(s, getdate()))+CONVERT(VARCHAR,DATEPART(ns, getdate()))), '+
    '@Descripcion, GETDATE(), NULL, NULL, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, 1)'
    ,getSolicitudById: 'select * from Solicitud where IDSolicitud = @id'
    ,deleteSolicitudById: 'delete from Solicitud where IDSolicitud = @id'
    ,updateSolicitudAsignadaById: 'update Solicitud set IDResponsable = @IDResponsable, IDEstado = 2 where IDSolicitud = @id'
}