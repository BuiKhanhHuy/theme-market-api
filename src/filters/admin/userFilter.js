import { baseFilter } from './baseFilter';

export const userFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
