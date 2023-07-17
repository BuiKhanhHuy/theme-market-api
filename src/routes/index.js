import customerRouter from "./customer";
import adminRouter from "./admin"

const initRoutes = (app) => {
  app.use('/v1', customerRouter);
  app.use('/v1/admin', adminRouter);
};

export default initRoutes;
