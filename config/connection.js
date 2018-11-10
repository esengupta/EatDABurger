// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection.
// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWDB_URL) {
  console.log("Using jawsDB");
 connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  console.log("Not using jawsDB");
var connection = mysql.createConnection({
  host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "c560rb4x8aerqx05",
  password: "cneex32ncwdpq27p",
  database: "fzbkruyhgdc0dsq5"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
