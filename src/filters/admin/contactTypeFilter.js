import { baseFilter } from './baseFilter';

export const contactTypeFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
