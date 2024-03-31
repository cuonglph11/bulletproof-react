import { axios } from '@/lib/axios';

import { authApi } from '../const';
import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post(`${authApi}/admin/login`, data);
};
