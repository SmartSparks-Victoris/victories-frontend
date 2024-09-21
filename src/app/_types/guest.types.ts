import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { ReactNode, SetStateAction } from 'react';

export type WhiteSectionProps = {
  Head: string;
  body: string;
  buttonValue: string;
  href: string;
  src: string;
};

export type NormalSectionProps = {
  Head: string;
  body: string;
  buttonValue: string;
  href: string;
  src: string;
};

export type StatisticsItemProps = {
  number: number | string;
  text: string;
};

export type ServiceProps = {
  service: {
    id: string | number;
    img: string;
    title: string;
    description: string;
  };
};

export type LandingSectionProps = {
  Head: string;
};

export type ContactItemProps = {
  children: ReactNode;
  text: string;
};

export type CreatePasswordProps = {
  setStep: (step: number) => void;
  username: string | null;
  mobile: string | null;
};

export type ForgetPasswordProps = {
  setStep: (step: number) => void;
  setUsername: (value: SetStateAction<null>) => void;
  setMobile: (value: SetStateAction<null>) => void;
};

export type DocumentItemProps = {
  text: string;
  head: string;
};

export type VerificationFormProps = {
  setStep: (step: number) => void;
  username: string | null;
  mobile: string | null;
};

