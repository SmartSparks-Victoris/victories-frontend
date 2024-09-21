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

export type TicketsMainProps = {
  categories: {
    name: string;
    id: string | number;
  };
  status: {
    name: string;
    id: string | number;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: Array<any>;
};

export type FiltersProps = {
  categories: {
    name: string;
    id: string | number;
  };
  status: {
    name: string;
    id: string | number;
  };
  numberOfResults: number;
};

export type ResultsTableHeadProps = {
  text: string;
  keyValue: string;
  sortKeyView: string;
  sortOrderView: string;
  setSortOrderView: (value: string) => void;
  setSortKeyView: (value: string) => void;
};

export type UrgentProps = {
  result: {
    urgent: number;
    id: string | number;
    status: string;
  };
};

export type personalInfoProps = {
  data: {
    fname: string;
    lname: string;
    email: string;
  };
};

