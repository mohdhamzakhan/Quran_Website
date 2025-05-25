          // Enhanced language data configuration with complete character sets
          const languageData = {
            arabic: {
              name: "Arabic",
              locale: "ar-SA",
              letters: [
                {
                  char: "ء",
                  name: "Hamza",
                  ipa: "ʔ",
                  target: "a",
                  example: "مَاء (water)",
                  difficulty: "Medium",
                  guide:
                    "Glottal stop - close your vocal cords completely then release",
                },
                {
                  char: "ا",
                  name: "Alif",
                  ipa: "aː",
                  target: "aa",
                  example: "كتاب (book)",
                  difficulty: "Easy",
                  guide: 'Long "a" sound like in "father"',
                },
                {
                  char: "ب",
                  name: "Baa",
                  ipa: "b",
                  target: "ba",
                  example: "باب (door)",
                  difficulty: "Easy",
                  guide: 'Similar to English "b"',
                },
                {
                  char: "ت",
                  name: "Taa",
                  ipa: "t",
                  target: "ta",
                  example: "تِين (fig)",
                  difficulty: "Easy",
                  guide: 'Sharp "t" with tongue touching teeth',
                },
                {
                  char: "ث",
                  name: "Thaa",
                  ipa: "θ",
                  target: "tha",
                  example: "ثَوْب (dress)",
                  difficulty: "Hard",
                  guide: 'Like "th" in "think"',
                },
                {
                  char: "ج",
                  name: "Jeem",
                  ipa: "d͡ʒ",
                  target: "ja",
                  example: "جَمَل (camel)",
                  difficulty: "Medium",
                  guide: 'Like "j" in "jump"',
                },
                {
                  char: "ح",
                  name: "Haa",
                  ipa: "ħ",
                  target: "ha",
                  example: "حَقِيبَة (bag)",
                  difficulty: "Hard",
                  guide: 'Harsh "h" from deep in throat',
                },
                {
                  char: "خ",
                  name: "Khaa",
                  ipa: "x",
                  target: "kha",
                  example: "خِيَار (cucumber)",
                  difficulty: "Hard",
                  guide: 'Like Scottish "ch" in "loch"',
                },
                {
                  char: "د",
                  name: "Daal",
                  ipa: "d",
                  target: "da",
                  example: "دَجَاج (chicken)",
                  difficulty: "Easy",
                  guide: 'Dental "d" with tongue on teeth',
                },
                {
                  char: "ذ",
                  name: "Thaal",
                  ipa: "ð",
                  target: "tha",
                  example: "ذَهَب (gold)",
                  difficulty: "Hard",
                  guide: 'Like "th" in "this"',
                },
                {
                  char: "ر",
                  name: "Raa",
                  ipa: "r",
                  target: "ra",
                  example: "رَجُل (man)",
                  difficulty: "Medium",
                  guide: 'Rolled "r" sound',
                },
                {
                  char: "ز",
                  name: "Zaay",
                  ipa: "z",
                  target: "za",
                  example: "زَيْت (oil)",
                  difficulty: "Easy",
                  guide: 'Like "z" in "zebra"',
                },
                {
                  char: "س",
                  name: "Seen",
                  ipa: "s",
                  target: "sa",
                  example: "سَمَك (fish)",
                  difficulty: "Easy",
                  guide: 'Like "s" in "sun"',
                },
                {
                  char: "ش",
                  name: "Sheen",
                  ipa: "ʃ",
                  target: "sha",
                  example: "شَمْس (sun)",
                  difficulty: "Medium",
                  guide: 'Like "sh" in "shoe"',
                },
                {
                  char: "ص",
                  name: "Saad",
                  ipa: "sˤ",
                  target: "sa",
                  example: "صَبَاح (morning)",
                  difficulty: "Hard",
                  guide: 'Emphatic "s" with tongue raised',
                },
                {
                  char: "ض",
                  name: "Daad",
                  ipa: "dˤ",
                  target: "da",
                  example: "ضَرْب (hitting)",
                  difficulty: "Hard",
                  guide: 'Emphatic "d" with tongue raised',
                },
                {
                  char: "ط",
                  name: "Taa",
                  ipa: "tˤ",
                  target: "ta",
                  example: "طَيْر (bird)",
                  difficulty: "Hard",
                  guide: 'Emphatic "t" with tongue raised',
                },
                {
                  char: "ظ",
                  name: "Thaa",
                  ipa: "ðˤ",
                  target: "tha",
                  example: "ظَهْر (back)",
                  difficulty: "Hard",
                  guide: 'Emphatic "th" with tongue raised',
                },
                {
                  char: "ع",
                  name: "Ayn",
                  ipa: "ʕ",
                  target: "a",
                  example: "عَيْن (eye)",
                  difficulty: "Hard",
                  guide: "Guttural sound from throat",
                },
                {
                  char: "غ",
                  name: "Ghayn",
                  ipa: "ɣ",
                  target: "gha",
                  example: "غَيْم (cloud)",
                  difficulty: "Hard",
                  guide: 'Like French "r" in "Paris"',
                },
                {
                  char: "ف",
                  name: "Faa",
                  ipa: "f",
                  target: "fa",
                  example: "فَم (mouth)",
                  difficulty: "Easy",
                  guide: 'Like "f" in "fish"',
                },
                {
                  char: "ق",
                  name: "Qaaf",
                  ipa: "q",
                  target: "qa",
                  example: "قَلْب (heart)",
                  difficulty: "Hard",
                  guide: 'Deep "k" sound from throat',
                },
                {
                  char: "ك",
                  name: "Kaaf",
                  ipa: "k",
                  target: "ka",
                  example: "كِتَاب (book)",
                  difficulty: "Easy",
                  guide: 'Like "k" in "kite"',
                },
                {
                  char: "ل",
                  name: "Laam",
                  ipa: "l",
                  target: "la",
                  example: "لَيْل (night)",
                  difficulty: "Easy",
                  guide: 'Like "l" in "love"',
                },
                {
                  char: "م",
                  name: "Meem",
                  ipa: "m",
                  target: "ma",
                  example: "مَاء (water)",
                  difficulty: "Easy",
                  guide: 'Like "m" in "mother"',
                },
                {
                  char: "ن",
                  name: "Noon",
                  ipa: "n",
                  target: "na",
                  example: "نَهْر (river)",
                  difficulty: "Easy",
                  guide: 'Like "n" in "noon"',
                },
                {
                  char: "ه",
                  name: "Haa",
                  ipa: "h",
                  target: "ha",
                  example: "هَاتِف (phone)",
                  difficulty: "Easy",
                  guide: 'Like "h" in "house"',
                },
                {
                  char: "و",
                  name: "Waaw",
                  ipa: "w",
                  target: "wa",
                  example: "وَرْد (flower)",
                  difficulty: "Easy",
                  guide: 'Like "w" in "water"',
                },
                {
                  char: "ي",
                  name: "Yaa",
                  ipa: "j",
                  target: "ya",
                  example: "يَد (hand)",
                  difficulty: "Easy",
                  guide: 'Like "y" in "yes"',
                },
              ],
            },
            urdu: {
              name: "Urdu",
              locale: "ur-PK",
              letters: [
                {
                  char: "ا",
                  name: "Alif",
                  ipa: "ɑ",
                  target: "a",
                  example: "آم (mango)",
                  difficulty: "Easy",
                  guide: 'Open "a" sound',
                },
                {
                  char: "ب",
                  name: "Bay",
                  ipa: "b",
                  target: "ba",
                  example: "بکری (goat)",
                  difficulty: "Easy",
                  guide: 'Like English "b"',
                },
                {
                  char: "پ",
                  name: "Pay",
                  ipa: "p",
                  target: "pa",
                  example: "پانی (water)",
                  difficulty: "Easy",
                  guide: 'Like English "p"',
                },
                {
                  char: "ت",
                  name: "Tay",
                  ipa: "t̪",
                  target: "ta",
                  example: "تین (three)",
                  difficulty: "Easy",
                  guide: 'Dental "t"',
                },
                {
                  char: "ٹ",
                  name: "Ttay",
                  ipa: "ʈ",
                  target: "ta",
                  example: "ٹماٹر (tomato)",
                  difficulty: "Medium",
                  guide: 'Retroflex "t"',
                },
                {
                  char: "ث",
                  name: "Say",
                  ipa: "s",
                  target: "sa",
                  example: "ثواب (reward)",
                  difficulty: "Easy",
                  guide: 'Like "s" in "sun"',
                },
                {
                  char: "ج",
                  name: "Jeem",
                  ipa: "d͡ʒ",
                  target: "ja",
                  example: "جانور (animal)",
                  difficulty: "Easy",
                  guide: 'Like "j" in "jump"',
                },
                {
                  char: "چ",
                  name: "Chay",
                  ipa: "t͡ʃ",
                  target: "cha",
                  example: "چائے (tea)",
                  difficulty: "Easy",
                  guide: 'Like "ch" in "chair"',
                },
                {
                  char: "ح",
                  name: "Hay",
                  ipa: "h",
                  target: "ha",
                  example: "حال (condition)",
                  difficulty: "Easy",
                  guide: 'Soft "h" sound',
                },
                {
                  char: "خ",
                  name: "Khay",
                  ipa: "x",
                  target: "kha",
                  example: "خوشی (happiness)",
                  difficulty: "Medium",
                  guide: 'Like "ch" in German "ach"',
                },
                {
                  char: "د",
                  name: "Daal",
                  ipa: "d̪",
                  target: "da",
                  example: "دن (day)",
                  difficulty: "Easy",
                  guide: 'Dental "d"',
                },
                {
                  char: "ڈ",
                  name: "Ddaal",
                  ipa: "ɖ",
                  target: "da",
                  example: "ڈاکٹر (doctor)",
                  difficulty: "Medium",
                  guide: 'Retroflex "d"',
                },
                {
                  char: "ذ",
                  name: "Zaal",
                  ipa: "z",
                  target: "za",
                  example: "ذلیل (humble)",
                  difficulty: "Easy",
                  guide: 'Like "z" in "zoo"',
                },
                {
                  char: "ر",
                  name: "Ray",
                  ipa: "r",
                  target: "ra",
                  example: "رات (night)",
                  difficulty: "Easy",
                  guide: 'Tapped "r" sound',
                },
                {
                  char: "ڑ",
                  name: "Rray",
                  ipa: "ɽ",
                  target: "ra",
                  example: "ڑاکا (robbery)",
                  difficulty: "Medium",
                  guide: 'Retroflex flap "r"',
                },
                {
                  char: "ز",
                  name: "Zay",
                  ipa: "z",
                  target: "za",
                  example: "زمین (earth)",
                  difficulty: "Easy",
                  guide: 'Like "z" in "zoo"',
                },
                {
                  char: "ژ",
                  name: "Zhay",
                  ipa: "ʒ",
                  target: "zha",
                  example: "ژالہ (hail)",
                  difficulty: "Medium",
                  guide: 'Like "s" in "measure"',
                },
                {
                  char: "س",
                  name: "Seen",
                  ipa: "s",
                  target: "sa",
                  example: "سورج (sun)",
                  difficulty: "Easy",
                  guide: 'Like "s" in "sun"',
                },
                {
                  char: "ش",
                  name: "Sheen",
                  ipa: "ʃ",
                  target: "sha",
                  example: "شام (evening)",
                  difficulty: "Medium",
                  guide: 'Like "sh" in "shoe"',
                },
                {
                  char: "ص",
                  name: "Suad",
                  ipa: "s",
                  target: "sa",
                  example: "صبر (patience)",
                  difficulty: "Medium",
                  guide: 'Emphatic "s"',
                },
                {
                  char: "ض",
                  name: "Zuad",
                  ipa: "z",
                  target: "za",
                  example: "ضبط (control)",
                  difficulty: "Medium",
                  guide: 'Emphatic "z"',
                },
                {
                  char: "ط",
                  name: "Toay",
                  ipa: "t",
                  target: "ta",
                  example: "طاقت (power)",
                  difficulty: "Medium",
                  guide: 'Emphatic "t"',
                },
                {
                  char: "ظ",
                  name: "Zoay",
                  ipa: "z",
                  target: "za",
                  example: "ظالم (cruel)",
                  difficulty: "Medium",
                  guide: 'Emphatic "z"',
                },
                {
                  char: "ع",
                  name: "Ayn",
                  ipa: "ʔ",
                  target: "a",
                  example: "علم (knowledge)",
                  difficulty: "Hard",
                  guide: "Glottal stop",
                },
                {
                  char: "غ",
                  name: "Ghayn",
                  ipa: "ɣ",
                  target: "gha",
                  example: "غریب (poor)",
                  difficulty: "Medium",
                  guide: 'Like French "r" in "Paris"',
                },
                {
                  char: "ف",
                  name: "Fay",
                  ipa: "f",
                  target: "fa",
                  example: "فصل (season)",
                  difficulty: "Easy",
                  guide: 'Like "f" in "fish"',
                },
                {
                  char: "ق",
                  name: "Qaaf",
                  ipa: "q",
                  target: "qa",
                  example: "قلم (pen)",
                  difficulty: "Hard",
                  guide: 'Deep "k" sound from throat',
                },
                {
                  char: "ک",
                  name: "Kaaf",
                  ipa: "k",
                  target: "ka",
                  example: "کتاب (book)",
                  difficulty: "Easy",
                  guide: 'Like "k" in "kite"',
                },
                {
                  char: "گ",
                  name: "Gaaf",
                  ipa: "g",
                  target: "ga",
                  example: "گھر (house)",
                  difficulty: "Easy",
                  guide: 'Like "g" in "go"',
                },
                {
                  char: "ل",
                  name: "Laam",
                  ipa: "l",
                  target: "la",
                  example: "لڑکا (boy)",
                  difficulty: "Easy",
                  guide: 'Like "l" in "love"',
                },
                {
                  char: "م",
                  name: "Meem",
                  ipa: "m",
                  target: "ma",
                  example: "ماں (mother)",
                  difficulty: "Easy",
                  guide: 'Like "m" in "mother"',
                },
                {
                  char: "ن",
                  name: "Noon",
                  ipa: "n",
                  target: "na",
                  example: "نہیں (no)",
                  difficulty: "Easy",
                  guide: 'Like "n" in "noon"',
                },
                {
                  char: "و",
                  name: "Waow",
                  ipa: "v/w",
                  target: "va/wa",
                  example: "ورق (paper)",
                  difficulty: "Easy",
                  guide: 'Like "v" or "w" depending on word',
                },
                {
                  char: "ہ",
                  name: "Hay",
                  ipa: "h",
                  target: "ha",
                  example: "ہاتھ (hand)",
                  difficulty: "Easy",
                  guide: 'Like "h" in "house"',
                },
                {
                  char: "ھ",
                  name: "Dochashmi Hay",
                  ipa: "ʰ",
                  target: "ha",
                  example: "بھائی (brother)",
                  difficulty: "Medium",
                  guide: "Aspirated sound",
                },
                {
                  char: "ی",
                  name: "Yay",
                  ipa: "j",
                  target: "ya",
                  example: "یاد (memory)",
                  difficulty: "Easy",
                  guide: 'Like "y" in "yes"',
                },
                {
                  char: "ے",
                  name: "Bari Yay",
                  ipa: "eː",
                  target: "ay",
                  example: "کے (of)",
                  difficulty: "Easy",
                  guide: 'Long "ay" sound',
                },
              ],
            },
            french: {
              name: "French",
              locale: "fr-FR",
              letters: [
                {
                  char: "A",
                  name: "A",
                  ipa: "a",
                  target: "ah",
                  example: "ami (friend)",
                  difficulty: "Easy",
                  guide: 'Open "a" like in "father"',
                },
                {
                  char: "B",
                  name: "Bé",
                  ipa: "b",
                  target: "bay",
                  example: "bon (good)",
                  difficulty: "Easy",
                  guide: 'Same as English "b"',
                },
                {
                  char: "C",
                  name: "Cé",
                  ipa: "s/k",
                  target: "say",
                  example: "cent (hundred)",
                  difficulty: "Medium",
                  guide: '"s" before e,i; "k" elsewhere',
                },
                {
                  char: "D",
                  name: "Dé",
                  ipa: "d",
                  target: "day",
                  example: "dans (in)",
                  difficulty: "Easy",
                  guide: 'Same as English "d"',
                },
                {
                  char: "E",
                  name: "E",
                  ipa: "ə",
                  target: "uh",
                  example: "le (the)",
                  difficulty: "Medium",
                  guide: "Schwa sound, very light",
                },
                {
                  char: "F",
                  name: "Effe",
                  ipa: "f",
                  target: "eff",
                  example: "fils (son)",
                  difficulty: "Easy",
                  guide: 'Same as English "f"',
                },
                {
                  char: "G",
                  name: "Gé",
                  ipa: "ʒ/g",
                  target: "zhay",
                  example: "gens (people)",
                  difficulty: "Medium",
                  guide: '"zh" before e,i; "g" elsewhere',
                },
                {
                  char: "H",
                  name: "Hache",
                  ipa: "∅",
                  target: "ahsh",
                  example: "homme (man)",
                  difficulty: "Hard",
                  guide: "Silent in French",
                },
                {
                  char: "I",
                  name: "I",
                  ipa: "i",
                  target: "ee",
                  example: "il (he)",
                  difficulty: "Easy",
                  guide: 'Like "ee" in "see"',
                },
                {
                  char: "J",
                  name: "Ji",
                  ipa: "ʒ",
                  target: "zhee",
                  example: "je (I)",
                  difficulty: "Medium",
                  guide: 'Like "s" in "measure"',
                },
                {
                  char: "K",
                  name: "Ka",
                  ipa: "k",
                  target: "kah",
                  example: "kilo",
                  difficulty: "Easy",
                  guide: 'Same as English "k"',
                },
                {
                  char: "L",
                  name: "Elle",
                  ipa: "l",
                  target: "ell",
                  example: "la (the)",
                  difficulty: "Easy",
                  guide: 'Same as English "l"',
                },
                {
                  char: "M",
                  name: "Emme",
                  ipa: "m",
                  target: "emm",
                  example: "mère (mother)",
                  difficulty: "Easy",
                  guide: 'Same as English "m"',
                },
                {
                  char: "N",
                  name: "Enne",
                  ipa: "n",
                  target: "enn",
                  example: "non (no)",
                  difficulty: "Easy",
                  guide: 'Same as English "n"',
                },
                {
                  char: "O",
                  name: "O",
                  ipa: "o",
                  target: "oh",
                  example: "eau (water)",
                  difficulty: "Easy",
                  guide: 'Pure "o" sound',
                },
                {
                  char: "P",
                  name: "Pé",
                  ipa: "p",
                  target: "pay",
                  example: "père (father)",
                  difficulty: "Easy",
                  guide: 'Same as English "p"',
                },
                {
                  char: "Q",
                  name: "Qu",
                  ipa: "k",
                  target: "koo",
                  example: "qui (who)",
                  difficulty: "Easy",
                  guide: 'Always followed by "u"',
                },
                {
                  char: "R",
                  name: "Erre",
                  ipa: "ʁ",
                  target: "err",
                  example: "rouge (red)",
                  difficulty: "Hard",
                  guide: 'Guttural "r" from throat',
                },
                {
                  char: "S",
                  name: "Esse",
                  ipa: "s",
                  target: "ess",
                  example: "soleil (sun)",
                  difficulty: "Easy",
                  guide: 'Same as English "s"',
                },
                {
                  char: "T",
                  name: "Té",
                  ipa: "t",
                  target: "tay",
                  example: "toi (you)",
                  difficulty: "Easy",
                  guide: 'Same as English "t"',
                },
                {
                  char: "U",
                  name: "U",
                  ipa: "y",
                  target: "ew",
                  example: "sur (on)",
                  difficulty: "Hard",
                  guide: 'Purse lips like saying "ee"',
                },
                {
                  char: "V",
                  name: "Vé",
                  ipa: "v",
                  target: "vay",
                  example: "vous (you)",
                  difficulty: "Easy",
                  guide: 'Same as English "v"',
                },
                {
                  char: "W",
                  name: "Double Vé",
                  ipa: "w",
                  target: "doo-bluh-vay",
                  example: "wagon (train car)",
                  difficulty: "Easy",
                  guide: 'Same as English "w"',
                },
                {
                  char: "X",
                  name: "Ixe",
                  ipa: "ks",
                  target: "eeks",
                  example: "six (six)",
                  difficulty: "Easy",
                  guide: 'Like "x" in "box"',
                },
                {
                  char: "Y",
                  name: "I grec",
                  ipa: "i",
                  target: "ee-grek",
                  example: "yeux (eyes)",
                  difficulty: "Easy",
                  guide: 'Same as "i" sound',
                },
                {
                  char: "Z",
                  name: "Zède",
                  ipa: "z",
                  target: "zed",
                  example: "zèbre (zebra)",
                  difficulty: "Easy",
                  guide: 'Same as English "z"',
                },
                {
                  char: "É",
                  name: "E accent aigu",
                  ipa: "e",
                  target: "ay",
                  example: "été (summer)",
                  difficulty: "Medium",
                  guide: 'Like "ay" in "say"',
                },
                {
                  char: "È",
                  name: "E accent grave",
                  ipa: "ɛ",
                  target: "eh",
                  example: "père (father)",
                  difficulty: "Medium",
                  guide: 'Open "e" sound',
                },
                {
                  char: "Ê",
                  name: "E accent circonflexe",
                  ipa: "ɛ",
                  target: "eh",
                  example: "tête (head)",
                  difficulty: "Medium",
                  guide: "Same as è",
                },
                {
                  char: "Ç",
                  name: "C cédille",
                  ipa: "s",
                  target: "say",
                  example: "français (French)",
                  difficulty: "Medium",
                  guide: 'Always makes "s" sound',
                },
              ],
            },
            spanish: {
              name: "Spanish",
              locale: "es-ES",
              letters: [
                {
                  char: "A",
                  name: "A",
                  ipa: "a",
                  target: "ah",
                  example: "casa (house)",
                  difficulty: "Easy",
                  guide: 'Pure "a" sound',
                },
                {
                  char: "B",
                  name: "Be",
                  ipa: "b",
                  target: "bay",
                  example: "bueno (good)",
                  difficulty: "Easy",
                  guide: 'Softer than English "b"',
                },
                {
                  char: "C",
                  name: "Ce",
                  ipa: "k/θ",
                  target: "say",
                  example: "casa (house)",
                  difficulty: "Medium",
                  guide: '"k" or "th" depending on context',
                },
                {
                  char: "D",
                  name: "De",
                  ipa: "d",
                  target: "day",
                  example: "día (day)",
                  difficulty: "Easy",
                  guide: 'Softer than English "d"',
                },
                {
                  char: "E",
                  name: "E",
                  ipa: "e",
                  target: "eh",
                  example: "mesa (table)",
                  difficulty: "Easy",
                  guide: 'Like "e" in "bet"',
                },
                {
                  char: "F",
                  name: "Efe",
                  ipa: "f",
                  target: "eh-fay",
                  example: "familia (family)",
                  difficulty: "Easy",
                  guide: 'Same as English "f"',
                },
                {
                  char: "G",
                  name: "Ge",
                  ipa: "g/x",
                  target: "hay",
                  example: "gato (cat)",
                  difficulty: "Medium",
                  guide: '"g" or "h" sound',
                },
                {
                  char: "H",
                  name: "Hache",
                  ipa: "∅",
                  target: "ah-chay",
                  example: "hola (hello)",
                  difficulty: "Easy",
                  guide: "Always silent",
                },
                {
                  char: "I",
                  name: "I",
                  ipa: "i",
                  target: "ee",
                  example: "mí (me)",
                  difficulty: "Easy",
                  guide: 'Like "ee" in "see"',
                },
                {
                  char: "J",
                  name: "Jota",
                  ipa: "x",
                  target: "ho-tah",
                  example: "jugo (juice)",
                  difficulty: "Hard",
                  guide: 'Strong "h" sound',
                },
                {
                  char: "K",
                  name: "Ka",
                  ipa: "k",
                  target: "kah",
                  example: "kilo",
                  difficulty: "Easy",
                  guide: 'Same as English "k"',
                },
                {
                  char: "L",
                  name: "Ele",
                  ipa: "l",
                  target: "eh-lay",
                  example: "luna (moon)",
                  difficulty: "Easy",
                  guide: 'Clear "l" sound',
                },
                {
                  char: "M",
                  name: "Eme",
                  ipa: "m",
                  target: "eh-may",
                  example: "mamá (mom)",
                  difficulty: "Easy",
                  guide: 'Same as English "m"',
                },
                {
                  char: "N",
                  name: "Ene",
                  ipa: "n",
                  target: "eh-nay",
                  example: "no (no)",
                  difficulty: "Easy",
                  guide: 'Same as English "n"',
                },
                {
                  char: "Ñ",
                  name: "Eñe",
                  ipa: "ɲ",
                  target: "eh-nyay",
                  example: "año (year)",
                  difficulty: "Medium",
                  guide: 'Like "ny" in "canyon"',
                },
                {
                  char: "O",
                  name: "O",
                  ipa: "o",
                  target: "oh",
                  example: "hola (hello)",
                  difficulty: "Easy",
                  guide: 'Pure "o" sound',
                },
                {
                  char: "P",
                  name: "Pe",
                  ipa: "p",
                  target: "pay",
                  example: "papá (dad)",
                  difficulty: "Easy",
                  guide: 'Same as English "p"',
                },
                {
                  char: "Q",
                  name: "Cu",
                  ipa: "k",
                  target: "koo",
                  example: "queso (cheese)",
                  difficulty: "Easy",
                  guide: 'Always followed by "u"',
                },
                {
                  char: "R",
                  name: "Erre",
                  ipa: "ɾ",
                  target: "eh-rray",
                  example: "pero (but)",
                  difficulty: "Medium",
                  guide: 'Single flap "r"',
                },
                {
                  char: "RR",
                  name: "Doble erre",
                  ipa: "r",
                  target: "eh-rrray",
                  example: "perro (dog)",
                  difficulty: "Hard",
                  guide: 'Rolled "r" sound',
                },
                {
                  char: "S",
                  name: "Ese",
                  ipa: "s",
                  target: "eh-say",
                  example: "sol (sun)",
                  difficulty: "Easy",
                  guide: 'Same as English "s"',
                },
                {
                  char: "T",
                  name: "Te",
                  ipa: "t",
                  target: "tay",
                  example: "tú (you)",
                  difficulty: "Easy",
                  guide: 'Softer than English "t"',
                },
                {
                  char: "U",
                  name: "U",
                  ipa: "u",
                  target: "oo",
                  example: "tú (you)",
                  difficulty: "Easy",
                  guide: 'Like "oo" in "food"',
                },
                {
                  char: "V",
                  name: "Uve",
                  ipa: "b",
                  target: "oo-vay",
                  example: "vino (wine)",
                  difficulty: "Easy",
                  guide: 'Similar to "b" sound',
                },
                {
                  char: "W",
                  name: "Doble uve",
                  ipa: "w",
                  target: "doh-blay oo-vay",
                  example: "whisky",
                  difficulty: "Easy",
                  guide: 'Same as English "w"',
                },
                {
                  char: "X",
                  name: "Equis",
                  ipa: "ks",
                  target: "eh-kees",
                  example: "éxito (success)",
                  difficulty: "Easy",
                  guide: 'Like "x" in "box"',
                },
                {
                  char: "Y",
                  name: "I griega",
                  ipa: "ʝ",
                  target: "ee gree-ay-gah",
                  example: "yo (I)",
                  difficulty: "Medium",
                  guide: 'Like "y" but stronger',
                },
                {
                  char: "Z",
                  name: "Zeta",
                  ipa: "θ",
                  target: "theh-tah",
                  example: "zapato (shoe)",
                  difficulty: "Medium",
                  guide: 'Like "th" in "think"',
                },
              ],
            },
            hindi: {
              name: "Hindi",
              locale: "hi-IN",
              letters: [
                {
                  char: "अ",
                  name: "A",
                  ipa: "ə",
                  target: "a",
                  example: "अम्मा (mother)",
                  difficulty: "Easy",
                  guide: 'Short "a" sound',
                },
                {
                  char: "आ",
                  name: "Aa",
                  ipa: "aː",
                  target: "aa",
                  example: "आम (mango)",
                  difficulty: "Easy",
                  guide: 'Long "a" sound',
                },
                {
                  char: "इ",
                  name: "I",
                  ipa: "ɪ",
                  target: "i",
                  example: "इमली (tamarind)",
                  difficulty: "Easy",
                  guide: 'Short "i" sound',
                },
                {
                  char: "ई",
                  name: "Ee",
                  ipa: "iː",
                  target: "ee",
                  example: "ईद (festival)",
                  difficulty: "Easy",
                  guide: 'Long "ee" sound',
                },
                {
                  char: "उ",
                  name: "U",
                  ipa: "ʊ",
                  target: "u",
                  example: "उल्लू (owl)",
                  difficulty: "Easy",
                  guide: 'Short "u" sound',
                },
                {
                  char: "ऊ",
                  name: "Oo",
                  ipa: "uː",
                  target: "oo",
                  example: "ऊंट (camel)",
                  difficulty: "Easy",
                  guide: 'Long "oo" sound',
                },
                {
                  char: "ऋ",
                  name: "R",
                  ipa: "r̩",
                  target: "ri",
                  example: "ऋषि (sage)",
                  difficulty: "Hard",
                  guide: 'Syllabic "r" sound',
                },
                {
                  char: "ए",
                  name: "E",
                  ipa: "eː",
                  target: "ay",
                  example: "एक (one)",
                  difficulty: "Easy",
                  guide: 'Long "ay" sound',
                },
                {
                  char: "ऐ",
                  name: "Ai",
                  ipa: "ɛː",
                  target: "ai",
                  example: "ऐनक (glasses)",
                  difficulty: "Medium",
                  guide: 'Like "a" in "cat"',
                },
                {
                  char: "ओ",
                  name: "O",
                  ipa: "oː",
                  target: "o",
                  example: "ओर (direction)",
                  difficulty: "Easy",
                  guide: 'Long "o" sound',
                },
                {
                  char: "औ",
                  name: "Au",
                  ipa: "ɔː",
                  target: "au",
                  example: "औरत (woman)",
                  difficulty: "Medium",
                  guide: 'Like "aw" in "saw"',
                },
                {
                  char: "क",
                  name: "Ka",
                  ipa: "k",
                  target: "ka",
                  example: "कमल (lotus)",
                  difficulty: "Easy",
                  guide: 'Unaspirated "k"',
                },
                {
                  char: "ख",
                  name: "Kha",
                  ipa: "kʰ",
                  target: "kha",
                  example: "खेल (game)",
                  difficulty: "Medium",
                  guide: 'Aspirated "k" with puff of air',
                },
                {
                  char: "ग",
                  name: "Ga",
                  ipa: "g",
                  target: "ga",
                  example: "गाय (cow)",
                  difficulty: "Easy",
                  guide: 'Soft "g" sound',
                },
                {
                  char: "घ",
                  name: "Gha",
                  ipa: "gʱ",
                  target: "gha",
                  example: "घर (house)",
                  difficulty: "Medium",
                  guide: 'Aspirated "g"',
                },
                {
                  char: "ङ",
                  name: "Nga",
                  ipa: "ŋ",
                  target: "nga",
                  example: "अंगूर (grape)",
                  difficulty: "Hard",
                  guide: 'Like "ng" in "sing"',
                },
                {
                  char: "च",
                  name: "Cha",
                  ipa: "t͡ʃ",
                  target: "cha",
                  example: "चाय (tea)",
                  difficulty: "Easy",
                  guide: 'Like "ch" in "chair"',
                },
                {
                  char: "छ",
                  name: "Chha",
                  ipa: "t͡ʃʰ",
                  target: "chha",
                  example: "छत (roof)",
                  difficulty: "Medium",
                  guide: 'Aspirated "ch"',
                },
                {
                  char: "ज",
                  name: "Ja",
                  ipa: "d͡ʒ",
                  target: "ja",
                  example: "जल (water)",
                  difficulty: "Easy",
                  guide: 'Like "j" in "jump"',
                },
                {
                  char: "झ",
                  name: "Jha",
                  ipa: "d͡ʒʱ",
                  target: "jha",
                  example: "झंडा (flag)",
                  difficulty: "Medium",
                  guide: 'Aspirated "j"',
                },
                {
                  char: "ञ",
                  name: "Nya",
                  ipa: "ɲ",
                  target: "nya",
                  example: "पंच (five)",
                  difficulty: "Hard",
                  guide: 'Like "ny" in "canyon"',
                },
                {
                  char: "ट",
                  name: "Ta",
                  ipa: "ʈ",
                  target: "ta",
                  example: "टमाटर (tomato)",
                  difficulty: "Medium",
                  guide: 'Retroflex "t"',
                },
                {
                  char: "ठ",
                  name: "Tha",
                  ipa: "ʈʰ",
                  target: "tha",
                  example: "ठंड (cold)",
                  difficulty: "Medium",
                  guide: 'Aspirated retroflex "t"',
                },
                {
                  char: "ड",
                  name: "Da",
                  ipa: "ɖ",
                  target: "da",
                  example: "डाल (branch)",
                  difficulty: "Medium",
                  guide: 'Retroflex "d"',
                },
                {
                  char: "ढ",
                  name: "Dha",
                  ipa: "ɖʱ",
                  target: "dha",
                  example: "ढक्कन (lid)",
                  difficulty: "Medium",
                  guide: 'Aspirated retroflex "d"',
                },
                {
                  char: "ण",
                  name: "Na",
                  ipa: "ɳ",
                  target: "na",
                  example: "गणेश (Ganesh)",
                  difficulty: "Hard",
                  guide: 'Retroflex "n"',
                },
                {
                  char: "त",
                  name: "Ta",
                  ipa: "t̪",
                  target: "ta",
                  example: "तारा (star)",
                  difficulty: "Easy",
                  guide: 'Dental "t"',
                },
                {
                  char: "थ",
                  name: "Tha",
                  ipa: "t̪ʰ",
                  target: "tha",
                  example: "थाली (plate)",
                  difficulty: "Medium",
                  guide: 'Aspirated dental "t"',
                },
                {
                  char: "द",
                  name: "Da",
                  ipa: "d̪",
                  target: "da",
                  example: "दरवाजा (door)",
                  difficulty: "Easy",
                  guide: 'Dental "d"',
                },
                {
                  char: "ध",
                  name: "Dha",
                  ipa: "d̪ʱ",
                  target: "dha",
                  example: "धन (wealth)",
                  difficulty: "Medium",
                  guide: 'Aspirated dental "d"',
                },
                {
                  char: "न",
                  name: "Na",
                  ipa: "n",
                  target: "na",
                  example: "नमक (salt)",
                  difficulty: "Easy",
                  guide: 'Dental "n"',
                },
                {
                  char: "प",
                  name: "Pa",
                  ipa: "p",
                  target: "pa",
                  example: "पानी (water)",
                  difficulty: "Easy",
                  guide: 'Unaspirated "p"',
                },
                {
                  char: "फ",
                  name: "Pha",
                  ipa: "pʰ",
                  target: "pha",
                  example: "फल (fruit)",
                  difficulty: "Medium",
                  guide: 'Aspirated "p"',
                },
                {
                  char: "ब",
                  name: "Ba",
                  ipa: "b",
                  target: "ba",
                  example: "बच्चा (child)",
                  difficulty: "Easy",
                  guide: 'Soft "b" sound',
                },
                {
                  char: "भ",
                  name: "Bha",
                  ipa: "bʱ",
                  target: "bha",
                  example: "भालू (bear)",
                  difficulty: "Medium",
                  guide: 'Aspirated "b"',
                },
                {
                  char: "म",
                  name: "Ma",
                  ipa: "m",
                  target: "ma",
                  example: "मक्खी (fly)",
                  difficulty: "Easy",
                  guide: '"m" as in "man"',
                },
                {
                  char: "य",
                  name: "Ya",
                  ipa: "j",
                  target: "ya",
                  example: "यात्रा (journey)",
                  difficulty: "Medium",
                  guide: '"y" as in "yes"',
                },
                {
                  char: "र",
                  name: "Ra",
                  ipa: "r",
                  target: "ra",
                  example: "रोटी (bread)",
                  difficulty: "Medium",
                  guide: 'Tapped/flap "r"',
                },
                {
                  char: "ल",
                  name: "La",
                  ipa: "l",
                  target: "la",
                  example: "लड्डू (sweet)",
                  difficulty: "Easy",
                  guide: '"l" as in "love"',
                },
                {
                  char: "व",
                  name: "Va",
                  ipa: "ʋ",
                  target: "va",
                  example: "वृद्ध (elder)",
                  difficulty: "Hard",
                  guide: 'Between "v" and "w"',
                },
                {
                  char: "श",
                  name: "Sha",
                  ipa: "ʃ",
                  target: "sha",
                  example: "शेर (lion)",
                  difficulty: "Medium",
                  guide: '"sh" as in "shoe"',
                },
                {
                  char: "ष",
                  name: "Ṣha",
                  ipa: "ʂ",
                  target: "ṣha",
                  example: "षड्यंत्र (conspiracy)",
                  difficulty: "Hard",
                  guide: 'Retroflex "sh"',
                },
                {
                  char: "स",
                  name: "Sa",
                  ipa: "s",
                  target: "sa",
                  example: "सपना (dream)",
                  difficulty: "Easy",
                  guide: '"s" as in "sun"',
                },
                {
                  char: "ह",
                  name: "Ha",
                  ipa: "ɦ",
                  target: "ha",
                  example: "हाथी (elephant)",
                  difficulty: "Easy",
                  guide: '"h" as in "hat"',
                },
              ],
            },
          };

          // App state
          let currentLanguage = "arabic";
          let selectedLetter = null;
          let mediaRecorder = null;
          let audioChunks = [];
          let recognition = null;
          let isRecording = false;

          // DOM elements
          const langButtons = document.querySelectorAll(".lang-btn");
          const languagePages = document.querySelectorAll(".language-page");
          const practiceSection = document.getElementById("practice-section");
          const recordBtn = document.getElementById("record-btn");
          const playExampleBtn = document.getElementById("play-example-btn");
          const feedbackSection = document.getElementById("feedback-section");
          const pronunciationGuide = document.getElementById(
            "pronunciation-guide"
          );

          // Initialize the application
          function initApp() {
            setupLanguageNavigation();
            setupSpeechRecognition();
            loadLanguageLetters();
            setupEventListeners();
            loadQuranFromExcel("Dataset-Verse-by-Verse.xlsx");
          }

          // Setup language navigation
          function setupLanguageNavigation() {
            langButtons.forEach((btn) => {
              btn.addEventListener("click", () => {
                const lang = btn.dataset.lang;
                switchLanguage(lang);
              });
            });
          }

          // Switch between languages
          function switchLanguage(lang) {
            currentLanguage = lang;
            selectedLetter = null;

            // Update navigation
            langButtons.forEach((btn) => {
              btn.classList.toggle("active", btn.dataset.lang === lang);
            });

            // Update pages
            languagePages.forEach((page) => {
              page.classList.toggle("active", page.id === `${lang}-page`);
            });

            // Reset practice section (optional)
            resetPracticeSection();

            // Load letters only if available
            loadLanguageLetters();
          }

          // Load letters for current language
          function loadLanguageLetters() {
            const grid = document.getElementById(`${currentLanguage}-grid`);
            if (!grid) return;

            grid.innerHTML = "";
            const letters = languageData[currentLanguage].letters;

            letters.forEach((letter) => {
              const card = createLetterCard(letter);
              grid.appendChild(card);
            });
          }

          // Create letter card element
          function createLetterCard(letter) {
            const card = document.createElement("div");
            card.className = "letter-card";
            card.innerHTML = `
                        <span class="letter-char">${letter.char}</span>
                        <span class="letter-name">${letter.name}</span>
                    `;

            card.addEventListener("click", () => selectLetter(letter));
            return card;
          }

          // Select a letter for practice
          function selectLetter(letter) {
            selectedLetter = letter;

            // Update UI
            document.querySelectorAll(".letter-card").forEach((card) => {
              card.classList.remove("active");
            });
            event.target.closest(".letter-card").classList.add("active");

            // Update practice section
            document.getElementById("selected-char").textContent = letter.char;
            document.getElementById("selected-name").textContent = letter.name;
            document.getElementById(
              "selected-description"
            ).textContent = `Practice pronouncing ${letter.name}`;

            // Show pronunciation guide
            showPronunciationGuide(letter);

            // Hide feedback
            feedbackSection.classList.add("hidden");
          }

          // Show pronunciation guide
          function showPronunciationGuide(letter) {
            document.getElementById(
              "ipa-symbol"
            ).textContent = `/${letter.ipa}/`;
            document.getElementById("example-word").textContent =
              letter.example;
            document.getElementById("target-sound").textContent = letter.target;
            document.getElementById("difficulty-level").textContent =
              letter.difficulty;
            document.getElementById("pronunciation-instructions").textContent =
              letter.guide;

            pronunciationGuide.classList.remove("hidden");
          }

          // Setup speech recognition
          // In the setupSpeechRecognition function, modify the recognition configuration:
