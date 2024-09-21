export type UserId = string | number;

export type User = {
  id: UserId;
  name: string;
  email: string;
  role: string;
  subdomain: string;
  iat: number;
  exp: number;
  img: string;
  fullname: string;
};

export type UserProps = {
  user: {
    id: UserId;
    name: string;
    email: string;
    role: string;
    subdomain: string;
    iat: number;
    exp: number;
    img: string;
    fullname: string;
  };
};

