import AboutSection from '@/app/_components/home-sections/about';
import Admin from '@/app/_components/home-sections/admin';
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

const results = [
  {
    id: 1,
    urgent: 1,
    status: 'inProgress', // "open", "inProgress", "completed"
    status_id: 2,
    title: 'Order #1234',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'John Doe',
    date: '2024-09-11',
    sentiment: 'positive',
    degree_of_sentiment: 85,
  },
  {
    id: 2,
    urgent: 4,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Feedback #5678',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Jane Smith',
    date: '2024-09-10',
    sentiment: 'neutral',
    degree_of_sentiment: 50,
  },
  {
    id: 3,
    urgent: 10,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Person Update #2345',
    category: 'persons', // "orders", "feedbacks", "persons"
    category_id: 3,
    admin: 'Alice Johnson',
    date: '2024-09-09',
    sentiment: 'negative',
    degree_of_sentiment: 20,
  },
  {
    id: 4,
    urgent: 1,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Order #4321',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'Bob Brown',
    date: '2024-09-08',
    sentiment: 'positive',
    degree_of_sentiment: 90,
  },
  {
    id: 5,
    urgent: 1,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Feedback #8765',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Charlie Green',
    date: '2024-09-07',
    sentiment: 'negative',
    degree_of_sentiment: 30,
  },
];

const recent = [
  {
    id: 1,
    urgent: 1,
    status: 'inProgress', // "open", "inProgress", "completed"
    status_id: 2,
    title: 'Order #1234',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'John Doe',
    date: '2024-09-11',
    sentiment: 'positive',
    degree_of_sentiment: 85,
  },
  {
    id: 2,
    urgent: 4,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Feedback #5678',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Jane Smith',
    date: '2024-09-10',
    sentiment: 'neutral',
    degree_of_sentiment: 50,
  },
  {
    id: 3,
    urgent: 10,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Person Update #2345',
    category: 'persons', // "orders", "feedbacks", "persons"
    category_id: 3,
    admin: 'Alice Johnson',
    date: '2024-09-09',
    sentiment: 'negative',
    degree_of_sentiment: 20,
  },
];

export default function Home() {
  const user = parseJwt(cookies().get('token')?.value);
  console.log(user);

  if (user) {
    if (user.role === 'admin') {
      return (
        <>
          <Admin results={results} recent={recent} />
        </>
      );
    }

    return (
      <>
        <Owner admins={admins} user={user} />
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

