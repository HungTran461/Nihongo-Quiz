// ===============================
// Quiz Bảng chữ cái tiếng Nhật
// Hỗ trợ cả Hiragana + Katakana
// ===============================

// Dữ liệu: Hiragana và Katakana
const quizData = [
  
  // ========================
  // Hiragana (あ〜ん)
  // ========================
  { char: "あ", romaji: "a", type: "hiragana" ,group : "nguyenam"},
  { char: "い", romaji: "i", type: "hiragana" ,group : "nguyenam"},
  { char: "う", romaji: "u", type: "hiragana" ,group : "nguyenam"},
  { char: "え", romaji: "e", type: "hiragana" ,group : "nguyenam"},
  { char: "お", romaji: "o", type: "hiragana" ,group : "nguyenam"},
  { char: "か", romaji: "ka", type: "hiragana" ,group : "nguyenam"},
  { char: "き", romaji: "ki", type: "hiragana" ,group : "nguyenam"},
  { char: "く", romaji: "ku", type: "hiragana" ,group : "nguyenam"},
  { char: "け", romaji: "ke", type: "hiragana" ,group : "nguyenam"},
  { char: "こ", romaji: "ko", type: "hiragana" ,group : "nguyenam"},
  { char: "さ", romaji: "sa", type: "hiragana" ,group : "nguyenam"},
  { char: "し", romaji: "shi", type: "hiragana" ,group : "nguyenam"},
  { char: "す", romaji: "su", type: "hiragana" ,group : "nguyenam"},
  { char: "せ", romaji: "se", type: "hiragana" ,group : "nguyenam"},
  { char: "そ", romaji: "so", type: "hiragana" ,group : "nguyenam"},
  { char: "た", romaji: "ta", type: "hiragana" ,group : "nguyenam"},
  { char: "ち", romaji: "chi", type: "hiragana" ,group : "nguyenam"},
  { char: "つ", romaji: "tsu", type: "hiragana" ,group : "nguyenam"},
  { char: "て", romaji: "te", type: "hiragana" ,group : "nguyenam"},
  { char: "と", romaji: "to", type: "hiragana" ,group : "nguyenam"},
  { char: "な", romaji: "na", type: "hiragana" ,group : "nguyenam"},
  { char: "に", romaji: "ni", type: "hiragana" ,group : "nguyenam"},
  { char: "ぬ", romaji: "nu", type: "hiragana" ,group : "nguyenam"},
  { char: "ね", romaji: "ne", type: "hiragana" ,group : "nguyenam"},
  { char: "の", romaji: "no", type: "hiragana" ,group : "nguyenam"},
  { char: "は", romaji: "ha", type: "hiragana" ,group : "nguyenam"},
  { char: "ひ", romaji: "hi", type: "hiragana" ,group : "nguyenam"},
  { char: "ふ", romaji: "fu", type: "hiragana" ,group : "nguyenam"},
  { char: "へ", romaji: "he", type: "hiragana" ,group : "nguyenam"},
  { char: "ほ", romaji: "ho", type: "hiragana" ,group : "nguyenam"},
  { char: "ま", romaji: "ma", type: "hiragana" ,group : "nguyenam"},
  { char: "み", romaji: "mi", type: "hiragana" ,group : "nguyenam"},
  { char: "む", romaji: "mu", type: "hiragana" ,group : "nguyenam"},
  { char: "め", romaji: "me", type: "hiragana" ,group : "nguyenam"},
  { char: "も", romaji: "mo", type: "hiragana" ,group : "nguyenam"},
  { char: "や", romaji: "ya", type: "hiragana" ,group : "nguyenam"},
  { char: "ゆ", romaji: "yu", type: "hiragana" ,group : "nguyenam"},
  { char: "よ", romaji: "yo", type: "hiragana" ,group : "nguyenam"},
  { char: "ら", romaji: "ra", type: "hiragana" ,group : "nguyenam"},
  { char: "り", romaji: "ri", type: "hiragana" ,group : "nguyenam"},
  { char: "る", romaji: "ru", type: "hiragana" ,group : "nguyenam"},
  { char: "れ", romaji: "re", type: "hiragana" ,group : "nguyenam"},
  { char: "ろ", romaji: "ro", type: "hiragana" ,group : "nguyenam"},
  { char: "わ", romaji: "wa", type: "hiragana" ,group : "nguyenam"},
  { char: "を", romaji: "wo", type: "hiragana" ,group : "nguyenam"},
  { char: "ん", romaji: "n", type: "hiragana" ,group : "nguyenam"},
  { char: "が", romaji: "ga", type: "hiragana" ,group : "bienam"},
  { char: "ぎ", romaji: "gi", type: "hiragana" ,group : "bienam"},
  { char: "ぐ", romaji: "gu", type: "hiragana" ,group : "bienam"},
  { char: "げ", romaji: "ge", type: "hiragana" ,group : "bienam"},
  { char: "ご", romaji: "go", type: "hiragana" ,group : "bienam"},
  { char: "ざ", romaji: "za", type: "hiragana" ,group : "bienam"},
  { char: "じ", romaji: "ji(zi)", type: "hiragana" ,group : "bienam"},
  { char: "ず", romaji: "zu", type: "hiragana" ,group : "bienam"},
  { char: "ぜ", romaji: "ze", type: "hiragana" ,group : "bienam"},
  { char: "ぞ", romaji: "zo", type: "hiragana" ,group : "bienam"},
  { char: "だ", romaji: "da", type: "hiragana" ,group : "bienam"},
  { char: "ぢ", romaji: "ji(di)", type: "hiragana" ,group : "bienam"},
  { char: "づ", romaji: "zu(du)", type: "hiragana" ,group : "bienam"},
  { char: "で", romaji: "de", type: "hiragana" ,group : "bienam"},
  { char: "ど", romaji: "do", type: "hiragana" ,group : "bienam"},
  { char: "ば", romaji: "ba", type: "hiragana" ,group : "bienam"},
  { char: "び", romaji: "bi", type: "hiragana" ,group : "bienam"},
  { char: "ぶ", romaji: "bu", type: "hiragana" ,group : "bienam"},
  { char: "べ", romaji: "be", type: "hiragana" ,group : "bienam"},
  { char: "ぼ", romaji: "bo", type: "hiragana" ,group : "bienam"},
  { char: "ぱ", romaji: "pa", type: "hiragana" ,group : "bienam"},
  { char: "ぴ", romaji: "pi", type: "hiragana" ,group : "bienam"},
  { char: "ぷ", romaji: "pu", type: "hiragana" ,group : "bienam"},
  { char: "ぺ", romaji: "pe", type: "hiragana" ,group : "bienam"},
  { char: "ぽ", romaji: "po", type: "hiragana" ,group : "bienam"},

  // ========================
  // Katakana (ア〜ン)
  // ========================
  { char: "ア", romaji: "a", type: "katakana" ,group : "nguyenam"},
  { char: "イ", romaji: "i", type: "katakana" ,group : "nguyenam"},
  { char: "ウ", romaji: "u", type: "katakana" ,group : "nguyenam"},
  { char: "エ", romaji: "e", type: "katakana" ,group : "nguyenam"},
  { char: "オ", romaji: "o", type: "katakana" ,group : "nguyenam"},
  { char: "カ", romaji: "ka", type: "katakana" ,group : "nguyenam"},
  { char: "キ", romaji: "ki", type: "katakana" ,group : "nguyenam"},
  { char: "ク", romaji: "ku", type: "katakana" ,group : "nguyenam"},
  { char: "ケ", romaji: "ke", type: "katakana" ,group : "nguyenam"},
  { char: "コ", romaji: "ko", type: "katakana" ,group : "nguyenam"},
  { char: "サ", romaji: "sa", type: "katakana" ,group : "nguyenam"},
  { char: "シ", romaji: "shi", type: "katakana" ,group : "nguyenam"},
  { char: "ス", romaji: "su", type: "katakana" ,group : "nguyenam"},
  { char: "セ", romaji: "se", type: "katakana" ,group : "nguyenam"},
  { char: "ソ", romaji: "so", type: "katakana" ,group : "nguyenam"},
  { char: "タ", romaji: "ta", type: "katakana" ,group : "nguyenam"},
  { char: "チ", romaji: "chi", type: "katakana" ,group : "nguyenam"},
  { char: "ツ", romaji: "tsu", type: "katakana" ,group : "nguyenam"},
  { char: "テ", romaji: "te", type: "katakana" ,group : "nguyenam"},
  { char: "ト", romaji: "to", type: "katakana" ,group : "nguyenam"},
  { char: "ナ", romaji: "na", type: "katakana" ,group : "nguyenam"},
  { char: "ニ", romaji: "ni", type: "katakana" ,group : "nguyenam"},
  { char: "ヌ", romaji: "nu", type: "katakana" ,group : "nguyenam"},
  { char: "ネ", romaji: "ne", type: "katakana" ,group : "nguyenam"},
  { char: "ノ", romaji: "no", type: "katakana" ,group : "nguyenam"},
  { char: "ハ", romaji: "ha", type: "katakana" ,group : "nguyenam"},
  { char: "ヒ", romaji: "hi", type: "katakana" ,group : "nguyenam"},
  { char: "フ", romaji: "fu", type: "katakana" ,group : "nguyenam"},
  { char: "ヘ", romaji: "he", type: "katakana" ,group : "nguyenam"},
  { char: "ホ", romaji: "ho", type: "katakana" ,group : "nguyenam"},
  { char: "マ", romaji: "ma", type: "katakana" ,group : "nguyenam"},
  { char: "ミ", romaji: "mi", type: "katakana" ,group : "nguyenam"},
  { char: "ム", romaji: "mu", type: "katakana" ,group : "nguyenam"},
  { char: "メ", romaji: "me", type: "katakana" ,group : "nguyenam"},
  { char: "モ", romaji: "mo", type: "katakana" ,group : "nguyenam"},
  { char: "ヤ", romaji: "ya", type: "katakana" ,group : "nguyenam"},
  { char: "ユ", romaji: "yu", type: "katakana" ,group : "nguyenam"},
  { char: "ヨ", romaji: "yo", type: "katakana" ,group : "nguyenam"},
  { char: "ラ", romaji: "ra", type: "katakana" ,group : "nguyenam"},
  { char: "リ", romaji: "ri", type: "katakana" ,group : "nguyenam"},
  { char: "ル", romaji: "ru", type: "katakana" ,group : "nguyenam"},
  { char: "レ", romaji: "re", type: "katakana" ,group : "nguyenam"},
  { char: "ロ", romaji: "ro", type: "katakana" ,group : "nguyenam"},
  { char: "ワ", romaji: "wa", type: "katakana" ,group : "nguyenam"},
  { char: "ヲ", romaji: "wo", type: "katakana" ,group : "nguyenam"},
  { char: "ン", romaji: "n", type: "katakana" ,group : "nguyenam"},
  { char: "ガ", romaji: "ga", type: "katakana" ,group : "bienam"},
  { char: "ギ", romaji: "gi", type: "katakana" ,group : "bienam"},
  { char: "グ", romaji: "gu", type: "katakana" ,group : "bienam"},
  { char: "ゲ", romaji: "ge", type: "katakana" ,group : "bienam"},
  { char: "ゴ", romaji: "go", type: "katakana" ,group : "bienam"},
  { char: "ザ", romaji: "za", type: "katakana" ,group : "bienam"},
  { char: "ジ", romaji: "ji(zi)", type: "katakana" ,group : "bienam"},
  { char: "ズ", romaji: "zu", type: "katakana" ,group : "bienam"},
  { char: "ゼ", romaji: "ze", type: "katakana" ,group : "bienam"},
  { char: "ゾ", romaji: "zo", type: "katakana" ,group : "bienam"},
  { char: "ダ", romaji: "da", type: "katakana" ,group : "bienam"},
  { char: "ヂ", romaji: "ji(di)", type: "katakana" ,group : "bienam"},
  { char: "ヅ", romaji: "zu(du)", type: "katakana" ,group : "bienam"},
  { char: "デ", romaji: "de", type: "katakana" ,group : "bienam"},
  { char: "ド", romaji: "do", type: "katakana" ,group : "bienam"},
  { char: "バ", romaji: "ba", type: "katakana" ,group : "bienam"},
  { char: "ビ", romaji: "bi", type: "katakana" ,group : "bienam"},
  { char: "ブ", romaji: "bu", type: "katakana" ,group : "bienam"},
  { char: "ベ", romaji: "be", type: "katakana" ,group : "bienam"},
  { char: "ボ", romaji: "bo", type: "katakana" ,group : "bienam"},
  { char: "パ", romaji: "pa", type: "katakana" ,group : "bienam"},
  { char: "ピ", romaji: "pi", type: "katakana" ,group : "bienam"},
  { char: "プ", romaji: "pu", type: "katakana" ,group : "bienam"},
  { char: "ペ", romaji: "pe", type: "katakana" ,group : "bienam"},
  { char: "ポ", romaji: "po", type: "katakana" ,group : "bienam"},

  // ========================
  // Go Aisatsu (ごあいさつ) - cho romaji là nghĩa luôn đỡ phải sửa code nhiều
  // ========================
  // ==== Nhóm: Chào hỏi cơ bản ====
  { char: "おはようございます", romaji: "Chào buổi sáng", type: "goaisatsu", group: "chaohoi" },
  { char: "こんにちは", romaji: "Chào buổi trưa", type: "goaisatsu", group: "chaohoi" },
  { char: "こんばんは", romaji: "Chào buổi tối", type: "goaisatsu", group: "chaohoi" },
  { char: "おやすみなさい", romaji: "Chúc ngủ ngon", type: "goaisatsu", group: "chaohoi" },
  { char: "さようなら", romaji: "Tạm biệt", type: "goaisatsu", group: "chaohoi" },
  { char: "またあいましょう", romaji: "Hẹn gặp lại!", type: "goaisatsu", group: "chaohoi" },
  { char: "しゃまたね", romaji: "Gặp lại sau nhé!", type: "goaisatsu", group: "chaohoi" },

  // ==== Nhóm: Cảm ơn / Xin lỗi / Xin phép ====
  { char: "ありがとうごさいます", romaji: "Cảm ơn", type: "goaisatsu", group: "camonxloi" },
  { char: "どういたしまして", romaji: "Không có gì!", type: "goaisatsu", group: "camonxloi" },
  { char: "しつれいします", romaji: "Xin phép", type: "goaisatsu", group: "camonxloi" },
  { char: "おさきにしつれいします", romaji: "Xin phép về trước", type: "goaisatsu", group: "camonxloi" },
  { char: "もうわけございません", romaji: "Thành thật xin lỗi", type: "goaisatsu", group: "camonxloi" },
  { char: "すみません。まだわかりません。", romaji: "Xin lỗi. Tôi vẫn chưa hiểu.", type: "goaisatsu", group: "camonxloi" },

  // ==== Nhóm: Ăn uống / Sinh hoạt ====
  { char: "いただきます", romaji: "Chúc ngon miệng", type: "goaisatsu", group: "anuong" },
  { char: "ごちそうさまですた", romaji: "Cảm ơn vì bữa ăn", type: "goaisatsu", group: "anuong" },
  { char: "おいしいですね", romaji: "Ngon quá!", type: "goaisatsu", group: "anuong" },
  { char: "きょうわなにをたべますか。", romaji: "Hôm nay ăn gì?", type: "goaisatsu", group: "anuong" },
  { char: "たべてください", romaji: "Hãy ăn đi!", type: "goaisatsu", group: "anuong" },

  // ==== Nhóm: Đi / Về / Công việc ====
  { char: "いってきます", romaji: "Tôi đi nhé!", type: "goaisatsu", group: "dive" },
  { char: "いってらっしゃい", romaji: "Bạn đi nhé!", type: "goaisatsu", group: "dive" },
  { char: "ただいま", romaji: "Tôi đã về rồi!", type: "goaisatsu", group: "dive" },
  { char: "おかえりなさい", romaji: "Bạn đã về rồi à!", type: "goaisatsu", group: "dive" },
  { char: "おつかれさっまです", romaji: "Bạn vất vả rồi", type: "goaisatsu", group: "dive" },
  { char: "かえろう", romaji: "Về thôi nào!", type: "goaisatsu", group: "dive" },

  // ==== Nhóm: Trong lớp học / Lời hướng dẫn ====
  { char: "はじめましょう", romaji: "Bắt đầu thôi nào!", type: "goaisatsu", group: "lop" },
  { char: "やすみましょう", romaji: "Nghỉ ngơi thôi nào!", type: "goaisatsu", group: "lop" },
  { char: "おわりましょう", romaji: "Xong rồi!", type: "goaisatsu", group: "lop" },
  { char: "たってください", romaji: "Hãy đứng lên!", type: "goaisatsu", group: "lop" },
  { char: "すわってください", romaji: "Hãy ngồi xuống!", type: "goaisatsu", group: "lop" },
  { char: "みてください", romaji: "Xem nè!", type: "goaisatsu", group: "lop" },
  { char: "よんでください", romaji: "Hãy đọc nó!", type: "goaisatsu", group: "lop" },
  { char: "ただしい", romaji: "Đúng rồi!", type: "goaisatsu", group: "lop" },
  { char: "ちがいます", romaji: "Sai rồi!", type: "goaisatsu", group: "lop" },
  { char: "もういちどおねがいします", romaji: "Làm ơn hãy... 1 lần nữa!", type: "goaisatsu", group: "lop" },

  // ==== Nhóm: Hỏi – Đáp cơ bản ====
  { char: "なにかしつもんがありますか。", romaji: "Bạn có câu hỏi nào không?", type: "goaisatsu", group: "hoidap" },
  { char: "わかりますか。", romaji: "Bạn có hiểu không?", type: "goaisatsu", group: "hoidap" },
  { char: "はい。わかります。", romaji: "Vâng. Tôi hiểu.", type: "goaisatsu", group: "hoidap" },
  { char: "いいえ。わかりません。", romaji: "Không. Tôi không hiểu.", type: "goaisatsu", group: "hoidap" },
  { char: "わかりましたか。", romaji: "Bạn đã hiểu chưa?", type: "goaisatsu", group: "hoidap" },
  { char: "はい。なんですか。", romaji: "Vâng. Gì vậy ạ?", type: "goaisatsu", group: "hoidap" },

  // ==== Nhóm: Hội thoại thân mật / hàng ngày ====
  { char: "じかんがありますか。", romaji: "Bạn có rảnh không?", type: "goaisatsu", group: "hoithoai" },
  { char: "あそびにいきませんか。", romaji: "Đi chơi không?", type: "goaisatsu", group: "hoithoai" },
  { char: "みませんか。", romaji: "Xem không?", type: "goaisatsu", group: "hoithoai" },
  { char: "みましょう", romaji: "Xem thôi nào!", type: "goaisatsu", group: "hoithoai" },
  { char: "なにをしていますか。", romaji: "Đang làm gì vậy?", type: "goaisatsu", group: "hoithoai" },
  { char: "いつかえりますか？", romaji: "Khi nào về?", type: "goaisatsu", group: "hoithoai" },
  { char: "もしもし", romaji: "Alo", type: "goaisatsu", group: "hoithoai" },
  { char: "いこう", romaji: "Đi thôi nào!", type: "goaisatsu", group: "hoithoai" },
  { char: "おかねがありますか。", romaji: "Bạn có tiền không?", type: "goaisatsu", group: "hoithoai" },
  { char: "てつだいましょうか", romaji: "Để tôi giúp bạn nhé!", type: "goaisatsu", group: "hoithoai" },
  { char: "いいえ、けっこうです", romaji: "Thôi, được rồi!", type: "goaisatsu", group: "hoithoai" },
  { char: "だいしょうぶ", romaji: "Không sao!", type: "goaisatsu", group: "hoithoai" },
  { char: "すきだ", romaji: "Tôi thích bạn!", type: "goaisatsu", group: "hoithoai" },

  // ==== Nhóm: Giới thiệu bản thân ====
  { char: "はじめまして", romaji: "Rất vui khi được gặp bạn", type: "goaisatsu", group: "tugioithieu" },
  { char: "わたしは [_] とまうします。", romaji: "Tôi tên là ...", type: "goaisatsu", group: "tugioithieu" },
  { char: "[_]さいです。", romaji: "Tôi ... tuổi", type: "goaisatsu", group: "tugioithieu" },
  { char: "[_]からきました。", romaji: "Tôi đến từ ...", type: "goaisatsu", group: "tugioithieu" },
  { char: "[_]にすんでいます。", romaji: "Tôi đang sống ở ...", type: "goaisatsu", group: "tugioithieu" },
  { char: "KAIZENがっこうのがくせいます。", romaji: "Tôi là học viên của trường KAIZEN", type: "goaisatsu", group: "tugioithieu" },
  { char: "どうぞよろしくおねがいします。", romaji: "Rất vui được biết bạn và xin được giúp đỡ", type: "goaisatsu", group: "tugioithieu" },

  // ==== Nhóm: Chúc mừng / Khích lệ ====
  { char: "おたんしょうびおめでとう！", romaji: "Chúc mừng sinh nhật!", type: "goaisatsu", group: "chucmung" },
  { char: "おめでとうごさいます", romaji: "Xin chúc mừng!", type: "goaisatsu", group: "chucmung" },
  { char: "がんばってください", romaji: "Cố gắng hết sức nhé!", type: "goaisatsu", group: "chucmung" },
  { char: "おからだにきおつけて。", romaji: "Nhớ giữ gìn sức khỏe nhé!", type: "goaisatsu", group: "chucmung" },
  { char: "どうぞおげんきで。", romaji: "Chúc sức khỏe nhé!", type: "goaisatsu", group: "chucmung" },

  // ==== Nhóm: Biểu cảm cảm xúc ====
  { char: "すごいですね", romaji: "Hay quá!", type: "goaisatsu", group: "camxuc" },
  { char: "たいへんですね", romaji: "Vất vả quá!", type: "goaisatsu", group: "camxuc" },
  { char: "さんえんですね", romaji: "Tiếc quá!", type: "goaisatsu", group: "camxuc" },
  { char: "さびしいですね", romaji: "Buồn quá!", type: "goaisatsu", group: "camxuc" },
  { char: "ねむいですね", romaji: "Buồn ngủ quá!", type: "goaisatsu", group: "camxuc" },
  { char: "くさいですね", romaji: "Hôi quá!", type: "goaisatsu", group: "camxuc" },
  { char: "いたいよ", romaji: "Đau quá!", type: "goaisatsu", group: "camxuc" },
  { char: "いや", romaji: "Không thích!", type: "goaisatsu", group: "camxuc" },
  // === Trong công ty / nơi làm việc ===
  { char: "おはようございます。きょうもがんばりましょう。", romaji: "Chào buổi sáng, hôm nay cùng cố gắng nhé!", type: "goaisatsu", group: "taisya" },
  { char: "おつかれさまでした。さきにしつれいします。", romaji: "Cảm ơn vì hôm nay, tôi xin phép về trước.", type: "goaisatsu", group: "taisya" },
  { char: "かいぎはなんじからですか。", romaji: "Cuộc họp bắt đầu từ mấy giờ?", type: "goaisatsu", group: "taisya" },
  { char: "よろしくおねがいします。", romaji: "Rất mong được giúp đỡ.", type: "goaisatsu", group: "taisya" },
  { char: "おさきにどうぞ。", romaji: "Xin mời đi trước.", type: "goaisatsu", group: "taisya" },

  // === Trong cửa hàng / khi làm thêm ===
  { char: "いらっしゃいませ。", romaji: "Chào mừng quý khách!", type: "goaisatsu", group: "baito" },
  { char: "しょうしょうおまちください。", romaji: "Xin vui lòng chờ một chút.", type: "goaisatsu", group: "baito" },
  { char: "こちらへどうぞ。", romaji: "Xin mời đi lối này.", type: "goaisatsu", group: "baito" },
  { char: "ありがとうございます。またおこしください。", romaji: "Cảm ơn quý khách, hẹn gặp lại!", type: "goaisatsu", group: "baito" },
  { char: "ポイントカードはおもちですか。", romaji: "Bạn có thẻ tích điểm không?", type: "goaisatsu", group: "baito" },

  // === Khi gặp khách hàng / đối tác ===
  { char: "いつもおせわになっております。", romaji: "Cảm ơn vì luôn giúp đỡ chúng tôi.", type: "goaisatsu", group: "eigyou" },
  { char: "おまたせいたしました。", romaji: "Xin lỗi vì đã để quý khách chờ.", type: "goaisatsu", group: "eigyou" },
  { char: "ほんじつはおじかんをいただきありがとうございます。", romaji: "Cảm ơn quý khách đã dành thời gian hôm nay.", type: "goaisatsu", group: "eigyou" },
  { char: "どうぞおかけください。", romaji: "Xin mời ngồi.", type: "goaisatsu", group: "eigyou" },
  { char: "これからよろしくおねがいいたします。", romaji: "Mong được hợp tác lâu dài.", type: "goaisatsu", group: "eigyou" },

  // === Trong quán ăn / nhà hàng ===
  { char: "ごちゅうもんはおきまりですか。", romaji: "Quý khách đã chọn món chưa?", type: "goaisatsu", group: "ryouri" },
  { char: "すぐにおもちします。", romaji: "Tôi sẽ mang ra ngay.", type: "goaisatsu", group: "ryouri" },
  { char: "おまたせしました。", romaji: "Xin lỗi vì đã để quý khách đợi.", type: "goaisatsu", group: "ryouri" },
  { char: "おかいけいをおねがいします。", romaji: "Tính tiền giúp tôi với.", type: "goaisatsu", group: "ryouri" },
  { char: "おいしかったです。", romaji: "Ngon lắm!", type: "goaisatsu", group: "ryouri" },

  // === Khi đi tàu / nơi công cộng ===
  { char: "すみません。このせきはあいていますか。", romaji: "Xin lỗi, ghế này có trống không?", type: "goaisatsu", group: "densha" },
  { char: "つぎはしんじゅくです。", romaji: "Trạm tiếp theo là Shinjuku.", type: "goaisatsu", group: "densha" },
  { char: "ドアがしまります。ごちゅういください。", romaji: "Cửa sẽ đóng, xin chú ý.", type: "goaisatsu", group: "densha" },
  { char: "でんしゃがおくれています。", romaji: "Tàu đang bị trễ.", type: "goaisatsu", group: "densha" },
  { char: "きっぷをなくしました。", romaji: "Tôi bị mất vé rồi.", type: "goaisatsu", group: "densha" },

  // === Khi ốm đau / ở bệnh viện ===
  { char: "いたいところはどこですか。", romaji: "Bạn đau ở đâu?", type: "goaisatsu", group: "byouki" },
  { char: "ねつがあります。", romaji: "Tôi bị sốt.", type: "goaisatsu", group: "byouki" },
  { char: "くすりをのみましたか。", romaji: "Bạn đã uống thuốc chưa?", type: "goaisatsu", group: "byouki" },
  { char: "おだいじに。", romaji: "Chúc mau khỏe nhé.", type: "goaisatsu", group: "byouki" },
  { char: "びょういんへいきましょう。", romaji: "Đi bệnh viện thôi.", type: "goaisatsu", group: "byouki" },

  // === Trong gia đình / bạn bè ===
  { char: "おかえり。きょうはどうだった？", romaji: "Chào mừng về nhà, hôm nay thế nào?", type: "goaisatsu", group: "kazoku" },
  { char: "おなかすいた？", romaji: "Đói chưa?", type: "goaisatsu", group: "kazoku" },
  { char: "だいじょうぶ？", romaji: "Ổn không?", type: "goaisatsu", group: "kazoku" },

  // === Câu nói theo mùa / lễ hội ===
  { char: "あけましておめでとうございます。", romaji: "Chúc mừng năm mới!", type: "goaisatsu", group: "season" },
  { char: "よいおとしを。", romaji: "Chúc năm mới tốt lành!", type: "goaisatsu", group: "season" },
  { char: "めりーくりすます！", romaji: "Giáng sinh vui vẻ!", type: "goaisatsu", group: "season" },
  { char: "おしょうがつやすみはどうでしたか。", romaji: "Kỳ nghỉ năm mới thế nào?", type: "goaisatsu", group: "season" },
  { char: "ことしもよろしくおねがいします。", romaji: "Mong được giúp đỡ trong năm nay!", type: "goaisatsu", group: "season" },

  // ========================
  // Goi (語彙 - ごい) - cho romaji là nghĩa luôn đỡ phải sửa code nhiều
  // ========================
  { char: "あし", romaji: "Chân", type: "goi" ,highlights:[{text : "し",color :"red"}]},
  { char: "えき", romaji: "Nhà ga", type: "goi" ,highlights:[{text : "え",color :"red"}]},
  { char: "かい", romaji: "Vỏ sò", type: "goi" ,highlights:[{text : "か",color :"red"}]},
  { char: "しお", romaji: "Muối", type: "goi" ,highlights:[{text : "お",color :"red"}]},
  { char: "うし", romaji: "Bò/Trâu", type: "goi" ,highlights:[{text : "し",color :"red"}]},
  { char: "かさ", romaji: "Cây dù", type: "goi" ,highlights:[{text : "か",color :"red"}]},
  { char: "くし", romaji: "Cây lược", type: "goi" ,highlights:[{text : "し",color :"red"}]},
  { char: "すいか", romaji: "Dưa hấu", type: "goi" ,highlights:[{text : "いか",color :"red"}]},
  { char: "いけ", romaji: "Ao,hồ", type: "goi" ,highlights:[{text : "け",color :"red"}]},
  { char: "あせ", romaji: "Mồ hôi", type: "goi" ,highlights:[{text : "あ",color :"red"}]},
  { char: "ここ", romaji: "Chỗ này/Ở đây", type: "goi" ,highlights:[{text : "こ",color :"red", nth: 2}]},  //nth = 1 là ký tự đầu tương tự với 2,3,4... ; -1 là chữ cuối cùng
  { char: "そこ", romaji: "Chỗ đó", type: "goi" ,highlights:[{text : "こ",color :"red"}]},
  { char: "いす", romaji: "Cái ghế", type: "goi" ,highlights:[{text : "す",color :"red"}]},
  { char: "かき", romaji: "Quả hồng", type: "goi" ,highlights:[{text : "き",color :"red"}]},
  { char: "あかい", romaji: "Đỏ", type: "goi",highlights:[{text : "か",color :"red"}]},
  { char: "あおい", romaji: "Xanh lam", type: "goi",highlights:[{text : "お",color :"red"}]},
  { char: "しかく", romaji: "Hình vuông", type: "goi",highlights:[{text : "し",color :"red"}]},
  { char: "せかい", romaji: "Thế giới (khác)", type: "goi",highlights:[{text : "せ",color :"red"}]},
  { char: "きそく", romaji: "Quy định", type: "goi",highlights:[{text : "き",color :"red"}]},
  { char: "あき", romaji: "Mùa thu", type: "goi",highlights:[{text : "あ",color :"red"}]},
  { char: "あう", romaji: "Gặp gỡ", type: "goi",highlights:[{text : "あ",color :"red"}]},
  { char: "さか", romaji: "Con dốc", type: "goi",highlights:[{text : "か",color :"red"}]},
  { char: "さけ", romaji: "Rượu Sake", type: "goi",highlights:[{text : "け",color :"red"}]},
  { char: "うそ", romaji: "Lời nói dối", type: "goi",highlights:[{text : "う",color :"red"}]},
  //Gia đình, xưng hô
  { char: "かぞく（家族）", romaji: "Gia đình", type: "goi", group: "giadinh_xungho" },
  { char: "はは（母）", romaji: "Mẹ", type: "goi", group: "giadinh_xungho" },
  { char: "ちち（父）", romaji: "Cha", type: "goi", group: "giadinh_xungho" },
  { char: "きょうだい（兄弟）", romaji: "Anh chị em", type: "goi", group: "giadinh_xungho" },
  { char: "あね（姉）", romaji: "Chị gái", type: "goi", group: "giadinh_xungho" },
  { char: "あに（兄）", romaji: "Anh trai", type: "goi", group: "giadinh_xungho" },
  { char: "いもうと（妹）", romaji: "Em gái", type: "goi", group: "giadinh_xungho" },
  { char: "おとうと（弟）", romaji: "Em trai", type: "goi", group: "giadinh_xungho" },
  { char: "そふ（祖父）", romaji: "Ông", type: "goi", group: "giadinh_xungho" },
  { char: "そぼ（祖母）", romaji: "Bà", type: "goi", group: "giadinh_xungho" },
  //Đồ ăn
  { char: "たべもの（食べ物）", romaji: "Thức ăn", type: "goi", group: "doan" },
  { char: "のみもの（飲み物）", romaji: "Đồ uống", type: "goi", group: "doan" },
  { char: "ごはん（ご飯）", romaji: "Cơm", type: "goi", group: "doan" },
  { char: "にく（肉）", romaji: "Thịt", type: "goi", group: "doan" },
  { char: "さかな（魚）", romaji: "Cá", type: "goi", group: "doan" },
  { char: "やさい（野菜）", romaji: "Rau củ", type: "goi", group: "doan" },
  { char: "くだもの（果物）", romaji: "Trái cây", type: "goi", group: "doan" },
  { char: "おちゃ（お茶）", romaji: "Trà", type: "goi", group: "doan" },
  { char: "コーヒー", romaji: "Cà phê", type: "goi", group: "doan" },
  { char: "みず（水）", romaji: "Nước", type: "goi", group: "doan" },
  //Nghề nghiệp
  { char: "しごと（仕事）", romaji: "Công việc", type: "goi", group: "nghenghiep" },
  { char: "いしゃ（医者）", romaji: "Bác sĩ", type: "goi", group: "nghenghiep" },
  { char: "せんせい（先生）", romaji: "Giáo viên", type: "goi", group: "nghenghiep" },
  { char: "エンジニア", romaji: "Kỹ sư", type: "goi", group: "nghenghiep" },
  { char: "てんいん（店員）", romaji: "Nhân viên cửa hàng", type: "goi", group: "nghenghiep" },
  { char: "かんごし（看護師）", romaji: "Y tá", type: "goi", group: "nghenghiep" },
  { char: "べんごし（弁護士）", romaji: "Luật sư", type: "goi", group: "nghenghiep" },
  { char: "かいけいし（会計士）", romaji: "Kế toán", type: "goi", group: "nghenghiep" },
  { char: "けいさつかん（警察官）", romaji: "Cảnh sát", type: "goi", group: "nghenghiep" },
  { char: "のうか（農家）", romaji: "Nông dân", type: "goi", group: "nghenghiep" },
  //Học tập
  { char: "がっこう（学校）", romaji: "Trường học", type: "goi", group: "hoctap" },
  { char: "がくせい（学生）", romaji: "Học sinh", type: "goi", group: "hoctap" },
  { char: "せんせい（先生）", romaji: "Giáo viên", type: "goi", group: "hoctap" },
  { char: "じゅぎょう（授業）", romaji: "Tiết học", type: "goi", group: "hoctap" },
  { char: "しゅくだい（宿題）", romaji: "Bài tập về nhà", type: "goi", group: "hoctap" },
  { char: "しけん（試験）", romaji: "Kỳ thi", type: "goi", group: "hoctap" },
  { char: "ほん（本）", romaji: "Sách", type: "goi", group: "hoctap" },
  { char: "としょかん（図書館）", romaji: "Thư viện", type: "goi", group: "hoctap" },
  { char: "ノート", romaji: "Vở", type: "goi", group: "hoctap" },
  { char: "ふでばこ（筆箱）", romaji: "Hộp bút", type: "goi", group: "hoctap" },
  //Đồ vật
  { char: "つくえ（机）", romaji: "Bàn", type: "goi", group: "dovat" },
  { char: "いす（椅子）", romaji: "Ghế", type: "goi", group: "dovat" },
  { char: "かがみ（鏡）", romaji: "Gương", type: "goi", group: "dovat" },
  { char: "せんぷうき（扇風機）", romaji: "Quạt điện", type: "goi", group: "dovat" },
  { char: "れいぞうこ（冷蔵庫）", romaji: "Tủ lạnh", type: "goi", group: "dovat" },
  { char: "でんわ（電話）", romaji: "Điện thoại", type: "goi", group: "dovat" },
  { char: "テレビ", romaji: "Tivi", type: "goi", group: "dovat" },
  { char: "とけい（時計）", romaji: "Đồng hồ", type: "goi", group: "dovat" },
  { char: "まど（窓）", romaji: "Cửa sổ", type: "goi", group: "dovat" },
  { char: "ドア", romaji: "Cửa ra vào", type: "goi", group: "dovat" },
  //Động vật
  { char: "いぬ（犬）", romaji: "Chó", type: "goi", group: "dongvat" },
  { char: "ねこ（猫）", romaji: "Mèo", type: "goi", group: "dongvat" },
  { char: "とり（鳥）", romaji: "Chim", type: "goi", group: "dongvat" },
  { char: "うま（馬）", romaji: "Ngựa", type: "goi", group: "dongvat" },
  { char: "うし（牛）", romaji: "Bò", type: "goi", group: "dongvat" },
  { char: "ぶた（豚）", romaji: "Lợn", type: "goi", group: "dongvat" },
  { char: "ひつじ（羊）", romaji: "Cừu", type: "goi", group: "dongvat" },
  { char: "さかな（魚）", romaji: "Cá", type: "goi", group: "dongvat" },
  { char: "かめ（亀）", romaji: "Rùa", type: "goi", group: "dongvat" },
  { char: "むし（虫）", romaji: "Côn trùng", type: "goi", group: "dongvat" },
  //Thời tiết
  { char: "てんき（天気）", romaji: "Thời tiết", type: "goi", group: "thoiet" },
  { char: "はれ（晴れ）", romaji: "Nắng", type: "goi", group: "thoiet" },
  { char: "あめ（雨）", romaji: "Mưa", type: "goi", group: "thoiet" },
  { char: "ゆき（雪）", romaji: "Tuyết", type: "goi", group: "thoiet" },
  { char: "かぜ（風）", romaji: "Gió", type: "goi", group: "thoiet" },
  { char: "くもり（曇り）", romaji: "Mây", type: "goi", group: "thoiet" },
  { char: "かみなり（雷）", romaji: "Sấm", type: "goi", group: "thoiet" },
  { char: "たいふう（台風）", romaji: "Bão", type: "goi", group: "thoiet" },
  { char: "きり（霧）", romaji: "Sương mù", type: "goi", group: "thoiet" },
  { char: "こおり（氷）", romaji: "Băng", type: "goi", group: "thoiet" },
  //Cảm xúc
  { char: "しあわせ（幸せ）", romaji: "Hạnh phúc", type: "goi", group: "camxuc" },
  { char: "かなしい（悲しい）", romaji: "Buồn", type: "goi", group: "camxuc" },
  { char: "おこる（怒る）", romaji: "Giận dữ", type: "goi", group: "camxuc" },
  { char: "たのしい（楽しい）", romaji: "Vui vẻ", type: "goi", group: "camxuc" },
  { char: "おどろく（驚く）", romaji: "Ngạc nhiên", type: "goi", group: "camxuc" },
  { char: "こわい（恐い）", romaji: "Sợ hãi", type: "goi", group: "camxuc" },
  { char: "さびしい（寂しい）", romaji: "Cô đơn", type: "goi", group: "camxuc" },
  { char: "うれしい（嬉しい）", romaji: "Vui mừng", type: "goi", group: "camxuc" },
  { char: "くるしい（苦しい）", romaji: "Đau khổ", type: "goi", group: "camxuc" },
  { char: "しんぱい（心配）", romaji: "Lo lắng", type: "goi", group: "camxuc" },
  //Màu sắc
  { char: "いろ（色）", romaji: "Màu sắc", type: "goi", group: "mausac" },
  { char: "あか（赤）", romaji: "Đỏ", type: "goi", group: "mausac" },
  { char: "あお（青）", romaji: "Xanh dương", type: "goi", group: "mausac" },
  { char: "き（黄）", romaji: "Vàng", type: "goi", group: "mausac" },
  { char: "みどり（緑）", romaji: "Xanh lá cây", type: "goi", group: "mausac" },
  { char: "くろ（黒）", romaji: "Đen", type: "goi", group: "mausac" },
  { char: "しろ（白）", romaji: "Trắng", type: "goi", group: "mausac" },
  { char: "ちゃいろ（茶色）", romaji: "Nâu", type: "goi", group: "mausac" },
  { char: "むらさき（紫）", romaji: "Tím", type: "goi", group: "mausac" },
  { char: "ピンク", romaji: "Hồng", type: "goi", group: "mausac" },
  //Vi trí
  { char: "うえ（上）", romaji: "Trên", type: "goi", group: "vitri" },
  { char: "した（下）", romaji: "Dưới", type: "goi", group: "vitri" },
  { char: "まえ（前）", romaji: "Trước", type: "goi", group: "vitri" },
  { char: "うしろ（後ろ）", romaji: "Sau", type: "goi", group: "vitri" },
  { char: "みぎ（右）", romaji: "Phải", type: "goi", group: "vitri" },
  { char: "ひだり（左）", romaji: "Trái", type: "goi", group: "vitri" },
  { char: "なか（中）", romaji: "Trong", type: "goi", group: "vitri" },
  { char: "そと（外）", romaji: "Ngoài", type: "goi", group: "vitri" },
  { char: "ちかく（近く）", romaji: "Gần", type: "goi", group: "vitri" },
  { char: "とおく（遠く）", romaji: "Xa", type: "goi", group: "vitri" },
  //Thứ trong tuần
  { char: "にちようび（日曜日）", romaji: "Chủ nhật", type: "goi", group: "thutrongtuan" },
  { char: "げつようび（月曜日）", romaji: "Thứ hai", type: "goi", group: "thutrongtuan" },
  { char: "かようび（火曜日）", romaji: "Thứ ba", type: "goi", group: "thutrongtuan" },
  { char: "すいようび（水曜日）", romaji: "Thứ tư", type: "goi", group: "thutrongtuan" },
  { char: "もくようび（木曜日）", romaji: "Thứ năm", type: "goi", group: "thutrongtuan" },
  { char: "きんようび（金曜日）", romaji: "Thứ sáu", type: "goi", group: "thutrongtuan" },
  { char: "どようび（土曜日）", romaji: "Thứ bảy", type: "goi", group: "thutrongtuan" },
  //Bài nghe 1
  { char: "わたし", romaji: "Tôi", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "あなた", romaji: "Bạn", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "あのひと", romaji: "Người kia", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "あのかた", romaji: "Vị kia (lịch sự)", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "けいしょう", romaji: "Kính xưng, cách gọi tôn kính", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "さん", romaji: "Anh / chị / ông / bà (hậu tố)", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "ちゃん", romaji: "Cách gọi thân mật (bé / bạn thân)", type: "goi", group: ["gol1_3","giadinh_xungho"] },
  { char: "せんせい", romaji: "Thầy / cô", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "きょうし", romaji: "Giáo viên", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "がくせい", romaji: "Học sinh, sinh viên", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "かいしゃいん", romaji: "Nhân viên công ty", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "ぎんこういん", romaji: "Nhân viên ngân hàng", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "いしゃ", romaji: "Bác sĩ", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "けんきゅうしゃ", romaji: "Nhà nghiên cứu", type: "goi", group: ["gol1_3","nghenghiep"] },
  { char: "だいがく", romaji: "Đại học", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "びょういん", romaji: "Bệnh viện", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "だれ", romaji: "Ai", type: "goi", group: ["gol1_3","hoidapngan" ]},
  { char: "どなた", romaji: "Vị nào (lịch sự của 誰)", type: "goi", group: ["gol1_3","hoidapngan" ] },
  { char: "なんさい", romaji: "Mấy tuổi", type: "goi", group: ["gol1_3","hoidapngan" ] },
  { char: "おいくつ", romaji: "Bao nhiêu tuổi (lịch sự)", type: "goi", group: ["gol1_3","hoidapngan" ] },
  { char: "アメリカ", romaji: "Mỹ", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "イギリス", romaji: "Anh (UK)", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "インド", romaji: "Ấn Độ", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "インドネシア", romaji: "Indonesia", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "かんこく", romaji: "Hàn Quốc", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "タイ", romaji: "Thái Lan", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "ちゅうごく", romaji: "Trung Quốc", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "ドイツ", romaji: "Đức", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "にほん", romaji: "Nhật Bản", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "ブラジル", romaji: "Brazil", type: "goi", group: ["gol1_3","quocgia"] },
  { char: "アイエムシー", romaji: "Công ty IMC", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "パワーでんき", romaji: "Công ty điện Power", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "ブラジルエアー", romaji: "Hãng hàng không Brazil", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "エーケーシー", romaji: "Công ty AKC", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "こうべびょういん", romaji: "Bệnh viện Kobe", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "さくらだいがく", romaji: "Đại học Sakura", type: "goi", group: ["gol1_3","diadiem"] },
  { char: "ふじだいがく", romaji: "Đại học Fuji", type: "goi", group: ["gol1_3","diadiem"] }
];

