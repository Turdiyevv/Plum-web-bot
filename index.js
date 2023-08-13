const TelegramBot = require('node-telegram-bot-api');
const {gameOption, menuOption, langOption} = require("./options");
const token = '5899651544:AAHwwODulPXmNoPN9YQhBZtZ1LOLjE8pDRk'
const bot = new TelegramBot(token, {polling: true});
const obj = {}
// const startGame = async (chatId) =>{
//   await bot.sendMessage(
//       chatId,
//       "Bot bir raqam o'yladi..."
//   )
//   const randomNumber = Math.floor(Math.random() * 10);
//   obj[chatId] = randomNumber;
//   await bot.sendMessage(chatId, "siz uni toping!", gameOption)
// }


const startChat = async (chatId) => {
    await bot.sendMessage(chatId,
        "Platforma haqida qisqacha malumot",

        )
    }


const bootstrap = () => {
    bot.setMyCommands([
        {command: "/start", description: 'Boshlang\' ich kirish qismi'},
        {command: "/info", description: 'Batafsil ma\'lumot'},
        // {command: "/game", description: 'O\'yin o\'ynaymiz!'},
    ])
    bot.on('message', async msg => {
      const text = msg.text
      const chatId = msg.chat.id;

      if(text === '/start'){
          // await bot.sendPhoto(
          //     chatId,
          //     "https://tlgrm.eu/_/stickers/392/525/39252584-d29b-35f5-8345-d5ea9330cf86/12.jpg",
          //     )
          return  bot.sendMessage(
              chatId,
              `Assalomu alaykum hurmatli ${msg.from.first_name} sizni maxsus botimizda ko'rib turganimizdan xursandmiz!
              Maqbul tilni tanlang`, langOption
          )
  }
      if (text === "UZB"){
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "O'zbek tili ✅", menuOption);
      }
      if (text === "Orqaga"){
          return bot.sendMessage(chatId, "Tilni tanlanng",langOption);
      }
      const sender = false
      if (text === "Bizga_xabar_yuborish") {
          this.sender = true
          return bot.sendMessage(chatId, `Xabarni bitta matnda yo'llang ${this.sender ? `💌` : `🛑` }`, menuOption
              // {reply_markup:
              //           {keyboard:
              //                   [
              //                       [{text: "Orqaga"}],
              //                   ],
              //               resize_keyboard: true
              //           }
              //   }
              );
      }





      if(this.sender === true){
        bot.sendMessage(chatId,text);
        this.sender =false
      }
      else {
          bot.sendMessage(chatId," ⚠️ Uzr siz to'g'ridan to'g'ri xabar yozaolmaysiz !")
      }
    });
    // bot.on("message", msg => {
    //     console.log(msg)
    //     const data = msg.data;
    //     const chatId = msg.message.chat.id;
    //     if (data == obj[chatId]){
    //         return bot.sendMessage(chatId,
    //             `tabriklaymiz siz to'g'ri topdingiz kompyuter ${obj[chatId]} sonini tanlagan edi!`)
    //     } else {
    //         return bot.sendMessage(
    //             chatId,
    //             `siz noto'g'ri son tanladingiz. Siz tanlagan son ${data},
    //             kompyuter ${obj[chatId]} sonini tanlagan edi.`, againOption
    //         )
    //     }
    // })
}

bootstrap()
