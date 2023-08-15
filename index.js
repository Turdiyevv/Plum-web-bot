const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const TOKEN = process.env.TOKEN
const { menuOption, langOption, msgOption, menuOptionRu, menuOptionEng, msgOptionRu, msgOptionEng, hintUrl, hintUrlRu,
    hintUrlEn
} = require("./options");
const bot = new TelegramBot(TOKEN, {polling: true});


const sendMessageTo = async (chatId) => {
    await bot.sendMessage(chatId,
        "Platforma haqida qisqacha malumot",

        )
    }
let sender = false;
let lang = "";
const bootstrap = () => {
    bot.setMyCommands([
        {command: "/start", description: 'Boshlang\' ich kirish qismi'},
        {command: "/info", description: 'Batafsil ma\'lumot'},
    ])
    bot.on('message', async msg => {
        // console.log(msg)
      const chatId = msg.chat.id;
      const username = msg.chat.username
      const text = msg.text;
      const photo = msg.photo;
      const audio = msg.audio;
      const contact = msg.contact;
      const voice = msg.voice;

      if(text === '/start'){
          this.sender = false
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
          this.lang = ""
          this.sender = false;
          return bot.sendMessage(chatId, "Tilni tanlang",langOption);
      }
      if (text === "Назад"){
          this.lang = ""
          this.sender = false;
          return bot.sendMessage(chatId, "Выберите язык",langOption);
      }
      if (text === "Back"){
          this.lang = ""
          this.sender = false;
          return bot.sendMessage(chatId, "Choose a language",langOption);
      }
        // select

        // Hints
      if (text === "Qo’llanmalar"){
          this.sender = false;
          return bot.sendMessage(chatId,
              "Agar savolingizga javob topa olmagan bo'lsangiz, biz bilan bog'laning. Biz savollarga ular qabul qilingan tartibda javob beramiz.",
              hintUrl
              );
      }
      if (text === "Подсказки"){
          this.sender = false;
          return bot.sendMessage(chatId,
              "Если вы не нашли там ответа на свой вопрос, то напишите нам. Мы отвечаем на вопросы в порядке поступления.",
              hintUrlRu
              )}
      if (text === "Hints"){
          this.sender = false;
          return bot.sendMessage(chatId,
              "If you didn't find the answer to your question there, please contact us. We answer questions in the order in which they are received.",
              hintUrlEn
              )}
        // Hints

      // send message
      if (text === "Murojaat") {
          this.sender = true;
          return bot.sendMessage(chatId, `🔹 Hurmatli mijoz, muammoingizni tez hal etish uchun Plumdagi akkaunt raqamingizni yozishingizni so'raymiz. 
           🔹 Iltimos, xabarni bitta matnda yo'llashga harakat qiling. ${this.sender ? `💌` : `🛑` }`, menuOption);
      }
      if (text === "Обращение") {
          this.sender = true;
          return bot.sendMessage(chatId, `🔹 Уважаемый клиент для быстрого решение вашей проблемы просим Вас написать номер Вашего аккаунта от Plum.
           🔹 Пожалуйста, попробуйте отправить сообщение одним текстом. ${this.sender ? `💌` : `🛑` }`, menuOptionRu);
      }
      if (text === "Appeal") {
          this.sender = true;
          return bot.sendMessage(chatId, `🔹 Dear user, for a quick solution to your problem, please write your account number from Plum application.
           🔹 Please try to send the message in one text. ${this.sender ? `💌` : `🛑` }`, menuOptionEng);
      }
      // send message


      if(this.sender === true){
          const mainChatId =  5327269353
          if (text){
              try {
                  await bot.sendMessage(mainChatId,`❗️From @${username} new message: 
                   ${text}`
                  );
                  if (this.lang === "Uz"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  }
                  if (this.lang === "Ru"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
                  }
                  if (this.lang === "En"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
                  }

              }catch (error){
                  this.sender = false;
                    return bot.sendMessage(chatId,`🛑`);
              }
          }

          if (photo){
              try{
                await bot.sendPhoto(mainChatId, photo[0].file_id, {
                    caption: `❗️From @${username} new message:
                     *${msg.caption}*`,
                    parse_mode: 'Markdown'
                });
                if (this.lang === "Uz"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  }
                  if (this.lang === "Ru"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
                  }
                  if (this.lang === "En"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
                  }
              }catch (error){
                  return bot.sendMessage(chatId,"🛑")
              }
          }

          if (contact) {
              try {
                await bot.sendContact(mainChatId, contact.phone_number, contact.first_name,
                    {
                        caption:`From @${username} new message:`
                    }
                );
                  if (this.lang === "Uz"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  }
                  if (this.lang === "Ru"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
                  }
                  if (this.lang === "En"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
                  }
              }catch (error){
                  return bot.sendMessage(chatId,`🛑 ${error}`)
              }
          }

          if (audio) {
              try {
                  const audioFile = audio.file_id;
                  await bot.sendAudio(mainChatId, audioFile,{
                       caption: `️From @${username} new message:`
                  });
                  if (this.lang === "Uz"){
                    this.sender = false;
                    await bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  }
                  if (this.lang === "Ru"){
                    this.sender = false;
                    await bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
                  }
                  if (this.lang === "En"){
                    this.sender = false;
                    await bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
                  }

              }catch (error){
                  console.log(error)
                  return bot.sendMessage(chatId,`🛑 ${error}`);
              }
          }
          if (voice) {
              try{
                  await bot.sendAudio(mainChatId, voice.file_id, {
                      caption: `️From @${username} new message:`
                    });
                  if (this.lang === "Uz"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  }
                  if (this.lang === "Ru"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
                  }
                  if (this.lang === "En"){
                    this.sender = false;
                    return bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
                  }
              }catch (error){
                  return bot.sendMessage(chatId, `🛑 ${error}`)
              }
          }
      }
      else {
          if (this.lang === "Uz"){
            return bot.sendMessage(chatId," ⚠️ Uzr, siz to'g'ridan to'g'ri xabar yozaolmaysiz !")
          }
          if (this.lang === "Ru"){
            return bot.sendMessage(chatId," ⚠️ Извините, вы не можете написать прямое сообщение !")
          }
          if (this.lang === "En"){
            return bot.sendMessage(chatId," ⚠️ Sorry, you can't write a message directly !")
          }
          else { return bot.sendMessage(chatId,
            `⚠️ Uzr, siz to'g'ridan to'g'ri xabar yozaolmaysiz !
⚠️ Извините, вы не можете написать прямое сообщение !
⚠️ Sorry, you can't write a message directly !`
        )
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
                `🔹 Iltimos, xabarni bitta matnda yo'llashga harakat qiling. ${this.sender ? `💌` : `🛑` }`,
                menuOption
            );
          }
          if (this.lang === "Ru"){
            return bot.sendMessage(chatId,
                `🔹 Пожалуйста, попробуйте отправить сообщение одним текстом. ${this.sender ? `💌` : `🛑` }`,
                menuOptionRu
            );
          }
          if (this.lang === "En"){
            return bot.sendMessage(chatId,
                `🔹 Please try to send the message in one text. ${this.sender ? `💌` : `🛑` }`,
                menuOptionEng
            );
          }
        }
    })
}

bootstrap()
