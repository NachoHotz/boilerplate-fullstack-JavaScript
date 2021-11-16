const app = require('./src/app');
const config = require('./src/lib/config');

app.listen(config.API_PORT, () =>
  console.log(`server running on port ${config.API_PORT}`),
);
