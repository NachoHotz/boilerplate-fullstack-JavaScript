const db = require('./src/db/db');
const app = require('./src/app');

const config = require('./src/lib/config');

db.sync({ force: true }).then(() => {
  console.log('db connected');
  app.listen(config.API_PORT, () =>
    console.log(`server running on port ${config.API_PORT}`),
  );
});
