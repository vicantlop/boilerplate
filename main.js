const {db} = require('./server/db')
const app = require('./server')
const PORT = 1337



db.sync({ force: true }).then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`serving it up on port ${PORT}`))
});

// const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
// app.listen(port, function () {
//   console.log("Knock, knock");
//   console.log("Who's there?");
//   console.log(`Your server, listening on port ${port}`);
// });