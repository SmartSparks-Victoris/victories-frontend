import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="text-center">
          <h3>Contact</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className="flex sm:flex-row flex-col gap-16 justify-center items-center">
          <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
          <ul className="list-disc">
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 City Country</li>
            <li>Email:1234t@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

