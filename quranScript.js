const surahNumberMap = {};
let quranData = {};
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

function renderAyahs(surahName, ayahs) {
  const container = document.getElementById("ayah-list");
  container.innerHTML = "";

  ayahs.forEach((ayah, index) => {
    const div = document.createElement("div");
    div.className = "ayah";
    div.setAttribute("id", `ayah-${index}`);

    const words = ayah.words.map((word, i) => `
  <span class="ayah-word" id="ayah-${index}-word-${i}" data-word="${word}">
    ${word}
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
        <div class="ayah-text">${words}</div>
        <div class="ayah-english">${ayah.ayahEnglish}</div>
      </div>
      <div class="recited-text" id="recited-text-${index}" style="margin-top:8px;color:#555;font-style:italic;"></div>
    `;

    container.appendChild(div);
  });
}

let currentAudio = null;
let currentPlayBtn = null;

function playQuranAudio(surah, ayah, playBtn) {
  const paddedSurah = String(surah).padStart(3, '0');
  const paddedAyah = String(ayah).padStart(3, '0');
  const audioUrl = `https://verses.quran.com/AbdulBaset/Mujawwad/mp3/${paddedSurah}${paddedAyah}.mp3`;

  const ayahDiv = Array.from(document.querySelectorAll('.ayah')).find(div => {
    const numSpan = div.querySelector('.ayah-number');
    return numSpan && parseInt(numSpan.textContent) === ayah;
  });
  const wordSpans = ayahDiv ? ayahDiv.querySelectorAll('.ayah-word') : [];

  const isSameAudio =
    currentAudio &&
    currentAudio.src === audioUrl &&
    currentPlayBtn === playBtn;

  if (isSameAudio) {
    // Toggle play/pause
    if (!currentAudio.paused) {
      currentAudio.pause();
      playBtn.textContent = "▶️ Resume";
    } else {
      currentAudio.play();
      playBtn.textContent = "⏸️ Pause";
    }
    return;
  }

  // If it's a different ayah: stop current, reset button text
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentPlayBtn) {
      currentPlayBtn.textContent = "🔊 Play";
      currentPlayBtn.disabled = false;
    }
    currentAudio = null;
    currentPlayBtn = null;
  }

  // New audio setup
  const audio = new Audio(audioUrl);
  currentAudio = audio;
  currentPlayBtn = playBtn;

  let highlightInterval = null;

  function resetHighlights() {
    wordSpans.forEach(span => span.style.backgroundColor = '');
  }

  // Disable all other play buttons
  document.querySelectorAll(".play-btn").forEach(btn => {
    btn.disabled = (btn !== playBtn);
  });

  playBtn.disabled = false;
  playBtn.textContent = "⏸️ Pause";

  audio.addEventListener('play', () => {
    highlightInterval = setInterval(() => {
      if (!audio.duration || audio.duration === Infinity) return;
      const position = audio.currentTime / audio.duration;
      const totalLength = Array.from(wordSpans).reduce((sum, span) => sum + span.innerText.length, 0);
      let elapsed = audio.currentTime / audio.duration * totalLength;

      let current = 0;
      let acc = 0;
      for (let i = 0; i < wordSpans.length; i++) {
        acc += wordSpans[i].innerText.length;
        if (elapsed <= acc) {
          current = i;
          break;
        }
      }

      wordSpans.forEach((span, i) => {
        span.style.backgroundColor = i === current ? "#c8f7c5" : "";
      });
    }, 80);
  });

  audio.addEventListener('pause', () => {
    clearInterval(highlightInterval);
    resetHighlights();
    playBtn.textContent = "▶️ Resume";
  });

  audio.addEventListener('ended', () => {
    clearInterval(highlightInterval);
    resetHighlights();
    playBtn.textContent = "🔊 Play";
    document.querySelectorAll(".play-btn").forEach(btn => (btn.disabled = false));
    currentAudio = null;
    currentPlayBtn = null;
  });

  audio.play().catch((e) => {
    console.error("Audio playback failed:", e);
    clearInterval(highlightInterval);
    resetHighlights();
    playBtn.textContent = "🔊 Play";
    document.querySelectorAll(".play-btn").forEach(btn => (btn.disabled = false));
    currentAudio = null;
    currentPlayBtn = null;
  });
}



