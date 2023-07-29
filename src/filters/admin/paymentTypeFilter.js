import { baseFilter } from './baseFilter';

export const paymentTypeFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
