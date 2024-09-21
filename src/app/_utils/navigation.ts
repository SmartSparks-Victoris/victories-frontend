import { RefObject } from 'react';

export function isActive(path: string, pathname: string) {
  return pathname === path;
}

export function handleClickOutside(
  event: MouseEvent,
  ref: RefObject<HTMLElement>,
  setIsOpen: (isOpen: boolean) => void,
) {
  const target = event.target as Node;
  if (ref.current && !ref.current.contains(target)) {
    setIsOpen(false);
  }
}

export function handleClickOutsideTwo(
  event: MouseEvent,
  ref1: RefObject<HTMLElement>,
  ref2: RefObject<HTMLElement>,
  setIsOpen: (isOpen: boolean) => void,
) {
  const target = event.target as Node;

  if (
    ref1.current &&
    !ref1.current.contains(target) &&
    ref2.current &&
    !ref2.current.contains(target)
  ) {
    setIsOpen(false); // Close the search if clicked outside
  }
}