function setupSpeechRecognition() {
    if (!("SpeechRecognition" in window) && !("webkitSpeechRecognition" in window)) {
      showError("Speech recognition not supported in your browser. Try Chrome or Edge.");
      return;
    }
  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    
    // Set Arabic as default language but allow it to be overridden
    recognition.lang = 'ar-SA'; // Default to Arabic
  
    recognition.onresult = (event) => {
      const results = Array.from(event.results[0]);
      console.log("Raw recognition results:", results);
  
      const alternatives = results.map((result) => ({
        text: result.transcript.trim(),
        confidence: result.confidence,
      }));
  
      analyzePronunciation(alternatives);
    };
  
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      let errorMsg = "Recognition error: ";
      switch (event.error) {
        case "no-speech":
          errorMsg += "No speech detected. Try again.";
          break;
        case "audio-capture":
          errorMsg += "Microphone not available. Check permissions.";
          break;
        case "not-allowed":
          errorMsg += "Microphone access denied. Please enable permissions.";
          break;
        default:
          errorMsg += "Please try again.";
      }
      showError(errorMsg);
      stopRecording();
    };
  
    recognition.onend = () => {
      if (isRecording) {
        setTimeout(() => recognition.start(), 100);
      }
    };
  }
  
  // Modify the startRecording function (remove the duplicate):
  function startRecording() {
    if (!selectedLetter) {
      showError("Please select a letter or ayah first");
      return;
    }
  
    // Set the appropriate language for recognition
    if (currentLanguage === "Quran") {
      recognition.lang = 'ar-SA'; // Arabic for Quran
    } else {
      recognition.lang = languageData[currentLanguage].locale;
    }
  
    isRecording = true;
    recordBtn.textContent = "🔴 Recording...";
    recordBtn.classList.add("recording");
  
    try {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          console.log("✅ Microphone access granted.");
        })
        .catch((err) => {
          console.error("❌ Microphone access denied:", err);
          showError("Microphone access denied: " + err.message);
        });
      recognition.start();
    } catch (err) {
      console.error("SpeechRecognition failed to start:", err);
      showError("Failed to start recording: " + err.message);
      stopRecording();
    }
  
    feedbackSection.classList.add("hidden");
  }
  
  // Enhance the ayah selection handling:
  document.querySelectorAll(".ayah").forEach((div) => {
    div.addEventListener("click", function() {
      // Deselect other ayahs
      document.querySelectorAll(".ayah").forEach((d) => d.classList.remove("active"));
      div.classList.add("active");
  
      const ayahText = div.innerText.replace("🔊", "").trim();
      
      // Set current language to Quran
      currentLanguage = "Quran";
      
      selectedLetter = {
        char: ayahText,
        name: "Quran Ayah",
        target: ayahText,
        ipa: "",
        difficulty: "Medium",
        guide: "Recite this verse clearly and slowly",
        example: "Quran verse",
      };
  
      document.getElementById("selected-char").textContent = selectedLetter.char;
      document.getElementById("selected-name").textContent = "Selected Ayah";
      document.getElementById("selected-description").textContent = "Recite this verse aloud for feedback";
  
      // Hide pronunciation guide for Quran verses
      document.getElementById("pronunciation-guide").classList.add("hidden");
      
      // Update language button to show Quran as active
      document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.lang === "Quran") {
          btn.classList.add("active");
        }
      });
    });
  });
  
  // Enhance the analyzePronunciation function to handle Quran verses:
  function analyzePronunciation(alternatives) {
    if (!selectedLetter) return;
  
    const target = selectedLetter.target;
    let bestMatch = { text: "", confidence: 0, score: 0 };
  
    // For Quran verses, we need to handle Arabic text comparison differently
    if (currentLanguage === "Quran") {
      // Simple comparison for Quran verses (could be enhanced with more sophisticated Arabic text comparison)
      alternatives.forEach((alt) => {
        // Basic comparison - in a real app you'd want more sophisticated Arabic text comparison
        const score = alt.text.includes(target) || target.includes(alt.text) ? 0.8 : 0.3;
        const weightedScore = score * 0.7 + alt.confidence * 0.3;
  
        if (weightedScore > bestMatch.score) {
          bestMatch = {
            text: alt.text,
            confidence: alt.confidence,
            score: weightedScore,
          };
        }
      });
    } else {
      // Existing letter comparison logic for other languages
      alternatives.forEach((alt) => {
        const score = calculateMatchScore(alt.text, target);
        const weightedScore = score * 0.7 + alt.confidence * 0.3;
  
        if (weightedScore > bestMatch.score) {
          bestMatch = {
            text: alt.text,
            confidence: alt.confidence,
            score: weightedScore,
          };
        }
      });
    }
  
    const finalScore = Math.min(100, Math.floor(bestMatch.score * 100));
    showFeedback(bestMatch.text, target, finalScore);
  }

  function loadQuranFromExcel(fileUrl) {
    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const verses = XLSX.utils.sheet_to_json(sheet);
  
        const surahMap = {};
        verses.forEach((v) => {
          if (!surahMap[v.SurahName]) surahMap[v.SurahName] = [];
          surahMap[v.SurahName].push(v);
        });
  
        const surahList = document.getElementById("surah-list");
        surahList.innerHTML = "";
  
        Object.keys(surahMap).forEach((surahName) => {
          const item = document.createElement("div");
          item.className = "surah-item";
          item.textContent = surahName;
          item.onclick = () => {
            document
              .querySelectorAll(".surah-item")
              .forEach((el) => el.classList.remove("active"));
            item.classList.add("active");
  
            const ayahList = document.getElementById("ayah-list");
            ayahList.innerHTML = "";
  
            surahMap[surahName].forEach((ayah) => {
              const div = document.createElement("div");
              div.className = "ayah";
              div.setAttribute("data-audio", ayah.AudioURL || "");
              div.innerHTML = `
                <button onclick="playAyah(this)">🔊</button>
                ${ayah.Text}
              `;
              ayahList.appendChild(div);
            });
          };
          surahList.appendChild(item);
        });
      });
  }
  
          // Handle speech recognition result
          function handleSpeechResult(event) {
            const results = Array.from(event.results[0]);
            const transcript = results[0].transcript.trim().toLowerCase();
            const confidence = results[0].confidence;

            const alternatives = results.map((result) => ({
              text: result.transcript.trim().toLowerCase(),
              confidence: result.confidence,
            }));

            // 👉 Debug logs — add this
            console.log("Spoken transcript:", transcript);
            console.log("Expected target:", selectedLetter.target);
            console.log("Confidence:", confidence);
            console.log("Alternatives:", alternatives);

            analyzePronunciation(transcript, confidence, alternatives);
          }

          // Handle speech recognition error
          function handleSpeechError(event) {
            console.error("Speech recognition error:", event.error);
            stopRecording();
            showError("Recognition failed. Please try again.");
          }

          // Handle speech recognition end
          function handleSpeechEnd() {
            if (isRecording) {
              stopRecording();
            }
          }

          // Start recording
          function startRecording() {
            if (!selectedLetter) {
              showError("Please select a letter first");
              return;
            }

            isRecording = true;
            recordBtn.textContent = "🔴 Recording...";
            recordBtn.classList.add("recording");

            try {
              recognition.lang = languageData[currentLanguage].locale;
              console.log("Starting recognition with lang:", recognition.lang);
              navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                  console.log("✅ Microphone access granted.");
                  // Optional: attach stream to audio element to verify it's working
                })
                .catch((err) => {
                  console.error("❌ Microphone access denied:", err);
                  showError("Microphone access denied: " + err.message);
                });
              recognition.start();
            } catch (err) {
              console.error("SpeechRecognition failed to start:", err);
            }
            if (!selectedLetter) {
              showError("Please select a letter first");
              return;
            }

            isRecording = true;
            recordBtn.textContent = "🔴 Recording...";
            recordBtn.classList.add("recording");

            try {
              recognition.lang = languageData[currentLanguage].locale;
              console.log("Starting recognition with lang:", recognition.lang);
              navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                  console.log("✅ Microphone access granted.");
                  // Optional: attach stream to audio element to verify it's working
                })
                .catch((err) => {
                  console.error("❌ Microphone access denied:", err);
                  showError("Microphone access denied: " + err.message);
                });
              recognition.start();
            } catch (err) {
              console.error("SpeechRecognition failed to start:", err);
            }

            feedbackSection.classList.add("hidden");
          }

          // Stop recording
          function stopRecording() {
            isRecording = false;
            recordBtn.textContent = "🎤 Start Recording";
            recordBtn.classList.remove("recording");

            if (recognition) {
              recognition.stop();
            }
          }

          // Analyze pronunciation
          function analyzePronunciation(alternatives) {
            if (!selectedLetter) return;

            const target = selectedLetter.target.toLowerCase();
            let bestMatch = { text: "", confidence: 0, score: 0 };

            // Evaluate all alternatives
            alternatives.forEach((alt) => {
              const score = calculateMatchScore(alt.text, target);
              const weightedScore = score * 0.7 + alt.confidence * 0.3;

              if (weightedScore > bestMatch.score) {
                bestMatch = {
                  text: alt.text,
                  confidence: alt.confidence,
                  score: weightedScore,
                };
              }
            });

            // Final score calculation (0-100)
            const finalScore = Math.min(100, Math.floor(bestMatch.score * 100));

            // Enhanced feedback
            showFeedback(bestMatch.text, target, finalScore);

            // Debug output
            console.log(
              "Best match:",
              bestMatch.text,
              "Target:",
              target,
              "Score:",
              finalScore
            );
          }

          // Calculate match score between spoken and target
          function calculateMatchScore(spoken, target) {
            spoken = spoken.trim().toLowerCase();
            target = target.trim().toLowerCase();

            // Normalize Arabic script versions of target if available
            const scriptMaps = {
              arabic: {
                ba: "با",
                ta: "تا",
                tha: "ثا",
                ka: "كا",
                da: "دا",
                ja: "جا",
                ra: "را",
                sa: "سا",
                ha: "ها",
                kha: "خا",
                fa: "فا",
                qa: "قا",
                la: "لا",
                ma: "ما",
                na: "نا",
                haa: "حا",
                ain: "عا",
                ghain: "غا",
                waw: "وا",
                ya: "يا",
                hamza: "أ",
                al: "ال",
                wa: "و",
                min: "من",
                ila: "إلى",
                fi: "في",
                an: "أن",
                in: "إن",
                illaa: "إلا",
                dh: "ذ",
                za: "زا",
                sheen: "شا",
                sad: "صا",
                dad: "ضا",
                taa: "طا",
                ayn: "عا",
                dha: "ظا",
                noon: "نا",
                meem: "ما",
                heh: "ها",
                yeh: "يا",
                walad: "ولد",
                bint: "بنت",
                kitab: "كتاب",
                qalam: "قلم",
                bayt: "بيت",
                shams: "شمس",
                qamar: "قمر",
              },
              urdu: {
                alif: "ا",
                bay: "ب",
                pay: "پ",
                tay: "ت",
                "tay-heavy": "ٹ",
                say: "ث",
                jeem: "ج",
                chay: "چ",
                hay: "ح",
                khay: "خ",
                daal: "د",
                "daal-heavy": "ڈ",
                zaal: "ذ",
                ray: "ر",
                "ray-heavy": "ڑ",
                zay: "ز",
                zhay: "ژ",
                seen: "س",
                sheen: "ش",
                suad: "ص",
                zuad: "ض",
                toay: "ط",
                zoay: "ظ",
                ain: "ع",
                ghain: "غ",
                fay: "ف",
                qaaf: "ق",
                kaaf: "ک",
                gaaf: "گ",
                laam: "ل",
                meem: "م",
                noon: "ن",
                waw: "و",
                "hay-gol": "ہ",
                hamza: "ء",
                "choti-yay": "ی",
                "bari-yay": "ے",
                aadmi: "آدمی",
                aurat: "عورت",
                bacha: "بچہ",
                ghar: "گھر",
                kitab: "کتاب",
                qalam: "قلم",
                dost: "دوست",
                pani: "پانی",
                roti: "روٹی",
                safar: "سفر",
                school: "اسکول",
                shukriya: "شکریہ",
                khana: "کھانا",
                pyar: "پیار",
                duniya: "دنیا",
                zindagi: "زندگی",
                waqt: "وقت",
                sach: "سچ",
                jhoot: "جھوٹ",
                deewar: "دیوار",
                "kaise ho": "کیسے ہو",
                "mujhe jaana hai": "مجھے جانا ہے",
                "shabba khair": "شب بخیر",
                "allah hafiz": "اللہ حافظ",
                "mera naam hai": "میرا نام ہے",
                "aap ka shukriya": "آپ کا شکریہ",
                "kitne baje hain": "کتنے بجے ہیں",
              },
            };

            // Get all possible target representations
            const targets = [
              target,
              scriptMaps.arabic[target] || "",
              scriptMaps.urdu[target] || "",
            ].filter((t) => t); // Remove empty strings

            // Check for exact match
            if (targets.some((t) => spoken === t)) return 1.0;

            // Check for partial matches
            const partialMatch = targets.some(
              (t) => spoken.includes(t) || t.includes(spoken)
            );
            if (partialMatch) return 0.8;

            // Check for phonetic similarity using Levenshtein distance
            const minDistance = Math.min(
              ...targets.map((t) => levenshteinDistance(spoken, t))
            );

            // Normalize distance to score (0-0.6 range)
            const maxLength = Math.max(
              spoken.length,
              ...targets.map((t) => t.length)
            );
            const similarityScore = 0.6 * (1 - minDistance / maxLength);

            return Math.max(similarityScore, 0.1); // Ensure minimum score
          }

          function levenshteinDistance(a, b) {
            const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
              Array(b.length + 1).fill(0)
            );

            for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
            for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

            for (let i = 1; i <= a.length; i++) {
              for (let j = 1; j <= b.length; j++) {
                if (a[i - 1] === b[j - 1]) {
                  matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                  matrix[i][j] =
                    1 +
                    Math.min(
                      matrix[i - 1][j], // deletion
                      matrix[i][j - 1], // insertion
                      matrix[i - 1][j - 1] // substitution
                    );
                }
              }
            }

            return matrix[a.length][b.length];
          }

          // Get similar sounds for each language
          function getSimilarSounds(language) {
            const similarities = {
              arabic: {
                ha: ["ah", "kha"],
                tha: ["sa", "fa"],
                kha: ["ha", "ga"],
              },
              urdu: {
                kha: ["ga", "ha"],
                gha: ["ga", "da"],
              },
              french: {
                zhee: ["jee", "zee"],
                zhay: ["gay", "jay"],
              },
              spanish: {
                rr: ["r", "l"],
                ny: ["ni", "nee"],
              },
              hindi: {
                kha: ["ka", "ga"],
                gha: ["ga", "ka"],
              },
            };

            return similarities[language] || {};
          }

          // Show feedback to user
          function showFeedback(spoken, target, score) {
            // Update accuracy display
            document.getElementById("accuracy-score").textContent = `${score}%`;

            // Generate feedback cards
            const feedbackHTML = generateFeedbackCards(spoken, target, score);
            document.getElementById("feedback-details").innerHTML =
              feedbackHTML;

            // Show feedback section
            feedbackSection.classList.remove("hidden");

            // Scroll to feedback
            feedbackSection.scrollIntoView({ behavior: "smooth" });
          }
          function playAyah(button) {
            const ayahDiv = button.closest(".ayah");
            const audioUrl = ayahDiv.dataset.audio;
            const audio = new Audio(audioUrl);
            audio.play();
          }

          document.querySelectorAll(".ayah").forEach((div) => {
            div.addEventListener("click", () => {
              // Deselect other ayahs
              document
                .querySelectorAll(".ayah")
                .forEach((d) => d.classList.remove("active"));
              div.classList.add("active");

              const ayahText = div.innerText.replace("🔊", "").trim();

              selectedLetter = {
                char: ayahText,
                name: "Quran Ayah",
                target: ayahText,
                ipa: "",
                difficulty: "",
                guide: "",
                example: "",
              };

              document.getElementById("selected-char").textContent =
                selectedLetter.char;
              document.getElementById("selected-name").textContent =
                "Selected Ayah";
              document.getElementById("selected-description").textContent =
                "Recite this verse aloud for feedback";

              document
                .getElementById("pronunciation-guide")
                .classList.add("hidden");
            });
          });

          // Generate feedback cards
          function generateFeedbackCards(spoken, target, score) {
            let cards = "";

            // Overall assessment
            if (score >= 80) {
              cards += createFeedbackCard(
                "success",
                "✅",
                "Excellent!",
                `Great pronunciation of ${selectedLetter.char}`
              );
            } else if (score >= 60) {
              cards += createFeedbackCard(
                "warning",
                "⚠️",
                "Good Progress",
                "Getting closer, keep practicing!"
              );
            } else {
              cards += createFeedbackCard(
                "error",
                "❌",
                "Needs Work",
                "Let's focus on the correct sound"
              );
            }

            // What you said vs target
            cards += createFeedbackCard(
              "",
              "🎯",
              "Comparison",
              `You said: "${spoken}" | Target: "${target}"`
            );

            // Language-specific tips
            cards += createFeedbackCard(
              "",
              "💡",
              "Tip",
              getLanguageSpecificTip()
            );

            return cards;
          }

          // Create individual feedback card
          function createFeedbackCard(type, icon, title, content) {
            return `
                        <div class="feedback-card ${type}">
                            <div class="feedback-icon">${icon}</div>
                            <h4>${title}</h4>
                            <p>${content}</p>
                        </div>
                    `;
          }

          // Get language-specific pronunciation tip
          function getLanguageSpecificTip() {
            const tips = {
              arabic:
                "Focus on throat sounds - Arabic has many sounds made deep in the throat",
              urdu: "Pay attention to retroflex sounds - curl your tongue back",
              french:
                "French has nasal sounds - let air flow through your nose",
              spanish:
                "Spanish sounds are crisp and clear - avoid English-style vowel shifts",
              hindi: "Distinguish between aspirated and unaspirated sounds",
            };

            return tips[currentLanguage] || "Practice makes perfect!";
          }

          // Play example audio (placeholder - would need real audio files)
          function playExample() {
            if (!selectedLetter) {
              showError("Please select a letter first");
              return;
            }

            // This would play actual audio in a real implementation
            showInfo(
              `Playing example for ${selectedLetter.char} - "${selectedLetter.target}"`
            );
          }

          // Reset practice section
          function resetPracticeSection() {
            document.getElementById("selected-char").textContent =
              "Select a letter";
            document.getElementById("selected-name").textContent =
              "Choose a letter to practice";
            document.getElementById("selected-description").textContent =
              "Click on any letter above to start practicing";
            pronunciationGuide.classList.add("hidden");
            feedbackSection.classList.add("hidden");
          }

          // Show error message
          function showError(message) {
            // Simple alert for now - could be enhanced with toast notifications
            alert("Error: " + message);
          }

          // Show info message
          function showInfo(message) {
            // Simple alert for now - could be enhanced with toast notifications
            alert("Info: " + message);
          }

          // Setup event listeners
          function setupEventListeners() {
            recordBtn.addEventListener("click", () => {
              if (isRecording) {
                stopRecording();
              } else {
                startRecording();
              }
            });

            playExampleBtn.addEventListener("click", playExample);
          }

          // Initialize app when DOM is loaded
          document.addEventListener("DOMContentLoaded", initApp);