import { string } from 'zod';

export type NotificationItemProps = {
  type: string;
  typeValue: string;
  time: string;
  head: string;
  description: string;
};

export type PricingItemProps = {
  type: string;
  price: string | number;
  description: string;
  features: string[];
  handlePlanChange: (type: string, price: string | number) => void;
};

export type PaymentProps = {
  total: string | number | null;
  handleNext: () => void;
};

export type HomeTicketItemProps = {
  type: string;
  text: string;
  number: string | number;
  percentage: string | number;
  href: string;
};
