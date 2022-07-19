let sentences = [];
function generate() {
  var data = {
    start: ["#story#"],
    story: ["#begin# #loc# #decorate#"],
    begin: ["یکی بود یکی نبود", "روزی روزگاری", "در زمان های دور"],
    decorate: [
      "بر روی یک #nestloc# یک لانه #bird# بود. در لانه #nchick# جوجه بودند چشم هایشان را می بستند و #fightreason# و دعوایشان می شد ؛ #supervisor#شان #parentact# و گفت : جوجه های #describe# من #remember#:\n1.#advice#.\n2.#advicestory#",
    ],
    loc: ["در یک جنگل #groundstyle#", "در یک دشت #groundstyle#"],
    groundstyle: [
      "سبز",
      "سرسبز",
      "خوش آب و هوا",
      /* "گرم","یزهوت","خشک",*/
      "زیبا",
    ],
    nestloc: ["درخت #tree#", "شاخه", "بوته"],
    tree: [
      "کاج",
      "صنوبر",
      "سپیدار",
      "چنار",
      "بلوط",
      "سرو",
      "افرا",
      "صنوبر" /*      */,
    ],
    bird: ["کبوتر", "گنجشک", "پرستو"],
    nchick: ["سه", "چهار", "پنج", "شش"],
    supervisor: ["پدر", "مادر"],
    parentact: ["پرید پایین", "به سراغشان آمد", "پرید روی لانه",],
    fightreason: [
      "فقط #mouth#شان را باز میکردند و #food# میخواستند",
      "توی سر هم نوک میزدند",
      "جیغ میزدند",
      "#food# همدیگر را میخوردند",
    ],
    mouth: ["دهان", "نوک", "منقار"],
    food: [
      "دانه",
      "کرم",
      "حشره",
      "برگ",
      "پسته",
      "گردو",
      "بادام",
      "گیلاس",
      "آلبالو",
    ],
    describe: ["قشنگ", "بانمک", "خوشگل", "زیبا", "زشت"],
    remember:["یادتان باشد","فراموش نکنید","به یاد بپسارید"],
    advice:["همیشه با هم باشید","با یکدیگر دعوا نکنید","شما خواهر و برادر هستید","همیشه با هم متحد باشید","همیشه با یکدیگر #unity#ی مثال نزدنی داشته باشید"],
    advicestory:["به این مورچه های #anttype# نگاه کنید آن #food# که می برند مگر نه اینکه چندین برابر قد و قواره آنهاست ولی آنها با #unity#ی که دارند با هم #food# را بلند می کنند و همه در یک جهت حرکت میکنند ","به این زنبورهای عسل نگاه کنید که برای از بین بردن این دشمن بزرگ خود به جای بیهوده نیش زدن، با هم #unity# می‌شوند؛ آنها در حالی که پرواز می‌کنند به همدیگر می‌چسبند، به شکل یک #circle# در می‌آیند سپس همگی با هم شروع به لرزش و تولید گرما می‌کنند تا دشمن خود را بسوزانند"],
    unity:["اتحاد","همدل","انسجام"],
    anttype:["کوچک","زرد","سرخ","بارکش","کولبر",],
    circle:["گوی","توپ","گردی","توده",]
  
  };

  let grammar = tracery.createGrammar(data);
  let expansion = grammar.flatten("#start#");

  sentences.push(expansion);

  printSentences(sentences);
}

function printSentences(sentences) {
  let textBox = document.getElementById("sentences");
  textBox.innerHTML = "";
  for (let i = sentences.length - 1; i >= 0; i--) {
    textBox.innerHTML += "<p>" + sentences[i] + "</p>";
  }
}
