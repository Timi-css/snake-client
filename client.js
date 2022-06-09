const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", //IP Address
    port: 50541, //PORT Number
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something
    conn.write("Name: Timi");
    console.log("Successfully connected to the game server");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("end", () => {
    console.log("Connection terminated.");
  });

  return conn;
};

console.log("Connecting...");
connect();

module.exports = { connect };