function normalizeArabic(text) {
  return text
    .replace(/[\u064B-\u0652]/g, '')       // Remove harakāt (diacritics)
    .replace(/[\u0640]/g, '')              // Remove tatweel
    .replace(/[إأآا]/g, 'ا')               // Normalize alef
    .replace(/ى/g, 'ي')                    // Normalize ya
    .replace(/ؤ/g, 'و')                    // Normalize waw
    .replace(/ئ/g, 'ي')                    // Normalize ya with hamza
    .replace(/ة/g, 'ه')                    // Normalize ta marbuta
    .replace(/\s+/g, ' ')                  // Normalize spaces
    .trim();
}
function startWordByWordRecognition(ayahId, expectedWords, recordBtn) {
  // Parse expectedWords if it's a string
  if (typeof expectedWords === "string") {
    expectedWords = JSON.parse(expectedWords);
  }

  const ayahDiv = document.getElementById(ayahId);
  const wordSpans = ayahDiv.querySelectorAll('.ayah-word');
  const playBtn = ayahDiv.querySelector('.play-btn');

  // Disable UI controls
  recordBtn.classList.add('recording-active');
  recordBtn.disabled = true;
  if (playBtn) playBtn.disabled = true;
  ayahDiv.classList.add('recording');

  // Check if speech recognition is available
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
    resetUI();
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'ar-EG'; // Egyptian Arabic - better for Quranic pronunciation
  recognition.interimResults = false;
  recognition.maxAlternatives = 3; // Get multiple alternatives for better accuracy
  recognition.continuous = false;

  function resetUI() {
    ayahDiv.classList.remove('recording');
    recordBtn.classList.remove('recording-active');
    recordBtn.disabled = false;
    if (playBtn) playBtn.disabled = false;
  }

  recognition.onresult = (event) => {
    resetUI();
  
    const result = event.results[0];
    const alternatives = [];
  
    for (let i = 0; i < result.length && i < 3; i++) {
      alternatives.push({
        transcript: result[i].transcript.trim(),
        confidence: result[i].confidence || 0
      });
    }
  
    const bestAlternative = alternatives.reduce((best, current) =>
      current.confidence > best.confidence ? current : best
    );
  
    const transcript = bestAlternative.transcript;
    const spokenWords = transcript.split(/\s+/);
  
    let totalSimilarity = 0;
  
    wordSpans.forEach((span, i) => {
      const expected = expectedWords[i] || "";
      const spoken = spokenWords[i] || "";
    
      let bestMatch = 0;
      alternatives.forEach(alt => {
        const altWords = alt.transcript.split(/\s+/);
        const altSpoken = altWords[i] || "";
        
        const normalizedSpoken = normalizeArabic(altSpoken);
        const normalizedExpected = normalizeArabic(expected);
        const similarity = calculateSimilarity(normalizedSpoken, normalizedExpected);
    
        if (similarity > bestMatch) {
          bestMatch = similarity;
        }
      });
    
      const percentMatch = Math.round(bestMatch * 100);
      totalSimilarity += bestMatch;
    
      console.log(`Word ${i}: expected="${expected}", spoken="${spoken}", accuracy=${percentMatch}%`);
    
      span.classList.add('scored');
    
      let accDiv = span.querySelector('.accuracy');
      if (accDiv) {
        accDiv.textContent = `${percentMatch}%`;
    
        accDiv.classList.remove('green', 'yellow', 'red');
        span.classList.remove('word-green', 'word-yellow', 'word-red');
        
        // Apply color classes based on accuracy
        if (percentMatch >= 80) {
          accDiv.classList.add('green');
          span.classList.add('word-green');
        } else if (percentMatch >= 50) {
          accDiv.classList.add('yellow');
          span.classList.add('word-yellow');
        } else {
          accDiv.classList.add('red');
          span.classList.add('word-red');
        }
      }
    
      // Show what the user spoke
      let spokenDiv = span.querySelector('.spoken-word');
      if (!spokenDiv) {
        spokenDiv = document.createElement('div');
        spokenDiv.className = 'spoken-word';
        span.appendChild(spokenDiv);
      }
      spokenDiv.textContent = normalizeArabic(spoken);
      spokenDiv.style.fontSize = 'smaller';
      spokenDiv.style.opacity = '0.7';
    });
    
  
    // Overall accuracy
    // const overallAccuracy = ((totalSimilarity / expectedWords.length) * 100).toFixed(1);
    // let overallDiv = ayahDiv.querySelector('.overall-accuracy');
    // if (!overallDiv) {
    //   overallDiv = document.createElement('div');
    //   overallDiv.className = 'overall-accuracy';
    //   ayahDiv.appendChild(overallDiv);
    // }
    // overallDiv.innerHTML = `
    //   🎯 Overall Accuracy: ${overallAccuracy}%<br>
    //   <small>Confidence: ${(bestAlternative.confidence * 100).toFixed(1)}%</small>
    // `;
  };
  

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    alert('Speech recognition error: ' + event.error);
    resetUI();
  };

  recognition.onend = () => {
    resetUI();
  };

  recognition.start();
}


function calculateSimilarity(a, b) {
  if (!a || !b) return 0;
  const distance = levenshteinDistance(a, b);
  const maxLen = Math.max(a.length, b.length);
  return maxLen === 0 ? 1 : (1 - distance / maxLen);
}

function levenshteinDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );
      }
    }
  }
  return dp[a.length][b.length];
}

function setFontSize(size) {
  const ayahs = document.querySelectorAll('.ayah-text');
  ayahs.forEach(el => {
    el.style.fontSize = `${size}px`;
  });
}

// Initialize the application
window.onload = () => {
  loadQuranData(); // Using demo data - set to false to use CSV
};