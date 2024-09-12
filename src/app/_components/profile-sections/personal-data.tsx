import Admins from './admins';
import ImageUploadForm from './image-upload';
import PasswordForm from './password-form';
import PersonalInfoForm from './personal-info-form';
import React from 'react';

const data = {
  fname: 'Amr',
  lname: 'Shoukry',
  email: 'shoukryworkamr1@gmail.com',
};

const PersonalData = () => {
  return (
    <section>
      <h2>Profile</h2>
      <p>
        Manage employee data and organize their roles to ensure optimal
        performance and customer support.
      </p>
      <div>
        <ImageUploadForm />
      </div>
      <div>
        <PersonalInfoForm data={data} />
      </div>
      <div>
        <PasswordForm />
      </div>
      <div>
        <Admins />
      </div>
    </section>
  );
};

export default PersonalData;

