import { Op } from 'sequelize';
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../config/settings';

export const baseFilter = (params = {}) => {
  const page = parseInt(params?.page) || PAGE_DEFAULT;
  const pageSize = parseInt(params?.pageSize) || PAGE_SIZE_DEFAULT;
  const sortField = params?.sortField || 'id';
  const sortOrder = params?.sortOrder === "ascend" ?  "ASC" : params?.sortOrder === "descend" ? "DESC" : "DESC" || 'DESC';
  const q = params?.q || null;
  const offset = (page - 1) * pageSize;

  let filter = {
    offset: offset,
    limit: pageSize,
    order: [[sortField, sortOrder]],
    where: {},
  };

  if (q) {
    console.log(q)
    filter['where']['name'] = {
      [Op.substring]: q,
    };
  }

  return filter;
};