const typeGroups = {
  hiragana: [
    { id: "all", label: "Tất cả" },
    { id: "nguyenam", label: "Nguyên âm" },
    { id: "bienam", label: "Biến âm" }
  ],
  katakana: [
    { id: "all", label: "Tất cả" },
    { id: "nguyenam", label: "Nguyên âm" },
    { id: "bienam", label: "Biến âm" }
  ],
  goaisatsu: [
    { id: "all", label: "Tất cả" },
    { id: "chaohoi", label: "Chào hỏi" },
    { id: "camonxloi", label: "Cảm ơn / Xin lỗi" },
    { id: "anuong", label: "Ăn uống" },
    { id: "dive", label: "Đi / Về" },
    { id: "lop", label: "Trong lớp học" },
    { id: "hoidap", label: "Hỏi – Đáp" },
    { id: "hoithoai", label: "Hội thoại hàng ngày" },
    { id: "tugioithieu", label: "Tự giới thiệu" },
    { id: "chucmung", label: "Chúc mừng / Khích lệ" },
    { id: "camxuc", label: "Cảm xúc" },
    { id: "taisya", label: "Trong công ty" },
    { id: "baito", label: "Cửa hàng / Làm thêm" },
    { id: "eigyou", label: "Gặp khách hàng" },
    { id: "ryouri", label: "Nhà hàng / Ăn uống" },
    { id: "densha", label: "Giao thông / Công cộng" },
    { id: "byouki", label: "Khi ốm / Bệnh viện" },
    { id: "kazoku", label: "Gia đình / Bạn bè" },
    { id: "season", label: "Theo mùa / Lễ hội" },
  ],
  goi: [
    { id: "all", label: "Tất cả" },
    { id: "giadinh_xungho",  label:  "Gia đình và xưng hô"},
    { id: "doan",  label:  "Đồ ăn"},
    { id: "nghenghiep", label: "Nghề nghiệp" },
    { id: "hoctap", label: "Học tập" },
    { id: "dovat", label: "Đồ vật" },
    { id: "dongvat", label: "Động vật" },
    { id: "thoiet", label: "Thời tiết" },
    { id: "camxuc", label: "Cảm xúc" },
    { id: "mausac", label: "Màu sắc" },
    { id: "vitri", label: "Vị trí" },
    { id: "diadiem", label: "Địa điểm" },
    { id: "quocgia", label: "Quốc gia" },
    { id: "hoidapngan", label: "Hỏi đáp ngắn" },
    { id: "thutrongtuan", label: "Thứ trong tuần" },
    { id: "gol1_3", label: "Bài nghe 1" },
  ]
};



