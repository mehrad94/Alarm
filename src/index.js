var http = require("http");
const WebSocket = require("ws");
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const setAlarm = (crypto, price) => {
  const ws = new WebSocket(`wss://fstream.binance.com/ws/${crypto}@markPrice`);
  ws.on("message", (data) => {
    const details = JSON.parse(data);
    console.log({ MarkPrice: parseFloat(details.p) });
    if (parseFloat(details.p) === price) {
      console.log("================== reached =================");
    }
  });
};

setAlarm("btcusdt", "36900");
