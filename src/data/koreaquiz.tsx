const Quiz = [
  [
    {
      name: "Chapter 1: Hangul Alphabet Part 1",
      questions: [
            {
      question: "What is ㅏ in Korean?",
      options: ["a", "e", "i", "o"],
      answer: "a",
      explanation: "ㅏ is a Korean vowel that represents the sound similar to the 'a' in 'father'."
    },
    {
      question: "What is ㅑ in Korean?",
      options: ["ya", "a", "yo", "yeo"],
      answer: "ya",
      explanation: "ㅑ is a Korean vowel that represents the sound similar to the 'ya' in 'yacht'."
    },
     {
      question: "What is ㅗ in Korean?",
      options: ["eo", "eu", "o", "u"],
      answer: "o",
      explanation: "ㅗ is a Korean vowel that represents the sound similar to the 'o' in 'open'."
    },
    {
      question: "What is ㅓ in Korean?",
      options: ["eo", "a", "o", "u"],
      answer: "eo",
      explanation: "ㅓ (eo) is an 'open' vowel sound. It sounds like the 'u' in 'up' or the 'o' in 'done'. Unlike ㅗ (o), which is made with rounded lips, ㅓ is pronounced with a relaxed, unrounded mouth."
    },
    {
      question: "What is ㅜ in Korean?",
      options: ["eo", "eu", "o", "u"],
      answer: "u",
      explanation: "ㅜ is a Korean vowel that represents the sound similar to the 'u' in 'up'."
    },
    {
      question: "What is ㅡ in Korean?",
      options: ["eo", "eu", "o", "u"],

      answer: "eu",
      explanation: "ㅡ (eu) is a flat, unrounded vowel. To make this sound, pull the corners of your mouth back (like a wide, tight smile) and make a sound similar to the 'u' in 'pull' or the 'i' in 'cousin'."
    },
    {
      question: "What is ㅣ in Korean?",
      options: ["eo", "a", "o", "i"],
      answer: "i",
      explanation: "ㅣ is a Korean vowel that represents the sound similar to the 'i' in 'sit'."
    },
    {
      question: "What is ㅠ in Korean?",
      options: ["yo", "ya", "yu", "u"],
      answer: "yu",
      explanation: "ㅠ is a Korean vowel that represents the sound similar to the 'yu' in 'youth'."
    },
    {
      question: "What is ㅕ in Korean?",
      options: ["yeo", "ya", "eu", "a"],
      answer: "yeo",
      explanation: "ㅕ (yeo) is a combination of a quick 'y' sound followed by ㅓ (eo). It sounds like the 'yo' in 'young' or 'yonder'. Keep your mouth open and relaxed, without rounding your lips."
    },
    {
      question: "What is ㅛ in Korean?",
      options: ["yo", "ya", "yeo", "yu"],
      answer: "yo",
      explanation: "ㅛ is a Korean vowel that represents the sound similar to the 'yo' in 'yoga'."
    },
    {
      question: "What is ㄱ in Korean?",
      options: ["r / l", "g / k", "n", "d"],
      answer: "g / k",
      explanation: "ㄱ is a Korean consonant that represents the sound similar to the 'g' in 'go'."
    },
    {
      question: "What is ㄴ in Korean?",
      options: ["r / l", "g / k", "n", "d"],
      answer: "n",
      explanation: "ㄴ is a Korean consonant that represents the sound similar to the 'n' in 'no'."
    },
    {
      question: "What is ㄹ in Korean?",
      options: ["r / l", "g / k", "n", "d"],
      answer: "r / l",
      explanation: "ㄹ is a Korean consonant that represents the sound similar to the 'r' in 'run'."
    },
    {
      question: "What is ㄷ in Korean?",
      options: ["s", "g / k", "n", "t / d"],
      answer: "t / d",
      explanation: "ㄷ is a Korean consonant that represents the sound similar to the 'd' in 'do'."
    },
    {
      question: "What is ㅁ in Korean?",
      options: ["s", "k / g", "n", "m"],
      answer: "m",
      explanation: "ㅁ is a Korean consonant that represents the sound similar to the 'm' in 'mother'."
    },
    {
      question: "What is ㅅ in Korean?",
      options: ["s", "k / g", "j", "m"],
      answer: "s",
      explanation: "ㅅ is a Korean consonant that represents the sound similar to the 's' in 'sun'."
    },
    {
      question: "What is ㅈ in Korean?",
      options: ["s", "k / g", "n", "j"],
      answer: "j",
      explanation: "ㅈ is a Korean consonant that represents the sound similar to the 'j' in 'jump'."
    },
    {
      question: "What is ㅂ in Korean?",
      options: ["s", "r / l", "n", "p / b"],
      answer: "p / b",
      explanation: "ㅂ is a Korean consonant that represents the sound similar to the 'b' in 'boy'."
    },
    {
      question: "What is ㅇ in Korean?",
      options: ["s", "k / g", "n", "ø / ng"],
      answer: "ø / ng",
      explanation: "ㅇ is a Korean consonant that represents the sound similar to the 'ng' in 'song'. When it appears at the beginning of a syllable, it is silent and serves as a placeholder for the initial consonant."
    },
    {
      question: "What is A in Korean?",
      options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
      answer: "ㅏ",
      explanation: "ㅏ is a Korean vowel that represents the sound similar to the 'a' in 'father'."
    },
    {
      question: "What is G / K in Korean?",
      options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
      answer: "ㄱ",
      explanation: "ㄱ is a Korean consonant that represents the sound similar to the 'g' in 'go'."
    },
    {
      question: "What is J in Korean?",
      options: ["ㅈ", "ㄴ", "ㄷ", "ㅅ"],
      answer: "ㅈ",
      explanation: "ㅈ is a Korean consonant that represents the sound similar to the 'j' in 'jump'."
    },
    {
      question: "What is U in Korean?",
      options: ["ㅜ", "ㅓ", "ㅗ", "ㅏ"],
      answer: "ㅜ",
      explanation: "ㅜ is a Korean vowel that represents the sound similar to the 'u' in 'up'."
    },
    {
      question: "What is N in Korean?",
      options: ["ㄴ", "ㄱ", "ㄷ", "ㅁ"],
      answer: "ㄴ",
      explanation: "ㄴ is a Korean consonant that represents the sound similar to the 'n' in 'no'."
    },
    {
      question: "What is O in Korean?",
      options: ["ㅗ", "ㅓ", "ㅜ", "ㅏ"],
      answer: "ㅗ",
      explanation: "ㅗ is a Korean vowel that represents the sound similar to the 'o' in 'open'."
    },
      ]
    },
  ],
  [
    {
    name : "Chapter 1: Words",
    questions: [
      {
    question: "Which one of these means MOTHER in Korean?",
    options: ["어머니", "나라", "다리", "여기요"],
    answer: "어머니",
    explanation: "어머니 eo-meo-ni is the Korean word for mother. 나라 na-ra means country, 다리 da-ri means legs, and 여기요 yeo-gi-yo is used to get attention."
  },
  {
    question: "Which one of these means COUNTRY in Korean?",
    options: ["나라", "어머니", "다리", "여기요"],
    answer: "나라",
    explanation: "나라 na-ra means country. 어머니 eo-meo-ni means mother, 다리 da-ri means leg or bridge, and 여기요 yeo-gi-yo is used to get attention."
  },
  {
    question: "Which one of these means LEGS in Korean?",
    options: ["다리", "나라", "어머니", "여기요"],
    answer: "다리",
    explanation: "다리 da-ri means legs. 나라 na-ra means country, 어머니 eo-meo-ni means mother, and 여기요 yeo-gi-yo means over here."
  },
  {
    question: "Which one of these is a polite way to get attention or say 'over here'?",
    options: ["여기요", "다리", "나라", "어머니"],
    answer: "여기요",
    explanation: "여기요 yeo-gi-yo is a polite way to say here or to call someone. The others are 다리 leg/bridge, 나라 country, and 어머니 mother."
  },
  {
    question: "Which one of these means DRAMA in Korean?",
    options: ["드라마", "고기", "누나", "구"],
    answer: "드라마",
    explanation: "드라마 deu-ra-ma is a loanword from English meaning drama. 고기 go-gi means meat, 누나 nu-na is a male's older sister, and 구 gu means nine."
  },
  {
    question: "Which one of these means MEAT in Korean?",
    options: ["고기", "드라마", "누나", "구"],
    answer: "고기",
    explanation: "고기 go-gi means meat. 드라마 deu-ra-ma is drama, 누나 nu-na is a male's older sister, and 구 gu is the number nine."
  },
  {
    question: "Which one of these means OLDER SISTER in Korean when used by a male?",
    options: ["누나", "고기", "드라마", "구"],
    answer: "누나",
    explanation: "누나 nu-na is what a male calls an older sister. 고기 go-gi is meat, 드라마 deu-ra-ma is drama, and 구 gu is the number nine."
  },
  {
    question: "Which one of these means NINE in Korean?",
    options: ["구", "고기", "누나", "드라마"],
    answer: "구",
    explanation: "구 gu means the number nine. 고기 go-gi means meat, 누나 nu-na is a male's older sister, and 드라마 deu-ra-ma is drama."
  },
  {
    question: "Which one of these means TOFU in Korean?",
    options: ["두부", "바지", "모자", "바나나"],
    answer: "두부",
    explanation: "두부 du-bu is the Korean word for tofu. 바지 ba-ji means pants, 모자 mo-ja means hat, and 바나나 ba-na-na means banana."
  },
  {
    question: "Which one of these means PANTS in Korean?",
    options: ["바지", "두부", "모자", "바나나"],
    answer: "바지",
    explanation: "바지 ba-ji means pants. 두부 du-bu is tofu, 모자 mo-ja is hat, and 바나나 ba-na-na is banana."
  },
  {
    question: "Which one of these means HAT in Korean?",
    options: ["모자", "바지", "두부", "바나나"],
    answer: "모자",
    explanation: "모자 mo-ja means hat. 바지 ba-ji means pants, 두부 du-bu is tofu, and 바나나 ba-na-na is banana."
  },
  {
    question: "Which one of these means BANANA in Korean?",
    options: ["바나나", "모자", "바지", "두부"],
    answer: "바나나",
    explanation: "바나나 ba-na-na is the loanword for banana. 모자 mo-ja is hat, 바지 ba-ji is pants, and 두부 du-bu is tofu."
  },
  {
    question: "Which one of these means SINGER in Korean?",
    options: ["가수", "여자", "우유", "주스"],
    answer: "가수",
    explanation: "가수 ga-su is the Korean word for singer. 여자 yeo-ja means woman, 우유 u-yu means milk, and 주스 ju-seu means juice."
  },
  {
    question: "Which one of these means WOMAN in Korean?",
    options: ["여자", "가수", "우유", "주스"],
    answer: "여자",
    explanation: "여자 yeo-ja means woman. 가수 ga-su means singer, 우유 u-yu means milk, and 주스 ju-seu means juice."
  },
  {
    question: "Which one of these means MILK in Korean?",
    options: ["우유", "여자", "가수", "주스"],
    answer: "우유",
    explanation: "우유 u-yu means milk. 여자 yeo-ja is woman, 가수 ga-su is singer, and 주스 ju-seu is juice."
  },
  {
    question: "Which one of these means JUICE in Korean?",
    options: ["주스", "우유", "여자", "가수"],
    answer: "주스",
    explanation: "주스 ju-seu is the loanword for juice. 우유 u-yu is milk, 여자 yeo-ja is woman, and 가수 ga-su is singer."
  },
  {
    question: "Which one of these means NUMBER TWO in Korean?",
    options: ["이", "아이", "우유", "오"],
    answer: "이",
    explanation: "이 i is the Korean word for two. 아이 a-i means child, 우유 u-yu is milk, and 오 o means five."
  },
  {
    question: "Which one of these means CHILD in Korean?",
    options: ["아이", "이", "우유", "오"],
    answer: "아이",
    explanation: "아이 a-i means child. 이 i means two, 우유 u-yu is milk, and 오 o means five."
  },
  {
    question: "Which one of these means NUMBER FIVE in Korean?",
    options: ["오", "아이", "이", "우유"],
    answer: "오",
    explanation: "오 o means five. 아이 a-i means child, 이 i means two, and 우유 u-yu means milk."
  }
  ],
    }
  ],
]

export default Quiz;
