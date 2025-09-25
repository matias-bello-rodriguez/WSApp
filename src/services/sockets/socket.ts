import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../../config/env';

let socket: Socket;

export const initializeSocket = (token: string): Socket => {
  // Close existing socket if it exists
  if (socket) {
    socket.close();
  }

  // Create new socket connection with auth token
  socket = io(SOCKET_URL, {
    auth: {
      token,
    },
    autoConnect: true,
  });

  // Socket event listeners
  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', reason);
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  return socket;
};

export const getSocket = (): Socket | null => {
  return socket || null;
};

export const closeSocket = (): void => {
  if (socket) {
    socket.close();
  }
};