let currentQuestion = 0;
let score = 0;
let questions = [];
let timer;
let timeLeft = 15;
let userAnswers = []; // Lưu lịch sử trả lời
let difficulty = "easy";
let currentType = "all"; // "all" | "hiragana" | "katakana"　｜"goaisatsu"
let currentGroup = "all"; // "all" | "nguyenam" | "bienam"
let questionTime = 15;   // thời gian mặc định mỗi câu (giây)
let questionCount = 15;  // số câu mặc định
let nextAction = null; // hành động tiếp theo sau khi đóng modal

// Âm thanh
const tickSound = new Audio("sound/tick.mp3");
const timeoutSound = new Audio("sound/timeout.mp3");
tickSound.volume = 0.4;   // nhỏ để không gây khó chịu
timeoutSound.volume = 0.4;


// Modal helpers
function showModal(message) {
  document.getElementById("modal-message").innerText = message;
  document.getElementById("modal").style.display = "flex";
}
document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal").style.display = "none";
  if (typeof nextAction === "function") {
    const action = nextAction;
    nextAction = null;   // reset
    action();            // chạy hành động tiếp theo
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initShapes();
});


function renderMainGroupButtons(type) {
  const groupLabel = document.getElementById("group-label");
  const groupButtons = document.getElementById("group-buttons");

  // Nếu type không có group, ẩn đi
  if (!typeGroups[type]) {
    groupLabel.style.display = "none";
    groupButtons.style.display = "none";
    currentGroup = "all";
    return;
  }

  // Lấy danh sách group theo type
  const groups = typeGroups[type];

  // Hiển thị vùng chọn nhóm
  groupLabel.style.display = "block";
  groupButtons.style.display = "flex";

  // Render các nút với label
  groupButtons.innerHTML = groups.map(g => `
    <button class="group-btn ${g.id}" 
            onclick="setGroup('${g.id}')">
      ${g.label}
    </button>
  `).join("");

  // ✅ Đặt lại mặc định sau khi render xong
  setTimeout(() => setGroup("all"), 0);
}




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
  const pool = quizData.filter(q => {
    const matchType =
      currentType === "all" ||
      (currentType === "alphabet"
        ? q.type === "hiragana" || q.type === "katakana"
        : q.type === currentType);

    const matchGroup =
      currentGroup === "all" ||
      (Array.isArray(q.group)
        ? q.group.includes(currentGroup)
        : q.group === currentGroup);

    return matchType && matchGroup;
  });

  const actualNum = Math.min(num, pool.length);
  const selected = shuffle(pool).slice(0, actualNum);

  return selected.map((q) => {
    let wrongCount = 3;
    if (difficulty === "medium") wrongCount = 5;
    if (difficulty === "hard") wrongCount = 7;

    // ✅ FIX QUAN TRỌNG: lọc đáp án sai cũng phải kiểm tra group dạng mảng
    const wrong = shuffle(
      quizData.filter(item => {
        const sameType = item.type === q.type;
        const notSameWord = item.romaji !== q.romaji;

        const inSameGroup =
          currentGroup === "all" ||
          (Array.isArray(item.group)
            ? item.group.includes(currentGroup)
            : item.group === currentGroup);

        return sameType && notSameWord && inSameGroup;
      })
    ).slice(0, wrongCount);

    const options = shuffle([q, ...wrong]);

    return {
      char: q.char,
      answer: q.romaji,
      options: options.map(o => o.romaji),
      type: q.type,
      group: q.group || "all"
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
  timeLeft = questionTime;

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
  timerFill.style.width = (timeLeft / questionTime) * 100 + "%";

  if (timeLeft > 0) {
    // Phát âm tick
    tickSound.currentTime = 0; 
    tickSound.play();
  }


  if (timeLeft <= 0) {
    clearInterval(timer);
    tickSound.pause();
    tickSound.currentTime = 0;
    // Phát âm hết giờ
    timeoutSound.currentTime = 0;
    timeoutSound.play();
    showModal("⏰ Hết giờ!");
    checkAnswer(null);
  }
  }, 1000);
}

