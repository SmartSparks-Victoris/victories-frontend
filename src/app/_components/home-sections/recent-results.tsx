'use client';

import Link from 'next/link';

const Recent = ({ results }) => {
  return (
    <section className="flex">
      {results &&
        results.map((result) => (
          <Link href={`/tickets/${result.id}`} key={result.id}>
            <p>{result.status}</p>
            <p>{result.title}</p>
          </Link>
        ))}
    </section>
  );
};

export default Recent;

