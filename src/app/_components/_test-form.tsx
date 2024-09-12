'use client';

import * as z from 'zod';

import React, { useTransition } from 'react';

import loginSchema from '../_schemas/login';
import { revalidateLogin } from '../_actions/login';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSocket } from '../_contexts/socket-context';
import { zodResolver } from '@hookform/resolvers/zod';

const fakeApiCall = (data: FormData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Submitted: ${JSON.stringify(data)}`);
    }, 2000); // Real async delay for the fake API
  });
};

const Form = () => {
  const [isPending, startTransition] = useTransition();

  const { connectSocket, socket, disconnectSocket } = useSocket();
  console.log('TT');
  const router = useRouter();
  async function handleLoginSuccess(data) {
    startTransition(async () => {
      const reslt = await fakeApiCall(data); // Real async function
      try {
        const res = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
          credentials: 'include',
        });
        const result = await res.json();
        const user = result.user;
        console.log(user);
        connectSocket(user.id);
        await revalidateLogin();
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form.');
      }
    });
  }

  function handleLoginFailure(errors: any) {
    console.error('Error:', errors);
    alert('Invalid email or password.');
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
    await revalidateLogin();
  }

  function handleButtonClick() {
    console.log(socket);
    socket.emit('message', { message: 'Hello', id: 1 });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}>
        <div>
          <input
            type="text"
            className={`border-2 border-solid border-green-400 ${
              isPending ? 'bg-green-400' : 'bg-white'
            }`}
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="text"
            className={`border-2 border-solid border-green-400 ${
              isPending ? 'bg-green-400' : 'bg-white'
            }`}
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <input type="submit" />
      </form>

      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleButtonClick}>Change</button>
    </>
  );
};

export default Form;

