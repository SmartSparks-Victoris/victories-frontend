'use client';

import CustomLink from '../navigation/custom-link';

const Recent = ({ results }) => {
  return (
    <section className="flex">
      {results &&
        results.map((result) => (
          <CustomLink href={`/tickets/${result.id}`} key={result.id}>
            <p>{result.status}</p>
            <p>{result.title}</p>
          </CustomLink>
        ))}
    </section>
  );
};

export default Recent;

