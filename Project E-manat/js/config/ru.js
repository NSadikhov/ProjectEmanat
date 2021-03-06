function ruMoment() {
  config = [
    {
      text: "Коммунальные платежи"
    },
    {
      text: "Мобильные операторы"
    },
    {
      text: "Банковские услуги"
    },
    {
      text: "Государство и муниципалитет"
    },
    {
      text: "ТВ"
    },
    {
      text: "Интернет"
    },
    {
      text: "телефон"
    },
    {
      text: "Развлечения и игры"
    },
    {
      text: "E-бумажник"
    }
  ];
  config2 = [
    {
      text: "Страховые услуги"
    },
    {
      text: "Объявления и скидки"
    },
    {
      text: "Благотворитель и помощь"
    },
    {
      text: "Платежные карты"
    },
    {
      text: "внутренняя связь"
    },
    {
      text: "Онлайн магазин"
    },
    {
      text: "образование"
    },
    {
      text: "другие"
    },
    {
      text: "Туризм и путешествия"
    }
  ];
  footerConfig = {
    text: "Обслуживание клиентов: 012 404 48 88"
  };

  if (document.location.href.indexOf("index") > 0) {
    moment.updateLocale("ru", {
      months: [
        "январь",
        "февраль",
        "марш",
        "апреля",
        "май",
        "июнь",
        "июль",
        "августейший",
        "сентябрь",
        "октября",
        "ноябрь",
        "декабрь"
      ],
      weekdays: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота"
      ]
    });
  }
  if (document.location.href.indexOf("index") > 0) {
    $(".pTime")[0].innerText = moment().format(
      "h:mm:" + second + " Do MMMM dddd"
    );

    for (let i = 0; i < config.length; i++) {
      $(".flexsText")[i].innerText = config[i].text;
    }
    for (let i = 0; i < config2.length; i++) {
      $(".flexsText2")[i].innerText = config2[i].text;
    }
    $(".footerText")[0].innerText = footerConfig.text;
  }
  if (document.location.href.indexOf("provider") > 0) {
    $(".btnText")[0].innerText = "ГЛАВНАЯ СТРАНИЦА";
    if (localStorage.provider == "js/communal.js") {
      if ($(".creation")[0].src.indexOf("communal") > 0) {
        $(".textPart")[0].innerText = "Коммунальные платежи";
        $(".h4")[0].innerText = "Коммуналь платежи Naxcivan";
      }
    } else if (localStorage.provider == "js/mobile.js") {
      if ($(".creation")[0].src.indexOf("mobile") > 0) {
        $(".textPart")[0].innerText = "Мобильные операторы";

        $(".h4")[0].innerText = "Внешние мобильной связи";
      }
    } else if (localStorage.provider == "js/bank.js") {
      if ($(".creation")[0].src.indexOf("bank") > 0) {
        $(".textPart")[0].innerText = "УСЛУГИ БАНКА";
        $(".flexDivText")[0].innerText = "Заказ кредита";
        $(".forwardBtnText")[0].innerText = "СЛЕДУЮЩИЙ";
        $(".forwardBtnText")[0].style.marginLeft = "10px";
        $(".forwardBtnText")[0].style.fontSize = "20px";
        $(".backBtnText")[0].style.fontSize = "20px";
        $(".backBtnText")[0].innerText = "НАЗАД";
      }
    } else if (localStorage.provider == "js/state.js") {
      if ($(".creation")[0].src.indexOf("state") > 0) {
        $(".textPart")[0].innerText = "ГОСУДАРСТВО И МУНИЦИПАЛИТЕТ";
        $(".textPart")[0].style.fontSize = "35px";
        $(".secondText")[0].innerText = " Муниципальные налоги и сборы";
        $(".fourthText")[0].innerText = "DIN ПЛАТЕЖЫ ОТМЕНЫ";
        $(".fifthText")[0].innerText = "DGK ПЛАТЕЖЫ ОТМЕНЫ";
      }
    } else if (localStorage.provider == "js/tv.js") {
      if ($(".creation")[0].src.indexOf("tv") > 0) {
        $(".textPart")[0].innerText = "ТВ";
      }
    } else if (localStorage.provider == "js/internet.js") {
      if ($(".creation")[0].src.indexOf("internet") > 0) {
        $(".textPart")[0].innerText = "Интернет";
        $(".forwardBtnText")[0].innerText = "СЛЕДУЮЩИЙ";
        $(".forwardBtnText")[0].style.marginLeft = "10px";
        $(".forwardBtnText")[0].style.fontSize = "20px";
        $(".backBtnText")[0].style.fontSize = "20px";
        $(".backBtnText")[0].innerText = "НАЗАД";
        $(".seventhText")[0].innerText = "Naxçıvan - интернет";
        $(".seventhText")[0].style.fontSize = "18px";
      }
    } else if (localStorage.provider == "js/telefon.js") {
      if ($(".creation")[0].src.indexOf("telefon") > 0) {
        $(".textPart")[0].innerText = "телефон";

        $(".h4")[0].innerText = "Naxçıvan телефон";
      }
    } else if (localStorage.provider == "js/game.js") {
      if ($(".creation")[0].src.indexOf("game") > 0) {
        $(".textPart")[0].innerText = "Развлечения и игры";
      }
    } else if (localStorage.provider == "js/wallet.js") {
      if ($(".creation")[0].src.indexOf("wallet") > 0) {
        $(".textPart")[0].innerText = "E-бумажник";
      }
    } else if (localStorage.provider == "js/sigorta.js") {
      if ($(".creation")[0].src.indexOf("sigorta") > 0) {
        $(".textPart")[0].innerText = "Страховые услуги";
      }
    } else if (localStorage.provider == "js/elan.js") {
      if ($(".creation")[0].src.indexOf("elan") > 0) {
        $(".textPart")[0].innerText = "Объявления и скидки";
      }
    } else if (localStorage.provider == "js/charity.js") {
      if ($(".creation")[0].src.indexOf("charity") > 0) {
        $(".textPart")[0].innerText = "Благотворитель и помощь";
      }
    } else if (localStorage.provider == "js/paycard.js") {
      if ($(".creation")[0].src.indexOf("paycard") > 0) {
        $(".textPart")[0].innerText = "Платежные карты";
      }
    } else if (localStorage.provider == "js/domofon.js") {
      if ($(".creation")[0].src.indexOf("domofon") > 0) {
        $(".textPart")[0].innerText = "внутренняя связь";
      }
    } else if (localStorage.provider == "js/store.js") {
      if ($(".creation")[0].src.indexOf("store") > 0) {
        $(".textPart")[0].innerText = "Онлайн магазин";
      }
    } else if (localStorage.provider == "js/education.js") {
      if ($(".creation")[0].src.indexOf("education") > 0) {
        $(".textPart")[0].innerText = "Oбразование";
      }
    } else if (localStorage.provider == "js/other.js") {
      if ($(".creation")[0].src.indexOf("other") > 0) {
        $(".textPart")[0].innerText = "другие";
      }
    } else if (localStorage.provider == "js/trip.js") {
      if ($(".creation")[0].src.indexOf("trip") > 0) {
        $(".textPart")[0].innerText = "Туризм и путешествия";
      }
    }
  } else if (document.location.href.indexOf("choosePart") > 0) {
    $(".btnText")[0].innerText = "ГЛАВНАЯ СТРАНИЦА";
    $(".flexTextFirst")[0].innerText = "НАСЕЛЕНИЕ";
    $(".flexTextSecond")[0].innerText = "НЕ-НАСЕЛЕНИЕ";
  } else if (document.location.href.indexOf("password") > 0) {
    $(".btnText")[0].innerText = "ГЛАВНАЯ СТРАНИЦА";
    $(".deleteBtnText")[0].innerText = "УДАЛИТЬ";
    $(".backBtnText")[0].innerText = "НАЗАД";
    $(".backBtnText")[0].style.fontSize = "19px";
    $(".deleteBtnText")[0].style.fontSize = "23px";
    $(".forwardBtnText")[0].innerText = "СЛЕДУЮЩИЙ";
    $(".forwardBtnText")[0].style.fontSize = "19px";
    $(".forwardBtnText")[0].style.marginLeft = "10px";
    if (localStorage.passprovider == "js/password/azeriqaz.js") {
      if ($(".creation")[0].src.indexOf("azeriqaz") > 0) {
        $(".label")[0].innerText = "Введите, 15-значный код:";
      }
    } else if (localStorage.passprovider == "js/password/azersu.js") {
      if ($(".creation")[0].src.indexOf("azersu") > 0) {
        $(".label")[0].innerText = "Введите, 15-значный код:";
      }
    } else if (localStorage.passprovider == "js/password/azerisiq.js") {
      if ($(".creation")[0].src.indexOf("azerisiq") > 0) {
        $(".label")[0].innerText = "Введите код подписчика:";
      }
    } else if (localStorage.passprovider == "js/password/azeristilik.js") {
      if ($(".creation")[0].src.indexOf("azeristilik") > 0) {
        $(".label")[0].innerText = "Введите, 15-значный код:";
      }
    } else if (localStorage.passprovider == "js/password/azercell.js") {
      if ($(".creation")[0].src.indexOf("azercell") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/bakcell.js") {
      if ($(".creation")[0].src.indexOf("bakcell") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/nar.js") {
      if ($(".creation")[0].src.indexOf("nar") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/megaSigorta.js") {
      if ($(".creation")[0].src.indexOf("megaSigorta") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:";
      }
    } else if (localStorage.passprovider == "js/password/rahatYasam.js") {
      if ($(".creation")[0].src.indexOf("rahatYasam") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер дома:";
      }
    } else if (localStorage.passprovider == "js/password/naxcivan.js") {
      if ($(".creation")[0].src.indexOf("naxcivan") > 0) {
        $(".label")[0].innerText = "Введите код подписчика:";
      }
    } else if (localStorage.passprovider == "js/password/freenet.js") {
      if ($(".creation")[0].src.indexOf("freenet") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/naxtel.js") {
      if ($(".creation")[0].src.indexOf("naxtel") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/xarici.js") {
      if ($(".creation")[0].src.indexOf("xarici") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите номер телефона:";
      }
    } else if (localStorage.passprovider == "js/password/unibank.js") {
      if ($(".creation")[0].src.indexOf("unibank") > 0) {
        $(".label")[0].innerText = "Введите PIN-код (номер военного билета):";
      }
    } else if (localStorage.passprovider == "js/password/bankofbaku.js") {
      if ($(".creation")[0].src.indexOf("bankofbaku") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/kapital.js") {
      if ($(".creation")[0].src.indexOf("kapital") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/rabite.js") {
      if ($(".creation")[0].src.indexOf("rabite") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/yapikredi.js") {
      if ($(".creation")[0].src.indexOf("yapikredi") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/embafinans.js") {
      if ($(".creation")[0].src.indexOf("embafinans") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/bankrespublika.js") {
      if ($(".creation")[0].src.indexOf("bankrespublika") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/finca.js") {
      if ($(".creation")[0].src.indexOf("finca") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/nikoil.js") {
      if ($(".creation")[0].src.indexOf("nikoil") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/molbulak.js") {
      if ($(".creation")[0].src.indexOf("molbulak") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/merkuri.js") {
      if ($(".creation")[0].src.indexOf("merkuri") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/muganbank.js") {
      if ($(".creation")[0].src.indexOf("muganbank") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/vtb.js") {
      if ($(".creation")[0].src.indexOf("vtb") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/bankbtb.js") {
      if ($(".creation")[0].src.indexOf("bankbtb") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/turanbank.js") {
      if ($(".creation")[0].src.indexOf("turanbank") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/tbckredit.js") {
      if ($(".creation")[0].src.indexOf("tbckredit") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/amrahbank.js") {
      if ($(".creation")[0].src.indexOf("amrahbank") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/kreditevi.js") {
      if ($(".creation")[0].src.indexOf("kreditevi") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/nbcbank.js") {
      if ($(".creation")[0].src.indexOf("nbcbank") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/investaz.js") {
      if ($(".creation")[0].src.indexOf("investaz") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/psgfinans.js") {
      if ($(".creation")[0].src.indexOf("molbulak") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/accessbank.js") {
      if ($(".creation")[0].src.indexOf("accessbank") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (
      localStorage.passprovider == "js/password/kreditlerinsifarisi.js"
    ) {
      if ($(".creation")[0].src.indexOf("kreditlerinsifarisi") > 0) {
        $(".label")[0].innerText = "Введите номер своего клиента:";
      }
    } else if (localStorage.passprovider == "js/password/emdk.js") {
      if ($(".creation")[0].src.indexOf("emdk") > 0) {
        $(".label")[0].innerText = "Введите номер своей заявки:";
      }
    } else if (
      localStorage.passprovider == "js/password/belediyyevergileri.js"
    ) {
      if ($(".creation")[0].src.indexOf("belediyyevergileri") > 0) {
        $(".label")[0].innerText = "Введите номер своей заявки:";
        $(".h5")[0].innerText = "Мунпаль налоги";
      }
    } else if (localStorage.passprovider == "js/password/nizami.js") {
      if ($(".creation")[0].src.indexOf("nizami") > 0) {
        $(".label")[0].innerText = "Введите номер своей заявки:";
      }
    } else if (localStorage.passprovider == "js/password/dincerime.js") {
      if ($(".creation")[0].src.indexOf("dincerime") > 0) {
        $(".label")[0].innerText = "Введите номер своей заявки:";
        $(".h5")[0].innerText = "DİN штраф";
      }
    } else if (localStorage.passprovider == "js/password/dgkcerime.js") {
      if ($(".creation")[0].src.indexOf("dgkcerime") > 0) {
        $(".label")[0].innerText = "Введите номер своей заявки:";
        $(".h5")[0].innerText = "Штрафные санкции DGK";
      }
    } else if (localStorage.passprovider == "js/password/atv.js") {
      if ($(".creation")[0].src.indexOf("atv") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/katv.js") {
      if ($(".creation")[0].src.indexOf("katv") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/connect.js") {
      if ($(".creation")[0].src.indexOf("connect") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/ailetv.js") {
      if ($(".creation")[0].src.indexOf("ailetv") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/ultel.js") {
      if ($(".creation")[0].src.indexOf("ultel") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/baktelecom.js") {
      if ($(".creation")[0].src.indexOf("baktelecom") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/alfanet.js") {
      if ($(".creation")[0].src.indexOf("alfanet") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/smartonline.js") {
      if ($(".creation")[0].src.indexOf("smartonline") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/tvcity.js") {
      if ($(".creation")[0].src.indexOf("tvcity") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/cliptv.js") {
      if ($(".creation")[0].src.indexOf("cliptv") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/aztelecom.js") {
      if ($(".creation")[0].src.indexOf("aztelecom") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/azeurotel.js") {
      if ($(".creation")[0].src.indexOf("azeurotel") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/birlink.js") {
      if ($(".creation")[0].src.indexOf("birlink") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/azeronline.js") {
      if ($(".creation")[0].src.indexOf("azeronline") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/ailenet.js") {
      if ($(".creation")[0].src.indexOf("ailenet") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/azstarnet.js") {
      if ($(".creation")[0].src.indexOf("azstarnet") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/avirtel.js") {
      if ($(".creation")[0].src.indexOf("avirtel") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/narhome.js") {
      if ($(".creation")[0].src.indexOf("narhome") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/azfiber.js") {
      if ($(".creation")[0].src.indexOf("azfiber") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/cityline.js") {
      if ($(".creation")[0].src.indexOf("cityline") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/izone.js") {
      if ($(".creation")[0].src.indexOf("izone") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/metronet.js") {
      if ($(".creation")[0].src.indexOf("metronet") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/teleport.js") {
      if ($(".creation")[0].src.indexOf("teleport") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/fibernettelecom.js") {
      if ($(".creation")[0].src.indexOf("fibernettelecom") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/megalife.js") {
      if ($(".creation")[0].src.indexOf("megalife") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/rahattelecom.js") {
      if ($(".creation")[0].src.indexOf("teleport") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/naxcivaninternet.js") {
      if ($(".creation")[0].src.indexOf("teleport") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/ultranet.js") {
      if ($(".creation")[0].src.indexOf("ultranet") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:";
      }
    } else if (localStorage.passprovider == "js/password/worldoftanks.js") {
      if ($(".creation")[0].src.indexOf("worldoftanks") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/topaz.js") {
      if ($(".creation")[0].src.indexOf("topaz") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/lisenziya.js") {
      if ($(".creation")[0].src.indexOf("lisenziya") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/meydan.js") {
      if ($(".creation")[0].src.indexOf("meydan") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/gamebuy.js") {
      if ($(".creation")[0].src.indexOf("gamebuy") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/azerlotereya.js") {
      if ($(".creation")[0].src.indexOf("azerlotereya") > 0) {
        $(".label")[0].innerText = "Bведите адрес электронной почты:";
      }
    } else if (localStorage.passprovider == "js/password/portmanat.js") {
      if ($(".creation")[0].src.indexOf("portmanat") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/kassam.js") {
      if ($(".creation")[0].src.indexOf("kassam") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/azerpay.js") {
      if ($(".creation")[0].src.indexOf("azerpay") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/yandex.js") {
      if ($(".creation")[0].src.indexOf("yandex") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/webmoney.js") {
      if ($(".creation")[0].src.indexOf("webmoney") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/moneta.js") {
      if ($(".creation")[0].src.indexOf("moneta") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/qiwi.js") {
      if ($(".creation")[0].src.indexOf("qiwi") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/paymanat.js") {
      if ($(".creation")[0].src.indexOf("paymanat") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/azsigorta.js") {
      if ($(".creation")[0].src.indexOf("azsigorta") > 0) {
        $(".label")[0].innerText ="Укажите номер договора:";
      }
    } else if (localStorage.passprovider == "js/password/megasigorta.js") {
      if ($(".creation")[0].src.indexOf("megasigorta") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:";
      }
    } else if (localStorage.passprovider == "js/password/atasigorta.js") {
      if ($(".creation")[0].src.indexOf("atasigorta") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:";
      }
    } else if (localStorage.passprovider == "js/password/atesgahsigorta.js") {
      if ($(".creation")[0].src.indexOf("atesgahsigorta") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:"
      }
    } else if (localStorage.passprovider == "js/password/pasaheyat.js") {
      if ($(".creation")[0].src.indexOf("pasaheyat") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:"
      }
    } else if (localStorage.passprovider == "js/password/pasasigorta.js") {
      if ($(".creation")[0].src.indexOf("pasasigorta") > 0) {
        $(".label")[0].innerText = "Введите код оплаты:"
      }
    } else if (localStorage.passprovider == "js/password/besmart.js") {
      if ($(".creation")[0].src.indexOf("besmart") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/avtonet.js") {
      if ($(".creation")[0].src.indexOf("avtonet") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/turbo.js") {
      if ($(".creation")[0].src.indexOf("turbo") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/yeniemlak.js") {
      if ($(".creation")[0].src.indexOf("yeniemlak") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/lalafo.js") {
      if ($(".creation")[0].src.indexOf("lalafo") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/bibion.js") {
      if ($(".creation")[0].src.indexOf("bibion") > 0) {
        $(".label")[0].innerText = "Введите номер своей учетной записи:"
      }
    } else if (localStorage.passprovider == "js/password/umidyeri.js") {
      if ($(".creation")[0].src.indexOf("umidyeri") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:"
      }
    } else if (localStorage.passprovider == "js/password/leykemiya.js") {
      if ($(".creation")[0].src.indexOf("leykemiya") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:"
      }
    } else if (localStorage.passprovider == "js/password/inaye.js") {
      if ($(".creation")[0].src.indexOf("inaye") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:"
      }
    } else if (localStorage.passprovider == "js/password/mirtagi.js") {
      if ($(".creation")[0].src.indexOf("mirtagi") > 0) {
        $(".label")[0].innerText = "Введите номер мобильного телефона:"
      }
    } else if (localStorage.passprovider == "js/password/netpay.js") {
      if ($(".creation")[0].src.indexOf("netpay") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/netmanat.js") {
      if ($(".creation")[0].src.indexOf("netmanat") > 0) {
        $(".label")[0].innerText = "Введите номер своего мобильного телефона или номер порта:";
      }
    } else if (localStorage.passprovider == "js/password/cyfral.js") {
      if ($(".creation")[0].src.indexOf("cyfral") > 0) {
        $(".label")[0].innerText = "Введите код абонента:";
      }
    } else if (localStorage.passprovider == "js/password/modus.js") {
      if ($(".creation")[0].src.indexOf("modus") > 0) {
        $(".label")[0].innerText = "Введите код абонента:";
      }
    } else if (localStorage.passprovider == "js/password/domofononline.js") {
      if ($(".creation")[0].src.indexOf("domofononline") > 0) {
        $(".label")[0].innerText = "Введите код абонента:";
      }
    } else if (localStorage.passprovider == "js/password/flo.js") {
      if ($(".creation")[0].src.indexOf("flo") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите код бронирования:";
      }
    } else if (localStorage.passprovider == "js/password/polo.js") {
      if ($(".creation")[0].src.indexOf("polo") > 0) {
        $(".label")[0].innerText = "Пожалуйста, введите код бронирования:";
      }
    } else if (localStorage.passprovider == "js/password/dim.js") {
      if ($(".creation")[0].src.indexOf("dim") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/sinaqimtahani.js") {
      if ($(".creation")[0].src.indexOf("sinaqimtahani") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/innab.js") {
      if ($(".creation")[0].src.indexOf("innab") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/step.js") {
      if ($(".creation")[0].src.indexOf("step") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/teorem.js") {
      if ($(".creation")[0].src.indexOf("teorem") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/onlinehazirliq.js") {
      if ($(".creation")[0].src.indexOf("onlinehazirliq") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/edutech.js") {
      if ($(".creation")[0].src.indexOf("edutech") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/ite.js") {
      if ($(".creation")[0].src.indexOf("ite") > 0) {
        $(".label")[0].innerText = "Введите номер своего личного кабинета:";
      }
    } else if (localStorage.passprovider == "js/password/faberlic.js") {
      if ($(".creation")[0].src.indexOf("faberlic") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/kaspersky.js") {
      if ($(".creation")[0].src.indexOf("kaspersky") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/oriflame.js") {
      if ($(".creation")[0].src.indexOf("oriflame") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/ubs.js") {
      if ($(".creation")[0].src.indexOf("ubs") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/socar.js") {
      if ($(".creation")[0].src.indexOf("socar") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/temizseher.js") {
      if ($(".creation")[0].src.indexOf("temizseher") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/irsad.js") {
      if ($(".creation")[0].src.indexOf("irsad") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/yaxintaxi.js") {
      if ($(".creation")[0].src.indexOf("yaxintaxi") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/eset.js") {
      if ($(".creation")[0].src.indexOf("eset") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/prosol.js") {
      if ($(".creation")[0].src.indexOf("prosol") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/lsp.js") {
      if ($(".creation")[0].src.indexOf("lsp") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/bereket.js") {
      if ($(".creation")[0].src.indexOf("bereket") > 0) {
        $(".label")[0].innerText = "Введите код пользователя:";
      }
    } else if (localStorage.passprovider == "js/password/trips.js") {
      if ($(".creation")[0].src.indexOf("trips") > 0) {
        $(".label")[0].innerText = "Введите код бронирования:";
      }
    }
  } else if (document.location.href.indexOf("paymentPart") > 0) {
    $(".btnText")[0].innerText = "ГЛАВНАЯ СТРАНИЦА";
    $(".label")[0].innerText = "КОД ПОДПИСКИ";
    $(".forwardBtnText")[0].innerText = "СЛЕДУЮЩИЙ";
    $(".forwardBtnText")[0].style.fontSize = "19px";
    $(".forwardBtnText")[0].style.marginLeft = "10px";
    
  } else if (document.location.href.indexOf("lastPart") > 0) {
    $(".btnText")[0].innerText = "ГЛАВНАЯ СТРАНИЦА";
    $(".mainText")[0].innerText ="подписчик "+localStorage.input+" включены "+localStorage.payment+" azn";
  }
}