function stopSounds() {
  tickSound.pause();
  timeoutSound.pause();
  tickSound.currentTime = 0;
  timeoutSound.currentTime = 0;
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
    stopSounds();
  } else if (selected === null) {
    showModal(`❌ Hết giờ! Đáp án đúng: ${q.answer}`);
  } else {
    showModal(`❌ Sai! Đáp án đúng: ${q.answer}`);
    stopSounds();
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    nextAction = () => setTimeout(renderQuestion, 1000);
  } else {
    nextAction = () => setTimeout(showResult, 1000);
  }
}


// Kết quả
function showResult() {
  clearInterval(timer);
  stopSounds();
  
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
      <p>Chọn thời gian mỗi câu:</p>
      <div class="time-buttons">
        <button class="time-btn t3" onclick="setTime(3)">3s</button>
        <button class="time-btn t5" onclick="setTime(5)">5s</button>
        <button class="time-btn t10 active" onclick="setTime(10)">10s</button>
        <button class="time-btn t15" onclick="setTime(15)">15s</button>
        <button class="time-btn t20" onclick="setTime(20)">20s</button>
      </div>

      <p>Chọn số câu hỏi:</p>
      <div class="count-buttons">
        <button class="count-btn c10" onclick="setCount(10)">10 câu</button>
        <button class="count-btn c15 active" onclick="setCount(15)">15 câu</button>
        <button class="count-btn c20" onclick="setCount(20)">20 câu</button>
        <button class="count-btn c30" onclick="setCount(30)">30 câu</button>
        <button class="count-btn c40" onclick="setCount(40)">40 câu</button>
      </div>
      <p>Chọn thể loại:</p>
      <div id="type-buttons" class="type-buttons">
        <button class="type-btn all active" onclick="setType('all')">Kết hợp</button>
        <button class="type-btn hiragana" onclick="setType('hiragana')">Hiragana</button>
        <button class="type-btn katakana" onclick="setType('katakana')">Katakana</button>
        <button class="type-btn goaisatsu" onclick="setType('goaisatsu')">Câu cơ bản</button>
        <button class="type-btn goi" onclick="setType('goi')">Từ vựng</button>
      </div>
      <p id="group-label" style="display:none;">Chọn nhóm:</p>
      <div id="group-buttons" class="group-buttons" style="display:none;"></div>
      <p>Chọn độ khó:</p>
      <div class="difficulty-buttons">
        <button class="difficulty-btn easy active" onclick="setDifficulty('easy')">4 Đáp án</button>
        <button class="difficulty-btn medium" onclick="setDifficulty('medium')">6 Đáp án</button>
        <button class="difficulty-btn hard" onclick="setDifficulty('hard')">8 Đáp án</button>
      </div>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showAlphabet()">Xem Bảng chữ cái</button>
      <button class="end-btn" onclick="showGoaisatsu()">Xem Câu cơ bản</button>
      <button class="end-btn" onclick="showGoi()">Xem Từ vựng</button>
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

  // cập nhật active cho type
  document.querySelectorAll(".type-btn").forEach(btn => btn.classList.remove("active"));
  const selectedBtn = document.querySelector(`.type-btn.${level}`);
  if (selectedBtn) selectedBtn.classList.add("active");

  // render group buttons theo type
  renderMainGroupButtons(level);
}







