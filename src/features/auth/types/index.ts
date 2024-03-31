export type AuthUser = {
  id: string | number;
  email: string;
  firstname: string;
  lastname: string;
  role: 'ADMIN' | 'USER';
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
