require('dotenv').config();
const app = require('./app');

app.listen(3000, () => {
  console.log('app is running');
});