// Hàm phát âm: nhận romaji, tìm hiragana ưu tiên, fallback katakana, fallback romaji
function playJapanese(input) {
  // input có thể là:
  // - text tiếng Nhật (hiragana/katakana/kanji) => speak trực tiếp
  // - hoặc khóa tra cứu (ví dụ romaji "ka" hoặc nghĩa "Cố gắng...") => tìm trong quizData
  if (!input && input !== "") return;

  // phát hiện nếu input chứa ký tự Nhật (hiragana/katakana/kanji)
  const hasJapaneseChars = /[\u3040-\u30FF\u4E00-\u9FFF]/.test(input);
  let textToSpeak = input;

  if (!hasJapaneseChars) {
    // tìm trong quizData theo romaji (bao gồm cả goaisatsu và goi)
    const found = quizData.find(q =>
      q.romaji === input &&
      ["hiragana", "katakana", "goaisatsu", "goi"].includes(q.type)
    );
    if (found) {
      textToSpeak = found.char;
    }
    // nếu vẫn không tìm được, textToSpeak = input (fallback)
  }

  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();

    const speakNow = () => {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      // thường đọc bằng giọng Nhật
      utterance.lang = "ja-JP";
      utterance.rate = 0.85;
      utterance.pitch = 1.0;

      const voices = speechSynthesis.getVoices();
      const jaVoice = voices.find(v => v.lang && v.lang.toLowerCase().includes("ja"));
      if (jaVoice) utterance.voice = jaVoice;

      speechSynthesis.speak(utterance);
    };

    // nếu voices chưa load thì đợi
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.onvoiceschanged = () => {
        speakNow();
        speechSynthesis.onvoiceschanged = null;
      };
    } else {
      speakNow();
    }
  } else {
    alert("Trình duyệt của bạn không hỗ trợ đọc tiếng Nhật.");
  }
}


