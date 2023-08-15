module.exports = {
    langOption: {
        reply_markup: {
            keyboard: [
                [
                     {text: "Uz", callback_data: 1},
                     {text: "Ru", callback_data: 2},
                     {text: "En", callback_data: 2},
                ]
            ],
            resize_keyboard: true,
        }
    },

    msgOption: {
        reply_markup: {
            inline_keyboard: [
                 [
                     {text: 'Yana xabar yuborish', callback_data: "/reply-msg"}
                 ]
            ]
        }
    },
    msgOptionRu: {
        reply_markup: {
            inline_keyboard: [
                 [
                     {text: 'Отправить сообщение снова', callback_data: "/reply-msg"}
                 ]
            ]
        }
    },
    msgOptionEng: {
        reply_markup: {
            inline_keyboard: [
                 [
                     {text: 'Send messages again', callback_data: "/reply-msg"}
                 ]
            ]
        }
    },

    menuOption: {
        reply_markup: {
            keyboard: [
                [
                    {text: "Qo’llanmalar", value: '/question'},
                    {text: "Murojaat", value: '/connect'},
                ],
                [
                    {text: "Orqaga", callback_data: '/cancel'},
                ]
            ],
            resize_keyboard: true,
        }
    },
    menuOptionRu: {
        reply_markup: {
            keyboard: [
                [
                    {text: "Подсказки", value: '/question'},
                    {text: "Обращение", value: '/connect'},
                ],
                [
                    {text: "Назад", callback_data: '/cancel'},
                ]
            ],
            resize_keyboard: true,
        }
    },
    menuOptionEng: {
        reply_markup: {
            keyboard: [
                [
                    {text: "Hints", value: '/question'},
                    {text: "Appeal", value: '/connect'},
                ],
                [
                    {text: "Back", callback_data: '/cancel'},
                ]
            ],
            resize_keyboard: true,
        }
    },

    hintUrl: {
        reply_markup:{
            inline_keyboard: [
                [
                    {text: "Qo'llanmaga o'tish", url: "https://plum.uz/faq"}
                ]
            ]
        }
    },
    hintUrlRu: {
        reply_markup:{
            inline_keyboard: [
                [
                    {text: "Перейти к подсказки", url: "https://plum.uz/faq"}
                ]
            ]
        }
    },
    hintUrlEn: {
        reply_markup:{
            inline_keyboard: [
                [
                    {text: "Go to hints", url: "https://plum.uz/faq"}
                ]
            ]
        }
    }
}
