var http = require("http");
const WebSocket = require("ws");
const TelegramBot = require("node-telegram-bot-api");
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// const token = "1454264149:AAEA5kuWlIVtiXBSg8N7pRPvuG3AGaTwg6E";

// const bot = new TelegramBot(token, { polling: true });

// const setPriceDown = (crypto, price, chatId) => {
//   const ws = new WebSocket(`wss://fstream.binance.com/ws/${crypto}@markPrice`);
//   ws.on("message", (data) => {
//     const details = JSON.parse(data);
//     console.log({ MarkPrice: parseFloat(details.p) });
//     if (parseFloat(details.p) <= price) {
//       console.log("================== reached =================");
//       bot.sendMessage(chatId, `${crypto} Reached to ${price}`);
//       ws.close();
//     }
//   });
// };
// const setPriceUp = (crypto, price, chatId) => {
//   const ws = new WebSocket(`wss://fstream.binance.com/ws/${crypto}@markPrice`);
//   ws.on("message", (data) => {
//     const details = JSON.parse(data);
//     console.log({ MarkPrice: parseFloat(details.p) });
//     if (parseFloat(details.p) >= price) {
//       console.log("================== reached =================");
//       bot.sendMessage(chatId, `${crypto} Reached to ${price}`);
//       ws.close();
//     }
//   });
// };
// const telegramBot = async () => {
//   // bot.on("message", (s) => console.log({ s }));
//   bot.onText(/\/priceup (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
//     console.log({ resp });
//     bot.sendMessage(chatId, resp);
//   });
//   bot.onText(/\/priceDown (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const details = match[1].split(" ");

//     console.log({ PAIR: details[0], PRICE: details[1] });
//     bot.sendMessage(
//       chatId,
//       `Alarm set for ${details[0]} When Price Reached to ${details[1]}`
//     );
//   });
//   bot.onText(/\/help (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const helpMessage = `
//     /priceDown for setting alarm when price bigger down current price /n
//     `;
//     const resp = match[1]; // the captured "whatever"
//     bot.sendMessage(chatId, resp);
//   });
//   bot.on("message", (m) => {
//     if (m.text.includes("priceUp")) {
//       const details = m.text.split(" ");
//       if (details[1] != null && details[2] != null) {
//         setPriceUp(details[1], details[2], m.chat.id);
//         bot.sendMessage(
//           m.chat.id,
//           `Alarm set for ${details[1]} When Price Reached to ${details[2]}`
//         );
//       } else bot.sendMessage(m.chat.id, "Command not recognize");
//     } else if (m.text.includes("priceDown")) {
//       const details = m.text.split(" ");
//       if (details[1] != null && details[2] != null) {
//         setPriceDown(details[1], details[2], m.chat.id);
//         bot.sendMessage(
//           m.chat.id,
//           `Alarm set for ${details[1]} When Price Reached to ${details[2]}`
//         );
//       } else bot.sendMessage(m.chat.id, "Command not recognize");
//     }
//   });
// };

// // telegramBot();
// // setAlarm("btcusdt", "");