// Hàm showAlphabet cập nhật: 4 cột (Hiragana, Katakana, Romaji, Nghe)
function showAlphabet(group = "all") {
  currentType = "hiragana_katakana"; // đặt nhãn tạm để phân biệt
  currentGroup = group;

  const container = document.getElementById("quiz-container");

  // lấy cả hiragana + katakana
  const filteredData = quizData.filter(q => {
  const matchType = q.type === "hiragana" || q.type === "katakana";
  const matchGroup =
    currentGroup === "all" ||
    (Array.isArray(q.group)
      ? q.group.includes(currentGroup)
      : q.group === currentGroup);
  return matchType && matchGroup;
  });



  // gom theo romaji
  const romajiSet = [...new Set(filteredData.map(q => q.romaji))];

  // tạo từng dòng
  let rows = romajiSet.map(r => {
    const hira = quizData.find(q =>
      q.romaji === r && q.type === "hiragana" &&
      (currentGroup === "all" || q.group === currentGroup)
    );
    const kata = quizData.find(q =>
      q.romaji === r && q.type === "katakana" &&
      (currentGroup === "all" || q.group === currentGroup)
    );
    return `
      <tr>
        <td class="char">${hira ? hira.char : "-"}</td>
        <td class="char">${kata ? kata.char : "-"}</td>
        <td>${r}</td>
        <td style="text-align:center;">
          <button class="sound-btn" onclick="playJapanese('${r}')">🔊</button>
        </td>
      </tr>`;
  }).join("");

  // nhóm (dùng chung cho hiragana & katakana)
  let groupButtonsHtml = `
    <div class="sub-type-buttons">
      <button class="group-btn all ${currentGroup === "all" ? "active" : ""}" onclick="showAlphabet('all')">Tất cả</button>
      <button class="group-btn nguyenam ${currentGroup === "nguyenam" ? "active" : ""}" onclick="showAlphabet('nguyenam')">Nguyên âm</button>
      <button class="group-btn bienam ${currentGroup === "bienam" ? "active" : ""}" onclick="showAlphabet('bienam')">Biến âm</button>
    </div>
  `;

  container.innerHTML = `
    <div class="fade-in">
      <h2>Bảng chữ cái (Hiragana + Katakana)</h2>
      ${groupButtonsHtml}
      <table class="alphabet-table">
        <thead>
          <tr><th>Hiragana</th><th>Katakana</th><th>Romaji</th><th>Nghe</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <br/>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showStartScreen()">Quay lại</button>
    </div>`;
}




