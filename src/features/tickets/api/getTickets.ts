import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { siteApi } from '../const';
import { Ticket } from '../types';

export const getTickets = (): Promise<Ticket[]> => {
  return axios.get(`${siteApi}/tickets`);
};
type QueryFnType = typeof getTickets;

type UseTicketsOptions = {
  config?: QueryConfig<QueryFnType>;
};
export const useTickets = ({ config }: UseTicketsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users'],
    queryFn: () => getTickets(),
  });
};
