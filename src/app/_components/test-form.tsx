'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSocket } from '../_contexts/socket-context';

const Form = () => {
  const { connectSocket, socket, disconnectSocket } = useSocket();
  console.log('TT');
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        credentials: 'include',
      });
      const result = await res.json();
      const user = result.user;
      console.log(user);
      connectSocket(user.id);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  }

  async function handleLogout() {
    try {
      await fetch('http://localhost:3001/logout', {
        method: 'POST',
        credentials: 'include',
      });
      alert('You have been logged out.');
      socket.emit('logout', 1);
      // disconnectSocket();
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging out.');
    }
  }

  function handleButtonClick() {
    console.log(socket);
    socket.emit('message', { message: 'Hello', id: 1 });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="border-2 border-solid border-green-400"
          name="email"
        />
        <input
          type="text"
          className="border-2 border-solid border-green-400"
          name="password"
        />
        <input type="submit" />
      </form>

      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleButtonClick}>Change</button>
    </>
  );
};

export default Form;

