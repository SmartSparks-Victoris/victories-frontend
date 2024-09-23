import { API_URL } from '@/app/_data/base';
import { cookies } from 'next/headers';
import React from 'react';
import Admins from './admins';
import { wait } from '@/app/_utils/test';

const AdminsData = async () => {
  let admins;
  const token = cookies().get('token');
  try {
    const res = await fetch(`${API_URL}/api/admin/admins`, {
      next: { revalidate: 0 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if content-type is JSON
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const result = await res.json();
      admins = result;
      admins = admins
        .filter((admin) => admin.role !== 'owner')
        .sort((a, b) => b.countOfTickets - a.countOfTickets)
        .slice(0, 3);

      console.log(result);
    } else {
      console.log('Response is not in JSON format or empty');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  // await wait(5);

  return <Admins admins={admins} token={token} />;
};

export default AdminsData;

