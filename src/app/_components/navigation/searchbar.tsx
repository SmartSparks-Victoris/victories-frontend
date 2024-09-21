/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { FC, useEffect, useRef, useState } from 'react';
import { handleClickOutsideTwo, isActive } from '@/app/_utils/navigation';

import CustomLink from './custom-link';
import NotificationsCloseSVG from '../svg/notifications-close';
import NotificationsOpenSVG from '../svg/notifications-open';
import SearchSubmitSVG from '../svg/search-submit';
import SearchToggleSVG from '../svg/search-toggle';
import { UserProps } from '@/app/_types/user.types';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const SearchBar: FC<UserProps> = ({ user }) => {
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
    router.push(`/search?query=${data.query}`);
  }

  function handleSearchFailure() {}

  useEffect(() => {
    const clickHandler = (event: MouseEvent) =>
      handleClickOutsideTwo(event, searchRef, toggleRef, setIsOpen);

    document.addEventListener('mousedown', clickHandler);
    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-[var(--adminNavSmall)] md:left-[var(--adminNav)] h-[var(--searchNav)] w-[calc(100%-var(--adminNavSmall))] md:w-[calc(100%-var(--adminNav))] bg-gray-400 px-[32px] flex items-center justify-between gap-[24px] md:gap-[40px] bg-[url('/images/Background.png')] z-40">
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
          {isActive('/notifications', pathname) ? (
            <NotificationsOpenSVG />
          ) : (
            <NotificationsCloseSVG />
          )}
        </CustomLink>

        <div className="flex items-center justify-end">
          <button
            ref={toggleRef}
            className="text-textWhite flex md:hidden"
            onClick={() => setIsOpen((old) => !old)}>
            <SearchToggleSVG />
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
              <SearchSubmitSVG />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;

