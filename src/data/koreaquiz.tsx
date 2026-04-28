const Quiz = [
  [
    {
      name: "Chapter 1: Hangul beginner",
      write: false,
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
    write: false,
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
  [
    {
    name: "Chapter 2: Hangul Alphabet advanced",
    write: false,
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
        explanation: "ㅓ (eo) is an 'open' vowel sound. It sounds like the 'u' in 'up' or the 'o' in 'done'."
      },
      {
        question: "What is ㅜ in Korean?",
        options: ["eo", "eu", "o", "u"],
        answer: "u",
        explanation: "ㅜ is a Korean vowel that represents the sound similar to the 'u' in 'boot'."
      },
      {
        question: "What is ㅡ in Korean?",
        options: ["eo", "eu", "o", "u"],
        answer: "eu",
        explanation: "ㅡ (eu) is a flat, unrounded vowel, similar to the 'u' in 'pull' or 'cousin'."
      },
      {
        question: "What is ㅣ in Korean?",
        options: ["eo", "a", "o", "i"],
        answer: "i",
        explanation: "ㅣ is a Korean vowel that represents the sound similar to the 'ee' in 'see'."
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
        explanation: "ㅕ (yeo) is a combination of a quick 'y' sound followed by ㅓ (eo)."
      },
      {
        question: "What is ㅛ in Korean?",
        options: ["yo", "ya", "yeo", "yu"],
        answer: "yo",
        explanation: "ㅛ is a Korean vowel that represents the sound similar to the 'yo' in 'yoga'."
      },
      {
        question: "What is ㅐ in Korean?",
        options: ["ae", "e", "oe", "ui"],
        answer: "ae",
        explanation: "In modern Korean, ㅐ (ae) and ㅔ (e) sound identical. For example, '개' (dog) and '게' (crab) are pronounced exactly the same, with the only difference being the spelling!"
      },
      {
        question: "What is ㅔ in Korean?",
        options: ["ae", "e", "oe", "ui"],
        answer: "e",
        explanation: "ㅔ (e) sounds exactly like ㅐ (ae) in modern speech. You can only tell the difference through context, such as '게' (crab) vs '개' (dog)."
      },
      {
        question: "What is ㅒ in Korean?",
        options: ["yae", "ye", "wa", "wo"],
        answer: "yae",
        explanation: "ㅒ is 'y' + 'ae'. Just like ae/e, this sounds almost identical to ㅖ (ye)."
      },
      {
        question: "What is ㅖ in Korean?",
        options: ["yae", "ye", "wa", "wo"],
        answer: "ye",
        explanation: "ㅖ is 'y' + 'e'. In modern Korean, it is often indistinguishable from ㅒ (yae)."
      },
      {
        question: "What is ㅘ in Korean?",
        options: ["wa", "wo", "wae", "we"],
        answer: "wa",
        explanation: "ㅘ is a combination of ㅗ and ㅏ, sounding like 'wa' in 'waft'."
      },
      {
        question: "What is ㅝ in Korean?",
        options: ["wa", "wo", "wae", "we"],
        answer: "wo",
        explanation: "ㅝ is a combination of ㅜ and ㅓ, sounding like 'wo' in 'won'."
      },
      {
        question: "What is ㅙ in Korean?",
        options: ["wae", "we", "oe", "wi"],
        answer: "wae",
        explanation: "ㅙ sounds like 'weh'. In modern speech, ㅙ, ㅚ, and ㅞ all sound exactly the same!"
      },
      {
        question: "What is ㅚ in Korean?",
        options: ["oe", "wi", "wa", "wo"],
        answer: "oe",
        explanation: "Despite being written 'oe', it is pronounced 'weh', sounding identical to ㅙ and ㅞ."
      },
      {
        question: "What is ㅞ in Korean?",
        options: ["we", "wa", "ui", "yae"],
        answer: "we",
        explanation: "ㅞ sounds like 'weh'. It is primarily used in loanwords and sounds identical to ㅙ and ㅚ."
      },
      {
        question: "What is ㅟ in Korean?",
        options: ["oe", "wi", "ui", "ae"],
        answer: "wi",
        explanation: "ㅟ sounds like 'wi' in 'win' or 'we'."
      },
      {
        question: "What is ㅢ in Korean?",
        options: ["oe", "wi", "ui", "ae"],
        answer: "ui",
        explanation: "ㅢ is a combination of ㅡ and ㅣ. Its pronunciation can change depending on its position in a word."
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
        question: "What is ㄷ in Korean?",
        options: ["s", "g / k", "n", "t / d"],
        answer: "t / d",
        explanation: "ㄷ is a Korean consonant that represents the sound similar to the 'd' in 'do'."
      },
      {
        question: "What is ㄹ in Korean?",
        options: ["r / l", "g / k", "n", "d"],
        answer: "r / l",
        explanation: "ㄹ is a Korean consonant that represents a sound between 'r' and 'l'."
      },
      {
        question: "What is ㅁ in Korean?",
        options: ["s", "k / g", "n", "m"],
        answer: "m",
        explanation: "ㅁ is a Korean consonant that represents the sound similar to the 'm' in 'mother'."
      },
      {
        question: "What is ㅂ in Korean?",
        options: ["s", "r / l", "n", "p / b"],
        answer: "p / b",
        explanation: "ㅂ is a Korean consonant that represents the sound similar to the 'b' in 'boy'."
      },
      {
        question: "What is ㅅ in Korean?",
        options: ["s", "k / g", "j", "m"],
        answer: "s",
        explanation: "ㅅ is a Korean consonant that represents the sound similar to the 's' in 'sun'."
      },
      {
        question: "What is ㅇ in Korean?",
        options: ["s", "k / g", "n", "ø / ng"],
        answer: "ø / ng",
        explanation: "ㅇ is silent at the start of a syllable, and sounds like 'ng' (as in 'song') at the end."
      },
      {
        question: "What is ㅈ in Korean?",
        options: ["s", "k / g", "n", "j"],
        answer: "j",
        explanation: "ㅈ is a Korean consonant that represents the sound similar to the 'j' in 'jump'."
      },
      {
        question: "What is ㅊ in Korean?",
        options: ["ch", "k", "t", "p"],
        answer: "ch",
        explanation: "ㅊ is an aspirated 'ch' sound, like in 'chart'."
      },
      {
        question: "What is ㅋ in Korean?",
        options: ["ch", "k", "t", "p"],
        answer: "k",
        explanation: "ㅋ is an aspirated 'k' sound, like in 'kite'."
      },
      {
        question: "What is ㅌ in Korean?",
        options: ["ch", "k", "t", "p"],
        answer: "t",
        explanation: "ㅌ is an aspirated 't' sound, like in 'tall'."
      },
      {
        question: "What is ㅍ in Korean?",
        options: ["ch", "k", "t", "p"],
        answer: "p",
        explanation: "ㅍ is an aspirated 'p' sound, like in 'pool'."
      },
      {
        question: "What is ㅎ in Korean?",
        options: ["h", "m", "n", "s"],
        answer: "h",
        explanation: "ㅎ is a Korean consonant that represents the 'h' sound."
      },
      {
        question: "What is ㄲ in Korean?",
        options: ["kk", "tt", "pp", "ss"],
        answer: "kk",
        explanation: "ㄲ is a 'tense' or double consonant with a sharp 'k' sound."
      },
      {
        question: "What is ㄸ in Korean?",
        options: ["kk", "tt", "pp", "ss"],
        answer: "tt",
        explanation: "ㄸ is a 'tense' or double consonant with a sharp 't' sound."
      },
      {
        question: "What is ㅃ in Korean?",
        options: ["kk", "tt", "pp", "ss"],
        answer: "pp",
        explanation: "ㅃ is a 'tense' or double consonant with a sharp 'p' sound."
      },
      {
        question: "What is ㅆ in Korean?",
        options: ["kk", "tt", "pp", "ss"],
        answer: "ss",
        explanation: "ㅆ is a 'tense' or double consonant with a sharp 's' sound."
      },
      {
        question: "What is ㅉ in Korean?",
        options: ["kk", "jj", "pp", "ss"],
        answer: "jj",
        explanation: "ㅉ is a 'tense' or double consonant with a sharp 'j' sound."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 2: Words",
    write: false,
    questions: [
      {
        question: "Which one of these means AGAIN in Korean?",
        options: ["또", "써요", "짜요", "오빠"],
        answer: "또",
        explanation: "또 (tto) means again. 써요 (sseo-yo) means write (basic: 쓰다), 짜요 (jja-yo) means salty (basic: 짜다), and 오빠 (o-ppa) means older brother."
      },
      {
        question: "Which one of these means WRITE in Korean?",
        options: ["써요", "또", "짜요", "오빠"],
        answer: "써요",
        explanation: "써요 (sseo-yo) is the polite form of 'to write' (basic: 쓰다). 또 (tto) means again, 짜요 (jja-yo) means salty (basic: 짜다), and 오빠 (o-ppa) means older brother."
      },
      {
        question: "Which one of these means SALTY in Korean?",
        options: ["짜요", "써요", "또", "오빠"],
        answer: "짜요",
        explanation: "짜요 (jja-yo) is the polite form of 'salty' (basic: 짜다). 써요 (sseo-yo) means write (basic: 쓰다), 또 (tto) means again, and 오빠 (o-ppa) means older brother."
      },
      {
        question: "Which one of these means OLDER BROTHER (used by a female)?",
        options: ["오빠", "짜요", "써요", "또"],
        answer: "오빠",
        explanation: "오빠 (o-ppa) means older brother for a female. 짜요 (jja-yo) means salty (basic: 짜다), 써요 (sseo-yo) means write (basic: 쓰다), and 또 (tto) means again."
      },
      {
        question: "Which one of these means CHEAP in Korean?",
        options: ["싸요", "가짜", "아저씨", "바빠요"],
        answer: "싸요",
        explanation: "싸요 (ssa-yo) is the polite form of 'cheap' (basic: 싸다). 가짜 (ga-jja) means fake, 아저씨 (a-jeo-ssi) means middle-aged man, and 바빠요 (ba-ppa-yo) means busy (basic: 바쁘다)."
      },
      {
        question: "Which one of these means FAKE in Korean?",
        options: ["가짜", "싸요", "아저씨", "바빠요"],
        answer: "가짜",
        explanation: "가짜 (ga-jja) means fake. 싸요 (ssa-yo) means cheap (basic: 싸다), 아저씨 (a-jeo-ssi) means middle-aged man, and 바빠요 (ba-ppa-yo) means busy (basic: 바쁘다)."
      },
      {
        question: "Which one of these means MIDDLE-AGED MAN in Korean?",
        options: ["아저씨", "가짜", "싸요", "바빠요"],
        answer: "아저씨",
        explanation: "아저씨 (a-jeo-ssi) means middle-aged man. 가짜 (ga-jja) means fake, 싸요 (ssa-yo) means cheap (basic: 싸다), and 바빠요 (ba-ppa-yo) means busy (basic: 바쁘다)."
      },
      {
        question: "Which one of these means BUSY in Korean?",
        options: ["바빠요", "아저씨", "가짜", "싸요"],
        answer: "바빠요",
        explanation: "바빠요 (ba-ppa-yo) is the polite form of 'busy' (basic: 바쁘다). 아저씨 (a-jeo-ssi) means middle-aged man, 가짜 (ga-jja) means fake, and 싸요 (ssa-yo) means cheap (basic: 싸다)."
      },
      {
        question: "Which one of these means TICKET in Korean?",
        options: ["표", "치즈", "하나", "휴지"],
        answer: "표",
        explanation: "표 (pyo) means ticket. 치즈 (chi-jeu) is cheese, 하나 (ha-na) is one, and 휴지 (hyu-ji) is tissue."
      },
      {
        question: "Which one of these means CHEESE in Korean?",
        options: ["치즈", "표", "하나", "휴지"],
        answer: "치즈",
        explanation: "치즈 (chi-jeu) is cheese. 표 (pyo) means ticket, 하나 (ha-na) is one, and 휴지 (hyu-ji) is tissue."
      },
      {
        question: "Which one of these means ONE in Korean?",
        options: ["하나", "표", "치즈", "휴지"],
        answer: "하나",
        explanation: "하나 (ha-na) is the native Korean word for one. 표 (pyo) means ticket, 치즈 (chi-jeu) is cheese, and 휴지 (hyu-ji) is tissue."
      },
      {
        question: "Which one of these means TISSUE in Korean?",
        options: ["휴지", "표", "치즈", "하나"],
        answer: "휴지",
        explanation: "휴지 (hyu-ji) means tissue. 표 (pyo) means ticket, 치즈 (chi-jeu) is cheese, and 하나 (ha-na) is one."
      },
      {
        question: "Which one of these means COAT in Korean?",
        options: ["코트", "치마", "포도", "티셔츠"],
        answer: "코트",
        explanation: "코트 (ko-teu) is a coat. 치마 (chi-ma) is a skirt, 포도 (po-do) means grape, and 티셔츠 (ti-syeo-cheu) is a t-shirt."
      },
      {
        question: "Which one of these means SKIRT in Korean?",
        options: ["치마", "코트", "포도", "티셔츠"],
        answer: "치마",
        explanation: "치마 (chi-ma) means skirt. 코트 (ko-teu) is a coat, 포도 (po-do) means grape, and 티셔츠 (ti-syeo-cheu) is a t-shirt."
      },
      {
        question: "Which one of these means GRAPE in Korean?",
        options: ["포도", "치마", "코트", "티셔츠"],
        answer: "포도",
        explanation: "포도 (po-do) means grape. 치마 (chi-ma) is a skirt, 코트 (ko-teu) is a coat, and 티셔츠 (ti-syeo-cheu) is a t-shirt."
      },
      {
        question: "Which one of these means T-SHIRT in Korean?",
        options: ["티셔츠", "포도", "치마", "코트"],
        answer: "티셔츠",
        explanation: "티셔츠 (ti-syeo-cheu) is a t-shirt. 포도 (po-do) means grape, 치마 (chi-ma) is a skirt, and 코트 (ko-teu) is a coat."
      },
      {
        question: "Which one of these means DOG in Korean?",
        options: ["개", "가게", "해요", "예뻐요"],
        answer: "개",
        explanation: "개 (gae) means dog. Funny fact: 개 (dog) and 게 (crab) are written differently but sound exactly the same! 가게 (ga-ge) means store, 해요 (hae-yo) means do (basic: 하다), and 예뻐요 (ye-ppeo-yo) means pretty (basic: 예쁘다)."
      },
      {
        question: "Which one of these means STORE in Korean?",
        options: ["가게", "개", "해요", "예뻐요"],
        answer: "가게",
        explanation: "가게 (ga-ge) means store. 개 (gae) means dog, 해요 (hae-yo) means do (basic: 하다), and 예뻐요 (ye-ppeo-yo) means pretty (basic: 예쁘다)."
      },
      {
        question: "Which one of these means DO in Korean?",
        options: ["해요", "가게", "개", "예뻐요"],
        answer: "해요",
        explanation: "해요 (hae-yo) is the polite form of 'to do' (basic: 하다). 가게 (ga-ge) means store, 개 (gae) means dog, and 예뻐요 (ye-ppeo-yo) means pretty (basic: 예쁘다)."
      },
      {
        question: "Which one of these means PRETTY in Korean?",
        options: ["예뻐요", "해요", "가게", "개"],
        answer: "예뻐요",
        explanation: "예뻐요 (ye-ppeo-yo) is the polite form of 'pretty' (basic: 예쁘다). 해요 (hae-yo) means do (basic: 하다), 가게 (ga-ge) means store, and 개 (gae) means dog."
      },
      {
        question: "Which one of these means CAKE in Korean?",
        options: ["케이크", "주세요", "회사", "의사"],
        answer: "케이크",
        explanation: "케이크 (ke-i-keu) is a cake. 주세요 (ju-se-yo) means 'please give' (basic: 주다), 회사 (hoe-sa) means company, and 의사 (ui-sa) means doctor."
      },
      {
        question: "Which one of these means PLEASE GIVE ME in Korean?",
        options: ["주세요", "케이크", "회사", "의사"],
        answer: "주세요",
        explanation: "주세요 (ju-se-yo) is the polite way to say 'please give' (basic: 주다). 케이크 (ke-i-keu) is cake, 회사 (hoe-sa) means company, and 의사 (ui-sa) means doctor."
      },
      {
        question: "Which one of these means COMPANY in Korean?",
        options: ["회사", "주세요", "케이크", "의사"],
        answer: "회사",
        explanation: "회사 (hoe-sa) means company. 주세요 (ju-se-yo) means 'please give' (basic: 주다), 케이크 (ke-i-keu) is cake, and 의사 (ui-sa) means doctor."
      },
      {
        question: "Which one of these means DOCTOR in Korean?",
        options: ["의사", "회사", "주세요", "케이크"],
        answer: "의사",
        explanation: "의사 (ui-sa) means doctor. 회사 (hoe-sa) means company, 주세요 (ju-se-yo) means 'please give' (basic: 주다), and 케이크 (ke-i-keu) is cake."
      },
      {
        question: "Which one of these means APPLE in Korean?",
        options: ["사과", "과자", "쇠고기", "매워요"],
        answer: "사과",
        explanation: "사과 (sa-gwa) means apple. 과자 (gwa-ja) means snack, 쇠고기 (soe-go-gi) means beef, and 매워요 (mae-wo-yo) means spicy (basic: 맵다)."
      },
      {
        question: "Which one of these means SNACK in Korean?",
        options: ["과자", "사과", "쇠고기", "매워요"],
        answer: "과자",
        explanation: "과자 (gwa-ja) means snack. 사과 (sa-gwa) means apple, 쇠고기 (soe-go-gi) means beef, and 매워요 (mae-wo-yo) means spicy (basic: 맵다)."
      },
      {
        question: "Which one of these means BEEF in Korean?",
        options: ["쇠고기", "과자", "사과", "매워요"],
        answer: "쇠고기",
        explanation: "쇠고기 (soe-go-gi) means beef. 과자 (gwa-ja) means snack, 사과 (sa-gwa) means apple, and 매워요 (mae-wo-yo) means spicy (basic: 맵다)."
      },
      {
        question: "Which one of these means SPICY in Korean?",
        options: ["매워요", "쇠고기", "과자", "사과"],
        answer: "매워요",
        explanation: "매워요 (mae-wo-yo) is the polite form of 'spicy' (basic: 맵다). 쇠고기 (soe-go-gi) means beef, 과자 (gwa-ja) means snack, and 사과 (sa-gwa) means apple."
      },
      {
        question: "Which one of these means WAITER in Korean?",
        options: ["웨이터", "돼지고기", "쇠고기", "의사"],
        answer: "웨이터",
        explanation: "웨이터 (we-i-teo) is a waiter. 돼지고기 (dwae-ji-go-gi) means pork, 쇠고기 (soe-go-gi) means beef, and 의사 (ui-sa) means doctor."
      },
      {
        question: "Which one of these means PORK in Korean?",
        options: ["돼지고기", "웨이터", "쇠고기", "의사"],
        answer: "돼지고기",
        explanation: "돼지고기 (dwae-ji-go-gi) means pork. 웨이터 (we-i-teo) is a waiter, 쇠고기 (soe-go-gi) means beef, and 의사 (ui-sa) means doctor."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 3: Words and Classroom Expressions",
    write: false,
    questions: [
      {
        question: "Which one of these means BOOK in Korean?",
        options: ["책", "밖", "부엌", "돈"],
        answer: "책",
        explanation: "책 (chaek) means book. 밖 (bak) means outside, 부엌 (bu-eok) means kitchen, and 돈 (don) means money."
      },
      {
        question: "Which one of these means OUTSIDE in Korean?",
        options: ["밖", "책", "부엌", "돈"],
        answer: "밖",
        explanation: "밖 (bak) means outside. 책 (chaek) means book, 부엌 (bu-eok) means kitchen, and 돈 (don) means money."
      },
      {
        question: "Which one of these means KITCHEN in Korean?",
        options: ["부엌", "책", "밖", "돈"],
        answer: "부엌",
        explanation: "부엌 (bu-eok) means kitchen. 책 (chaek) means book, 밖 (bak) means outside, and 돈 (don) means money."
      },
      {
        question: "Which one of these means MONEY in Korean?",
        options: ["돈", "책", "밖", "부엌"],
        answer: "돈",
        explanation: "돈 (don) means money. 책 (chaek) means book, 밖 (bak) means outside, and 부엌 (bu-eok) means kitchen."
      },
      {
        question: "Which one of these means TO CLOSE in Korean?",
        options: ["닫다", "빗", "빚", "빛"],
        answer: "닫다",
        explanation: "닫다 (dat-da) is the basic form meaning to close. 빗 (bit) is a comb, 빚 (bit) is debt, and 빛 (bit) is light."
      },
      {
        question: "Which one of these means COMB in Korean?",
        options: ["빗", "닫다", "빚", "빛"],
        answer: "빗",
        explanation: "빗 (bit) means a comb. 닫다 (dat-da) means to close, 빚 (bit) means debt, and 빛 (bit) means light."
      },
      {
        question: "Which one of these means DEBT in Korean?",
        options: ["빚", "빗", "닫다", "빛"],
        answer: "빚",
        explanation: "빚 (bit) means debt. 빗 (bit) means comb, 닫다 (dat-da) means to close, and 빛 (bit) means light."
      },
      {
        question: "Which one of these means LIGHT in Korean?",
        options: ["빛", "빚", "빗", "닫다"],
        answer: "빛",
        explanation: "빛 (bit) means light. 빚 (bit) means debt, 빗 (bit) means comb, and 닫다 (dat-da) means to close."
      },
      {
        question: "Which one of these means END in Korean?",
        options: ["끝", "히읗", "있다", "물"],
        answer: "끝",
        explanation: "끝 (kkeut) means end or finish. 히읗 (hieut) is the letter 'ㅎ', 있다 (it-da) means to be or to have, and 물 (mul) means water."
      },
      {
        question: "Which one of these is the name of the letter 'ㅎ'?",
        options: ["히읗", "끝", "있다", "물"],
        answer: "히읗",
        explanation: "히읗 (hieut) is the name of the consonant 'ㅎ'. 끝 (kkeut) means end, 있다 (it-da) means to be/have, and 물 (mul) means water."
      },
      {
        question: "Which one of these means TO HAVE or TO BE in Korean?",
        options: ["있다", "히읗", "끝", "물"],
        answer: "있다",
        explanation: "있다 (it-da) is the basic form meaning to exist, to be at a location, or to have. 히읗 (hieut) is 'ㅎ', 끝 (kkeut) means end, and 물 (mul) means water."
      },
      {
        question: "Which one of these means WATER in Korean?",
        options: ["물", "있다", "히읗", "끝"],
        answer: "물",
        explanation: "물 (mul) means water. 있다 (it-da) means to be/have, 히읗 (hieut) is 'ㅎ', and 끝 (kkeut) means end."
      },
      {
        question: "Which one of these means KIMCHI in Korean?",
        options: ["김치", "물", "입", "잎"],
        answer: "김치",
        explanation: "김치 (kimchi) is the famous Korean fermented dish. 물 (mul) is water, 입 (ip) means mouth, and 잎 (ip) means leaf."
      },
      {
        question: "Which one of these means MOUTH in Korean?",
        options: ["입", "김치", "물", "잎"],
        answer: "입",
        explanation: "입 (ip) means mouth. 김치 (kimchi) is kimchi, 물 (mul) is water, and 잎 (ip) means leaf."
      },
      {
        question: "Which one of these means LEAF in Korean?",
        options: ["잎", "입", "김치", "물"],
        answer: "잎",
        explanation: "잎 (ip) means leaf. 입 (ip) means mouth, 김치 (kimchi) is kimchi, and 물 (mul) is water."
      },
      {
        question: "Which one of these means BREAD in Korean?",
        options: ["빵", "입", "잎", "김치"],
        answer: "빵",
        explanation: "빵 (ppang) means bread. 입 (ip) is mouth, 잎 (ip) is leaf, and 김치 (kimchi) is kimchi."
      },
      {
        question: "Which one of these means PLEASE WRITE in Korean?",
        options: ["쓰세요", "들으세요", "읽으세요", "따라 하세요"],
        answer: "쓰세요",
        explanation: "쓰세요 (sseu-se-yo) is the polite command for 'please write'. The basic form is 쓰다 (sseu-da). 들으세요 means please listen, 읽으세요 means please read, and 따라 하세요 means please repeat after me."
      },
      {
        question: "Which one of these means PLEASE LISTEN in Korean?",
        options: ["들으세요", "쓰세요", "읽으세요", "따라 하세요"],
        answer: "들으세요",
        explanation: "들으세요 (deu-reu-se-yo) is the polite command for 'please listen'. The basic form is 듣다 (deut-da). 쓰세요 means please write, 읽으세요 means please read, and 따라 하세요 means please repeat after me."
      },
      {
        question: "Which one of these means PLEASE READ in Korean?",
        options: ["읽으세요", "들으세요", "쓰세요", "따라 하세요"],
        answer: "읽으세요",
        explanation: "읽으세요 (il-geu-se-yo) is the polite command for 'please read'. The basic form is 읽다 (ik-da). 들으세요 means please listen, 쓰세요 means please write, and 따라 하세요 means please repeat after me."
      },
      {
        question: "Which one of these means PLEASE REPEAT AFTER ME?",
        options: ["따라 하세요", "읽으세요", "들으세요", "쓰세요"],
        answer: "따라 하세요",
        explanation: "따라 하세요 (ttara ha-se-yo) means 'please follow/repeat after me'. The basic form is 따라 하다 (ttara ha-da). 읽으세요 means please read, 들으세요 means please listen, and 쓰세요 means please write."
      },
      {
        question: "Which one of these means DO YOU UNDERSTAND?",
        options: ["알겠어요?", "질문 있어요?", "네", "아니요"],
        answer: "알겠어요?",
        explanation: "알겠어요? (al-ge-sseo-yo?) means 'Do you understand?'. The basic form is 알다 (al-da). 질문 있어요? means 'Do you have questions?', 네 means yes, and 아니요 means no."
      },
      {
        question: "Which one of these means DO YOU HAVE QUESTIONS?",
        options: ["질문 있어요?", "알겠어요?", "네", "아니요"],
        answer: "질문 있어요?",
        explanation: "질문 있어요? (jil-mun i-sseo-yo?) means 'Do you have questions?'. The basic form is 질문 있다 (jil-mun it-da). 알겠어요? means 'Do you understand?', 네 means yes, and 아니요 means no."
      },
      {
        question: "Which one of these means YES in Korean?",
        options: ["네", "아니요", "알겠어요?", "질문 있어요?"],
        answer: "네",
        explanation: "네 (ne) means yes. 아니요 (aniyo) means no, 알겠어요? means 'Do you understand?', and 질문 있어요? means 'Do you have questions?'."
      },
      {
        question: "Which one of these means NO in Korean?",
        options: ["아니요", "네", "알겠어요?", "질문 있어요?"],
        answer: "아니요",
        explanation: "아니요 (aniyo) means no. 네 (ne) means yes, 알겠어요? means 'Do you understand?', and 질문 있어요? means 'Do you have questions?'."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 3: Write Classroom Expressions",
    write: true,
    questions: [
      {
        question: "How do you write \"PLEASE WRITE\" in Korean?",
        answer: "쓰세요",
        explanation: "쓰세요 (sseu-se-yo) means 'please write'."
      },
      {
        question: "How do you write \"PLEASE LISTEN\" in Korean?",
        answer: "들으세요",
        explanation: "들으세요 (deu-reu-se-yo) means 'please listen'."
      },
      {
        question: "How do you write \"PLEASE READ\" in Korean?",
        answer: "읽으세요",
        explanation: "읽으세요 (il-geu-se-yo) means 'please read'."
      },
      {
        question: "How do you write \"PLEASE REPEAT AFTER ME\" in Korean?",
        answer: "따라 하세요",
        explanation: "따라 하세요 (ttara ha-se-yo) means 'please follow/repeat after me'."
      },
      {
        question: "How do you write \"DO YOU UNDERSTAND?\" in Korean?",
        answer: "알겠어요",
        explanation: "알겠어요? (al-ge-sseo-yo?) means 'Do you understand?'."
      },
      {
        question: "How do you write \"DO YOU HAVE QUESTIONS?\" in Korean?",
        answer: "질문 있어요",
        explanation: "질문 있어요? (jil-mun i-sseo-yo?) means 'Do you have questions?'."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 4: Countries and Introductions",
    write: false,
    questions: [
      {
        question: "Which one of these means KOREA in Korean?",
        options: ["한국", "중국", "일본", "미국"],
        answer: "한국",
        explanation: "한국 (han-guk) means Korea. 중국 (jung-guk) is China, 일본 (il-bon) is Japan, and 미국 (mi-guk) is USA."
      },
      {
        question: "Which one of these means USA in Korean?",
        options: ["미국", "영국", "독일", "프랑스"],
        answer: "미국",
        explanation: "미국 (mi-guk) means USA. 영국 (yeong-guk) is UK, 독일 (dok-il) is Germany, and 프랑스 (peu-rang-seu) is France."
      },
      {
        question: "Which one of these means CHINA in Korean?",
        options: ["중국", "한국", "일본", "호주"],
        answer: "중국",
        explanation: "중국 (jung-guk) means China. 한국 (han-guk) is Korea, 일본 (il-bon) is Japan, and 호주 (ho-ju) is Australia."
      },
      {
        question: "Which one of these means JAPAN in Korean?",
        options: ["일본", "중국", "미국", "영국"],
        answer: "일본",
        explanation: "일본 (il-bon) means Japan. 중국 (jung-guk) is China, 미국 (mi-guk) is USA, and 영국 (yeong-guk) is UK."
      },
      {
        question: "Which one of these means UK (United Kingdom) in Korean?",
        options: ["영국", "미국", "독일", "프랑스"],
        answer: "영국",
        explanation: "영국 (yeong-guk) means UK. 미국 (mi-guk) is USA, 독일 (dok-il) is Germany, and 프랑스 (peu-rang-seu) is France."
      },
      {
        question: "Fill in the blank: 어느 나라 ____이에요?",
        options: ["사람", "이름", "만나서", "반가워요"],
        answer: "사람",
        explanation: "사람 (sa-ram) means person. The phrase '어느 나라 사람이에요?' asks 'Which country's person are you?'. 이름 is name, 만나서 is meeting, and 반가워요 is glad (basic: 반갑다)."
      },
      {
        question: "Fill in the blank: 제 이름____ 마이클이에요.",
        options: ["은", "는", "이에요", "예요"],
        answer: "은",
        explanation: "Since '이름' (name) ends in a consonant (ㅁ), we use the topic marker 은 (eun). 는 is for vowels. 이에요/예요 are 'to be' verbs."
      },
      {
        question: "Fill in the blank: 저____ 마이클이에요.",
        options: ["는", "은", "이에요", "예요"],
        answer: "는",
        explanation: "Since '저' (I) ends in a vowel (ㅓ), we use the topic marker 는 (neun). 은 is for consonants. 이에요/예요 are 'to be' verbs."
      },
      {
        question: "Fill in the blank: 링링 씨____ 어느 나라 사람이에요?",
        options: ["는", "은", "이에요", "예요"],
        answer: "는",
        explanation: "Since '씨' (honorific) ends in a vowel (ㅣ), we use the topic marker 는 (neun). 은 is for consonants. 이에요/예요 are 'to be' verbs."
      },
      {
        question: "Fill in the blank: 안녕하세요? 저는 링링____.",
        options: ["이에요", "예요", "은", "는"],
        answer: "이에요",
        explanation: "Since '링링' (Lingling) ends in a consonant (ㅇ), we use 이에요 (i-e-yo). 예요 is for vowels. 은/는 are markers."
      },
      {
        question: "Fill in the blank: 안녕하세요? 저는 크리스____.",
        options: ["예요", "이에요", "은", "는"],
        answer: "예요",
        explanation: "Since '크리스' (Chris) ends in a vowel (ㅡ), we use 예요 (ye-yo). 이에요 is for consonants. 은/는 are markers."
      },
      {
        question: "Which word means 'NAME' in Korean?",
        options: ["이름", "사람", "나라", "어느"],
        answer: "이름",
        explanation: "이름 (i-reum) means name. 사람 means person, 나라 means country, and 어느 means which."
      },
      {
        question: "Which word means 'WHICH' in Korean?",
        options: ["어느", "나라", "사람", "이름"],
        answer: "어느",
        explanation: "어느 (eo-neu) means which. 나라 means country, 사람 means person, and 이름 means name."
      },
      {
        question: "How do you say 'Nice to meet you'?",
        options: ["만나서 반가워요", "안녕하세요?", "어느 나라 사람이에요?", "네"],
        answer: "만나서 반가워요",
        explanation: "만나서 반가워요 (man-na-seo ban-ga-wo-yo) means nice to meet you. Basic form of 반가워요 is 반갑다. 안녕하세요? is hello, 어느 나라... asks nationality, and 네 is yes."
      },
      {
        question: "Which phrase means 'I am an American person'?",
        options: ["미국 사람이에요", "영국 사람이에요", "한국 사람이에요", "독일 사람이에요"],
        answer: "미국 사람이에요",
        explanation: "미국 (USA) + 사람 (person) + 이에요 (am). 영국 is UK, 한국 is Korea, and 독일 is Germany."
      },
      {
        question: "Which one of these means AUSTRALIA in Korean?",
        options: ["호주", "프랑스", "독일", "영국"],
        answer: "호주",
        explanation: "호주 (ho-ju) means Australia. 프랑스 is France, 독일 is Germany, and 영국 is UK."
      },
      {
        question: "Which one of these means FRANCE in Korean?",
        options: ["프랑스", "독일", "영국", "호주"],
        answer: "프랑스",
        explanation: "프랑스 (peu-rang-seu) means France. 독일 is Germany, 영국 is UK, and 호주 is Australia."
      },
      {
        question: "Which one of these means GERMANY in Korean?",
        options: ["독일", "프랑스", "영국", "호주"],
        answer: "독일",
        explanation: "독일 (dok-il) means Germany. 프랑스 is France, 영국 is UK, and 호주 is Australia."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 5: Countries and Places",
    write: false,
    questions: [
      {
        question: "Which one of these means SCHOOL in Korean?",
        options: ["학교", "교실", "집", "도서관"],
        answer: "학교",
        explanation: "학교 (hak-gyo) means school. 교실 (gyo-sil) is a classroom, 집 (jip) is home, and 도서관 (do-seo-gwan) is a library."
      },
      {
        question: "Which one of these means HOME in Korean?",
        options: ["집", "식당", "시장", "약국"],
        answer: "집",
        explanation: "집 (jip) means home or house. 식당 (sik-dang) is a restaurant, 시장 (si-jang) is a market, and 약국 (yak-guk) is a pharmacy."
      },
      {
        question: "Which one of these means RESTAURANT in Korean?",
        options: ["식당", "커피숍", "은행", "공원"],
        answer: "식당",
        explanation: "식당 (sik-dang) means restaurant. 커피숍 (keo-pi-syop) is a coffee shop, 은행 (eun-haeng) is a bank, and 공원 (gong-won) is a park."
      },
      {
        question: "Which one of these means PARK in Korean?",
        options: ["공원", "학교", "시장", "도서관"],
        answer: "공원",
        explanation: "공원 (gong-won) means park. 학교 (hak-gyo) is school, 시장 (si-jang) is market, and 도서관 (do-seo-gwan) is library."
      },
      {
        question: "Which one of these means CLASSROOM in Korean?",
        options: ["교실", "학교", "집", "식당"],
        answer: "교실",
        explanation: "교실 (gyo-sil) means classroom. 학교 (hak-gyo) is school, 집 (jip) is home, and 식당 (sik-dang) is restaurant."
      },
      {
        question: "Which one of these means MARKET in Korean?",
        options: ["시장", "은행", "약국", "공원"],
        answer: "시장",
        explanation: "시장 (si-jang) means market. 은행 (eun-haeng) is a bank, 약국 (yak-guk) is a pharmacy, and 공원 (gong-won) is a park."
      },
      {
        question: "Which one of these means COFFEE SHOP in Korean?",
        options: ["커피숍", "식당", "도서관", "학교"],
        answer: "커피숍",
        explanation: "커피숍 (keo-pi-syop) is the loanword for coffee shop. 식당 (sik-dang) is a restaurant, 도서관 (do-seo-gwan) is a library, and 학교 (hak-gyo) is a school."
      },
      {
        question: "Which one of these means BANK in Korean?",
        options: ["은행", "약국", "시장", "집"],
        answer: "은행",
        explanation: "은행 (eun-haeng) means bank. 약국 (yak-guk) is a pharmacy, 시장 (si-jang) is a market, and 집 (jip) is home."
      },
      {
        question: "Which one of these means LIBRARY in Korean?",
        options: ["도서관", "교실", "학교", "공원"],
        answer: "도서관",
        explanation: "도서관 (do-seo-gwan) means library. 교실 (gyo-sil) is a classroom, 학교 (hak-gyo) is a school, and 공원 (gong-won) is a park."
      },
      {
        question: "Which one of these means PHARMACY in Korean?",
        options: ["약국", "은행", "시장", "식당"],
        answer: "약국",
        explanation: "약국 (yak-guk) means pharmacy. 은행 (eun-haeng) is a bank, 시장 (si-jang) is a market, and 식당 (sik-dang) is a restaurant."
      },
      {
        question: "Which one of these means FRANCE in Korean?",
        options: ["프랑스", "독일", "영국", "호주"],
        answer: "프랑스",
        explanation: "프랑스 (peu-rang-seu) is France. 독일 (dok-il) is Germany, 영국 (yeong-guk) is UK, and 호주 (ho-ju) is Australia."
      },
      {
        question: "Which one of these means AUSTRALIA in Korean?",
        options: ["호주", "미국", "일본", "중국"],
        answer: "호주",
        explanation: "호주 (ho-ju) is Australia. 미국 (mi-guk) is USA, 일본 (il-bon) is Japan, and 중국 (jung-guk) is China."
      },
      {
        question: "Which one of these means CHINA in Korean?",
        options: ["중국", "한국", "일본", "미국"],
        answer: "중국",
        explanation: "중국 (jung-guk) means China. 한국 (han-guk) is Korea, 일본 (il-bon) is Japan, and 미국 (mi-guk) is USA."
      },
      {
        question: "Which one of these means JAPAN in Korean?",
        options: ["일본", "중국", "한국", "독일"],
        answer: "일본",
        explanation: "일본 (il-bon) means Japan. 중국 (jung-guk) is China, 한국 (han-guk) is Korea, and 독일 (dok-il) is Germany."
      }
    ]
  }
  ],
  [
  {
    name: "Chapter 5: Writing Countries and Places",
    write: true,
    questions: [
      {
        question: "How do you write KOREA in Korean?",
        answer: "한국",
        explanation: "한국 (han-guk)."
      },
      {
        question: "How do you write CHINA in Korean?",
        answer: "중국",
        explanation: "중국 (jung-guk)."
      },
      {
        question: "How do you write JAPAN in Korean?",
        answer: "일본",
        explanation: "일본 (il-bon)."
      },
      {
        question: "How do you write USA in Korean?",
        answer: "미국",
        explanation: "미국 (mi-guk)."
      },
      {
        question: "How do you write FRANCE in Korean?",
        answer: "프랑스",
        explanation: "프랑스 (peu-rang-seu)."
      },
      {
        question: "How do you write GERMANY in Korean?",
        answer: "독일",
        explanation: "독일 (dok-il)."
      },
      {
        question: "How do you write UK in Korean?",
        answer: "영국",
        explanation: "영국 (yeong-guk)."
      },
      {
        question: "How do you write AUSTRALIA in Korean?",
        answer: "호주",
        explanation: "호주 (ho-ju)."
      },
      {
        question: "How do you write SCHOOL in Korean?",
        answer: "학교",
        explanation: "학교 (hak-gyo)."
      },
      {
        question: "How do you write HOME in Korean?",
        answer: "집",
        explanation: "집 (jip)."
      },
      {
        question: "How do you write RESTAURANT in Korean?",
        answer: "식당",
        explanation: "식당 (sik-dang)."
      },
      {
        question: "How do you write PARK in Korean?",
        answer: "공원",
        explanation: "공원 (gong-won)."
      },
      {
        question: "How do you write CLASSROOM in Korean?",
        answer: "교실",
        explanation: "교실 (gyo-sil)."
      },
      {
        question: "How do you write MARKET in Korean?",
        answer: "시장",
        explanation: "시장 (si-jang)."
      },
      {
        question: "How do you write COFFEE SHOP in Korean?",
        answer: "커피숍",
        explanation: "커피숍 (keo-pi-syop)."
      },
      {
        question: "How do you write BANK in Korean?",
        answer: "은행",
        explanation: "은행 (eun-haeng)."
      },
      {
        question: "How do you write LIBRARY in Korean?",
        answer: "도서관",
        explanation: "도서관 (do-seo-gwan)."
      },
      {
        question: "How do you write PHARMACY in Korean?",
        answer: "약국",
        explanation: "약국 (yak-guk)."
      }
    ]
  }
  ],
  [
  {
    name: "Midterm: Greetings and conversations",
    write: true,
    questions: [
      {
        question: "How do you write \"Hello\" in Korean?",
        answer: "안녕하세요",
        explanation: "안녕하세요 (an-nyeong-ha-se-yo)."
      },
      {
        question: "How do you write \"Thank you\" in Korean?",
        answer: "감사합니다",
        explanation: "감사합니다 (gam-sa-ham-ni-da)."
      },
      {
        question: "How do you write \"Nice to meet you\" in Korean?",
        answer: "만나서 반가워요",
        explanation: "만나서 반가워요 (man-na-seo ban-ga-wo-yo). You can also only say 반가워요 (ban-ga-wo-yo) to mean 'nice to meet you'."
      },
      {
        question: "How do you write \"Goodbye\" (when the other person is staying) in Korean?",
        answer: "안녕히 계세요",
        explanation: "안녕히 계세요 (an-nyeong-hi gye-se-yo) is used when the other person is staying."
      },
      {
        question: "How do you write \"I am\" in Korean?",
        answer: "저는",
        explanation: "저는 (jeo-neun) is used to say 'I am' or 'I am (doing something)'."
      },
      {
        question: "How do you write \"My name is\" in Korean?",
        answer: "제 이름은",
        explanation: "제 이름은 (je i-reum-eun) is used to say 'My name is...'"
      },
      {
        question: "How do you write \"I am a student\" in Korean?",
        answer: "저는 학생이에요",
        explanation: "저는 학생이에요 (jeo-neun hak-saeng-i-e-yo) is used to say 'I am a student' or 'Please give me'."
      },
      {
        question: "How do you write \"Where are you from?\" in Korean?",
        answer: "어느 나라 사람이에요?",
        explanation: "어느 나라 사람이에요 (eo-neun na-ra sa-ri-e-yo) is used to ask 'Where are you from?'."
      },
      {
        question: "How do you write \"Where are you going?\" in Korean?",
        answer: "어디에 가요?",
        explanation: "어디에 가요? (eo-di-e ga-yo?) is used to ask 'Where are you going?'."
      },
      {
        question: "How do you write \"What is this?\" in Korean?",
        answer: "이게 뭐예요?",
        explanation: "이게 뭐예요? (i-ge mwo-ye-yo?) is used to ask 'What is this?'."
      },
      {
        question: "How do you write \"Who is going?\" in Korean?",
        answer: "누가 가요?",
        explanation: "누가 가요? (nu-ga ga-yo?) is used to ask 'Who is going?'."
      }
    ]
  }
  ],
]

export default Quiz;
