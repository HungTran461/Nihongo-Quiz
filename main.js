// ===============================
// Quiz Bảng chữ cái tiếng Nhật
// Hỗ trợ cả Hiragana + Katakana
// ===============================

// Dữ liệu: Hiragana và Katakana
const quizData = [
  // ========================
  // Hiragana (あ〜ん)
  // ========================
  { char: "あ", romaji: "a", type: "hiragana" },
  { char: "い", romaji: "i", type: "hiragana" },
  { char: "う", romaji: "u", type: "hiragana" },
  { char: "え", romaji: "e", type: "hiragana" },
  { char: "お", romaji: "o", type: "hiragana" },
  { char: "か", romaji: "ka", type: "hiragana" },
  { char: "き", romaji: "ki", type: "hiragana" },
  { char: "く", romaji: "ku", type: "hiragana" },
  { char: "け", romaji: "ke", type: "hiragana" },
  { char: "こ", romaji: "ko", type: "hiragana" },
  { char: "さ", romaji: "sa", type: "hiragana" },
  { char: "し", romaji: "shi", type: "hiragana" },
  { char: "す", romaji: "su", type: "hiragana" },
  { char: "せ", romaji: "se", type: "hiragana" },
  { char: "そ", romaji: "so", type: "hiragana" },
  { char: "た", romaji: "ta", type: "hiragana" },
  { char: "ち", romaji: "chi", type: "hiragana" },
  { char: "つ", romaji: "tsu", type: "hiragana" },
  { char: "て", romaji: "te", type: "hiragana" },
  { char: "と", romaji: "to", type: "hiragana" },
  { char: "な", romaji: "na", type: "hiragana" },
  { char: "に", romaji: "ni", type: "hiragana" },
  { char: "ぬ", romaji: "nu", type: "hiragana" },
  { char: "ね", romaji: "ne", type: "hiragana" },
  { char: "の", romaji: "no", type: "hiragana" },
  { char: "は", romaji: "ha", type: "hiragana" },
  { char: "ひ", romaji: "hi", type: "hiragana" },
  { char: "ふ", romaji: "fu", type: "hiragana" },
  { char: "へ", romaji: "he", type: "hiragana" },
  { char: "ほ", romaji: "ho", type: "hiragana" },
  { char: "ま", romaji: "ma", type: "hiragana" },
  { char: "み", romaji: "mi", type: "hiragana" },
  { char: "む", romaji: "mu", type: "hiragana" },
  { char: "め", romaji: "me", type: "hiragana" },
  { char: "も", romaji: "mo", type: "hiragana" },
  { char: "や", romaji: "ya", type: "hiragana" },
  { char: "ゆ", romaji: "yu", type: "hiragana" },
  { char: "よ", romaji: "yo", type: "hiragana" },
  { char: "ら", romaji: "ra", type: "hiragana" },
  { char: "り", romaji: "ri", type: "hiragana" },
  { char: "る", romaji: "ru", type: "hiragana" },
  { char: "れ", romaji: "re", type: "hiragana" },
  { char: "ろ", romaji: "ro", type: "hiragana" },
  { char: "わ", romaji: "wa", type: "hiragana" },
  { char: "を", romaji: "wo", type: "hiragana" },
  { char: "ん", romaji: "n", type: "hiragana" },

  // ========================
  // Katakana (ア〜ン)
  // ========================
  { char: "ア", romaji: "a", type: "katakana" },
  { char: "イ", romaji: "i", type: "katakana" },
  { char: "ウ", romaji: "u", type: "katakana" },
  { char: "エ", romaji: "e", type: "katakana" },
  { char: "オ", romaji: "o", type: "katakana" },
  { char: "カ", romaji: "ka", type: "katakana" },
  { char: "キ", romaji: "ki", type: "katakana" },
  { char: "ク", romaji: "ku", type: "katakana" },
  { char: "ケ", romaji: "ke", type: "katakana" },
  { char: "コ", romaji: "ko", type: "katakana" },
  { char: "サ", romaji: "sa", type: "katakana" },
  { char: "シ", romaji: "shi", type: "katakana" },
  { char: "ス", romaji: "su", type: "katakana" },
  { char: "セ", romaji: "se", type: "katakana" },
  { char: "ソ", romaji: "so", type: "katakana" },
  { char: "タ", romaji: "ta", type: "katakana" },
  { char: "チ", romaji: "chi", type: "katakana" },
  { char: "ツ", romaji: "tsu", type: "katakana" },
  { char: "テ", romaji: "te", type: "katakana" },
  { char: "ト", romaji: "to", type: "katakana" },
  { char: "ナ", romaji: "na", type: "katakana" },
  { char: "ニ", romaji: "ni", type: "katakana" },
  { char: "ヌ", romaji: "nu", type: "katakana" },
  { char: "ネ", romaji: "ne", type: "katakana" },
  { char: "ノ", romaji: "no", type: "katakana" },
  { char: "ハ", romaji: "ha", type: "katakana" },
  { char: "ヒ", romaji: "hi", type: "katakana" },
  { char: "フ", romaji: "fu", type: "katakana" },
  { char: "ヘ", romaji: "he", type: "katakana" },
  { char: "ホ", romaji: "ho", type: "katakana" },
  { char: "マ", romaji: "ma", type: "katakana" },
  { char: "ミ", romaji: "mi", type: "katakana" },
  { char: "ム", romaji: "mu", type: "katakana" },
  { char: "メ", romaji: "me", type: "katakana" },
  { char: "モ", romaji: "mo", type: "katakana" },
  { char: "ヤ", romaji: "ya", type: "katakana" },
  { char: "ユ", romaji: "yu", type: "katakana" },
  { char: "ヨ", romaji: "yo", type: "katakana" },
  { char: "ラ", romaji: "ra", type: "katakana" },
  { char: "リ", romaji: "ri", type: "katakana" },
  { char: "ル", romaji: "ru", type: "katakana" },
  { char: "レ", romaji: "re", type: "katakana" },
  { char: "ロ", romaji: "ro", type: "katakana" },
  { char: "ワ", romaji: "wa", type: "katakana" },
  { char: "ヲ", romaji: "wo", type: "katakana" },
  { char: "ン", romaji: "n", type: "katakana" },
  // ========================
  // Go Aisatsu (ごあいさつ) - cho romaji là nghĩa luôn đỡ phải sửa code nhiều
  // ========================
  { char: "おはようございます", romaji: "Chào buổi sáng", type: "goaisatsu" },
  { char: "こんにちは", romaji: "Chào buổi trưa", type: "goaisatsu" },
  { char: "こんばんは", romaji: "Chào buổi tối", type: "goaisatsu" },
  { char: "ありがとうごさいます", romaji: "Cảm ơn", type: "goaisatsu" },
  { char: "しつれいします", romaji: "Xin phép", type: "goaisatsu" },
  { char: "おつかれさっまです", romaji: "Bạn vất vả rồi", type: "goaisatsu" },
  { char: "おやすみなさい", romaji: "Chúc ngủ ngon", type: "goaisatsu" },
  { char: "さようなら", romaji: "Tạm biệt", type: "goaisatsu" },
  { char: "いただきます", romaji: "Chúc ngon miệng", type: "goaisatsu" },
  { char: "ごちそうさまですた", romaji: "Cảm ơn vì bữa ăn", type: "goaisatsu" },
  { char: "いつてきます", romaji: "Tôi đi nhé!", type: "goaisatsu" },
  { char: "いつてらつしやい", romaji: "Bạn đi nhé!", type: "goaisatsu" },
  { char: "ただいま", romaji: "Tôi đã về rồi!", type: "goaisatsu" },
  { char: "おかえりなさい", romaji: "Bạn đã về rồi à!", type: "goaisatsu" },
  { char: "もうしわけございません", romaji: "Thành thật xin lỗi", type: "goaisatsu" },
  { char: "はじめましよう", romaji: "Bắt đầu thôi nào!", type: "goaisatsu" },
  { char: "やすみましよう", romaji: "Nghỉ ngơi thôi nào!", type: "goaisatsu" },
  { char: "おわりましよう", romaji: " Xong rồi!", type: "goaisatsu" },
  { char: "たつてください", romaji: "Hãy đứng lên!", type: "goaisatsu" },
  { char: "すわつてください", romaji: "Hãy ngồi xuống!", type: "goaisatsu" },
  { char: "みてください", romaji: "Xem nè!", type: "goaisatsu" },
  { char: "よんでください", romaji: "Hãy đọc nó!", type: "goaisatsu" },
  { char: "ただしい", romaji: "Đúng rồi!", type: "goaisatsu" },
  { char: "ちがいます", romaji: "Sai rồi!", type: "goaisatsu" },
  { char: "どういたしまして", romaji: "Không có gì!", type: "goaisatsu" },
  { char: "もしもし", romaji: "Alo", type: "goaisatsu" },
  { char: "すきだ", romaji: "Tôi thích bạn!", type: "goaisatsu" },
  { char: "なにかしつもんがありますか？", romaji: "Bạn có câu hỏi nào không?", type: "goaisatsu" }
];


