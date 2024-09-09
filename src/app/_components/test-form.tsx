'use client';

import React from 'react';

const Form = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/login', {
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
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging out.');
    }
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
    </>
  );
};

export default Form;