function showGoaisatsu(group = "all") {
  currentType = "goaisatsu";
  currentGroup = group;

  const container = document.getElementById("quiz-container");

  // Lọc dữ liệu theo group (nếu có)
  const filteredData = quizData.filter(q => {
  const matchType = q.type === "goaisatsu";
  const matchGroup =
    currentGroup === "all" ||
    (Array.isArray(q.group)
      ? q.group.includes(currentGroup)
      : q.group === currentGroup);
  return matchType && matchGroup;
  });



  // Sinh các hàng hiển thị
  let rows = filteredData.map(item => `
    <tr>
      <td class="char">${item.char}</td>
      <td>${item.romaji}</td>
      <td style="text-align:center;">
        <button class="sound-btn" onclick="playJapanese('${item.char}')">🔊</button>
      </td>
    </tr>
  `).join("");

  // === Sinh danh sách nút group dựa theo typeGroups.goaisatsu ===
  let groupButtonsHtml = "";
  if (typeGroups.goaisatsu && typeGroups.goaisatsu.length > 1) {
    groupButtonsHtml = `
      <div class="sub-type-buttons">
        ${typeGroups.goaisatsu.map(g => `
          <button class="group-btn ${g.id} ${currentGroup === g.id ? "active" : ""}"
                  onclick="showGoaisatsu('${g.id}')">${g.label}</button>
        `).join("")}
      </div>
    `;
  } else {
    // nếu chỉ có 1 group (all)
    groupButtonsHtml = `
      <div class="sub-type-buttons">
        <button class="group-btn all active" onclick="showGoaisatsu('all')">Tất cả</button>
      </div>
    `;
  }

  // === Hiển thị bảng ===
  container.innerHTML = `
    <div class="fade-in">
      <h2>Câu cơ bản</h2>
      ${groupButtonsHtml}
      <table class="alphabet-table">
        <thead>
          <tr><th>Tiếng Nhật</th><th>Nghĩa</th><th>Nghe</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <br/>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showStartScreen()">Quay lại</button>
    </div>
  `;
}




