import { baseFilter } from './baseFilter';

export const estimateBudgetFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
