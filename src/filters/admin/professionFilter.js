import { baseFilter } from './baseFilter';

export const professionListFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