function showGoi(group = "all") {
  currentType = "goi";
  currentGroup = group;

  const container = document.getElementById("quiz-container");

  // Lọc dữ liệu theo group
  const filteredData = quizData.filter(q => {
  const matchType = q.type === "goi";
  const matchGroup =
    currentGroup === "all" ||
    (Array.isArray(q.group)
      ? q.group.includes(currentGroup)
      : q.group === currentGroup);
  return matchType && matchGroup;
  });



  // Sinh các hàng hiển thị
  let rows = filteredData.map(item => {
    const highlightedChar = applyHighlights(item.char, item.highlights);
    return `
      <tr>
        <td class="char">${highlightedChar}</td>
        <td>${item.romaji}</td>
        <td style="text-align:center;">
          <button class="sound-btn" onclick="playJapanese('${item.romaji}')">🔊</button>
        </td>
      </tr>
    `;
  }).join("");

  // === Sinh danh sách nút group dựa theo typeGroups.goi ===
  let groupButtonsHtml = "";
  if (typeGroups.goi && typeGroups.goi.length > 1) {
    groupButtonsHtml = `
      <div class="sub-type-buttons">
        ${typeGroups.goi.map(g => `
          <button class="group-btn ${g.id} ${currentGroup === g.id ? "active" : ""}"
                  onclick="showGoi('${g.id}')">${g.label}</button>
        `).join("")}
      </div>
    `;
  }

  // === Hiển thị bảng ===
  container.innerHTML = `
    <div class="fade-in">
      <h2>Từ vựng</h2>
      ${groupButtonsHtml}
      <table class="alphabet-table">
        <thead>
          <tr><th>Tiếng Nhật</th><th>Nghĩa</th><th>Nghe</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <br/>
      <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
      <button class="end-btn" onclick="showStartScreen()">Quay lại</button>
    </div>
  `;
}






// Hàm highlight nhiều ký tự trong 1 chuỗi
function applyHighlights(text, highlights = []) {
  if (!highlights || highlights.length === 0) return text;
  let result = text;

  highlights.forEach(h => {
    if (!h || !h.text) return;
    const safe = h.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // nth xử lý: nth >0 => lần thứ n, nth === -1 => lần cuối cùng
    if (typeof h.nth !== "undefined") {
      if (h.nth === -1) {
        // replace last occurrence only
        const matches = [...result.matchAll(new RegExp(safe, "g"))];
        if (matches.length > 0) {
          const last = matches[matches.length - 1];
          const start = last.index;
          const before = result.slice(0, start);
          const after = result.slice(start + last[0].length);
          const replacement = `<span style="color:${h.color}; font-weight:bold;">${last[0]}</span>`;
          result = before + replacement + after;
        }
      } else {
        // replace only the nth occurrence
        let count = 0;
        result = result.replace(new RegExp(safe, "g"), m => {
          count++;
          if (count === h.nth) return `<span style="color:${h.color}; font-weight:bold;">${m}</span>`;
          return m;
        });
      }
    } else if (h.once) {
      // chỉ thay lần đầu
      result = result.replace(new RegExp(safe), m => `<span style="color:${h.color}; font-weight:bold;">${m}</span>`);
    } else {
      // thay tất cả
      result = result.replace(new RegExp(safe, "g"), m => `<span style="color:${h.color}; font-weight:bold;">${m}</span>`);
    }
  });

  return result;
}

function setGroup(group) {
  currentGroup = group;
  console.log("👉 Nhóm đang chọn:", group);

  // cập nhật active cho group
  document.querySelectorAll(".group-btn").forEach(btn => btn.classList.remove("active"));
  const selectedBtn = document.querySelector(`.group-btn.${group}`);
  if (selectedBtn) selectedBtn.classList.add("active");
}





// Bắt đầu
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  questions = generateQuestions(questionCount);
  renderQuestion();
}

function setTime(seconds) {
  questionTime = seconds;
  showModal(`⏳ Thời gian mỗi câu: ${seconds} giây`);
  document.querySelectorAll(".time-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.time-btn.t${seconds}`).classList.add("active");
}

function setCount(num) {
  questionCount = num;
  showModal(`📋 Số câu hỏi: ${num}`);
  document.querySelectorAll(".count-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.count-btn.c${num}`).classList.add("active");
}


// Giao diện ban đầu
document.getElementById("quiz-container").innerHTML = `
  <h2>Chào mừng đến với Quiz Cơ Bản Tiếng Nhật</h2>
  <p>Chọn thời gian mỗi câu:</p>
  <div class="time-buttons">
    <button class="time-btn t3" onclick="setTime(3)">3s</button>
    <button class="time-btn t5" onclick="setTime(5)">5s</button>
    <button class="time-btn t10 active" onclick="setTime(10)">10s</button>
    <button class="time-btn t15" onclick="setTime(15)">15s</button>
    <button class="time-btn t20" onclick="setTime(20)">20s</button>
  </div>

  <p>Chọn số câu hỏi:</p>
  <div class="count-buttons">
    <button class="count-btn c10" onclick="setCount(10)">10 câu</button>
    <button class="count-btn c15 active" onclick="setCount(15)">15 câu</button>
    <button class="count-btn c20" onclick="setCount(20)">20 câu</button>
    <button class="count-btn c30" onclick="setCount(30)">30 câu</button>
    <button class="count-btn c40" onclick="setCount(40)">40 câu</button>
  </div>
  <p>Chọn thể loại:</p>
  <div id="type-buttons" class="type-buttons">
    <button class="type-btn all active" onclick="setType('all')">Kết hợp</button>
    <button class="type-btn hiragana" onclick="setType('hiragana')">Hiragana</button>
    <button class="type-btn katakana" onclick="setType('katakana')">Katakana</button>
    <button class="type-btn goaisatsu" onclick="setType('goaisatsu')">Câu cơ bản</button>
    <button class="type-btn goi" onclick="setType('goi')">Từ vựng</button>
  </div>
  <p id="group-label" style="display:none;">Chọn nhóm:</p>
  <div id="group-buttons" class="group-buttons" style="display:none;"></div>
  <p>Chọn độ khó:</p>
  <div class="difficulty-buttons">
        <button class="difficulty-btn easy active" onclick="setDifficulty('easy')">4 Đáp án</button>
        <button class="difficulty-btn medium" onclick="setDifficulty('medium')">6 Đáp án</button>
        <button class="difficulty-btn hard" onclick="setDifficulty('hard')">8 Đáp án</button>
      </div>
  <button class="start-btn" onclick="startQuiz()">Bắt đầu Quiz</button>
  <button class="end-btn" onclick="showAlphabet()">Xem Bảng chữ cái</button>
  <button class="end-btn" onclick="showGoaisatsu()">Xem Câu cơ bản</button>
  <button class="end-btn" onclick="showGoi()">Xem Từ vựng</button>
`
