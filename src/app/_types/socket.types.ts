import { User, UserId } from './user.types';

import { ReactNode } from 'react';
import { Socket } from 'socket.io-client';

export interface SocketComponentProps {
  user: User;
}

export interface SocketProviderProps {
  children: ReactNode;
}

export interface SocketContextType {
  connectSocket: (id: UserId) => void;
  disconnectSocket: () => void;
  socket: Socket;
}