let currentQuestion = 0;
let score = 0;
let questions = [];
let timer;
let timeLeft = 15;
let userAnswers = []; // Lưu lịch sử trả lời
let difficulty = "easy";
let currentType = "all"; // "all" | "hiragana" | "katakana"　｜"goaisatsu"

// Modal helpers
function showModal(message) {
  document.getElementById("modal-message").innerText = message;
  document.getElementById("modal").style.display = "flex";
}
document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

document.addEventListener('DOMContentLoaded', () => {
  initShapes();
});

function initShapes() {
  const shapes = document.querySelectorAll('.shape');
  const colors = ["#6ec1e4", "#f5a6b8", "#9be7c4", "#fac516", "#5fff74", "#ffd966", "#ffb6c1" , "#ff3f3fff" , "#ff82f5ff" , "#646464ff"];

  shapes.forEach(shape => {
    // gán animation float ban đầu
    startFloat(shape);

    // click để nổ
    shape.addEventListener('click', (e) => {
      e.stopPropagation();
      if (shape.dataset.exploding === '1') return;
      shape.dataset.exploding = '1';

      shape.classList.add('exploding');

      setTimeout(() => {
        shape.classList.remove('exploding');
        shape.dataset.exploding = '0';

        // chỉ đổi màu, giữ nguyên vị trí
        shape.style.background = colors[Math.floor(Math.random() * colors.length)];

        // khởi động lại float
        setTimeout(() => {
          startFloat(shape);
          shape.style.opacity = '0.35';
          shape.style.transform = '';
        }, 50);

      }, 650); // thời gian hiệu ứng nổ
    });
  });
}

