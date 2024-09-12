import CustomLink from '../navigation/custom-link';
import Link from 'next/link';
import React from 'react';

const Owner = ({ admins }) => {
  return (
    <section>
      <h2>Welcome Owner!</h2>
      <p>
        Connect with your customers faster and more effectively with our
        all-in-one platform
      </p>
      <div>
        <div>Chart1</div>
        <div>Chart2</div>
        <div>Chart3</div>
      </div>
      <div>
        <h3>Admins overview</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => {
              return (
                <tr key={admin.id}>
                  <td>{admin.name}</td>
                  <td>{admin.tickets}</td>
                  <td>
                    <CustomLink href={`/admins/${admin.id}`}>Link</CustomLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Owner;

