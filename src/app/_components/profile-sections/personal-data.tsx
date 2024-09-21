import Admins from './admins';
import Customers from './customers';
import ImageUploadForm from './image-upload';
import PasswordForm from './password-form';
import PersonalInfoForm from './personal-info-form';
import React from 'react';

const PersonalData = ({ user }) => {
  const data = {
    fname: user.name.split(' ')[0],
    lname: user.name.split(' ')[1],
    email: user.email,
  };

  console.log(user);
  return (
    <section>
      <h2 className="text-tertiaryButton text-[20px] font-bold mb-2">
        Profile
      </h2>
      <p className="text-tertiaryButton text-[14px] mb-3">
        Manage employee data and organize their roles to ensure optimal
        performance and customer support.
      </p>
      <div>
        <ImageUploadForm
          initialImageUrl="/images/default.png"
          userId={user.id}
        />
      </div>
      <h2 className="text-tertiaryButton text-[20px] font-bold mb-2 mt-3">
        Personal Info
      </h2>

      <div className="flex flex-col w-[100%] gap-4">
        <PersonalInfoForm data={data} />
        <PasswordForm />
      </div>
      {user && user.role === 'owner' && (
        <div>
          <Admins />
        </div>
      )}
      {user && user.role === 'admin' && (
        <div>
          <Customers />
        </div>
      )}
    </section>
  );
};

export default PersonalData;

