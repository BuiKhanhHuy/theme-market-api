import { baseFilter } from './baseFilter';

export const approachFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
