const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const quizData = {
  confucius: [
    {
      question: "臺南孔廟有什麼重要稱號？",
      options: ["台灣首府", "全臺首學", "王城古蹟", "府城城門"],
      answer: 1,
      explanation: "臺南孔廟因為在台灣早期教育史上具有重要地位，所以有「全臺首學」之稱。"
    },
    {
      question: "臺南孔廟主要祭祀的人物是誰？",
      options: ["鄭成功", "媽祖", "孔子", "關聖帝君"],
      answer: 2,
      explanation: "孔廟主要祭祀孔子，孔子被視為教育與文化的重要象徵。"
    },
    {
      question: "臺南孔廟大約創建於哪一年？",
      options: ["1624 年", "1665 年", "1895 年", "1975 年"],
      answer: 1,
      explanation: "臺南孔廟創建於 1665 年，也就是明鄭時期。"
    },
    {
      question: "臺南孔廟的建立和哪一個政權較有關係？",
      options: ["荷蘭政權", "鄭氏王朝", "日本政府", "西班牙政權"],
      answer: 1,
      explanation: "臺南孔廟是在明鄭時期建立，和鄭氏王朝推動教育有關。"
    },
    {
      question: "臺南孔廟的建立目的，除了祭祀孔子，也和什麼有關？",
      options: ["軍事防禦", "海上貿易", "教育與培養人才", "商業交易"],
      answer: 2,
      explanation: "臺南孔廟不只是祭祀場所，也和早期教育、官學與培養人才有關。"
    },
    {
      question: "臺南孔廟為什麼不只是一般廟宇？",
      options: ["因為它曾經結合祭祀與教育功能", "因為它是停船的地方", "因為它是古代市場", "因為它是軍營"],
      answer: 0,
      explanation: "孔廟同時具有祭祀與教育意義，所以不只是一般拜拜的廟宇。"
    },
    {
      question: "孔子在傳統文化中被尊稱為什麼？",
      options: ["開臺聖王", "至聖先師", "天上聖母", "武聖"],
      answer: 1,
      explanation: "孔子被尊稱為「至聖先師」，代表非常偉大的老師。"
    },
    {
      question: "臺南孔廟的氛圍比較接近哪一種感覺？",
      options: ["熱鬧夜市", "莊重安靜的文化空間", "遊樂園", "商場"],
      answer: 1,
      explanation: "孔廟的氛圍較安靜、莊重，帶有教育與文化空間的感覺。"
    },
    {
      question: "臺南孔廟象徵台南哪一方面的歷史？",
      options: ["教育與文化", "戰爭與航海", "工業發展", "現代科技"],
      answer: 0,
      explanation: "孔廟象徵教育、文化與學習精神。"
    },
    {
      question: "來到孔廟時，除了拍照，也可以理解它代表什麼？",
      options: ["台灣早期教育發展的重要象徵", "台南最大的美食街", "荷蘭人的軍事基地", "日治時期車站"],
      answer: 0,
      explanation: "臺南孔廟可以被理解為台灣早期教育發展的重要象徵。"
    }
  ],

  anping: [
    {
      question: "安平古堡的前身叫什麼？",
      options: ["赤崁樓", "熱蘭遮堡", "億載金城", "臺灣府學"],
      answer: 1,
      explanation: "安平古堡的前身是熱蘭遮堡，也常被稱為熱蘭遮城。"
    },
    {
      question: "熱蘭遮堡最早和哪一個外國勢力有關？",
      options: ["荷蘭人", "日本人", "西班牙人", "英國人"],
      answer: 0,
      explanation: "熱蘭遮堡和荷蘭人在台灣的歷史有很深的關係。"
    },
    {
      question: "熱蘭遮堡大約在什麼時期開始建立？",
      options: ["1624 年", "1665 年", "1895 年", "1975 年"],
      answer: 0,
      explanation: "荷蘭人約在 1624 年開始於安平一帶建立據點。"
    },
    {
      question: "安平古堡早期主要功能之一是什麼？",
      options: ["教育學校", "軍事防禦要塞", "祭孔場所", "現代百貨公司"],
      answer: 1,
      explanation: "安平古堡早期與軍事防禦、統治和貿易都有關。"
    },
    {
      question: "鄭成功打敗荷蘭人後，這一帶後來被稱為什麼？",
      options: ["安平", "淡水", "鹿港", "打狗"],
      answer: 0,
      explanation: "鄭成功來台後，這一帶進入新的歷史階段，後來稱為安平。"
    },
    {
      question: "安平古堡又曾被稱為什麼？",
      options: ["王城", "全臺首學", "孔廟", "赤崁書院"],
      answer: 0,
      explanation: "安平古堡因歷史地位，也曾被稱為王城。"
    },
    {
      question: "安平古堡除了軍事防禦，也和什麼有關？",
      options: ["海上貿易與對外交流", "科舉考試", "現代工廠", "鐵路運輸"],
      answer: 0,
      explanation: "早期安平靠近海邊，是重要出入口，也和海上貿易、對外交流有關。"
    },
    {
      question: "安平古堡見證了台灣哪一段重要轉變？",
      options: ["從荷蘭時期到鄭氏時期", "從清代到網路時代", "從農業到半導體產業", "從山區部落到都市商圈"],
      answer: 0,
      explanation: "安平古堡見證了台灣從荷蘭時期走向鄭氏時期的重要轉變。"
    },
    {
      question: "看到安平古堡的紅磚牆和遺跡時，可以把它理解成什麼？",
      options: ["歷史留下來的痕跡", "現代新建商場", "普通裝飾牆", "遊樂設施"],
      answer: 0,
      explanation: "古堡中的遺跡與紅磚牆，是歷史留下來的重要痕跡。"
    },
    {
      question: "如果孔廟象徵教育與文化，安平古堡比較象徵什麼？",
      options: ["政權轉變、海洋貿易與歷史交流", "現代購物", "校園生活", "體育競賽"],
      answer: 0,
      explanation: "安平古堡象徵政權轉變、海洋貿易與台灣早期歷史交流。"
    }
  ]
};

