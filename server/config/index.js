const  mysql = require( "mysql");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "learn-angular",
});
dbConn.on('connection', () => {
  console.log('DB Connection Established')
})
module.exports = dbConn;
