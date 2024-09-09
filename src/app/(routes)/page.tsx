import Form from '../_components/test-form';
import { cookies } from 'next/headers';
import { parseJwt } from '../_utils/auth';

export default function Home() {
  const user = parseJwt(cookies().get('token')?.value);
  return (
    <>
      <div>
        Hello {!user && 'Guest'}
        {user && user.name}
      </div>
      <Form />
    </>
  );
}

