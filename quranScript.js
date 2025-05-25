
      const surahNumberMap = {};
      let quranData = {};

      // CSV data embedded (first few rows for demo)
      const csvData = `surah_no,surah_name_en,surah_name_ar,surah_name_roman,ayah_no_surah,ayah_no_quran,ayah_ar,ayah_en,ruko_no,juz_no,manzil_no,hizb_quarter,total_ayah_surah,total_ayah_quran,place_of_revelation,sajah_ayah,sajdah_no,no_of_word_ayah,list_of_words
1,The Opener,الفاتحة,Al-Fatihah,1,1,بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ,"In the Name of Allah—the Most Compassionate, Most Merciful.",1,1,1,1,7,6236,Meccan,FALSE,NA,4,"[بِسْمِ,ٱللَّهِ,ٱلرَّحْمَٰنِ,ٱلرَّحِيمِ]"
1,The Opener,الفاتحة,Al-Fatihah,2,2,ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ,"All praise is for Allah—Lord of all worlds,",1,1,1,1,7,6236,Meccan,FALSE,NA,4,"[ٱلْحَمْدُ,لِلَّهِ,رَبِّ,ٱلْعَٰلَمِينَ]"
1,The Opener,الفاتحة,Al-Fatihah,3,3,ٱلرَّحْمَٰنِ ٱلرَّحِيمِ,"the Most Compassionate, Most Merciful,",1,1,1,1,7,6236,Meccan,FALSE,NA,2,"[ٱلرَّحْمَٰنِ,ٱلرَّحِيمِ]"
1,The Opener,الفاتحة,Al-Fatihah,4,4,مَٰلِكِ يَوْمِ ٱلدِّينِ,Master of the Day of Judgment.,1,1,1,1,7,6236,Meccan,FALSE,NA,3,"[مَٰلِكِ,يَوْمِ,ٱلدِّينِ]"
1,The Opener,الفاتحة,Al-Fatihah,5,5,إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ,You ˹alone˺ we worship and You ˹alone˺ we ask for help.,1,1,1,1,7,6236,Meccan,FALSE,NA,4,"[إِيَّاكَ,نَعْبُدُ,وَإِيَّاكَ,نَسْتَعِينُ]"
1,The Opener,الفاتحة,Al-Fatihah,6,6,ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ,"Guide us along the Straight Path,",1,1,1,1,7,6236,Meccan,FALSE,NA,3,"[ٱهْدِنَا,ٱلصِّرَٰطَ,ٱلْمُسْتَقِيمَ]"
1,The Opener,الفاتحة,Al-Fatihah,7,7,صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ,"the Path of those You have blessed—not those You are displeased with, or those who are astray.",1,1,1,1,7,6236,Meccan,FALSE,NA,9,"[صِرَٰطَ,ٱلَّذِينَ,أَنْعَمْتَ,عَلَيْهِمْ,غَيْرِ,ٱلْمَغْضُوبِ,عَلَيْهِمْ,وَلَا,ٱلضَّآلِّينَ]"
2,The Cow,البقرة,Al-Baqarah,1,8,الم,Alif-Laam-Meem.,2,1,1,1,286,6236,Medinan,FALSE,NA,1,"[الم]"
2,The Cow,البقرة,Al-Baqarah,2,9,ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ,"This is the Book! There is no doubt about it—a guide for those mindful ˹of Allah˺,",2,1,1,1,286,6236,Medinan,FALSE,NA,6,"[ذَٰلِكَ,ٱلْكِتَٰبُ,لَا,رَيْبَ,فِيهِ,هُدًى,لِّلْمُتَّقِينَ]"
2,The Cow,البقرة,Al-Baqarah,3,10,ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ,"who believe in the unseen, establish prayer, and donate from what We have provided for them,",2,1,1,1,286,6236,Medinan,FALSE,NA,9,"[ٱلَّذِينَ,يُؤْمِنُونَ,بِٱلْغَيْبِ,وَيُقِيمُونَ,ٱلصَّلَوٰةَ,وَمِمَّا,رَزَقْنَٰهُمْ,يُنفِقُونَ]"`;

