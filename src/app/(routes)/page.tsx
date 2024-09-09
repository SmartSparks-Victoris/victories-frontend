import Form from '../_components/test-form';
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
      <div>
        {user && JSON.stringify(user)}
        Hello {!user && 'Guest'}
        {user && user.name}
      </div>
      <Form />
    </>
  );
}

