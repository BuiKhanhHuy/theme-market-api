import { baseFilter } from './baseFilter';

export const categoryFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
