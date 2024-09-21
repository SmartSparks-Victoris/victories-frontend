import { ReactNode } from 'react';

export type GuestNavbarItemProps = {
  href: string;
  text: string;
};

export type FooterContactItemProps = {
  children: ReactNode;
  text: string;
};

export type CustomLinkProps = {
  children: ReactNode | string;
  href: string;
  className?: string;
  type?: string;
  variant?: string;
  variantColor?: string;
};

export type AdminNavbarItemProps = {
  href: string;
  openIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  closeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