function startFloat(shape) {
  const dur = 14 + Math.random() * 10;
  const delay = Math.random() * 6;
  shape.style.animation = `floatShape ${dur}s ease-in-out ${delay}s infinite`;
}



// Shuffle
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Sinh câu hỏi
// Sinh câu hỏi (lọc theo currentType)
function generateQuestions(num = 15) {
  // Lấy pool theo loại hiện tại
  const pool = currentType === "all"
    ? [...quizData]
    : quizData.filter(q => q.type === currentType);

  // tránh trường hợp pool < num
  const actualNum = Math.min(num, pool.length);

  const selected = shuffle(pool).slice(0, actualNum);

  return selected.map((q) => {
    // số lượng đáp án sai tùy theo độ khó
    let wrongCount = 3; // default easy -> 4 options
    if (difficulty === "medium") wrongCount = 5; // 6 options
    if (difficulty === "hard") wrongCount = 7;   // 8 options

    const wrong = shuffle(
      quizData.filter((item) => item.romaji !== q.romaji && item.type === q.type)
    ).slice(0, wrongCount);

    const options = shuffle([q, ...wrong]);

    return {
      char: q.char,
      answer: q.romaji,
      options: options.map((o) => o.romaji),
      type: q.type,
    };
  });
}

// sau initShapes(); hoặc trong DOMContentLoaded
function setQuizType(type) {
  currentType = type;
  // cập nhật UI active cho nút
  document.querySelectorAll('#type-buttons .type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
}

// gán sự kiện cho các nút
document.querySelectorAll('#type-buttons .type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    setQuizType(type);
    // nếu đang ở màn start screen có thể cần reload UI / reset quiz
    showStartScreen(); // trả về màn hình chính (cập nhật trạng thái nếu cần)
  });
});