const quizState = {
  confucius: {},
  anping: {}
};

function renderQuiz(type) {
  const container = document.getElementById(type === "confucius" ? "confuciusQuiz" : "anpingQuiz");
  const questions = quizData[type];

  container.innerHTML = questions.map((item, qIndex) => {
    const optionsHtml = item.options.map((option, oIndex) => {
      return `
        <button
          class="option-btn"
          data-type="${type}"
          data-question="${qIndex}"
          data-option="${oIndex}"
          onclick="selectOption('${type}', ${qIndex}, ${oIndex})"
        >
          ${String.fromCharCode(65 + oIndex)}. ${option}
        </button>
      `;
    }).join("");

    return `
      <article class="quiz-card" id="${type}-q-${qIndex}">
        <div class="quiz-head">
          <span class="quiz-number">${qIndex + 1}</span>
          <h3>${item.question}</h3>
        </div>
        <div class="options">
          ${optionsHtml}
        </div>
        <div class="explanation" id="${type}-exp-${qIndex}">
          ${item.explanation}
        </div>
      </article>
    `;
  }).join("");
}

function selectOption(type, qIndex, selectedIndex) {
  if (quizState[type][qIndex] !== undefined) return;

  quizState[type][qIndex] = selectedIndex;

  const question = quizData[type][qIndex];
  const card = document.getElementById(`${type}-q-${qIndex}`);
  const buttons = card.querySelectorAll(".option-btn");
  const explanation = document.getElementById(`${type}-exp-${qIndex}`);

  buttons.forEach((button, index) => {
    button.classList.add("disabled");

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== question.answer) {
      button.classList.add("wrong");
    }
  });

  explanation.classList.add("show");
}

