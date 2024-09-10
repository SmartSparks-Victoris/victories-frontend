import AboutSection from '../_components/home-sections/about';
import ContactSection from '../_components/home-sections/contact';
// import Form from '../_components/test-form';
import Landing from '../_components/home-sections/landing';
import ServicesSection from '../_components/home-sections/services';
import { cookies } from 'next/headers';
// import { headers } from 'next/headers';
import { parseJwt } from '../_utils/auth';

export default async function Home() {
  const user = parseJwt(await cookies().get('token')?.value);
  // const headersList = headers();
  // const host = headersList.get('host'); // e.g., 'subdomain.example.com'
  // const domain = host;

  // console.log(domain);
  console.log(user);

  return (
    <>
      {/* <div>
        {user && JSON.stringify(user)}
        Hello {!user && 'Guest'}
        {user && user.name}
      </div>
      <Form /> */}

      <Landing />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

