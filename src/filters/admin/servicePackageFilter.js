import { baseFilter } from './baseFilter';

export const servicePackageFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
