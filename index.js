const TelegramBot = require('node-telegram-bot-api');
const { menuOption, langOption, msgOption, menuOptionRu, menuOptionEng, msgOptionRu, msgOptionEng} = require("./options");
const token = '6522691075:AAHqA_XWkj7LSptscVd4LvJW9c1GZoPTQj4'
const bot = new TelegramBot(token, {polling: true});
// const obj = {}
// const startGame = async (chatId) =>{
//   await bot.sendMessage(
//       chatId,
//       "Bot bir raqam o'yladi..."
//   )
//   const randomNumber = Math.floor(Math.random() * 10);
//   obj[chatId] = randomNumber;
//   await bot.sendMessage(chatId, "siz uni toping!", gameOption)
// }


const sendMessageTo = async (chatId) => {
    await bot.sendMessage(chatId,
        "Platforma haqida qisqacha malumot",

        )
    }
const sender = false;
let lang = "";
const bootstrap = () => {
    bot.setMyCommands([
        {command: "/start", description: 'Boshlang\' ich kirish qismi'},
        {command: "/info", description: 'Batafsil ma\'lumot'},
        // {command: "/game", description: 'O\'yin o\'ynaymiz!'},
    ])
    bot.on('message', async msg => {
        console.log(msg)
      const text = msg.text;
      const photo = msg.photo;
      const audio = msg.audio;
      const sticker = msg.sticker
      const contact = msg.contact
      const chatId = msg.chat.id;
      const username = msg.chat.username

      if(text === '/start'){
          // await bot.sendPhoto(
          //     chatId,
          //     "https://tlgrm.eu/_/stickers/392/525/39252584-d29b-35f5-8345-d5ea9330cf86/12.jpg",
          //     )
          return  bot.sendMessage(
              chatId,
              `☺️ Assalomu alaykum hurmatli ${msg.from.first_name} sizni maxsus botimizda ko'rib turganimizdan xursandmiz! Maqbul tilni tanlang!
              
          ☺️ Здравствуйте, уважаемый ${msg.from.first_name} мы рады видеть вас в нашем специальном боте! Выберите оптимальный язык!
              
          ☺️ Hello dear ${msg.from.first_name} we are glad to see you in our special bot! Choose an acceptable language!`,
              langOption
          )
  }
      //language
      if (text === "UZB"){
          this.lang = "UZB"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "O'zbek tili ✅", menuOption)
      }
      if (text === "RUS"){
          this.lang = "RUS"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "Русский язык ✅", menuOptionRu)
      }
      if (text === "ENG"){
          this.lang = "ENG"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "English ✅", menuOptionEng)
      }
      //language

        // select
      if (text === "Orqaga"){
          return bot.sendMessage(chatId, "Tilni tanlang",langOption);
      }
      if (text === "Назад"){
          return bot.sendMessage(chatId, "Выберите язык",langOption);
      }
      if (text === "Back"){
          return bot.sendMessage(chatId, "Choose a language",langOption);
      }
        // select

      // send message
      if (text === "Bizga_xabar_yuboring") {
          this.sender = true;
          return bot.sendMessage(chatId, `Iltimos, xabarni bitta matnda yo'llang ${this.sender ? `💌` : `🛑` }`, menuOption);
      }
      if (text === "Напишите_нам") {
          this.sender = true;
          return bot.sendMessage(chatId, `Пожалуйста, отправьте сообщение в одном тексте ${this.sender ? `💌` : `🛑` }`, menuOptionRu);
      }
      if (text === "Send_us_a_message") {
          this.sender = true;
          return bot.sendMessage(chatId, `Please, send the message in one text ${this.sender ? `💌` : `🛑` }`, menuOptionEng);
      }
      // send message


      if(this.sender === true){
          const mainChatId =  5327269353
          if (text){
            await bot.sendMessage(mainChatId,`❗️ Sizga @${username} tomonidan yangi xabar mavjud : ${text}`);
          }
          if (photo){
            await bot.sendPhoto(mainChatId, photo[0].file_id, {
                caption: `❗️ Sizga @${username} tomonidan yangi xabar mavjud: *${msg.caption}*`,
                parse_mode: 'Markdown'
            });
          }
          if (contact) {
            await bot.sendContact(mainChatId, contact.phone_number, contact.first_name);
          }
          if (audio) {
            await bot.sendSticker(mainChatId, audio);
          }
          //done
          if (this.lang === "UZB"){
            await bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
            this.sender = false;
          }
          if (this.lang === "RUS"){
            await bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
            this.sender = false;
          }
          if (this.lang === "ENG"){
            await bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
            this.sender = false;
          }
          //done
      }


      else {
          if (this.lang === "UZB"){
            bot.sendMessage(chatId," ⚠️ Uzr, siz to'g'ridan to'g'ri xabar yozaolmaysiz !")
          }
          if (this.lang === "RUS"){
            bot.sendMessage(chatId," ⚠️ Извините, вы не можете написать прямое сообщение !")
          }
          if (this.lang === "ENG"){
            bot.sendMessage(chatId," ⚠️ Sorry, you can't write a message directly !")
          }
      }
    });


    bot.on( 'callback_query', async (query)=> {
        const callbackData = query.data;
        const chatId = query.message.chat.id;
        if (callbackData === "/reply-msg"){
          this.sender = true;
          if (this.lang === "UZB"){
            return bot.sendMessage(chatId, `Iltimos, xabarni bitta matnda yo'llang ${this.sender ? `💌` : `🛑` }`, menuOption);
          }
          if (this.lang === "RUS"){
            return bot.sendMessage(chatId, `Пожалуйста, отправьте сообщение в одном тексте ${this.sender ? `💌` : `🛑` }`, menuOptionRu);
          }
          if (this.lang === "ENG"){
            return bot.sendMessage(chatId, `Please, send the message in one text ${this.sender ? `💌` : `🛑` }`, menuOptionEng);
          }
        }
    })
}

bootstrap()
