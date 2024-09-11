import AboutSection from '@/app/_components/home-sections/about';
import ContactSection from '@/app/_components/home-sections/contact';
// import Form from '../_components/test-form';
import Landing from '@/app/_components/home-sections/landing';
import ServicesSection from '@/app/_components/home-sections/services';
import { cookies } from 'next/headers';
// import { headers } from 'next/headers';
import { parseJwt } from '@/app/_utils/auth';

export default function Home() {
  const user = parseJwt(cookies().get('token')?.value);
  console.log(user);

  if (user) {
    return (
      <>
        <h2>User</h2>
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

