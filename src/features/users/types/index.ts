import { BaseEntity } from '@/types';

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  role: 'ADMIN' | 'USER';
} & BaseEntity;
