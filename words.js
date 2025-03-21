const english = 
[
  'the', 'be', 'to', 'of', 'and',
  'a', 'in', 'that', 'have', 'I',
  'it', 'for', 'not', 'on', 'with',
  'he', 'as', 'you', 'do', 'at',
  'this', 'but', 'his', 'by', 'from',
  'they', 'we', 'say', 'her', 'she',
  'or', 'an', 'will', 'my', 'one',
  'all', 'would', 'there', 'their', 'what',
  'so', 'up', 'out', 'if', 'about',
  'who', 'get', 'which', 'go', 'me',
  'when', 'make', 'can', 'like', 'time',
  'no','just', 'him', 'know', 'take',
  'people', 'into', 'year', 'your', 'good',
  'some', 'could', 'them', 'see', 'other',
  'than', 'then', 'now', 'look', 'only',
  'come', "it's", 'over', 'think', 'also',
  'back', 'after', 'use', 'two', 'how',
  'our', 'work', 'first', 'well', 'way',
  'even', 'new', 'want', 'because', 'any',
  'these', 'give', 'day', 'most', 'us'
];

let currentIndex = 0;


function getRandomWords(amount) {
  const words = [];
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * english.length);
    words.push(english[randomIndex]);
  }
  return words;
}

function renderWords(words) {
  const container = document.getElementById("word-container");
  container.innerHTML = "";

  const fullText = words.join(" ") + " ";
  for (let i = 0; i < fullText.length; i++) {
    const span = document.createElement("span");
    span.textContent = fullText[i];
    span.classList.add("letter");
    container.appendChild(span);
  }
}

function updateCurrentHighlight() {
  const letters = document.querySelectorAll(".letter");
  letters.forEach((l) => l.classList.remove("current"));

  if (currentIndex < letters.length) {
    letters[currentIndex].classList.add("current");
  }
}

const words = getRandomWords(30); // ex: 2 rader
renderWords(words);

document.addEventListener("keydown", (e) => {
  const letters = document.querySelectorAll(".letter");

  if (currentIndex >= letters.length) return;

  // Endast vanliga tecken och space
  if (e.key.length !== 1 && e.key !== " ") return;

  const expected = letters[currentIndex].textContent;
  const typed = e.key;

  if (typed === expected) {
    letters[currentIndex].classList.remove("incorrect");
    letters[currentIndex].classList.add("correct");
  } else {
    letters[currentIndex].classList.remove("correct");
    letters[currentIndex].classList.add("incorrect");
  }

  currentIndex++;
  updateCurrentHighlight();
});

updateCurrentHighlight(); // markera första bokstaven