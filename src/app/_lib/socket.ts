import { Socket, io } from 'socket.io-client';

import { UserId } from '../_types/user.types';
import { revalidateLogin } from '../_actions/login';

export let socket: Socket;

export const initSocket = (id: UserId) => {
  console.log('ID IS: ', id);
  if (!socket) {
    socket = io('http://localhost:3002', { autoConnect: false });

    socket.on('message', async (data) => {
      console.log('Message from server:', data);
    });

    socket.on('logout', async () => {
      await revalidateLogin();
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

