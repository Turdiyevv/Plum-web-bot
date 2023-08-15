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
    },msgOptionRu: {
        reply_markup: {
            inline_keyboard: [
                 [
                     {text: 'Отправить сообщение снова', callback_data: "/reply-msg"}
                 ]
            ]
        }
    },msgOptionEng: {
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
                    {text: "Bizga_xabar_yuboring", value: '/connect'},
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
                    {text: "Напишите_нам", value: '/connect'},
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
                    {text: "Send_us_a_message", value: '/connect'},
                ],
                [
                    {text: "Back", callback_data: '/cancel'},
                ]
            ],
            resize_keyboard: true,
        }
    },
}
