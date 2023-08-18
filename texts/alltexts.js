
const helloText = {
     uzAllHello: ` sizni foydalanuvchilarimizni qo’llab quvvatlash botimizda ko'rib turganimizdan xursandmiz! Maqbul tilni tanlang.`,
     ruAllHello: `Мы рады видеть вас в нашем специальном боте для поддержки наших пользователей! Выберите подходящий язык.`,
     enAllHello: `We are glad to see you in our special bot to support our users! Choose language.`
}
const Hints = {
    uzHints: "Bizda eng ko'p beriladigan savollarga tayyor javoblar bor, siz “Qo’llanmalar” havolasini bosish orqali o'qishingiz mumkin",
    ruHints: "Мы ответили на наиболее часто задаваемые вопросы, с которыми вы можете ознакомиться, перейдя по ссылке на “Подсказки”.",
    enHints: "We have answered the most frequently asked questions, which you can read by clicking on the link to Hints",
}
const replyHints = {
    uzReply: "Agar savolingizga javob topa olmagan bo'lsangiz, biz bilan bog'laning. Biz savollarga ular qabul qilingan tartibda javob beramiz.",
    ruReply: "Если вы не нашли там ответа на свой вопрос, то напишите нам. Мы отвечаем на вопросы в порядке поступления.",
    enReply: "If you didn't find the answer to your question there, please contact us. We answer questions in the order in which they are received."
}
const replyAppeal = {
    uzAppeal: "🔹 Hurmatli mijoz, muammoingizni tez hal etish uchun Plumdagi akkaunt raqamingizni yozishingizni so'raymiz. 🔹 Iltimos, xabarni bitta matnda yo'llashga harakat qiling.",
    ruAppeal: "🔹 Уважаемый клиент для быстрого решение вашей проблемы просим Вас написать номер Вашего аккаунта от Plum.🔹 Пожалуйста, попробуйте отправить сообщение одним текстом.",
    enAppeal: "🔹 Dear user, for a quick solution to your problem, please write your account number from Plum application.🔹 Please try to send the message in one text."
}
const notWrite = {
    uzNotWrite: "⚠️ Uzr, siz to'g'ridan to'g'ri xabar yozaolmaysiz !",
    ruNotWrite: "⚠️ Извините, вы не можете написать прямое сообщение !",
    enNotWrite: "⚠️ Sorry, you can't write a message directly !",
}


const notAdmin = {
    text: "⚠️ Bu buyruq faqat admin uchun mavjud!" +
        " ⚠️Этo команда доступнo только для администратора!"
}
module.exports = {Hints, replyHints, replyAppeal, helloText, notWrite, notAdmin}