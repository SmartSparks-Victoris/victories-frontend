import AboutSection from '@/app/_components/home-sections/about';
import ContactSection from '@/app/_components/home-sections/contact';
// import Form from '../_components/test-form';
import Landing from '@/app/_components/home-sections/landing';
import Owner from '@/app/_components/home-sections/owner';
import ServicesSection from '@/app/_components/home-sections/services';
import { cookies } from 'next/headers';
// import { headers } from 'next/headers';
import { parseJwt } from '@/app/_utils/auth';

const admins = [
  {
    img: 'http',
    id: 1,
    name: 'John Doe',
    time: '14/8/2024',
    tickets: 250,
    online: true,
  },
  {
    img: 'http',
    id: 2,
    name: 'Jane Doe',
    time: '13/8/2024',
    tickets: 150,
    online: true,
  },
  {
    img: 'http',
    id: 3,
    name: 'Doe Joe',
    time: '4/8/2024',
    tickets: 270,
    online: false,
  },
];

export default function Home() {
  const user = parseJwt(cookies().get('token')?.value);
  console.log(user);

  if (user) {
    return (
      <>
        <Owner admins={admins} />
      </>
    );
  }

  return (
    <>
      <Landing />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

