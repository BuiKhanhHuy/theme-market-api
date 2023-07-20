import { createClient } from 'redis';

let redisClient;

(async () => {
  redisClient = createClient({
    port: process.env.SERVICE_REDIS_PORT,
    host: process.env.SERVICE_REDIS_HOST,
  });

  redisClient.on('error', (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

export default redisClient;
