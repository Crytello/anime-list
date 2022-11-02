const app = require('./app');
const db = require('./app/models');
db.sequelize.sync();

//listen for request, setting the port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
