import { baseFilter } from './baseFilter';

export const tagFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