function loadQuranData(fileUrl = "The Quran Dataset.csv") {
  Papa.parse(fileUrl, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      const data = results.data;
      const surahMap = {};

            data.forEach((row) => {
              const surahNo = parseInt(row["surah_no"]);
              const ayahNo = parseInt(row["ayah_no_surah"]);
              const surahNameEn = row["surah_name_en"]?.trim() || "";
              const surahNameAr = row["surah_name_ar"]?.trim() || "";
              const ayahArabic = row["ayah_ar"]?.trim() || "";
              const ayahEnglish = row["ayah_en"]?.trim() || "";
              const listOfWords = row["list_of_words"]?.trim() || "";

              if (!surahNo || !ayahNo || !surahNameEn || !ayahArabic) return;

              const place = row["place_of_revelation"]?.trim() || "";
const placeIcon = place.toLowerCase() === "meccan" ? "🕋" : "🕌";
              const surahDisplayName = `${placeIcon} ${surahNo}. ${surahNameEn} (${surahNameAr})`;

              if (!surahMap[surahDisplayName]) {
                surahMap[surahDisplayName] = [];
                surahNumberMap[surahDisplayName] = surahNo;
              }

              // Parse words from the list_of_words column
              let words = [];
              try {
                if (listOfWords && listOfWords !== 'NA') {
                  const cleanWords = listOfWords.replace(/[\[\]]/g, '');
                  words = cleanWords.split(',').map(w => w.trim());
                }
              } catch (e) {
                words = ayahArabic.split(' ');
              }

              if (words.length === 0) {
                words = ayahArabic.split(' ');
              }

              surahMap[surahDisplayName].push({
                surahNo,
                ayahNo,
                ayahArabic,
                ayahEnglish,
                words
              });
            });

            quranData = surahMap;
            renderSurahList();
            console.log("✅ Quran data loaded successfully");
          },
          error: function (err) {
            console.error("❌ Failed to parse CSV:", err);
          }
        });
      }

      function renderSurahList() {
        const surahList = document.getElementById("surah-list");
        surahList.innerHTML = "";

        Object.keys(quranData).forEach((surahName) => {
          const button = document.createElement("button");
          button.className = "surah-item";
          button.textContent = surahName;
          button.onclick = () => {
            document.querySelectorAll(".surah-item").forEach((el) => el.classList.remove("active"));
            button.classList.add("active");
            renderAyahs(surahName, quranData[surahName]);
          };
          surahList.appendChild(button);
        });
      }

//       function renderAyahs(surahName, ayahs) {
//         const container = document.getElementById("ayah-list");
//         container.innerHTML = "";

//         ayahs.forEach((ayah, index) => {
//           const div = document.createElement("div");
//           div.className = "ayah";
//           div.setAttribute("id", `ayah-${index}`);

//           const words = ayah.words.map((word, i) => `
//             <span class="ayah-word" id="ayah-${index}-word-${i}" data-word="${word}">
//               ${word}
//               <div class="accuracy" id="acc-${index}-${i}"></div>
//             </span>
//           `).join(" ");

//           div.innerHTML = `
//             <div class="ayah-controls">
//   <button class="control-btn play-btn" onclick="playQuranAudio(${ayah.surahNo}, ${ayah.ayahNo}, this)">🔊 Play</button>
//   <button class="control-btn record-btn" id="record-btn-${index}" onclick="startWordByWordRecognition('ayah-${index}', ${JSON.stringify(ayah.words).replace(/"/g, '&quot;')}, this)">🎤 Record</button>
// </div>
//             <div class="ayah-content">
//   <span class="ayah-number">${ayah.ayahNo}</span>
//   <div class="ayah-text">${words}</div>
//   <div class="ayah-english">${ayah.ayahEnglish}</div>
// </div>

//           `;

//           container.appendChild(div);
//         });
//       }

