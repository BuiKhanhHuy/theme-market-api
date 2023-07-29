import { baseFilter } from './baseFilter';

export const paymentStatusFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
