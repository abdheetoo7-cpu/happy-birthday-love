// AGE COUNTER
const ageEl = document.getElementById("ageNumber");
let age = 20;

const questions = [
  "Will you go on a date with me?",
  "Do you promise to laugh at my bad jokes?",
  "Will you keep choosing me on hard days too?",
  "Can I still annoy you when we’re old?",
  "So… will you be my forever?"
];

let currentQuestionIndex = 0;
const questionEl = document.getElementById("questionText");

// set first question
questionEl.innerText = questions[currentQuestionIndex];

const ageInterval = setInterval(() => {
  age++;
  ageEl.innerText = age;

  if (age === 25) {
    clearInterval(ageInterval);
    ageEl.classList.add("blur");

    setTimeout(() => {
      ageEl.classList.remove("blur");
      ageEl.innerText = "still her";
    }, 1200);
  }
}, 700);

// CONTINUOUS FLOATING PHOTO STREAM
const balloonContainer = document.getElementById("balloons");

const balloonImages = [
  "images/balloons/1.jpg",
  "images/balloons/2.jpg",
  "images/balloons/3.jpg",
  "images/balloons/4.jpg",
  "images/balloons/5.jpg",
  "images/balloons/6.jpg",
  "images/balloons/7.jpg",
  "images/balloons/8.jpg",
  "images/balloons/9.jpg",
  "images/balloons/10.jpg"
];

function spawnBalloon() {
  const img = document.createElement("img");
  img.className = "balloon";
  img.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];

  img.style.left = Math.random() * 90 + "%";

  const duration = 18 + Math.random() * 15;
  img.style.animationDuration = `${duration}s, ${3 + Math.random() * 3}s`;

  // MICRO-POLISH (human imperfection)
  //img.style.transform = `scale(${0.9 + Math.random() * 0.3})`;
// MICRO-POLISH (human imperfection)
img.style.setProperty(
  "--scale",
  (0.9 + Math.random() * 0.3).toFixed(2)
);
img.style.opacity = (0.85 + Math.random() * 0.15).toFixed(2);
  img.style.opacity = 0.85 + Math.random() * 0.15;

  balloonContainer.appendChild(img);

  setTimeout(() => img.remove(), duration * 1000);
}

// initial overlap
for (let i = 0; i < 4; i++) {
  setTimeout(spawnBalloon, i * 800);
}

// continuous stream
setInterval(spawnBalloon, 2500);

// YES / NO LOGIC
let noScale = 1;
let yesScale = 1;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hintEl = document.getElementById("hint");
const boop = document.getElementById("boopSound");
const effects = document.getElementById("effects");
const finalText = document.getElementById("finalText");

function pressureYes() {
  boop.currentTime = 0;
  boop.play();

  noScale = Math.max(noScale - 0.15, 0.15);
  yesScale = Math.min(yesScale + 0.2, 2.6);

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  const taunts = [
    "You’re hovering like this is a real choice",
    "Come on, don’t lie to yourself",
    "We both know how this goes",
    "Nice try 😌",
    "Okay drama queen, enough now"
  ];

  hintEl.innerText = taunts[Math.floor(Math.random() * taunts.length)];
}

function handleYes() {
  // reset button scales for next question
  noScale = 1;
  yesScale = 1;
  noBtn.style.transform = "scale(1)";
  yesBtn.style.transform = "scale(1)";

  currentQuestionIndex++;

  // still more questions left
  if (currentQuestionIndex < questions.length) {
    questionEl.innerText = questions[currentQuestionIndex];
    hintEl.innerText = "";
    return;
  }

  // FINAL YES ❤️
 finalText.innerText =
  "Happy birthday once again baby ❤️ \n" +
  "Every year adds to you,\n" +
  "but never takes anything away.\n" +
  "If growing older means growing with you,\n" +
  "then I’m ready for all of it.";

  

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", `${Math.random()*350 - 175}px`);
    heart.style.setProperty("--y", `${Math.random()*350 - 175}px`);
    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }

 
}
// EYES FOLLOW CURSOR
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".pupil").forEach(pupil => {
    const rect = pupil.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    const radius = 15;

    pupil.style.left = 30 + Math.cos(angle) * radius + "px";
    pupil.style.top = 30 + Math.sin(angle) * radius + "px";
  });
});

console.log("built late at night, with coffee and feelings");
