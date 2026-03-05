const Quiz = [
  [
    {
      question: "What is ㅏ in Korean?",
      options: ["A", "E", "I", "O"],
      isWord: false,
      answer: "A",
      explanation: "ㅏ is a Korean vowel that represents the sound similar to the 'a' in 'father'."
    },
    {
      question: "What is ㅑ in Korean?",
      options: ["YA", "A", "YO", "YEO"],
      isWord: false,
      answer: "YA",
      explanation: "ㅑ is a Korean vowel that represents the sound similar to the 'ya' in 'yacht'."
    },
     {
      question: "What is ㅗ in Korean?",
      options: ["EO", "EU", "O", "U"],
      isWord: false,
      answer: "O",
      explanation: "ㅗ is a Korean vowel that represents the sound similar to the 'o' in 'open'."
    },
    {
      question: "What is ㅓ in Korean?",
      options: ["EO", "A", "O", "U"],
      isWord: false,
      answer: "EO",
      explanation: "ㅓ (eo) is an 'open' vowel sound. It sounds like the 'u' in 'up' or the 'o' in 'done'. Unlike ㅗ (o), which is made with rounded lips, ㅓ is pronounced with a relaxed, unrounded mouth."
    },
    {
      question: "What is ㅜ in Korean?",
      options: ["EO", "EU", "O", "U"],
      isWord: false,
      answer: "U",
      explanation: "ㅜ is a Korean vowel that represents the sound similar to the 'u' in 'up'."
    },
    {
      question: "What is ㅡ in Korean?",
      options: ["EO", "EU", "O", "U"],
      isWord: false,
      answer: "EU",
      explanation: "ㅡ (eu) is a flat, unrounded vowel. To make this sound, pull the corners of your mouth back (like a wide, tight smile) and make a sound similar to the 'u' in 'pull' or the 'i' in 'cousin'."
    },
    {
      question: "What is ㅣ in Korean?",
      options: ["EO", "A", "O", "I"],
      isWord: false,
      answer: "I",
      explanation: "ㅣ is a Korean vowel that represents the sound similar to the 'i' in 'sit'."
    },
    {
      question: "What is ㅠ in Korean?",
      options: ["YO", "YA", "YU", "YI"],
      isWord: false,
      answer: "YU",
      explanation: "ㅠ is a Korean vowel that represents the sound similar to the 'yu' in 'youth'."
    },
    {
      question: "What is ㅕ in Korean?",
      options: ["YEO", "YA", "YOU", "YEU"],
      isWord: false,
      answer: "YEO",
      explanation: "ㅕ (yeo) is a combination of a quick 'y' sound followed by ㅓ (eo). It sounds like the 'yo' in 'young' or 'yonder'. Keep your mouth open and relaxed, without rounding your lips."
    },
    {
      question: "What is ㅛ in Korean?",
      options: ["YO", "YA", "YE", "YU"],
      isWord: false,
      answer: "YO",
      explanation: "ㅛ is a Korean vowel that represents the sound similar to the 'yo' in 'yoga'."
    },
    {
      question: "What is ㄱ in Korean?",
      options: ["R", "G / K", "N", "D"],
      isWord: false,
      answer: "G / K",
      explanation: "ㄱ is a Korean consonant that represents the sound similar to the 'g' in 'go'."
    },
    {
      question: "What is ㄴ in Korean?",
      options: ["R / L", "G / K", "N", "D"],
      isWord: false,
      answer: "N",
      explanation: "ㄴ is a Korean consonant that represents the sound similar to the 'n' in 'no'."
    },
    {
      question: "What is ㄹ in Korean?",
      options: ["R / L", "G / K", "N", "D"],
      isWord: false,
      answer: "R / L",
      explanation: "ㄹ is a Korean consonant that represents the sound similar to the 'r' in 'run'."
    },
    {
      question: "What is ㄷ in Korean?",
      options: ["R / L", "G / K", "N", "T / D"],
      isWord: false,
      answer: "T / D",
      explanation: "ㄷ is a Korean consonant that represents the sound similar to the 'd' in 'do'."
    },
    {
      question: "What is ㅁ in Korean?",
      options: ["S", "K / G", "N", "M"],
      isWord: false,
      answer: "M",
      explanation: "ㅁ is a Korean consonant that represents the sound similar to the 'm' in 'mother'."
    },
    {
      question: "What is ㅅ in Korean?",
      options: ["S", "K / G", "J", "M"],
      isWord: false,
      answer: "S",
      explanation: "ㅅ is a Korean consonant that represents the sound similar to the 's' in 'sun'."
    },
    {
      question: "What is ㅈ in Korean?",
      options: ["S", "K / G", "N", "J"],
      isWord: false,
      answer: "J",
      explanation: "ㅈ is a Korean consonant that represents the sound similar to the 'j' in 'jump'."
    },
    {
      question: "What is ㅂ in Korean?",
      options: ["S", "K / G", "N", "P / B"],
      isWord: false,
      answer: "P / B",
      explanation: "ㅂ is a Korean consonant that represents the sound similar to the 'b' in 'boy'."
    },
    {
      question: "What is ㅇ in Korean?",
      options: ["S", "K / G", "N", "Ø / NG"],
      isWord: false,
      answer: "Ø / NG",
      explanation: "ㅇ is a Korean consonant that represents the sound similar to the 'ng' in 'song'. When it appears at the beginning of a syllable, it is silent and serves as a placeholder for the initial consonant."
    },
    {
      question: "What is A in Korean?",
      options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
      isWord: false,
      answer: "ㅏ",
      explanation: "ㅏ is a Korean vowel that represents the sound similar to the 'a' in 'father'."
    },
    {
      question: "What is G / K in Korean?",
      options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
      isWord: false,
      answer: "ㄱ",
      explanation: "ㄱ is a Korean consonant that represents the sound similar to the 'g' in 'go'."
    },
    {
      question: "What is J in Korean?",
      options: ["ㅈ", "ㄴ", "ㄷ", "ㅅ"],
      isWord: false,
      answer: "ㅈ",
      explanation: "ㅈ is a Korean consonant that represents the sound similar to the 'j' in 'jump'."
    },
    {
      question: "What is U in Korean?",
      options: ["ㅜ", "ㅓ", "ㅗ", "ㅏ"],
      isWord: false,
      answer: "ㅜ",
      explanation: "ㅜ is a Korean vowel that represents the sound similar to the 'u' in 'up'."
    },
    {
      question: "What is N in Korean?",
      options: ["ㄴ", "ㄱ", "ㄷ", "ㅁ"],
      isWord: false,
      answer: "ㄴ",
      explanation: "ㄴ is a Korean consonant that represents the sound similar to the 'n' in 'no'."
    },
    {
      question: "What is O in Korean?",
      options: ["ㅗ", "ㅓ", "ㅜ", "ㅏ"],
      isWord: false,
      answer: "ㅗ",
      explanation: "ㅗ is a Korean vowel that represents the sound similar to the 'o' in 'open'."
    },
  ],
]

export default Quiz;