// Render câu hỏi
function renderQuestion() {
  clearInterval(timer);
  timeLeft = 15;

  const q = questions[currentQuestion];
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <div class="fade-in">
      <h2>Câu ${currentQuestion + 1} / ${questions.length}</h2>
      <div class="char">${q.char}</div>
      <div class="options">
        ${q.options
          .map(
            (opt) =>
              `<button class="option-btn" onclick="checkAnswer('${opt}')">${opt}</button>`
          )
          .join("")}
      </div>
      <p>Điểm hiện tại: ${score}</p>
      <div id="timer-bar"><div id="timer-fill"></div></div>
      <button class="end-btn" onclick="showResult()">Kết thúc Quiz</button>
    </div>
  `;

  const timerFill = document.getElementById("timer-fill");

  timer = setInterval(() => {
    timeLeft--;
    timerFill.style.width = (timeLeft / 15) * 100 + "%";

    if (timeLeft <= 0) {
      clearInterval(timer);
      showModal("⏰ Hết giờ!");
      checkAnswer(null);
    }
  }, 1000);
}

// Kiểm tra đáp án
function checkAnswer(selected) {
  clearInterval(timer);

  const q = questions[currentQuestion];
  let isCorrect = selected === q.answer;

  // Lưu đáp án của câu hiện tại
  userAnswers[currentQuestion] = {
    char: q.char,
    correct: q.answer,
    chosen: selected,
    isCorrect: isCorrect
  };

  if (selected === q.answer) {
    score++;
    showModal("✅ Chính xác!");
  } else if (selected === null) {
    showModal(`❌ Hết giờ! Đáp án đúng: ${q.answer}`);
  } else {
    showModal(`❌ Sai! Đáp án đúng: ${q.answer}`);
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(renderQuestion, 1000);
  } else {
    setTimeout(showResult, 1000);
  }
}


// Kết quả
function showResult() {
  clearInterval(timer);
  const container = document.getElementById("quiz-container");

  let resultTable = `
    <div class="fade-in">
    <h2>Kết thúc!</h2>
    <p>Bạn trả lời đúng ${score}/${questions.length} câu.</p>
    <table class="result-table">
      <tr>
        <th>Câu hỏi</th>
        <th>Đáp án đúng</th>
        <th>Đáp án đã chọn</th>
      </tr>
    </div>
  `;

  questions.forEach((q, index) => {
    const ans = userAnswers[index];

    let chosen, cssClass;
    if (ans) {
      chosen = ans.chosen !== null ? ans.chosen : "⏰ Không trả lời";
      cssClass = ans.isCorrect
        ? "result-correct"
        : ans.chosen === null
        ? "result-missed"
        : "result-wrong";
    } else {
      chosen = "Không chọn";
      cssClass = "result-missed";
    }

    resultTable += `
      <tr>
        <td style="font-size:28px;">${q.char}</td>
        <td>${q.answer}</td>
        <td class="${cssClass}">${chosen}</td>
      </tr>
    `;
  });

  resultTable += `</table>
    <div class="result-buttons">
      <button class="start-btn" onclick="startQuiz()">Làm lại</button>
      <button class="end-btn" onclick="showStartScreen()">Về màn hình chính</button>
    </div>
  `;

  container.innerHTML = resultTable;
}

function showStartScreen() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div class="fade-in">
      <h2>Chào mừng đến với Quiz Cơ Bản Tiếng Nhật</h2>
      <p>Chọn thể loại:</p>
      <div id="type-buttons" class="type-buttons">
        <button class="type-btn all active" onclick="setType('all')">Kết hợp</button>
        <button class="type-btn hiragana" onclick="setType('hiragana')">Hiragana</button>
        <button class="type-btn katakana" onclick="setType('katakana')">Katakana</button>
        <button class="type-btn goaisatsu" onclick="setType('goaisatsu')">Câu chào hỏi</button>
      </div>
      <p>Chọn độ khó:</p>
      <div class="difficulty-buttons">
        <button class="difficulty-btn easy active" onclick="setDifficulty('easy')">4 Đáp án</button>
        <button class="difficulty-btn medium" onclick="setDifficulty('medium')">6 Đáp án</button>
        <button class="difficulty-btn hard" onclick="setDifficulty('hard')">8 Đáp án</button>
      </div>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showAlphabet()">Xem bảng chữ cái</button>
    </div>
  `;

  // Gán độ khó mặc định
  difficulty = "easy";
  currentType = 'all';
}



// Hàm chọn độ khó
function setDifficulty(level) {
  difficulty = level;
  showModal(`🔧 Bạn đã chọn cấp độ: ${level === "easy" ? "4 Đáp án" : level === "medium" ? "6 Đáp án" : "8 Đáp án"}`);
  // Xóa class active ở tất cả nút
  document.querySelectorAll(".difficulty-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // Thêm active cho nút đang chọn
  const selectedBtn = document.querySelector(`.difficulty-btn.${level}`);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  }
}

function setType(level) {
  currentType = level;
  showModal(`🔧 Bạn đã chọn thể loại: ${level === "all" ? "Tất cả" : level === "hiragana" ? "Hiragana" : level === "katakana" ? "Katakana" : "Câu chào hỏi"}`);
  // Xóa class active ở tất cả nút
  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // Thêm active cho nút đang chọn
  const selectedBtn = document.querySelector(`.type-btn.${level}`);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  }
}

