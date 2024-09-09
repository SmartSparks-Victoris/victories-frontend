'use client';

import { SocketComponentProps } from '../_types/socket.types';
import { useEffect } from 'react';
import { useSocket } from '../_contexts/socket-context';

export default function SocketComponent({ user }: SocketComponentProps) {
  const { connectSocket } = useSocket();

  useEffect(() => {
    if (user) {
      console.log('user exists', user);
      if (connectSocket) {
        connectSocket(user.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return null;
}

