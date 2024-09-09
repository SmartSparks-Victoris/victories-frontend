import { Socket, io } from 'socket.io-client';

import { UserId } from '../_types/user.types';

export let socket: Socket;

export const initSocket = (id: UserId) => {
  console.log('ID IS: ', id);
  if (!socket) {
    socket = io('http://localhost:3002', { autoConnect: false });

    socket.on('message', async (data) => {
      console.log('Message from server:', data);
    });

    socket.on('logout', () => {
      socket.disconnect();
    });

    console.log('???');
    socket.emit('register', id);
  }
  if (!socket.connected) {
    socket.connect();
    console.log('Socket connected');

    // Emit registration or any other event after connection
    socket.emit('register', id);
  }
  return socket;
};

export const getSocket = () => socket;

