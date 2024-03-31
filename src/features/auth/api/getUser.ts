import { axios } from '@/lib/axios';

import { authApi } from '../const';
import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
  return axios.get(`${authApi}/admin/users/me`);
};
