import commonRouter from './common';
import customerRouter from './customer';
import adminRouter from './admin';

const API_VERSION_V1 = process.env.API_VERSION_V1;
const initRoutes = (app) => {
  app.use("/" + API_VERSION_V1 + '/', commonRouter);
  app.use("/" + API_VERSION_V1 + '/customer', customerRouter);
  app.use("/" + API_VERSION_V1 + '/admin', adminRouter);
};

export default initRoutes;
