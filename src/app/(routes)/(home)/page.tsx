import Admin from '@/app/_components/home-sections/admin';
import ContactSection from '@/app/_components/home-sections/contact';
import NormalSection from '@/app/_components/guest-sections/normal-section';
import Owner from '@/app/_components/home-sections/owner';
import WhiteSection from '@/app/_components/guest-sections/white-section';
import { cookies } from 'next/headers';
import { parseJwt } from '@/app/_utils/auth';

const results = [
  {
    Id: 1,
    Urgent: 1,
    State: 'inProgress', // "open", "inProgress", "completed"
    StateId: 2,
    Title: 'Order #1234',
    Category: 'orders', // "orders", "feedbacks", "persons"
    CategoryId: 1,
    Admin: 'John Doe',
    Date: '2024-09-11',
    Sentiment: 'positive',
    SentimentDegree: 85,
    CustomerId: 3,
  },
  {
    Id: 2,
    Urgent: 0,
    State: 'completed', // "open", "inProgress", "completed"
    StateId: 3,
    Title: 'Feedback #5678',
    Category: 'feedbacks', // "orders", "feedbacks", "persons"
    CategoryId: 2,
    Admin: 'Jane Smith',
    Date: '2024-09-10',
    Sentiment: 'neutral',
    SentimentDegree: 50,
    CustomerId: 1,
  },
  {
    Id: 3,
    Urgent: 0,
    State: 'open', // "open", "inProgress", "completed"
    StateId: 1,
    Title: 'Person UpDate #2345',
    Category: 'persons', // "orders", "feedbacks", "persons"
    CategoryId: 3,
    Admin: 'Alice Johnson',
    Date: '2024-09-09',
    Sentiment: 'negative',
    SentimentDegree: 20,
    CustomerId: 1,
  },
  {
    Id: 4,
    Urgent: 1,
    State: 'completed', // "open", "inProgress", "completed"
    StateId: 3,
    Title: 'Order #4321',
    Category: 'orders', // "orders", "feedbacks", "persons"
    CategoryId: 1,
    Admin: 'Bob Brown',
    Date: '2024-09-08',
    Sentiment: 'positive',
    SentimentDegree: 90,
    CustomerId: 2,
  },
  {
    Id: 5,
    Urgent: 1,
    State: 'open', // "open", "inProgress", "completed"
    StateId: 1,
    Title: 'Feedback #8765',
    Category: 'feedbacks', // "orders", "feedbacks", "persons"
    CategoryId: 2,
    Admin: 'Charlie Green',
    Date: '2024-09-07',
    Sentiment: 'negative',
    SentimentDegree: 30,
    CustomerId: 1,
  },
];

const recent = results.slice(0, 3);

const admins = [
  {
    id: 1,
    userName: 'string',
    firstName: 'string',
    lastName: 'string',
    photoUrl: 'https://ibb.co/nm7PSgC',
    phoneNumber: 'string',
    email: 'user@example.com',
    hashPassword:
      'zZNrmpWqxigae+Fp07SojcY7Q4BtguAPk4IStvZQWRT/85OFQcupOlMgdd5fKLIqAzJN8eSGYV5yAcfUrZ1isw==.XUNlbq13inlrmFP+Tl5NVRghAQbvIf3I9wn0KVVBy1k=',
    registerationDate: '2024-09-22T21:36:56.798255',
    role: 'admin',
    countOfTickets: 0,
    ticketAdmins: [],
  },
  {
    id: 2,
    userName: 'shahdfaris',
    firstName: 'shahd',
    lastName: 'faris',
    photoUrl: 'https://ibb.co/nm7PSgC',
    phoneNumber: '201275537116',
    email: 'shahd@gmail.com',
    hashPassword:
      'SSXNOjeBKImb41HGA027Yq7gXoYjPc8fvQzIndTiMXGP2a8MNVQR9MRTP1d/9ZqSq3+NcsjPEFISua3QyStzfA==./yQ0tLx/FOE3WqxlCzuXvELX41dPykHSNPZ2DI5VF4A=',
    registerationDate: '2024-09-23T01:45:05.7568862',
    role: 'admin',
    countOfTickets: 0,
    ticketAdmins: [],
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
        <Owner user={user} />
      </>
    );
  }

  return (
    <>
      <NormalSection
        Head="WE CONNECT YOU WITH YOUR CUSTOMERS"
        src="/images/landing.png"
        buttonValue="Join Us"
        href="/join"
        body="Connect, Manage, Resolve – All in One Place . Your Unified Solution for Seamless Customer Support, Bringing All Customer Interactions Under One Roof"
      />
      <WhiteSection
        Head="About Us"
        src="/images/about-section.png"
        buttonValue="Read More"
        href="/about"
        body="We are a technology company focused on transforming how businesses engage with their customers. Our mission is to simplify customer support through a centralized platform that integrates messaging services like WhatsApp and Messenger, providing seamless tools to enhance communication and deliver exceptional service"
      />
      <NormalSection
        Head="Our Services"
        src="/images/services-section.png"
        buttonValue="Read More"
        href="/services"
        body="We provide a powerful, all-in-one customer service platform designed to simplify and streamline the way businesses manage customer interactions across multiple channels. Our services are tailored to help you deliver efficient, responsive, and personalized support."
      />
      <ContactSection />
    </>
  );
}

