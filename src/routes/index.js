import userRoute from './user';
import authRoute from './auth';

const initRoutes = (app) => {
  app.use('/v1/auth', authRoute)
  app.use('/v1/users', userRoute);

  return app.use('/', (req, res) => {
    return 'SERVER ON.';
  });
};

export default initRoutes;
