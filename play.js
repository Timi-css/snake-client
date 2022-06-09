const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", //IP Address
    port: 50541, //PORT Number
  });

  conn.setEncoding("utf8");

  conn.on("event name", () => {
    // code that does something
    console.log("It's got a sharp tongue, this server!");
  });

  return conn;
};

console.log("Connecting...");
connect();