// Hàm phát âm: nhận romaji, tìm hiragana ưu tiên, fallback katakana, fallback romaji
function playJapanese(romaji) {
  // tìm trong quizData (biến quizData đã có trong file)
  const hiraObj = quizData.find(q => q.romaji === romaji && q.type === "hiragana");
  const kataObj = quizData.find(q => q.romaji === romaji && q.type === "katakana");

  // ưu tiên đọc hiragana; nếu không có thì katakana; nếu cũng không có thì đọc romaji (cuối cùng)
  const textToSpeak = hiraObj ? hiraObj.char : (kataObj ? kataObj.char : romaji);

  // đảm bảo huỷ speech cũ (không bị chồng)
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();

    const speakNow = () => {
      const utterance = new SpeechSynthesisUtterance(textToSpeak + "。"); // thêm dấu chấm để tạo pause
      utterance.lang = "ja-JP";
      utterance.rate = 0.6; // chậm, dễ nghe (bạn có thể chỉnh 0.6 - 0.9)
      utterance.pitch = 1.0;

      // chọn giọng tiếng Nhật nếu có
      const voices = speechSynthesis.getVoices();
      const jaVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("ja"));
      if (jaVoice) utterance.voice = jaVoice;

      speechSynthesis.speak(utterance);
    };

    // voices đôi khi chưa load ngay — lắng nghe onvoiceschanged nếu cần
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.onvoiceschanged = () => {
        speakNow();
        // tránh gọi nhiều lần nếu event lặp: reset handler
        speechSynthesis.onvoiceschanged = null;
      };
    } else {
      speakNow();
    }
  } else {
    alert("Trình duyệt của bạn không hỗ trợ Speech Synthesis.");
  }
}

// Hàm showAlphabet cập nhật: 4 cột (Hiragana, Katakana, Romaji, Nghe)
function showAlphabet() {
  const container = document.getElementById("quiz-container");

  // Chỉ lấy dữ liệu có type là hiragana hoặc katakana
  const filteredData = quizData.filter(q => q.type === "hiragana" || q.type === "katakana");

  // Gom dữ liệu theo romaji
  const romajiSet = [...new Set(filteredData.map(q => q.romaji))];

  // Tạo các hàng: mỗi hàng có 1 nút Nghe (dùng romaji để lookup kana trong playJapanese)
  let rows = romajiSet.map(r => {
    const hira = quizData.find(q => q.romaji === r && q.type === "hiragana");
    const kata = quizData.find(q => q.romaji === r && q.type === "katakana");

    // an toàn: escape any ' trong r (thông thường romaji không chứa dấu nháy)
    const safeR = String(r).replace(/'/g, "\\'");

    return `
      <tr>
        <td class="char">${hira ? hira.char : "-"}</td>
        <td class="char">${kata ? kata.char : "-"}</td>
        <td>${r}</td>
        <td style="text-align:center;">
          <button class="sound-btn" onclick="playJapanese('${safeR}')">🔊</button>
        </td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <div class="fade-in">
      <h2>Bảng Chữ Cái Tiếng Nhật</h2>
      <table class="alphabet-table">
        <thead>
          <tr>
            <th>Hiragana</th>
            <th>Katakana</th>
            <th>Phiên âm</th>
            <th>Nghe</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <br/>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showStartScreen()">Quay lại màn hình chính</button>
    </div>
  `;
}


// Bắt đầu
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  questions = generateQuestions(15);
  renderQuestion();
}


// Giao diện ban đầu
document.getElementById("quiz-container").innerHTML = `
  <h2>Chào mừng đến với Quiz Cơ Bản Tiếng Nhật</h2>
  <p>Chọn thể loại:</p>
  <div id="type-buttons" class="type-buttons">
    <button class="type-btn all active" onclick="setType('all')">Kết hợp</button>
    <button class="type-btn hiragana" onclick="setType('hiragana')">Hiragana</button>
    <button class="type-btn katakana" onclick="setType('katakana')">Katakana</button>
    <button class="type-btn goaisatsu" onclick="setType('goaisatsu')">Câu chào hỏi</button>
  </div>
  <p>Chọn độ khó:</p>
  <div class="difficulty-buttons">
        <button class="difficulty-btn easy active" onclick="setDifficulty('easy')">4 Đáp án</button>
        <button class="difficulty-btn medium" onclick="setDifficulty('medium')">6 Đáp án</button>
        <button class="difficulty-btn hard" onclick="setDifficulty('hard')">8 Đáp án</button>
      </div>
  <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
  <button class="end-btn" onclick="showAlphabet()">Xem bảng chữ cái</button>
`