function submitQuiz(type) {
  const questions = quizData[type];
  const answeredCount = Object.keys(quizState[type]).length;

  if (answeredCount < questions.length) {
    alert(`還有 ${questions.length - answeredCount} 題還沒作答喔！`);
    return;
  }

  let correctCount = 0;

  questions.forEach((question, index) => {
    if (quizState[type][index] === question.answer) {
      correctCount++;
    }
  });

  const score = correctCount * 10;
  const title = type === "confucius" ? getConfuciusTitle(score) : getAnpingTitle(score);
  const resultBox = document.getElementById(type === "confucius" ? "confuciusResult" : "anpingResult");
  const titleName = type === "confucius" ? "第一關｜孔廟十問完成！" : "第二關｜安平古堡十問完成！";
  const stampImg = score >= 70 ? "image/ui/badge-complete.jpg" : "image/ui/scroll.jpg";

  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <img src="${stampImg}" alt="結算圖示">
    <h3>${titleName}</h3>
    <p class="result-score">得分：${score} / 100</p>
    <p class="result-title">稱號：${title}</p>
    <p>${getCaptainComment(type, score)}</p>
  `;

  resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetQuiz(type) {
  quizState[type] = {};
  renderQuiz(type);

  const resultBox = document.getElementById(type === "confucius" ? "confuciusResult" : "anpingResult");
  resultBox.classList.add("hidden");
  resultBox.innerHTML = "";
}

function getConfuciusTitle(score) {
  if (score >= 90) return "全臺首學達人";
  if (score >= 70) return "孔廟小學霸";
  if (score >= 50) return "認真聽講旅人";
  if (score >= 30) return "還需要隊長提示";
  return "再聽隊長介紹一次";
}

function getAnpingTitle(score) {
  if (score >= 90) return "熱蘭遮城守關者";
  if (score >= 70) return "安平古堡小達人";
  if (score >= 50) return "府城歷史旅人";
  if (score >= 30) return "還需要隊長補課";
  return "建議重闖古堡任務";
}

function getCaptainComment(type, score) {
  if (type === "confucius") {
    if (score >= 90) return "青衡：「孔廟任務表現非常好，看來你已經掌握全臺首學的重點了。」";
    if (score >= 70) return "青衡：「不錯，已經很接近孔廟小導遊的程度了。」";
    if (score >= 50) return "青衡：「有認真聽，但有些細節還可以再記一下。」";
    return "青衡：「先別緊張，再聽一次介紹，下一次一定更好。」";
  }

  if (score >= 90) return "青衡：「古堡任務通關成功，你已經有熱蘭遮城守關者的實力了。」";
  if (score >= 70) return "青衡：「表現不錯，安平古堡的歷史線索你抓得很準。」";
  if (score >= 50) return "青衡：「有抓到方向，但歷史轉折的細節還可以再補強。」";
  return "青衡：「古堡任務可以重闖一次，這次把荷蘭人、鄭成功和安平記清楚。」";
}

const foods = [
  {
    name: "阿川古早味粉圓冰",
    category: "ice",
    label: "甜點冰品",
    image: "image/food/achuan-ice.jpg",
    desc: "古早味粉圓冰，適合安排成散步後的甜點補給。"
  },
  {
    name: "江水號",
    category: "ice",
    label: "甜點冰品",
    image: "image/food/jiangshuihao.jpg",
    desc: "台南人氣冰品選擇，適合炎熱天氣補充戰力。"
  },
  {
    name: "太陽牌冰品",
    category: "ice",
    label: "甜點冰品",
    image: "image/food/sun-ice.jpg",
    desc: "經典冰品補給站，適合放進午後行程。"
  },
  {
    name: "修安扁擔豆花",
    category: "ice",
    label: "甜點冰品",
    image: "image/food/xiuan-tofu.jpg",
    desc: "豆花與甜湯類補給，適合喜歡傳統甜點的家人。"
  },
  {
    name: "德記古早味汕頭豆花",
    category: "ice",
    label: "甜點冰品",
    image: "image/food/deji-tofu.jpg",
    desc: "古早味豆花，作為小點心很適合。"
  },
  {
    name: "樑記正老店牛肉湯",
    category: "beef",
    label: "牛肉湯",
    image: "image/food/beef-soup-luji.jpg",
    desc: "第一天晚餐補給，讓喵喵小隊恢復體力。"
  },
  {
    name: "文章牛肉湯",
    category: "beef",
    label: "牛肉湯",
    image: "image/food/wenzhang-beef-soup.jpg",
    desc: "安平人氣牛肉湯選項，可作為美食備案。"
  },
  {
    name: "六千泓佐土產牛肉湯",
    category: "beef",
    label: "牛肉湯",
    image: "image/food/satoshi-beef-soup.jpg",
    desc: "台南牛肉湯代表之一，適合列入美食清單。"
  },
  {
    name: "西羅殿牛肉湯",
    category: "beef",
    label: "牛肉湯",
    image: "image/food/xioudian-beef-soup.jpg",
    desc: "溫體牛肉湯系美食補給，適合早午餐選擇。"
  },
  {
    name: "保安路米糕",
    category: "rice",
    label: "米糕碗粿",
    image: "image/food/baoan-rice-cake.jpg",
    desc: "米糕與傳統小吃類，適合想吃台南經典口味時安排。"
  },
  {
    name: "落成米糕",
    category: "rice",
    label: "米糕碗粿",
    image: "image/food/luocheng-rice-cake.jpg",
    desc: "傳統米糕選項，適合當作府城正餐或小吃。"
  },
  {
    name: "無名米糕",
    category: "rice",
    label: "米糕碗粿",
    image: "image/food/nameless-rice-cake.jpg",
    desc: "樸實但有台南味的小吃選擇。"
  },
  {
    name: "富盛號碗粿",
    category: "rice",
    label: "米糕碗粿",
    image: "image/food/fusheng-bowl-rice.jpg",
    desc: "台南碗粿代表，可當作小吃補給。"
  },
  {
    name: "葉家小卷米粉",
    category: "snack",
    label: "小吃海鮮",
    image: "image/food/ye-squid-noodle.jpg",
    desc: "海味小吃，適合放在安平或市區美食清單。"
  },
  {
    name: "王氏魚皮",
    category: "snack",
    label: "小吃海鮮",
    image: "image/food/wang-fish-skin.jpg",
    desc: "魚皮湯與台南小吃補給選項。"
  },
  {
    name: "東石鮮蚵嗨High",
    category: "snack",
    label: "小吃海鮮",
    image: "image/food/seafood.jpg",
    desc: "第二天晚餐補給，主打鮮蚵與海鮮。"
  },
  {
    name: "林家茂子白糖粿蕃薯碰",
    category: "snack",
    label: "小吃海鮮",
    image: "image/food/lin-jiamao-rice-cake.jpg",
    desc: "甜甜熱熱的街邊小吃，很適合當作旅途中小點。"
  },
  {
    name: "林永泰興蜜餞行",
    category: "gift",
    label: "伴手禮",
    image: "image/food/lin-preserved-fruit.jpg",
    desc: "安平經典伴手禮，可以買回家分享。"
  },
  {
    name: "舊李合興蜜餞",
    category: "gift",
    label: "伴手禮",
    image: "image/food/li-preserved-fruit.jpg",
    desc: "蜜餞類伴手禮選擇，適合放進安平老街行程。"
  }
];

function renderFoods(filter = "all") {
  const foodGrid = document.getElementById("foodGrid");

  const visibleFoods = filter === "all"
    ? foods
    : foods.filter(food => food.category === filter);

  foodGrid.innerHTML = visibleFoods.map(food => `
    <article class="food-card reveal active">
      <img src="${food.image}" alt="${food.name}">
      <div class="food-body">
        <span class="food-category">${food.label}</span>
        <h3>${food.name}</h3>
        <p>${food.desc}</p>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderFoods(button.dataset.filter);
  });
});

renderQuiz("confucius");
renderQuiz("anping");
renderFoods("all");