// const {bot, TOKEN, TelegramBot, lang} = require('../index');
//
// const {query} = require("express");
//
// const hintFunction = () => {
//     bot.on("callback_query", async (query) => {
//         const callbackData = query.data;
//         const chatId = query.message.chat.id;
//         if (callbackData === "/3"){
//             if (lang === "Uz"){
//                 console.log(`${lang}, ${chatId}`)
//             }
//         }
//     })
// }
// module.exports = {hintFunction}