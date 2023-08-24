const hintsData = require('./texts/alltexts');
const hintsReplyData = require('./texts/alltexts');
const appealReply = require('./texts/alltexts')
const helloTexts= require('./texts/alltexts')
const stopWrite = require('./texts/alltexts')
const notAdmins = require('./texts/alltexts')
const {
        menuOption, langOption, msgOption, menuOptionRu,
        menuOptionEng, msgOptionRu, msgOptionEng, adminLang,
        adminFunctionUz, adminFunctionRu
    } = require("./options/options");
const {
        hintsOption, hintsOptionEn, hintsOptionRu
    } = require("./options/optionHint")
const {virtualCard, myId, savedPayments, customize,
        myPayments, QPay, Security, offlineMode,
        notification, history,QRScanner, ExchangeRates,TaxServices,
        AutoPayment, TrafficPolice, FarePayment, Payment, RequestFunds,
        byUsername, usingQRCode, TransferFounds, AccessCard, AddingCard,
        OTP, InstallingApp
    } = require("./texts/hint");


const TelegramBot = require('node-telegram-bot-api');
const {raw} = require("express");
const {hintFunction} = require("./options/hintFunction");
require('dotenv').config()
const TOKEN = process.env.TOKEN
// const PORT = process.env.PORT || 5000
const bot = new TelegramBot(TOKEN, {polling: true});
module.exports = {bot, TOKEN, TelegramBot}

//db
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected true')
}).catch(err => console.log(err))
//db
const User = require('./db/user')
const repl = require("repl");


