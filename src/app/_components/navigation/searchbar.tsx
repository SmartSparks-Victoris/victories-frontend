/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { useEffect, useRef, useState } from 'react';

import CustomLink from './custom-link';
import Link from 'next/link';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const SearchBar = ({ user }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const toggleRef = useRef(null);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof semanticSearchSchema>>({
    resolver: zodResolver(semanticSearchSchema),
  });

  function handleSearchSuccess(data) {
    // Navigate to search results page with query parameter
    router.push(`/search?query=${data.query}`);
  }

  function handleSearchFailure() {}

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;

    if (
      searchRef.current &&
      !searchRef.current.contains(target) &&
      toggleRef.current &&
      !toggleRef.current.contains(target)
    ) {
      setIsOpen(false); // Close the search if clicked outside
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function isActive(path) {
    return pathname === path;
  }

  return (
    <nav className="fixed top-0 left-[var(--adminNavSmall)] md:left-[var(--adminNav)] h-[var(--searchNav)] w-[calc(100%-var(--adminNavSmall))] md:w-[calc(100%-var(--adminNav))] bg-gray-400 px-[32px] flex items-center justify-between gap-[24px] md:gap-[40px] bg-[url('/images/Background.png')]">
      <CustomLink href="/profile" className="flex items-center gap-[16px]">
        <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full overflow-hidden">
          {user.img && (
            <img
              className="object-cover w-full h-full rounded-full"
              src={user.img}
              alt=""
            />
          )}
          {!user.img && (
            <img
              className="object-cover w-full h-full rounded-full"
              src={'/images/default.png'}
              alt=""
            />
          )}
        </div>
        <p className="text-textWhite text-[18px] font-medium">
          {user.fullname}
        </p>
      </CustomLink>
      <div className="flex flex-grow justify-end gap-[24px] md:gap-[24px] ">
        <CustomLink href="/notifications">
          {isActive('/notifications') ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.8633 7.16552C21.6868 7.25695 21.4811 7.27453 21.2916 7.21441C21.1021 7.15429 20.9442 7.02138 20.8527 6.8449C20.1368 5.43067 19.0532 4.23537 17.7158 3.38459C17.6325 3.33202 17.5603 3.26355 17.5034 3.18308C17.4465 3.10262 17.406 3.01174 17.3843 2.91563C17.3625 2.81952 17.3599 2.72007 17.3765 2.62294C17.3932 2.52582 17.4289 2.43294 17.4814 2.34959C17.534 2.26624 17.6025 2.19406 17.6829 2.13717C17.7634 2.08029 17.8543 2.03981 17.9504 2.01804C18.0465 1.99628 18.1459 1.99366 18.2431 2.01033C18.3402 2.027 18.4331 2.06264 18.5164 2.11521C20.0751 3.11321 21.3408 4.5073 22.1839 6.1549C22.2753 6.33145 22.2929 6.53707 22.2328 6.72658C22.1727 6.91609 22.0398 7.07397 21.8633 7.16552ZM4.21111 7.2499C4.34851 7.24984 4.48326 7.21204 4.60064 7.14062C4.71803 7.0692 4.81353 6.9669 4.87674 6.8449C5.59261 5.43067 6.67619 4.23537 8.01361 3.38459C8.18194 3.27842 8.3012 3.10973 8.34515 2.91563C8.38911 2.72153 8.35416 2.51792 8.24799 2.34959C8.14182 2.18126 7.97313 2.062 7.77903 2.01804C7.58493 1.97409 7.38132 2.00904 7.21299 2.11521C5.6543 3.11321 4.38865 4.5073 3.54549 6.1549C3.48627 6.2692 3.45747 6.39682 3.46186 6.52547C3.46625 6.65412 3.50368 6.77948 3.57054 6.88948C3.63741 6.99948 3.73146 7.09041 3.84365 7.15354C3.95584 7.21666 4.08238 7.24985 4.21111 7.2499ZM21.658 16.9943C21.7909 17.2221 21.8613 17.481 21.8622 17.7448C21.8631 18.0085 21.7944 18.2679 21.6631 18.4966C21.5318 18.7254 21.3425 18.9155 21.1143 19.0477C20.8861 19.18 20.6271 19.2497 20.3633 19.2499H16.5383C16.3662 20.0976 15.9063 20.8598 15.2365 21.4072C14.5667 21.9546 13.7283 22.2537 12.8633 22.2537C11.9983 22.2537 11.1599 21.9546 10.4901 21.4072C9.82035 20.8598 9.36044 20.0976 9.1883 19.2499H5.3633C5.09969 19.2494 4.84088 19.1794 4.61293 19.047C4.38498 18.9146 4.19594 18.7245 4.06486 18.4958C3.93378 18.2671 3.86528 18.0079 3.86627 17.7443C3.86726 17.4807 3.93769 17.222 4.07049 16.9943C4.91517 15.5365 5.3633 13.4636 5.3633 10.9999C5.3633 9.01078 6.15348 7.10312 7.56 5.6966C8.96652 4.29008 10.8742 3.4999 12.8633 3.4999C14.8524 3.4999 16.7601 4.29008 18.1666 5.6966C19.5731 7.10312 20.3633 9.01078 20.3633 10.9999C20.3633 13.4627 20.8114 15.5355 21.658 16.9943ZM14.9839 19.2499H10.7427C10.8981 19.6881 11.1854 20.0674 11.5651 20.3357C11.9449 20.6039 12.3984 20.7479 12.8633 20.7479C13.3282 20.7479 13.7817 20.6039 14.1615 20.3357C14.5412 20.0674 14.8285 19.6881 14.9839 19.2499Z"
                fill="#FFF7FA"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.9339 7.5815C22.7612 7.6718 22.5691 7.71885 22.3743 7.71861C22.1507 7.71899 21.9314 7.65789 21.7403 7.54199C21.5492 7.4261 21.3936 7.25988 21.2906 7.0615C20.5498 5.5935 19.4271 4.35223 18.0406 3.46822C17.9003 3.38525 17.778 3.27498 17.6811 3.14394C17.5842 3.0129 17.5145 2.86374 17.4763 2.7053C17.438 2.54686 17.4319 2.38235 17.4583 2.22151C17.4848 2.06067 17.5432 1.90677 17.6302 1.76891C17.7171 1.63105 17.8309 1.51204 17.9647 1.41892C18.0984 1.3258 18.2495 1.26045 18.409 1.22676C18.5685 1.19306 18.7331 1.1917 18.8931 1.22275C19.0531 1.2538 19.2053 1.31663 19.3406 1.40752C21.0908 2.52602 22.5119 4.09011 23.4579 5.93924C23.5314 6.08148 23.5761 6.23679 23.5895 6.39631C23.6029 6.55583 23.5848 6.71643 23.5361 6.86893C23.4874 7.02144 23.4092 7.16286 23.3059 7.28513C23.2025 7.40739 23.0761 7.5081 22.9339 7.5815ZM4.70949 7.0615C5.4503 5.5935 6.57299 4.35223 7.95949 3.46822C8.1029 3.38701 8.22836 3.27755 8.32826 3.14646C8.42816 3.01538 8.50044 2.86539 8.54072 2.70557C8.581 2.54575 8.58845 2.37943 8.56261 2.21665C8.53677 2.05387 8.47818 1.89803 8.39039 1.75854C8.3026 1.61905 8.18743 1.49882 8.05185 1.40511C7.91626 1.31141 7.76308 1.24617 7.60156 1.21336C7.44005 1.18055 7.27355 1.18084 7.11215 1.21421C6.95075 1.24758 6.79779 1.31334 6.66253 1.40752C4.91231 2.52602 3.49125 4.09011 2.54519 5.93924C2.39663 6.22613 2.36806 6.56027 2.46575 6.86822C2.56345 7.17617 2.77943 7.43273 3.06621 7.5815C3.23891 7.6718 3.43094 7.71885 3.62582 7.71861C3.84934 7.71899 4.06865 7.65789 4.25978 7.54199C4.45091 7.4261 4.60648 7.25988 4.70949 7.0615ZM22.3316 17.0502C22.5608 17.3511 22.7015 17.71 22.7377 18.0865C22.774 18.4631 22.7043 18.8423 22.5367 19.1813C22.369 19.5204 22.11 19.806 21.7888 20.0058C21.4677 20.2056 21.0971 20.3118 20.7188 20.3124H17.4495C17.3461 21.4209 16.8327 22.451 16.0097 23.2008C15.1867 23.9507 14.1134 24.3663 13 24.3663C11.8867 24.3663 10.8134 23.9507 9.99039 23.2008C9.16739 22.451 8.65394 21.4209 8.55058 20.3124H5.28128C4.90275 20.3124 4.53175 20.2066 4.21012 20.007C3.88849 19.8074 3.62904 19.5219 3.46102 19.1827C3.293 18.8435 3.22311 18.4641 3.25923 18.0873C3.29535 17.7105 3.43604 17.3513 3.66543 17.0502C4.39363 16.1026 5.263 14.3466 5.27824 11.3688C5.27905 9.32123 6.0932 7.35787 7.54161 5.91061C8.99001 4.46334 10.954 3.65074 13.0016 3.65154C15.0491 3.65235 17.0125 4.46651 18.4597 5.91491C19.907 7.36332 20.7196 9.32732 20.7188 11.3749C20.734 14.3466 21.6034 16.1026 22.3316 17.0502ZM14.9907 20.3124H11.0094C11.1026 20.7715 11.3518 21.1844 11.7146 21.4809C12.0773 21.7774 12.5315 21.9394 13 21.9394C13.4686 21.9394 13.9227 21.7774 14.2855 21.4809C14.6483 21.1844 14.8974 20.7715 14.9907 20.3124ZM19.9408 17.8749C19.1121 16.5546 18.2965 14.4654 18.2813 11.381C18.2817 10.6874 18.1455 10.0006 17.8804 9.35968C17.6154 8.71878 17.2267 8.13635 16.7366 7.64566C16.2465 7.15497 15.6645 6.76562 15.0239 6.49984C14.3833 6.23406 13.6966 6.09706 13.0031 6.09666C12.3095 6.09626 11.6227 6.23247 10.9818 6.49751C10.3409 6.76254 9.75847 7.15122 9.26778 7.64135C8.77709 8.13148 8.38774 8.71345 8.12196 9.35405C7.85618 9.99465 7.71918 10.6813 7.71878 11.3749C7.70355 14.4644 6.888 16.5546 6.05925 17.8749H19.9408Z"
                fill="#FFF7FA"
              />
            </svg>
          )}
        </CustomLink>

        <div className="flex items-center justify-end">
          <button
            ref={toggleRef}
            className="text-textWhite flex md:hidden"
            onClick={() => setIsOpen((old) => !old)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.6048 21.7193L18.3343 16.4469C19.9146 14.3877 20.6524 11.8045 20.398 9.22136C20.1436 6.63823 18.9162 4.24855 16.9646 2.5371C15.0131 0.825646 12.4836 -0.0794277 9.88919 0.00547575C7.29483 0.0903793 4.8299 1.1589 2.99443 2.99429C1.15896 4.82968 0.0903834 7.29449 0.00547601 9.88873C-0.0794314 12.483 0.825684 15.0124 2.53722 16.9638C4.24875 18.9153 6.63853 20.1427 9.22179 20.3971C11.805 20.6514 14.3883 19.9137 16.4476 18.3335L21.7226 23.6093C21.8465 23.7331 21.9935 23.8314 22.1554 23.8985C22.3172 23.9655 22.4907 24 22.6659 24C22.8411 24 23.0146 23.9655 23.1764 23.8985C23.3383 23.8314 23.4854 23.7331 23.6093 23.6093C23.7331 23.4854 23.8314 23.3383 23.8984 23.1765C23.9655 23.0146 24 22.8412 24 22.666C24 22.4908 23.9655 22.3173 23.8984 22.1555C23.8314 21.9936 23.7331 21.8466 23.6093 21.7227L23.6048 21.7193ZM2.68594 10.2322C2.68594 8.73967 3.12855 7.28065 3.9578 6.03966C4.78704 4.79866 5.96568 3.83142 7.34467 3.26025C8.72365 2.68909 10.241 2.53964 11.705 2.83082C13.1689 3.122 14.5136 3.84072 15.569 4.8961C16.6244 5.95148 17.3432 7.29612 17.6344 8.75997C17.9256 10.2238 17.7761 11.7412 17.2049 13.1201C16.6338 14.499 15.6665 15.6776 14.4254 16.5068C13.1844 17.336 11.7253 17.7786 10.2327 17.7786C8.23179 17.7765 6.31344 16.9808 4.8986 15.566C3.48376 14.1513 2.688 12.233 2.68594 10.2322Z"
                fill="#FFF7FA"
              />
            </svg>
          </button>
          <form
            ref={searchRef}
            onSubmit={handleSubmit(handleSearchSuccess, handleSearchFailure)}
            action=""
            className={`flex-grow flex justify-end items-center gap-[12px] absolute z-50 md:relative md:top-0 md:left-0 top-[var(--searchNav)] left-0 w-[100%] md:w-fit ${
              isOpen
                ? 'flex px-[32px] py-[12px] bg-[#745865] bg-cover md:px-0 md:py-0 md:bg-transparent'
                : 'hidden md:flex md:bg-transparent'
            }`}>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-[16px] h-[40px] w-[100%] lg:w-[380px] px-[12px] flex-grow bg-transparent border-[1px] border-solid border-textWhite placeholder-textWhite text-textWhite"
              {...register('query', { required: true })}
            />
            {errors.query && (
              <p className="fieldError">{errors.query.message}</p>
            )}
            <button type="submit">
              <svg
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  y="0.862793"
                  width="36.2737"
                  height="36.2746"
                  rx="18.1368"
                  fill="#FFF7FA"
                />
                <path
                  d="M27.9399 27.2108L23.4877 22.7567C24.8226 21.0171 25.4458 18.8349 25.2309 16.6528C25.0161 14.4706 23.9792 12.4519 22.3306 11.0061C20.6821 9.56028 18.5453 8.79569 16.3538 8.86742C14.1622 8.93914 12.08 9.84181 10.5295 11.3923C8.97901 12.9428 8.07635 15.025 8.00463 17.2166C7.9329 19.4081 8.69749 21.5449 10.1433 23.1934C11.5891 24.842 13.6078 25.8789 15.79 26.0937C17.9722 26.3086 20.1544 25.6854 21.8939 24.3505L26.3499 28.8073C26.4545 28.912 26.5787 28.995 26.7155 29.0516C26.8522 29.1083 26.9987 29.1374 27.1467 29.1374C27.2947 29.1374 27.4413 29.1083 27.578 29.0516C27.7147 28.995 27.839 28.912 27.9436 28.8073C28.0482 28.7027 28.1313 28.5785 28.1879 28.4417C28.2445 28.305 28.2737 28.1584 28.2737 28.0105C28.2737 27.8625 28.2445 27.7159 28.1879 27.5792C28.1313 27.4425 28.0482 27.3182 27.9436 27.2136L27.9399 27.2108ZM10.2689 17.5067C10.2689 16.2459 10.6428 15.0133 11.3433 13.9649C12.0438 12.9166 13.0394 12.0995 14.2043 11.617C15.3692 11.1345 16.651 11.0082 17.8876 11.2542C19.1242 11.5002 20.2602 12.1073 21.1517 12.9989C22.0433 13.8905 22.6504 15.0264 22.8964 16.263C23.1424 17.4996 23.0162 18.7814 22.5336 19.9463C22.0511 21.1112 21.234 22.1068 20.1857 22.8073C19.1373 23.5078 17.9048 23.8817 16.6439 23.8817C14.9537 23.88 13.3332 23.2078 12.138 22.0126C10.9429 20.8174 10.2707 19.1969 10.2689 17.5067Z"
                  fill="#745865"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;

