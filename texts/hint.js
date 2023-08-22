const virtualCard = {
    uzCard: "Virtual karta" +
        "Ushbu xizmat identifikatsiyadan o'tgan foydalanuvchilarga taqdim etiladi. Virtual karta jismoniy shaxsning bank kartasi bilan bir xil. Virtual kartadan foydalanib, foydalanuvchi boshqa bank kartalariga pul o'tkazmalarini yoki to'lovlar amalga oshirishi mumkin.Foydalanuvchilar bankka tashrif buyurishlari shart emas. Virtual karta bepul taqdim etiladi." +
        "Bajarilishi kerak bo'lgan amallar: " +
        "- to'lov tizimi " +
        "- emitent bank tanlash." +
        "Agar ariza muvaffaqiyatli bo'lsa (ma'lumotlar bank tomonidan muvaffaqiyatli qayta ishlansa), karta yaratiladi va avtomatik ravishda Bosh sahifada ko'rsatiladi." +
        "Karta raqamini yo'qotmaslik uchun karta tizimda o'chirib bo'lmaydi balki faolligi to'xtatiladi.Kartani faollashtirish SMS kodni tasdiqlash bilan karta sozlamalarida mumkin.",
    ruCard: "Виртуальная карта" +
        "Данная услуга предоставляется идентифицированным пользователям. Виртуальная карта идентична банковской карте физического лица." +
        "С помощью виртуальной карты пользователь может осуществлять платежи и переводы на другие банковские карты.Пользователям не требуется посещение банка.Виртуальная карта предоставляется бесплатно." +
        "При создании пользователь должен выбирать: " +
        "-платежную систему, " +
        "-банк-эмитент. " +
        "-Процесс создания виртуальной карты" +
        "Если заявка успешна (данные успешно обработы со стороны банка), то карта создается и автоматически отображается на Главной странице.Во избежание потери номер карты невозможно удалить. Есть возможность деактивации.А активация карты возможны в настройках карт с обязательным СМС подтверждением.",
    enCard: "Virtual card" +
        "This service is provided to identified users. A virtual card is identical to a bank card of an individual." +
        "Using a virtual card, the user can make payments and transfers to other bank cards. Users do not need to visit the bank.The virtual card is provided free of charge. While creating the card, the user must choose: " +
        "- payment system, " +
        "- issuing bank. " +
        "-The process of creating a virtual card" +
        "If the application is successful (the data is successfully processed by the bank), then the card is created and automatically displayed on the Home page.To avoid loss, the card number cannot be deleted. There is an option to deactivate it.And card activation is possible in the card settings with the SMS confirmation.",
} //1
const myId = {
    uzMyId: "My ID" +
        "Ushbu funksiya firibgarlik holatlarining oldini olish uchun foydalanuvchilar akkauntlari xavfsizligini ta'minlash uchun mo'ljallangan." +
        "Ro'yxatdan o'tishda yangi foydalanuvchi Identifikatsiya jarayonidan o'tishi kerak (seriya va pasport raqamini kiritish, qurilmaning old kamerasidan foydalangan holda yuzni pasportdagi fotosurat bilan solishtirish)." +
        "Agar sizda bizning ilovamizda akkaunt mavjud bo'lsa, My ID-dan foydalanib o'zingizni identifikatsiya qilishingiz kerak bo'ladi (jarayon yuqorida tavsiflangan)." +
        "Kartani qo'shish uchun, foydalanuvchi identifikatsiyadan o'tgan bo'lishi kerak (My ID)." +
        "Parolingizni qayta tiklash xam identifikatsiyani talab qiladi('Parolni unutdingizmi?')",
    ruMyId: "My ID" +
        "Данная функция предназначена для обеспечения безопасности пользователя во избежание случаев мошенничества." +
        "При регистрации новому пользователю необходимо пройти процесс Идентификацию (ввод серии и номера паспорта, сравнение лица с фото в паспорте с помощью фронтальной камеры устройства)." +
        "Если Вы уже имеете аккаунт в нашем приложении, то нужно будет Идентифицировать свою личность с помощью My ID (процесс описан выше)." +
        "При попытке добавить карту, аккаунт пользователя должен быть Идентифицирован (My ID). Иначе это будет невозможно." +
        "При попытке сброса пароля («Забыли пароль?») так же необходимо пройти процесс Идентификации.",
    enMyId: "My ID" +
        "This function is intended to ensure the safety of the user in order to avoid cases of fraud." +
        "During the registration, a new user must go through the Identification process (entering the series and passport number, comparing the face with the photo in the passport using the front camera of the phone)." +
        "If you already have an account in our application, you will need to identify yourself via My ID (the process is described above)." +
        "If you want to add a new card, the user account must be identified (My ID). Otherwise it will be impossible." +
        "When you try to reset your password (“Forgot your password?”), you also need to go through the Identification process.",
} //2
const savedPayments = {
    uzPayments: "Saqlangan to'lovlar" +
        "Bu funksiya to'lovlarni saqlash va o'chirish imkonini beradi. To'lov vaqtida doimiy ma'lumotlardan foydalanadigan to'lov turlariga qulay. Xizmatga to'langandan so'ng, 'Saqlash' tugmasini bosib, kelgusida ro'yxatdan kerakli to'lovni tanlang yoki vidjetning o'zida yangi to'lov yarating.",
    ruPayments: "Сохраненные платежи" +
        "Эта функция позволяет сохранять и удалять платежи. Функция удобна для видов оплат, в которых используются постоянные данные при оплате. После совершения платежа достаточно нажать «Сохранить», и в дальнейшем вы можете выбрать необходимый платеж из списка. При желании можете создать новый платеж в самом виджете.",
    enPayments: "Saved Payments" +
        "This feature allows you to save and delete payments. The function is useful for payment types that use fixed data during payment. After making a payment, just click 'Save', and in the future you can select the required payment from the list. If you wish, you can create a new payment in the widget itself.",
} //3
const customize = {
    uzCustomize: "Interfeysini o‘zingiz uchun moslashtiring!" +
        "Vidjetlarni ilovada xoxishingizga ko'ra koʻchirish mumkin.",
    ruCustomize: "Настраивайте интерфейс под себя!" +
        "В приложении можно перемещать виджеты.",
    enCustomize: "Customize the interface for yourself!" +
        "Widgets can be moved around in the app.",
} //4
const myPayments = {
    uzMyPayments: "Mening to'lovlarim" +
        "Bu siz tez-tez amalga oshiradigan to'lovlar uchun, ma'lumotlarni kiritmasdan, tez to'lov funksiyasi.",
    ruMyPayments: "Мои платежи" +
        "Функция быстрой оплаты без ввода данных для тех платежей, которые вы совершаете чаще всего.",
    enMyPayments: "My payments" +
        "A quick payment function without entering data for those payments that you make most often.",
} //5
const QPay = {
    uzQPay: "Q-Pay" +
        "Q-Pay-bu jismoniy plastik kartalarni unutishingiz mumkin bo'lgan xizmat!" +
        "Xarid qilganingizda, siz bizning arizamiz tomonidan yaratilgan QR kodini ko'rsatishingiz kerak va sotib olish to'lanadi.",
    ruQPay: "Q-Pay" +
        "Q-Pay - это сервис, благодаря которому вы можете забыть о физических пластиковых картах!" +
        "При оформлении покупки вам достаточно показать QR-код, сгенерированный нашим приложением, и покупка будет оплачена.",
    enQPay: "Q-Pay" +
        "Q-Pay is a service thanks to which you can forget about physical plastic cards!" +
        "When you make a purchase, you just need to show the QR code generated by our application, and the purchase will be paid.",
} //6
const Security = {
    uzSecurity: "Xavfsizlik" +
        "Plum foydalanuvchi hisoblari xavfsizligini taʼminlash uchun toʻlov tizimida bir martalik tasdiqlash kodini (OTP) yuborish va kiritish boʻyicha baʼzi cheklovlar mavjud: " +
        "- barcha turdagi tasdiqlash kodini yuborishning maksimal soni - kuniga 50 marta; " +
        "- ro'yxatdan o'tish / avtorizatsiya qilish uchun tasdiqlash kodini yuborishning maksimal soni - kuniga 25 marta; " +
        "- to'lov/o'tkazmalar uchun tasdiqlash kodini yuborishning maksimal soni - kuniga 25 marta; " +
        "- hisobni tiklash uchun tasdiqlash kodini yuborishning maksimal soni kuniga 5 marta; " +
        "- ketma-ket noto'g'ri kiritilgan tasdiqlash kodlari soni - 5 marta, shundan so'ng hisob / karta 24 soat davomida bloklanadi.",
    ruSecurity: "Безопасность" +
        "Для обеспечения безопасности аккаунтов пользователей Plum в платежной системе существуют некоторые ограничения по отправке и вводу одноразового кода подтверждения (OTP):" +
        "— максимальное количество отправки кода подтверждения всех видов - 50 раз в день;" +
        "— максимальное количество отправки кода подтверждения для регистрации/авторизации - 25 раз в день" +
        "— максимальное количество отправки кода подтверждения для оплаты/переводов - 25 раз в день;" +
        "— максимальное количество отправки кода подтверждения для восстановления аккаунта - 5 раз в день;" +
        "— количество неверно введенных кодов подтверждения подряд - 5 раз, после чего аккаунт/карта блокируется на 24 часа." +
        "Лимит сеансов." +
        "Для обеспечения конфиденциальности и безопасности наших пользователей мы установили лимит сеансов, совершаемых с одного девайса. Что это значит? Пользователь в праве заходить в существующие аккаунты (включая свой) только 3 раза. Данное стратегически верное решение было принято во избежание ситуаций мошенничества." +
        "VPN" +
        "С включенным VPN использование и совершение различных операций (регистрация, восстановление пароля и добавление карты) в нашем приложении невозможны.",
    enSecurity: "Securyty" +
        "To ensure the security of Plum user accounts, the payment system has some restrictions on sending and entering a one-time confirmation code (OTP): " +
        "- the maximum number of sending a confirmation code of all types - 50 times a day; " +
        "- the maximum number of sending a confirmation code for registration / authorization - 25 times a day; " +
        "- the maximum number of sending a confirmation code for payment / transfers - 25 times a day; " +
        "- the maximum number of sending a confirmation code to restore an account is 5 times a day; " +
        "- the number of incorrectly entered confirmation codes in a row - 5 times, after which the account / card is blocked for 24 hours." +
        "Seanslar bo'yicha limitlar." +
        "Foydalanuvchilarimizning maxfiyligi va xavfsizligini ta'minlash uchun biz bitta qurilmadan qilingan seanslar uchun cheklov o'rnatdik. Bu nima degani? Foydalanuvchi mavjud akkauntlariga (shu jumladan o'zining) faqat 3 marta kirish huquqiga ega. Ushbu strategiya firibgarlik holatlarining oldini olish uchun qabul qilindi." +
        "VPN" +
        "VPN yoqilgan bo'lsa, bizning ilovamizda turli xil operatsiyalarni (ro'yxatdan o'tish, parolni tiklash va karta qo'shish) funksiyalarni bajarish mumkin emas." +
        "Session limit." +
        "To provide the privacy and security of our users, we have set a limit on sessions made from an every single device. What does it mean? The user has the right to log into existing accounts (including his own) only 3 times. This strategically correct decision was made in order to avoid situations of fraud." +
        "VPN" +
        "It is not possible to use and create any (registration, password recovery and adding a card) operations in our application with the VPN enabled.",
} //7
const offlineMode = {
    uzOfflineMode: "Offlayn rejim" +
        "'Plum' ilovasining oflayn rejimidan foydalanib, zavq olish uchun internet yo‘qligining o‘zi yetarli emas! Buning uchun oflayn rejimi asoslanadigan, 'USSD' tizimida ro‘yxatdan o‘tgan bo‘lishingiz kerak." +
        "Agar siz haligacha 'USSD' tizimiga ulanmagan bo‘lsangiz, / ilovasi o‘zi sizga ro‘yxatdan o‘tishni taklif etadi. Buning uchun, istalgan oflayn rejim operatsiyasi vaqtida kartangiz raqamini kiritishingiz kerak bo‘ladi xolos. Bundan tashqari, 898# ni terish va shundan so‘ng barcha ko‘rsatmalarga amal qilish zarur bo‘lgan qisqa USSD kodi orqali ham ro‘yxatdan o‘tish mumkin.",
    ruOfflineMode: "Оффлайн режим" +
        "Чтобы открыть для себя все прелести пользования оффлайн-режима приложения Plum, отсутствия интернета недостаточно! Необходимо быть зарегистрированным в системе USSD, на основе которой и базируется оффлайн-режим. А если вас ещё нет в системе USSD, то приложение Plum само предложит вам зарегистрироваться. Для этого нужно всего лишь ввести номер вашей карты во время проведения какой-либо операции в оффлайн-режиме. Также регистрацию можно осуществить набрав короткий код USSD 898#, после чего необходимо следовать всем дальнейшим инструкциям",
    enOfflineMode: "Offline mode!" +
        "To discover all the delights of using the offline mode of the Plum application, the absence of the Internet is not enough! You must be registered in the USSD system, on the basis of which the offline mode is based.And if you are not yet in the USSD system, then the Plum application will prompt you to register. To do this, you just need to enter your card number during any operation in offline mode. You can also register by dialing the USSD short code 898#, after which you must follow all further instructions.",
} //8
const notification = {
    uzNotification: "SMS-xabarnoma xizmati" +
        "To'lov ilovasidan foydalanish uchun, to'lovlar haqidagi SMS-xabarnoma xizmatini ulash shart. Buni qilish juda oson: sizga eng yaqin joylashgan bankomatni topish yetarli. Batafsil ko'rsatmani bizning publikatsiyamizda ko'rishingiz mumkin.",
    ruNotification: "Услуга SMS-информирование" +
        "Чтобы пользоваться платежным приложением, нужно обязательно подключить SMS-уведомления о платежах. Это сделать легко - достаточно найти ближайший банкомат. Подробную инструкцию смотрите в нашей публикации.",
    enNotification: "SMS-notification" +
        "To use this payment application, it is necessary to connect SMS-notifications about payments. It's easy - just find the nearest ATM. See our post for detailed instructions.",
} //9
const history = {
    uzHistory: "To'lovlar tarixi" +
        "Sizning barcha xarajatlaringiz va kirimlaringiz haqida to'liq ma`lumotni olishga imkon beradi. Xizmatni Akkaunt sozlamalarida 'Xizmatlar' bo'limidagi tugmachani faollashtirish orqali yoqishingiz mumkin. Xizmat narxi 1 oy davomida 1000 UZSni tashkil qiladi." +
        "Umumiy balans - barcha kartalaringizning umumiy balansini olish qobiliyati.",
    ruHistory: "История платежей" +
        "Позволяет получить полную историю по всем вашим расходам и пополнениям. Вы можете подключить услугу в настройках профиля в разделе “Сервисы”, активировав кнопку. Стоимость услуги 1000 UZS за 1 месяц." +
        "Общий баланс - возможность получать общий баланс всех Ваших карт.",
    enHistory: "Payment history" +
        "Allows you to get a complete history of all your expenses and replenishments. You can activate the service in the profile settings in the “Services” section by activating the button. The cost of the service is 1000 UZS per month." +
        "General balance - the ability to get the total balance of all your cards.",
} //10
const QRScanner = {
    uzQRScanner: "QR-skaner va joylarda to'lov" +
        "To'lov uchun xizmat ko'rsatuvchi provayderning QR-kodni skanerlash uchun qulay, shuningdek, mablag'ni tez o'tkazishda ham foydalaniladi",
    ruQRScanner: "QR-сканер и оплата на местах" +
        "Удобно для сканирования QR-кода поставщика услуг для дальнейшей оплаты, также используется для быстрого перевода средств",
    enQRScanner: "QR-scanner & Payment by location" +
        "Convenient for scanning the QR code of the service provider for further payment, it is also used for quick transfers of funds",
} //11
const ExchangeRates = {
    uzExchangeRates: "Valyuta kursi" +
        "Asosiy valyutalar uchun joriy kurs",
    ruExchangeRates: "Курс валют" +
        "Актуальный курс по основным валютам",
    enExchangeRates: "Exchange Rates" +
        "The current exchange rate for major currencies",
} //12
const TaxServices = {
    uzTaxServices: "Soliq xizmatlari" +
        "Endi qarzingiz bor yoki yo‘qligini aniqlash imkoniyati paydo bo‘ldi.Buning uchun vidjetlar ro‘yxatiga 'Soliq xizmatlari'ni qo‘shing va ma’lumotlaringizni kiriting. Qarzdorlikni yopish uchun ma'lumotni kiriting va to'lovni amalga oshiring. Agar qarzdorlik bo‘lsa, ilovani tark etmasdan to‘lashingiz mumkin" +
        "Ushbu xizmat tufayli siz o'zingizning STIR raqamingizni bilib olishingiz mumkin." +
        "Pasportingizning seriyasini va raqamini kiriting" +
        "Tug'ilgan sanakiriting" +
        "Tizim sizning STIR raqamingizni ko'rsatadi, shuningdek siz STIR-ni yuklab olishingiz mumkin.",
    ruTaxServices: "Налоговые услуги" +
        "Теперь появилась возможность узнать, есть ли у вас задолженности." +
        "Для этого добавьте 'Налоговые услуги' в список виджетов и укажите свои данные. Для использования данного функционала, укажите свои данные. При наличии долга, Вы можете погасить его не выходя из приложения." +
        "Благодаря данной услуге Вы можете в пару кликов узнать свой ИНН или ПНФЛ." +
        "Введите серию и номер паспорта;" +
        "Дату рождения;" +
        "Система отобразит Ваш ИНН (ПНФЛ);" +
        "При необходимости Вы можете их скачать.",
    enTaxServices: "Tax services" +
        "Now there is an opportunity to find out if you have debts. Add the 'Tax services' widjet and enter your details. To pay off enter your data. If there is a debt, you can pay it." +
        "One of the convenienсеs of this service, you can find out your TIN in a couple clicks." +
        "Enter the series and number of your passport;" +
        "Date of birth;" +
        "The system will display your TIN;" +
        "You can also download it.",
} //13
const AutoPayment = {
    uzAutoPayment: "Avto-to'lov" +
        "Bu doimo aloqada bo'lish va xizmatlar uchun avtomatik to'lovlarni amalga oshirish imkoniyatidir. 'Avto-to'lov' xizmatini tanlang, so'ngra kerakli xizmatni va boshqa to'lov parametrlarini to'ldirib to'lov garfigini tanlang va avto-to'lovni tasdiqlang.",
    ruAutoPayment: "Автоплатеж" +
        "Это возможность оставаться на связи и оплачивать за услуги в автоматическом режиме. Выберите сервис 'Автоплатеж', далее выберите необходимую услугу и заполните параметры и график платежа." +
        "Подтвердите автоплатеж.",
    enAutoPayment: "Auto payment" +
        "This is an opportunity to stay in touch and pay for services automatically. Select the service 'Auto payment' , then select the required service and fill in the options and payment schedule." +
        "Confirm the auto payment.",
} //14
const TrafficPolice = {
    uzTrafficPolice: "DYHXX jarimalari" +
        "'DYHXX jarimalari' xizmatini tanlang" +
        "Ko'rsatilgan oynada "+" tugmasini bosing" +
        "Kerakli ma'lumotlarni, ya`ni davlat raqami va modeli, tex passport raqamini kiriting va 'Obuna bo'lish' tugmasini bosing." +
        "Xizmatni faollashtirgandan so'ng, sizga qoidabuzarliklar to'g'risida avtomatik bildirishnoma keladi. 'Mening mashinalarim' ro'yxatida siz avtoulovni tanlashingiz va natijada jarima haqqini to'lashingiz mumkin, batafsil ma'lumot va fotosuratga havola ham mavjud. Xizmat narxi oyiga 2000 so'mni tashkil qiladi." +
        "Diqqat: Har bir ro'yxatdan o'tgan avtomobil uchun oyiga 2000 so'm olinadi. Ro'yxatga olish uchun mashinalar soni cheklanmagan. Shuningdek, xizmatni yoqishdan oldin, Akkauntingiz raqamiga bog'langan kartani qo'shganingizga ishonch hosil qiling.",
    ruTrafficPolice: "Уведомления ГУБДД" +
        "Выберите сервис «Штрафы ГУБДД»;" +
        "В появившемся окне нажмите на «+»;" +
        "Введите необходимые данные, а именно гос. номер и модель вашего автомобиля, номер тех. паспорта и нажмите на кнопку «Подписаться»." +
        "После активации услуги Вы будете получать автоматические оповещения о нарушениях. В списке «Мои авто» есть возможность выбрать автомобиль и оплатить полученный штраф с подробной информацией и ссылкой на фото. Стоимость услуги 2000 сум в месяц." +
        "Примечание: за каждый зарегистрированный автомобиль снимается 2000 сум в месяц. Количество автомобилей для регистрации неограниченное. Также прежде чем активировать услугу, убедитесь в том, что Вы добавили карту, привязанную к номеру телефона Вашего аккаунта.",
    enTrafficPolice: "Traffic police notifications" +
        "Select service 'Traffic fines'" +
        "Click on "+" in appeared window;" +
        "Enter required data: the state number and model of your car, the number of technical passports and click on the 'Subscribe' button." +
        "After activating the service, you will receive automatic notifications about violations. In the list of 'My cars' you can choose a car and pay for received fine with detailed information and a link to the photo. The cost of the service is 2000 UZS per month. The quantity of cars for registration is unlimited. Also, before activating the service, make sure that you have added a card linked to the phone number of your account.",
} //15
const FarePayment = {
    uzFarePayment: "Yo'l haqqi uchun to'lov" +
        "Yo'l haqqini to'lash uchun 'Yo'l xaqqi uchun to'lov' xizmatini va 'Jamoat transporti' bo'limini tanlang. Smartfoningiz kamerasini QR kodga qarating. To'lov tasdiqlangach kartangizdan mablag'lar yechib olinadi." +
        "Metroda bo‘lganingizda “Metropoliten” bo‘limini tanlang, so‘ngra tayyor QR-kod skanerga olinishi kerak, shundan so‘ng yo‘l haqi kartangizdan yechib olinadi." +
        "Agar siz ATTO kartangizni toʻldirishingiz kerak boʻlsa, u holda tegishli boʻlimni tanlang va transport kartangiz maʼlumotlarini kiriting.",
    ruFarePayment: "Оплата за проезд" +
        "Чтобы оплатить поездку, выберите сервис «Оплата за проезд» и выберите раздел 'Общественный транспорт'. Наведите камеру своего смартфона на QR-код." +
        "После подтверждения с вашей карты будет списана сумма за проезд. Находясь в метро, выберите раздел 'Метрополитен' и затем готовый QR-код необходимо поднести к сканеру. После подтверждения с вашей карты будет списана сумма за проезд. Если вам необходимо пополнить карту ATTO, то выберите соответствующий раздел и введите данные своей транспортной карты.",
    enFarePayment: "Fare payment Select the 'Fare' service and select the 'Public Transport' section to pay for your trip. Point your smartphone's camera at the QR-code. After confirmation, the fare will be debited from your card. Select the" +
        "'Metro' section and then the ready QR-code must be brought to the scanner" +
        "After confirmation, the fare will be debited from your card. If you need to top up your ATTO card, then select the appropriate section and enter the details of your transport card.",
} //16
const Payment = {
    uzPayment: "To‘lovlar" +
        "Plum ilovasida siz ko'plab xizmatlar va mahsulotlarga to'lovlarni amalga oshirishingiz mumkin." +
        "Masalan: Mobil operatorlar, Internet-provayderlar, kommunal xizmatlar va boshqalar." +
        "Telefon raqamiga to'lov-Plum ilovasida va veb-saytida mobil va shaxarlararo aloqa uchun to'lovlarni tezkor o'tkazish uchun qulay imkoniyat. Plum ilovasida qo'shimcha qadamlarsiz mobil va shaxarlararo aloqa operatoriga to'lov qilish imkoniyati. To'lov vaqtida operator kodi va telefon raqamini ko'rsatish kifoya, tizim avtomatik ravishda prefiks (operator kodi) asosida mobil operatorni taniydi." +
        "Saqlangan to'lovlar - bu funksiya to'lovlarni saqlash va o'chirish imkonini beradi. To'lov vaqtida doimiy ma'lumotlardan foydalanadigan to'lov turlariga qulay. Xizmatga to'langandan so'ng, 'Saqlash' tugmasini bosib, kelgusida ro'yxatdan kerakli to'lovni tanlang yoki vidjetning o'zida yangi to'lov yarating.",
    ruPayment: "Оплата" +
        "В Plum можно оплачивать за множество видов услуг и товаров. Таких как мобильные операторы, интернет-провайдеры, коммунальные услуги и за многое другое." +
        "Оплата за номер - удобная функция для оплаты за мобильную и городскую связь в приложении Plum. Её преимущество заключается в том, что при оплате достаточно указать код оператора и номер телефона. Далее система сама распознает оператора исходя из префикса." +
        "Сохраненные платежи - эта функция позволяет сохранять и удалять платежи. Удобно для видов оплат, в которых используются постоянные данные при оплате. Оплатив за услугу, достаточно нажать «Сохранить» и в дальнейшем выбрать необходимый платеж из списка. При желании можете создать новый платеж в самом виджете.",
    enPayment: "Payment" +
        "In Plum you can pay for many types of services and goods. Such as mobile operators, Internet providers, utilities and more." +
        "Payment for a phone number - is a convenient function for paying for mobile and city communications in thePlum applications.The advantage of this feature is that it is enough to indicate the operator's code and phone number, then the system itself recognizes the operator based on the prefix." +
        "Saved Payments - This feature allows you to save and delete payments. Convenient for payment types that use constant data when paying. Having paid for the service, just click 'Save' and then select the required payment from the list." +
        "Also you can create it in the widget itself.",
} //17
const RequestFunds = {
    uzRequestFunds: "Mablag' so'rash" +
        "'Mablag' so'rash' tugmasini bosing." +
        "So'rov miqdorini kiriting, shuningdek, agar kerak bo'lsa, so'rovga sharh qo'shishingiz mumkin." +
        "'So'rov' tugmasini bosing. Ilovalar ro'yxatidagi havolani yuborishni qulay usulini tanlang." +
        "Pul mablag'larini o'tkazish uchun foydalanuvchi havolani oladi." +
        "Havolani bosgandan so'ng, mablag 'o'tkazish uchun so'rovni tasdiqlash oynasi ochiladi.",
    ruRequestFunds: "Запрос средств" +
        "Нажмите на «Запрос средств»;" +
        "Введите сумму запроса, а также в случае необходимости вы можете добавить комментарий к запросу; Нажмите на кнопку «Продолжить»;" +
        "Нажмите на кнопку «Запросить». Выберите удобный Вам способ, чтобы поделиться ссылкой из списка приложений. Пользователь получит ссылку для перевода средств." +
        "После клика на ссылку откроется запрос и форма на перевод средств. В ней указаны данные владельца и сумма запроса.",
    enRequestFunds: "Request Funds" +
        "Click on 'Request Funds';" +
        "Enter the amount of the request, as well as, you can add a comment to the request;" +
        "Сlick on the 'Continue' button;" +
        "Click on the 'Request' button. Choose a convenient way to share the link from the list of applications. The user will receive a link to transfer funds." +
        "After clicking on the link, a request and a form for transferring funds will open. It contains the owner's data and the request amount.",
} //18
const byUsername = {
    uzByUsername: "Username orqali o'tkazma" +
        "Ilovada har bir foydalanuvchi o'ziga xos foydalanuvchi nomiga @username ega. Akkaunt sozlamalarida mablag'larni yanada qulay o'tkazish uchun username yaratishingiz mumkin." +
        "O'tkazma vidjetida username belgisini tanlang" +
        "Username-ni kiriting 'Izlash' belgisini bosing" +
        "To'lovni tasdiqlash uchun qabul qiluvchining kartasini tanlang.",
    ruByUsername: "Перевод средств с помощью @username" +
        "В приложении у каждого пользователя есть свой уникальный username. В настройках аккаунта Вы можете указать свой @username для удобства дальнейших переводов средств." +
        "Выберите иконку Username в виджете Перевод;" +
        "Введите @username;" +
        "Нажмите на иконку «Поиск»;" +
        "Выберите карту получателя для подтверждения платежа.",
    enByUsername: "Transfer funds by @username." +
        "In 'PLUM' application, each user has his own unique username. In account settings, you can specify your username for further convenient transfers funding." +
        "Select the Username icon in the transfer widget;" +
        "Enter usename;" +
        "Press on 'search';" +
        "Select recipient card to confirm the payment.",
} //19
const usingQRCode = {
    uzUsingQRCode: "QR-kod yordamida kartadan kartaga mablag' o'tkazish" +
        "Ilovaning asosiy sahifasida «O'tkazma»belgisini tanlang." +
        "QR-kod orqali o'tkazma belgisini tanlang." +
        "O'tkazma miqdorini kiriting." +
        "Izoh qoldiring, pul o'tkazmoqchi bo'lgan kartangizni tanlang va «QR yaratish» tugmasini bosing." +
        "Bu tugmani bosganingizda, siz QR kodni olasiz va uni o'tkazish orqali, siz ko'rsatgan mablag'lagni yechish uchun rozilik bildirasiz." +
        "Ushbu funksiyaning qulayligi shundan iboratki siz qabul qiluvchining karta raqamini bilishingiz shart emas, qabul qiluvchining uzi sizning ruxsatingiz bilan o’tkazmani yakunlaydi. QR kod bir marta amal qiladi.",
    ruUsingQRCode: "Перевод средств с помощью QR-кода" +
        "Выберите вкладку «Перевод" +
        "Выберите вкладку «Перевод по QR-коду»" +
        "Введите сумму перевода;" +
        "Добавьте комментарий к вашему переводу, выберите карту, с которой хотите перевести средства и нажмите кнопку «Сгенерировать QR»." +
        "При нажатии на «Сгенерировать QR», Вы получите QR-код. Передав его, Вы даёте согласие на снятие указанных Вами средств. Удобство этой функции состоит в том, что Вам необязательно знать номер карты получателя, который завершает перевод с Вашего согласия. При переводе средств QR-код действует один раз.",
    enUsingQRCode: "Transferring funds using a QR-code" +
        "Select tab 'Transfer'" +
        "Select tab 'Transfer via QR code'" +
        "Add a comment to your transfer, select the card from which you want to transfer funds and press 'Generate QR-code'." +
        "When you press on 'Generate QR-code', you will receive a QR-code. By transmitting it, you consent the withdrawal of the funds indicated by you. The convenience of this function is that you do not need to know the card number of the recipient who completes the transfer with your consent. QR-code is valid only one time for transfer.",
} //20
const TransferFounds = {
    uzTransferFounds: "Kartadan kartaga o'tkazmalar" +
        "Asosiy sahifadagi o'tkazma turlaridan birini tanlab, qabul qiluvchini ko'rsating" +
        "O'tkazmani amalga oshirishingiz uchun qabul qiluvchining karta raqamini, username-i yoki telefon raqamini kiriting" +
        "O'tkazma miqdorini kiriting" +
        "O'tkazmangizga sharh qo'shing, mablag' o'tkazmoqchi bo'lgan kartani tanlang va 'O'tkazish' tugmasini bosing." +
        "Chekda 'Tasdiqlash' tugmasini bosing. Shuningdek, siz 'Tafsilotlar' tugmachasini bosish orqali pul o'tkazmasini takrorlashingiz va chekni yuklab olishingiz mumkin." +
        "O'tkazma cheki 'To'lov tarixi' bo'limida ko'rsatiladi.",
    ruTransferFounds: "Перевод с карты на карту" +
        "Укажите получателя, выбрав один из вариантов перевода на главной странице;" +
        "Введите номер карты, username или номер телефона получателя;" +
        "Введите сумму перевода;" +
        "Добавьте комментарий к Вашему переводу, выберите карту, с которой хотите перевести средства и нажмите на кнопку «Перевести»;" +
        "В чеке нажмите на кнопку «Подтвердить». Также Вы можете повторить перевод и скачать чек перевода, нажав на кнопку «Подробно»." +
        "Чек на перевод отобразится в разделе «История платежей».",
    enTransferFounds: "Transfer founds" +
        "Specify the recipient by choosing one of the transfer options on the main page;" +
        "Enter the card number, username or phone number of the recipient;" +
        "Enter the transfer amount;" +
        "Add a comment to your transfer, select the card from which you want to transfer funds and click the 'Transfer' button." +
        "Click on the 'Confirm' button in the check. You can also repeat the transfer and download the transfer receipt by clicking on the 'Details' button." +
        "The receipt for transfer will be displayed in the Payment history section.",
} //21
const AccessCard = {
    uzAccessCard: "Kartadan foydalanuvchilar" +
        "Plum ilovasida kartangiz qo'shilgan akkaunt foydalanuvchilarini ro'yxatini ko'rish imkoniniyati bor. Kartaning sozlamalarida «Kartadan foydalanuvchilar» bo'limni tanlang.Tizim kartangizdan foydalanuvchilar ro'yxati ko'rsatadi. Siz foydalanuvchilarga 'SMS kod' ni tasdiqlamasdan karta operatsiyalarini amalga oshirishga ruxsat berishingiz mumkin. Buni amalga oshirish uchun foydalanuvchilar sozlamalarida kerakli bolimni tanlang, bundan tashqari shahsiy kartangizni boshqa akkauntlardan ochirib tashlashingiz mumkun.",
    ruAccessCard: "Доступ к карте" +
        "Приложение Plum позволяет Вам видеть список пользователей, у которых в аккаунте добавлена Ваша карта. В настройках карты выберите раздел «Доступ к карте», после чего отобразится список пользователей, у которых есть доступ к Вашей карте. Вы можете разрешить пользователю совершать операции по карте без запроса кода подтверждения. Для этого Вы должны выбрать соответствующий пункт в настройках пользователя." +
        "Также Вы можете удалить свою карту с чужих аккаунтов.",
    enAccessCard: "Access to the card" +
        "Plum application allows you to see a list of users who have added your card to their account. In card settings, select 'Access to the card' section, after which a list of users who have access to your card will be displayed. You must select the appropriate item in the user settings to allow the user to make transactions with the card without asking for a 'Confirmation сode'." +
        "Аlso you may delete your card from other device account.",
} //22
const AddingCard = {
    uzAddingCard: "Karta qo'shish" +
        "Asosiy sahifada '+' tugmasini bosing." +
        "Kartaning nomini, raqamini va amal qilish muddatini kiriting." +
        "Rang va dizaynni tanlab kartangizni sozlang." +
        "'Qo'shish' tugmasini bosing." +
        "Diqqat: Xavfsizlik qoidalariga binoan karta qo'shish jarayonida, tasdiqlash kodini noto'g'ri kiritsangiz, 3 ta urunishdan so'ng karta bloklanadi,shuning uchun ma`lumotlarni kiritishda diqqat bilan kiriting." +
        "Eslatma: Siz boshqa telefon raqamiga ulangan kartani qo'sha olmaysiz." +
        "Ilovada har bir qo'shilgan kartaga biriktirilgan QR- kod mavjud bo'lib, u sizning kartangiz ma`lumotlarini o'z ichiga oladi. Karta raqamizni kiritmasdan kartangizga darhol pul o'tkazish imkonini beradi." +
        "Siz skanerlashda pul mablag'ni qabul qilishingiz uchun uni do'stlaringizga yuborishingiz yoki saytga joylashtirishingiz mumkin." +
        "Kartaning sozlamalarida kartani bloklashva blokdan chiqarish imkoniyati mavjud. Agar terminal orqali to'lov amalga oshirilayotganda kartangizning PIN-kodini 3 marta noto'g'ri kiritgan bo'lsangiz, ilova orqali kartani blokdan chiqarishingiz mumkin. Agar karta mobil ilova orqali bloklangan bo'lsa, u holda ushbu kartani blokdan chiqarish faqat bankda shaxsan va pasport taqdim etilganda mumkin.",
    ruAddingCard: "Добавление карты" +
        "На главной странице нажмите «+»." +
        "Введите название, номер и срок действия карты." +
        "Оформите карту, выбрав цвет и дизайн." +
        "Нажмите на кнопку “Добавить”." +
        "Примечание: Вы не можете добавить карту, подключенную к другому номеру телефона." +
        "В приложении к каждой добавленной карте генерируется QR-код карты, который содержит данные в Вашей карты. Позволяет осуществлять переводы на нее мгновенно без ввода номера карты. Вы можете передать его знакомым или разместить на сайте для получения средств при его сканировании." +
        "В настройках карты есть возможность блокировки и разблокировки карты. Вы можете разблокировать карту через приложение в случае, если вы неверно ввели PIN-код вашей карты 3 раза при оплате через терминал. Если карта была заблокирована через мобильное приложение, то разблокировка этой карты возможна только в банке при личном присутствии и с предъявлением паспорта.",
    enAddingCard: "Adding card" +
        "On the main page, click '+'." +
        "Enter name, number and expire date of your card." +
        "Customize your card by choosing a color and design." +
        "Press on the button 'Add'." +
        "Note: You can not add a card connected to another phone number." +
        "In application for each added card, a QR-code of the card is generated which contains data of your card. Allows you to make transfers to your card instantly, without entering card number. You can share it with friends or post it on site to receive funds by scanning it. In settings of card there is allowed the possibility of blocking and unblocking the card. You can unblock the card through application if you entered the PIN code of your card incorrectly 3 times when you was paying through the terminal. If card has been blocked through a mobile application, then unblocking of this card is possible only at the bank in person and upon presentation of a passport."
    ,
} //23
const OTP = {
    uzOTP: "OTP (bir martalik parol)" +
        "SMS orqali yuboriladigan bir martalik parol va faqat bitta avtorizatsiya seansi uchun amal qiladi.To‘lov tizimi sizga yuboradigan SMS-kodni hech kimga aytmang.",
    ruOTP: "OTP (one-time password)" +
        "Одноразовый пароль высылается через SMS и действителен только для одного сеанса авторизации. Никому не передавайте SMS-код, который вам присылает платежная система.",
    enOTP: "OTP" +
        "The one-time password is sent via SMS and valid for only one authorization session. Do not give the SMS code sent to you by the payment system to anyone.",
} //24
const InstallingApp = {
    uzInstallingApp: "Ilovani o’rnatish" +
        "Ilovani Google Play Market yoki App Store-dan yuklab oling." +
        "Tilni tanlang." +
        "Agar siz biron sababga ko'ra akkaunt yaratmoqchi bo'lmasangiz, to'lovlarni yoki kartadan kartaga o'tkazmani tizimda ro'yxatdan o'tmasdan amalga oshirishingiz mumkin." +
        "Buning uchun sizga kerakli xizmatni tanlang" +
        "Barcha maydonlarni to'ldiring" +
        "'Davom etish' tugmasini bosing" +
        "Kartaning raqami va muddatini ko'rsating' +" +
        "'Telefoningizga Plumdan 'SMS kod' keladi." +
        "SMS-dan kodni kiriting va 'Tasdiqlash' tugmasini bosing." +
        "To'lovni tasdiqlaganingizdan so'ng, siz chekni telefoningizga yuklab olishingiz mumkin." +
        "Akkaunt yaratish uchun 'Kartani qo'shish' tugmachasini yoki 'Akkaunt' belgisini bosin" +
        "Telefon raqamingizni kiriting." +
        "Parol yarating va uni kiriting. Parolingizni tasdiqlang va 'Ro'yxatdan o'tish' tugmasini bosing" +
        "Telefoningizga Plumdan 'SMS kod' keladi." +
        "SMS-dan kodni kiriting va 'Tasdiqlash' tugmasini bosing." +
        "PIN-kod yarating va kiriting" +
        "Qurilmangiz ushbu xususiyatni qo'llab-quvvatlasa, barmoq izi yoki yuzni himoya qilishni faollashtiring." +
        "SMS info xizmatiga ulangan UZCARD yoki Humo plastik kartasini qo'shing.",
    ruInstallingApp: "Установка приложения" +
        "Скачайте приложение с Google Play Market или App Store." +
        "Выберите язык." +
        "Вы можете совершать оплаты или переводить средства с карты на карту, не регистрируясь в приложении." +
        "Если по каким-то причинам не хотите создавать аккаунт, выберите интересующую Вас услугу;" +
        "Заполните все поля;" +
        "Нажмите кнопку «Продолжить»;" +
        "Укажите номер и срок карты;" +
        "На ваш телефон придет «СМС-код» от Plum;" +
        "Введите код из СМС и нажмите кнопку «Подтвердить»;" +
        "После подтверждения платежа Вы можете скачать чек на Ваш телефон." +
        "Для создания персонального кабинета нажмите на «Добавить карту» или на иконку Аккаунт;" +
        "Введите свой номер телефона." +
        "Придумайте и введите пароль. Подтвердите пароль и нажмите кнопку «Регистрация»;" +
        "На ваш телефон придет «СМС-код» ;" +
        "Введите код из СМС и нажмите на кнопку «Подтвердить»;" +
        "Придумайте и введите PIN-код;" +
        "Активируйте защиту по отпечатку пальца или лицу, если ваше устройство поддерживает эту функцию." +
        "Добавьте пластиковую карту UZCARD или Humo, подключенную к услуге «SMS-информирование». ",
    enInstallingApp: "Installing the app" +
        "Download the app from Google Play Market or App Store." +
        "Choose language." +
        "You can make payments or transfer funds from card to card without registering, if for some reason you do not want to create an account." +
        "To try this, select the service you are interested in." +
        "Fill in all the fields." +
        "Click on the button 'Continue'." +
        "Enter number and expire date of your card." +
        "You will receive 'SMS-code' on your mobile phone from Plum." +
        "After payment confirmation you can download the receipt to your phone." +
        "In order to create a personal account, click on 'Add a card' or on the Account icon." +
        "Enter you phone number." +
        "Create a new password." +
        "Confirm a password and click on 'Registration'." +
        "You will receive 'SMS-code' on your mobile phone from Plum." +
        "Enter received code and click on 'Confirm'." +
        "Create a new PIN-code." +
        "Allow Touch ID or Face ID if your device supports this feature." +
        "Add UZCARD or Humo plastic card which connected to the SMS-informing service.",
} //25

module.exports = { virtualCard, myId, savedPayments, customize, myPayments, QPay, Security, offlineMode, notification, history,
QRScanner, ExchangeRates, TaxServices, AutoPayment, TrafficPolice, FarePayment, Payment, RequestFunds, byUsername, usingQRCode,
TransferFounds, AccessCard, AddingCard, OTP, InstallingApp}