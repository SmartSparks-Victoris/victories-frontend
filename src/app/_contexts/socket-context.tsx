'use client';

import React, { createContext, useContext, useState } from 'react';
import { SocketContextType, SocketProviderProps } from '../_types/socket.types';
import { getSocket, initSocket } from '../_lib/socket';

import { UserId } from '../_types/user.types';

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);

  const connectSocket = (id: UserId) => {
    const socket = initSocket(id);
    if (socket && !isConnected) {
      socket.connect();
      setIsConnected(true);
    }
  };

  const disconnectSocket = () => {
    const socket = getSocket();
    if (socket && isConnected) {
      socket.disconnect();
      setIsConnected(false);
    }
  };

  return (
    <SocketContext.Provider
      value={{ connectSocket, disconnectSocket, socket: getSocket() }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

