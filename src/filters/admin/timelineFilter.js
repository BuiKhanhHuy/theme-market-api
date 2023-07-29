import { baseFilter } from './baseFilter';

export const timelineFilter = (params = {}) => {
  let filter = baseFilter(params)

  return filter;
};
