import React from 'react';

const Admin = ({ admin }) => {
  return (
    <section>
      <div key={admin.id} className="flex">
        <div>
          <img src="" alt="" />
          {admin.img}
        </div>
        <div>
          <p>{admin.name}</p>
          <p>{admin.time}</p>
        </div>
        <div>
          <p>{admin.tickets}</p>
        </div>
        <div>
          <p>{admin.online ? 'Online Now!' : 'Offline'}</p>
        </div>
        <div>
          <p>ID: {admin.id}</p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;

