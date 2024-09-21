'use client';

import CustomLink from '../navigation/custom-link';
import TicketsCloseDarkSVG from '../svg/tickets-close-dark';

const Recent = ({ results }) => {
  return (
    <section className="order-1 2xl:order-2">
      <h2 className="text-[#231318] font-medium caption-18 mb-4">
        Recent Tickets
      </h2>
      <div className="flex flex-col items-start gap-4">
        {results &&
          results.map((result) => (
            <CustomLink
              href={`/tickets/${result.id}`}
              key={result.id}
              className="flex gap-1">
              <TicketsCloseDarkSVG />

              <div className="flex flex-col items-start gap-[4px]">
                <p className="text-[#231318] text-[14px] font-semibold text-start">
                  {result.title}
                </p>
                <p className="text-[12px] text-[#231318]">{result.category}</p>
              </div>
            </CustomLink>
          ))}
      </div>
    </section>
  );
};

export default Recent;