let sender = false;
let lang = "";
const bootstrap = () => {
    bot.setMyCommands([
        {command: "/start", description: 'Start chat'},
        {command: "/admin", description: 'Only administrator'},
    ])
    bot.on('message', async msg => {
      const firstName = msg.from.first_name;
      const chatId = msg.chat.id;
      const username = msg.chat.username
      const text = msg.text;
      const photo = msg.photo;
      const audio = msg.audio;
      const contact = msg.contact;
      const voice = msg.voice;
      const video = msg.video;
      const document = msg.document;


      if(text === '/start'){
          this.sender = false;
          try {
              const newUser = {
                  id: msg.chat.id,
                  first_name: msg.chat.first_name,
                  username: msg.chat.username,
                  msgId: msg.message_id,
                  msgText: msg.text,
                  isMsg: false,
                  date: msg.date
              };
              const check = await User.findOne({id: msg.chat.id});
              if (check){
                  return  bot.sendMessage(chatId, `❇️
                    ☺️ Assalomu alaykum hurmatli ${firstName},${helloTexts.helloText.uzAllHello}
                    ☺️ Здравствуйте, ${firstName} ${helloTexts.helloText.ruAllHello}!
                    ☺️ Hello ${firstName}! ${helloTexts.helloText.enAllHello}`, langOption
                )
              }else{
                  await User.create(newUser)
                      .then((res)=> {
                          return  bot.sendMessage(chatId, `✅
                            ☺️ Assalomu alaykum hurmatli ${firstName},${helloTexts.helloText.uzAllHello}
                            ☺️ Здравствуйте, ${firstName} ${helloTexts.helloText.ruAllHello}!
                            ☺️ Hello ${firstName}! ${helloTexts.helloText.enAllHello}`, langOption
                            )
                      }).catch(err => {
                          bot.sendMessage(chatId, err)
                      })
              }
          }catch (err){
              bot.sendMessage(chatId, err)
          }
          return
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
              hintsOption
              );
      }
      if (text === "Подсказки"){
          this.sender = false;
          return bot.sendMessage(chatId,
              `${hintsReplyData.replyHints.ruReply}`,
              hintsOptionRu
              )}
      if (text === "Hints"){
          this.sender = false;
          return bot.sendMessage(chatId,
              `${hintsReplyData.replyHints.enReply}`,
              hintsOptionEn
              )}
        // Hints

      // send message
      if (text === "Murojaat") {
          try {
            await User.findOneAndUpdate({ id: msg.chat.id, isMsg: true});
            return bot.sendMessage(chatId,
              `${appealReply.replyAppeal.uzAppeal}`,
              menuOption);
          }catch (err){
              bot.sendMessage(chatId, `🛑${err}`)
          }
      }
      if (text === "Обращение") {
          try {
              await User.findOneAndUpdate({id: msg.chat.id, isMsg: true});
              return bot.sendMessage(chatId,
                  `${appealReply.replyAppeal.ruAppeal}`,
                  menuOptionRu);
          }catch (err){
              bot.sendMessage(chatId, `🛑${err}`)
          }
      }
      if (text === "Appeal") {
          try {
              await User.findOneAndUpdate({id: msg.chat.id, isMsg: true});
              return bot.sendMessage(chatId,
                  `${appealReply.replyAppeal.enAppeal}`,
                  menuOptionEng);
          }catch (err){
              bot.sendMessage(chatId, `🛑${err}`)
          }
      }
      // send message


      if (text){
        const checkSendMessage = await User.findOne({id: chatId});
          if (checkSendMessage) {
            if (checkSendMessage.isMsg === true){
                const mainChatId =  5327269353
              await bot.sendMessage(mainChatId,`❗️From @${username} new message: 
               ${text}`
              );
              if (lang === "Uz"){
                return bot.sendMessage(chatId,`Xabar yetkazildi ✅`, msgOption);
                  console.log(lang)
              }
              if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`Сообщение доставлено ✅`, msgOptionRu);
              }
              if (this.lang === "En"){
                return bot.sendMessage(chatId,`Message delivered ✅`, msgOptionEng);
              }
            }
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
      if(document){
          try {
              await bot.sendDocument(mainChatId, document.file_id, {
                  caption: `From @${username} new message: ${msg.caption}`,
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
          }catch (err){
              return bot.sendMessage(chatId, `🛑 ${err}`)
          }
      }

      //admin
      if (text === "/admin"){
          if (chatId === 5327269353){
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
              }
              else {
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
        module.exports = {lang} //export
        if (callbackData === '/1') {
            if (this.lang === "Uz"){
                await bot.sendMessage(chatId,`${virtualCard.uzCard}`)
            }
            if (this.lang === "Ru"){
                await bot.sendMessage(chatId,`${virtualCard.ruCard}`)
            }
            if (this.lang === "En"){
                await bot.sendMessage(chatId,`${virtualCard.enCard}`)
            }
        }
        if (callbackData === '/2') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${myId.uzMyId}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${myId.ruMyId}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${myId.enMyId}`)
            }
        }
        if (callbackData === '/3') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${savedPayments.uzPayments}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${savedPayments.ruPayments}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${savedPayments.enPayments}`)
            }
        }
        if (callbackData === '/4') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${customize.uzCustomize}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${customize.ruCustomize}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${customize.enCustomize}`)
            }
        }
        if (callbackData === '/5') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${myPayments.uzMyPayments}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${myPayments.ruMyPayments}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${myPayments.enMyPayments}`)
            }
        }
        if (callbackData === '/6') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${QPay.uzQPay}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${QPay.ruQPay}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${QPay.enQPay}`)
            }
        }
        if (callbackData === '/7') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${Security.uzSecurity}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${Security.ruSecurity}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${Security.enSecurity}`)
            }
        }
        if (callbackData === '/8') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${offlineMode.uzOfflineMode}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${offlineMode.ruOfflineMode}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${offlineMode.enOfflineMode}`)
            }
        }
        if (callbackData === '/9') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${notification.uzNotification}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${notification.ruNotification}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${notification.enNotification}`)
            }
        }
        if (callbackData === '/10') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${history.uzHistory}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${history.ruHistory}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${history.enHistory}`)
            }
        }
        if (callbackData === '/11') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${QRScanner.uzQRScanner}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${QRScanner.ruQRScanner}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${QRScanner.enQRScanner}`)
            }
        }
        if (callbackData === '/12') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${ExchangeRates.uzExchangeRates}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${ExchangeRates.ruExchangeRates}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${ExchangeRates.enExchangeRates}`)
            }
        }
        if (callbackData === '/13') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${TaxServices.uzTaxServices}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${TaxServices.ruTaxServices}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${TaxServices.enTaxServices}`)
            }
        }
        if (callbackData === '/14') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${AutoPayment.uzAutoPayment}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${AutoPayment.ruAutoPayment}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${AutoPayment.enAutoPayment}`)
            }
        }
        if (callbackData === '/15') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${TrafficPolice.uzTrafficPolice}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${TrafficPolice.ruTrafficPolice}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${TrafficPolice.enTrafficPolice}`)
            }
        }
        if (callbackData === '/16') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${FarePayment}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${FarePayment}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${FarePayment}`)
            }
        }
        if (callbackData === '/17') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${Payment.uzPayment}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${Payment.ruPayment}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${Payment.enPayment}`)
            }
        }
        if (callbackData === '/18') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${RequestFunds.uzRequestFunds}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${RequestFunds.ruRequestFunds}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${RequestFunds.enRequestFunds}`)
            }
        }
        if (callbackData === '/19') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${byUsername.uzByUsername}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${byUsername.ruByUsername}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${byUsername.enByUsername}`)
            }
        }
        if (callbackData === '/20') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${usingQRCode.uzUsingQRCode}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${usingQRCode.ruUsingQRCode}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${usingQRCode.enUsingQRCode}`)
            }
        }
        if (callbackData === '/21') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${TransferFounds.uzTransferFounds}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${TransferFounds.ruTransferFounds}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${TransferFounds.enTransferFounds}`)
            }
        }
        if (callbackData === '/22') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${AccessCard.uzAccessCard}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${AccessCard.ruAccessCard}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${AccessCard.enAccessCard}`)
            }
        }
        if (callbackData === '/23') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${AddingCard.uzAddingCard}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${AddingCard.ruAddingCard}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${AddingCard.enAddingCard}`)
            }
        }
        if (callbackData === '/24') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${OTP.uzOTP}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${OTP.ruOTP}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${OTP.enOTP}`)
            }
        }
        if (callbackData === '/25') {
            if (this.lang === "Uz"){
                return bot.sendMessage(chatId,`${InstallingApp.uzInstallingApp}`)
            }
            if (this.lang === "Ru"){
                return bot.sendMessage(chatId,`${InstallingApp.ruInstallingApp}`)
            }
            if (this.lang === "En"){
                return bot.sendMessage(chatId,`${InstallingApp.enInstallingApp}`)
            }
        }
    })


    bot.on('callback_query', async (query) => {
        const callbackData = query.data;
        const chatId = query.message.chat.id;
        const language = ""
        if (callbackData === "/uzb"){
            this.language = 'uzb'
           await bot.sendMessage(chatId,"Kerakli bandni tanlang",adminFunctionUz)
        }
        if (callbackData === "/rus"){
            this.language = 'rus'
           await bot.sendMessage(chatId,"Выберите нужный пункт",adminFunctionRu)
        }
        if (callbackData === "/members"){
            if (language === "uzb"){
                return console.log("userlarni ko'rish")
            }
            if(language === "rus") {
                return console.log('Просмотр пользователей')
            }
        }
    })
}

bootstrap()