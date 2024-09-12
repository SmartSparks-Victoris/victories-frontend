'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MessageAndRedirect = ({ nextPage }) => {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout for 5 seconds before redirecting
    const timer = setTimeout(() => {
      router.push(nextPage); // Change to your target route
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, [router, nextPage]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-bold">
        This message will disappear in 5 seconds...
      </p>
    </div>
  );
};

export default MessageAndRedirect;