function renderAyahs(surahName, ayahs) {
  const container = document.getElementById("ayah-list");
  container.innerHTML = "";

  ayahs.forEach((ayah, index) => {
    const div = document.createElement("div");
    div.className = "ayah";
    div.setAttribute("id", `ayah-${index}`);

    const verseKey = `verse_${ayah.ayahNo}`;
    const highlightedWords = applyTajweedToWords(ayah.words, verseKey);

    const wordsHTML = highlightedWords.map((w, i) => `
      <span class="ayah-word" id="ayah-${index}-word-${i}" data-word="${w.plain}">
        ${w.text}
        <div class="accuracy" id="acc-${index}-${i}"></div>
      </span>
    `).join(" ");

    div.innerHTML = `
      <div class="ayah-controls">
        <button class="control-btn play-btn" onclick="playQuranAudio(${ayah.surahNo}, ${ayah.ayahNo}, this)">🔊 Play</button>
        <button class="control-btn record-btn" id="record-btn-${index}" onclick="startWordByWordRecognition('ayah-${index}', ${JSON.stringify(ayah.words).replace(/"/g, '&quot;')}, this)">🎤 Record</button>
      </div>
      <div class="ayah-content">
        <span class="ayah-number">${ayah.ayahNo}</span>
        <div class="ayah-text">${wordsHTML}</div>
        <div class="ayah-english">${ayah.ayahEnglish}</div>
      </div>
    `;

    container.appendChild(div);
  });
}



      function playQuranAudio(surah, ayah, playBtn) {
        const paddedSurah = String(surah).padStart(3, '0');
        const paddedAyah = String(ayah).padStart(3, '0');
        const audioUrl = `https://verses.quran.com/AbdulBaset/Mujawwad/mp3/${paddedSurah}${paddedAyah}.mp3`;
        
        const audio = new Audio(audioUrl);
        const ayahDiv = document.getElementById(`ayah-${ayah-1}`);
        const tajweedSpans = ayahDiv?.querySelectorAll('.tajweed-rule');
      
        if (playBtn) {
          playBtn.disabled = true;
          playBtn.textContent = "⏳ Playing...";
        }
      
        // Reset all highlights
        tajweedSpans?.forEach(span => {
          span.style.backgroundColor = 'transparent';
        });
      
        audio.play().catch(e => {
          console.log("Audio playback failed:", e);
          if (playBtn) {
            playBtn.disabled = false;
            playBtn.textContent = "🔊 Play";
          }
        });
      
        // Highlight rules as audio plays (simple implementation)
        if (tajweedSpans) {
          const highlightInterval = setInterval(() => {
            const currentTime = audio.currentTime;
            const duration = audio.duration || 30; // Fallback duration
            
            tajweedSpans.forEach((span, index) => {
              const startPercent = index / tajweedSpans.length;
              const endPercent = (index + 1) / tajweedSpans.length;
              
              if (currentTime >= startPercent * duration && currentTime <= endPercent * duration) {
                span.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              } else {
                span.style.backgroundColor = 'transparent';
              }
            });
          }, 100);
      
          audio.onended = () => {
            clearInterval(highlightInterval);
            tajweedSpans?.forEach(span => {
              span.style.backgroundColor = 'transparent';
            });
            if (playBtn) {
              playBtn.disabled = false;
              playBtn.textContent = "🔊 Play";
            }
          };
        } else {
          audio.onended = () => {
            if (playBtn) {
              playBtn.disabled = false;
              playBtn.textContent = "🔊 Play";
            }
          };
        }
      }
      

      function startWordByWordRecognition(ayahId, expectedWords, recordBtn) {
        const ayahDiv = document.getElementById(ayahId);
        const wordSpans = ayahDiv.querySelectorAll('.ayah-word');
        const playBtn = ayahDiv.querySelector('.play-btn');
      
        // Disable buttons
        recordBtn.classList.add('recording-active');
        recordBtn.disabled = true;
        if (playBtn) playBtn.disabled = true;
      
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'ar-SA';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;
      
        ayahDiv.classList.add('recording');
      
        recognition.onresult = (event) => {
          // Existing scoring logic...
          ayahDiv.classList.remove('recording');
          recordBtn.classList.remove('recording-active');
          recordBtn.disabled = false;
          if (playBtn) playBtn.disabled = false;
        };
      
        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          alert('Speech recognition error: ' + event.error);
          ayahDiv.classList.remove('recording');
          recordBtn.classList.remove('recording-active');
          recordBtn.disabled = false;
          if (playBtn) playBtn.disabled = false;
        };
      
        recognition.onend = () => {
          ayahDiv.classList.remove('recording');
          recordBtn.classList.remove('recording-active');
          recordBtn.disabled = false;
          if (playBtn) playBtn.disabled = false;
        };
      
        recognition.start();
      }
      

      function calculateSimilarity(word1, word2) {
        if (!word1 || !word2) return 0;
        
        // Simple similarity calculation based on edit distance
        const distance = editDistance(word1.toLowerCase(), word2.toLowerCase());
        const maxLength = Math.max(word1.length, word2.length);
        
        if (maxLength === 0) return 1;
        
        return Math.max(0, (maxLength - distance) / maxLength);
      }

      function editDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
          matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
          matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
          for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
            } else {
              matrix[i][j] = Math.min(
                matrix[i - 1][j - 1] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j] + 1
              );
            }
          }
        }
        
        return matrix[str2.length][str1.length];
      }

      // Initialize the application
      window.onload = () => {
        loadQuranData();
      };
      function setFontSize(size) {
        const ayahs = document.querySelectorAll('.ayah-text');
        ayahs.forEach(el => {
          el.style.fontSize = `${size}px`;
        });
      }

      let tajweedData = {};

function loadTajweedData(surahNo) {
  const url = `./tajweed/surah_${surahNo}.json`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      tajweedData = json.verse;
      renderAyahs(currentSurah); // You’ll call this with updated tajweedData
    })
    .catch((err) => {
      console.warn("⚠️ No Tajweed data found for Surah", surahNo);
      tajweedData = {};
      renderAyahs(currentSurah);
    });
}
function applyTajweedToWords(words, verseKey) {
  if (!tajweedData[verseKey]) {
    return words.map(w => ({ text: w }));
  }

  const flatText = words.join(' ');
  const chars = [...flatText];
  const ruleSpans = tajweedData[verseKey];

  ruleSpans.forEach(({ start, end, rule }) => {
    if (start < chars.length && end < chars.length) {
      chars[start] = `<span class="rule-${rule}">` + chars[start];
      chars[end] += `</span>`;
    }
  });

  const highlightedText = chars.join('');

  // Convert back to words while preserving tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = highlightedText;
  const reconstructed = tempDiv.textContent || tempDiv.innerText || "";
  const plainWords = reconstructed.split(' ');

  const highlightedWords = highlightedText.split(/(?<=<\/span>|[^>])\s+/);

  return highlightedWords.map((w, i) => ({
    text: w,
    plain: plainWords[i] || ""
  }));
}


      
