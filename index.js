const hintsData = require('./alltexts');
const hintsReplyData = require('./alltexts');
const appealReply = require('./alltexts')
const helloTexts= require('./alltexts')
const stopWrite = require('./alltexts')
const notAdmins = require('./alltexts')

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const TOKEN = process.env.TOKEN
const {
    menuOption, langOption,
    msgOption, menuOptionRu,
    menuOptionEng, msgOptionRu,
    msgOptionEng, hintUrl,
    hintUrlRu, hintUrlEn,
    adminLang, adminFunctionUz
} = require("./options");
const bot = new TelegramBot(TOKEN, {polling: true});
module.exports = {bot}
//axios


const sendMessageTo = async (chatId) => {
    await bot.sendMessage(chatId,
        "Platforma haqida qisqacha malumot",

        )
    }
let sender = false;
let lang = "";
const bootstrap = () => {
    bot.setMyCommands([
        {command: "/start", description: 'Start chat'},
        {command: "/admin", description: 'Only administrator'},
    ])
    bot.on('message', async msg => {
      const firstName = msg.from.first_name;
        // console.log(firstName)
      const chatId = msg.chat.id;
      const username = msg.chat.username
      const text = msg.text;
      const photo = msg.photo;
      const audio = msg.audio;
      const contact = msg.contact;
      const voice = msg.voice;
      const video = msg.video

      if(text === '/start'){
          this.sender = false
          return  bot.sendMessage(chatId, `☺️ Assalomu alaykum hurmatli ${firstName},${helloTexts.helloText.uzAllHello}
☺️ Здравствуйте, ${firstName} ${helloTexts.helloText.ruAllHello}!
☺️ Hello ${firstName}! ${helloTexts.helloText.enAllHello}`, langOption
          )
      }
      //language
      if (text === "Uz"){
          this.lang = "Uz"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, `${hintsData.Hints.uzHints}`,
            menuOption
        )
      }
      if (text === "Ru"){
          this.lang = "Ru"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, `${hintsData.Hints.ruHints}`,
            menuOptionRu
        )
      }
      if (text === "En"){
          this.lang = "En"
          const replyMarkup = { remove_keyboard: true };
        return bot.sendMessage(chatId, `${hintsData.Hints.enHints}`,
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
              `${hintsReplyData.replyHints.uzReply}`,
              hintUrl
              );
      }
      if (text === "Подсказки"){
          this.sender = false;
          return bot.sendMessage(chatId,
              `${hintsReplyData.replyHints.ruReply}`,
              hintUrlRu
              )}
      if (text === "Hints"){
          this.sender = false;
          return bot.sendMessage(chatId,
              `${hintsReplyData.replyHints.enReply}`,
              hintUrlEn
              )}
        // Hints

      // send message
      if (text === "Murojaat") {
          this.sender = true;
          return bot.sendMessage(chatId,
              `${appealReply.replyAppeal.uzAppeal} ${this.sender ? `💌` : `🛑` }`,
              menuOption);
      }
      if (text === "Обращение") {
          this.sender = true;
          return bot.sendMessage(chatId,
              `${appealReply.replyAppeal.ruAppeal} ${this.sender ? `💌` : `🛑` }`,
              menuOptionRu);
      }
      if (text === "Appeal") {
          this.sender = true;
          return bot.sendMessage(chatId,
              `${appealReply.replyAppeal.enAppeal} ${this.sender ? `💌` : `🛑` }`,
              menuOptionEng);
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
                    return bot.sendMessage(chatId,`🛑 ${error}`);
              }
          }
          if (photo){
              try{
                await bot.sendPhoto(mainChatId, photo[0].file_id, {
                    caption: `❗️From @${username} new message:<b>${msg.caption}</b>`,
                    parse_mode: `HTML`
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
                  return bot.sendMessage(chatId,`🛑${error}`)
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
                  await bot.sendAudio(mainChatId, audio.file_id,{
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
          if (video){
              try{
                  await bot.sendVideo(mainChatId, video.file_id, {
                      caption: `️From @${username} new message: ${msg.caption}`,
                      parse_mode: "HTML"
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

      //admin
      if (text === "/admin"){
          if (chatId === 5327269353){
              const replyMarkup = { remove_keyboard: true };
              this.lang === "";
                return bot.sendMessage(chatId, "Tilni tanlang  |  Выберите язык", adminLang)
              }else {
                 return bot.sendMessage(chatId,
                    `${notAdmins.notAdmin.text}`,langOption)
              }
      }
      //admin

      else {
              if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${stopWrite.notWrite.uzNotWrite}`)
              }
              if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${stopWrite.notWrite.ruNotWrite}`)
              }
              if (this.lang === "En"){
                return bot.sendMessage(chatId,`${stopWrite.notWrite.enNotWrite}`)
              }else {
                  return bot.sendMessage(chatId,
                `${stopWrite.notWrite.uzNotWrite}
    ${stopWrite.notWrite.ruNotWrite}
    ${stopWrite.notWrite.enNotWrite}`
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
    });
    bot.on('callback_query', async (query) => {
        const callbackData = query.data;
        const chatId = query.message.chat.id;
        if (callbackData === "/uzb"){
           await bot.sendMessage(chatId,"Kerakli bandni tanlang",adminFunctionUz)
        }
        if (callbackData === "/members"){
            console.log("users view")
        }
    })
}

bootstrap()