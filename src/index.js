var http = require("http");
const WebSocket = require("ws");
const axios = require("axios");

http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// const token = "1454264149:AAEA5kuWlIVtiXBSg8N7pRPvuG3AGaTwg6E";

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

const telegramBot = async () => {
  // https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getMe

  try {
    const resAxios = await axios.get(
      "https://api.telegram.org/1454264149:AAEA5kuWlIVtiXBSg8N7pRPvuG3AGaTwg6E/sendMessage"
    );
    console.log({ resAxios });
  } catch (e) {
    console.log({ e });
  }
};

// setAlarm("btcusdt", "36900");
telegramBot();
