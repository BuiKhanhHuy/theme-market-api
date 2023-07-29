import { baseFilter } from './baseFilter';

export const productTypeFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
