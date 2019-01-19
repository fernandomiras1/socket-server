import { Socket } from 'socket.io';
import socketIO from 'socket.io';

// Creamos la configuracion y las acciones de cada una de las acciones que van  a ser disparadas desde el  io.on ( emiciones )


export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    
}


// Escuchar Mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {
    cliente.on('mensaje', (payload: {de: string, cuerpo: string }) => {
        console.log('Mensaje Recibido', payload);
 // Estoy emitiendo a todos los usuarios conetados que hay un nuevo mensaje
        io.emit('mensaje-nuevo', payload);
    });
}