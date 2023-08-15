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
    ])
    bot.on('message', async msg => {
        // console.log(msg)
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
          `☺️ Assalomu alaykum hurmatli ${msg.from.first_name} sizni foydalanuvchilarimizni qo’llab quvvatlash botimizda ko'rib turganimizdan xursandmiz! Maqbul tilni tanlang.
              
          ☺️ Здравствуйте, ${msg.from.first_name}! Мы рады видеть вас в нашем специальном боте для поддержки наших пользователей! Выберите подходящий язык.
              
          ☺️ Hello ${msg.from.first_name}! We are glad to see you in our special bot to support our users! Choose language.`,
              langOption
          )
  }
      //language
      if (text === "Uz"){
          this.lang = "Uz"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "Bizda eng ko'p beriladigan savollarga tayyor javoblar bor, siz “Qo’llanmalar” havolasini bosish orqali o'qishingiz mumkin",
            menuOption
        )
      }
      if (text === "Ru"){
          this.lang = "Ru"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "Мы ответили на наиболее часто задаваемые вопросы, с которыми вы можете ознакомиться, перейдя по ссылке на “Подсказки”.",
            menuOptionRu
        )
      }
      if (text === "En"){
          this.lang = "En"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, "We have answered the most frequently asked questions, which you can read by clicking on the link to Hints",
            menuOptionEng
        )
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

        // Hints
      if (text === "Qo’llanmalar"){
          return bot.sendMessage(chatId,
              "Agar savolingizga javob topa olmagan bo'lsangiz, biz bilan bog'laning. Biz savollarga ular qabul qilingan tartibda javob beramiz."
              )
      }
      if (text === "Подсказки"){
          return bot.sendMessage(chatId,
              "Если вы не нашли там ответа на свой вопрос, то напишите нам. Мы отвечаем на вопросы в порядке поступления."
              )}
      if (text === "Hints"){
          return bot.sendMessage(chatId,
              "If you didn't find the answer to your question there, please contact us. We answer questions in the order in which they are received."
              )}
        // Hints

      // send message
      if (text === "Bizga_xabar_yuboring") {
          this.sender = true;
          return bot.sendMessage(chatId, `Hurmatli mijoz, muammoingizni tez hal etish uchun Plumdagi akkaunt raqamingizni yozishingizni so'raymiz. 
                Iltimos, xabarni bitta matnda yo'llashga harakat qiling. ${this.sender ? `💌` : `🛑` }`, menuOption);
      }
      if (text === "Напишите_нам") {
          this.sender = true;
          return bot.sendMessage(chatId, `Уважаемый клиент для быстрого решение вашей проблемы просим Вас написать номер Вашего аккаунта от Plum.
                Пожалуйста, попробуйте отправить сообщение одним текстом. ${this.sender ? `💌` : `🛑` }`, menuOptionRu);
      }
      if (text === "Send_us_a_message") {
          this.sender = true;
          return bot.sendMessage(chatId, `Dear user, for a quick solution to your problem, please write your account number from Plum application.
                Please try to send the message in one text. ${this.sender ? `💌` : `🛑` }`, menuOptionEng);
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
          if (this.lang === "Uz"){
            await bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
            this.sender = false;
          }
          if (this.lang === "Ru"){
            await bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
            this.sender = false;
          }
          if (this.lang === "En"){
            await bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
            this.sender = false;
          }
          //done
      }


      else {
          if (this.lang === "Uz"){
            bot.sendMessage(chatId," ⚠️ Uzr, siz to'g'ridan to'g'ri xabar yozaolmaysiz !")
          }
          if (this.lang === "Ru"){
            bot.sendMessage(chatId," ⚠️ Извините, вы не можете написать прямое сообщение !")
          }
          if (this.lang === "En"){
            bot.sendMessage(chatId," ⚠️ Sorry, you can't write a message directly !")
          }
      }
    });


    bot.on( 'callback_query', async (query)=> {
        const callbackData = query.data;
        const chatId = query.message.chat.id;
        if (callbackData === "/reply-msg"){
          this.sender = true;
          if (this.lang === "Uz"){
            return bot.sendMessage(chatId,
                `Hurmatli mijoz, muammoingizni tez hal etish uchun Plumdagi akkaunt raqamingizni yozishingizni so'raymiz. 
                Iltimos, xabarni bitta matnda yo'llashga harakat qiling. ${this.sender ? `💌` : `🛑` }`,
                menuOption
            );
          }
          if (this.lang === "Ru"){
            return bot.sendMessage(chatId,
                `Уважаемый клиент для быстрого решение вашей проблемы просим Вас написать номер Вашего аккаунта от Plum.
                Пожалуйста, попробуйте отправить сообщение одним текстом. ${this.sender ? `💌` : `🛑` }`,
                menuOptionRu
            );
          }
          if (this.lang === "En"){
            return bot.sendMessage(chatId,
                `Dear user, for a quick solution to your problem, please write your account number from Plum application.
                Please try to send the message in one text. ${this.sender ? `💌` : `🛑` }`,
                menuOptionEng
            );
          }
        }
    })
}

bootstrap()
