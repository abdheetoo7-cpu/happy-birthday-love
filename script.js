// Age animation
let age = 26;
let ageEl = document.getElementById("age");
let interval = setInterval(() => {
  age++;
  ageEl.innerText = age;
  if (age === 27) clearInterval(interval);
}, 1200);

// Card reveal
function reveal(el) {
  const messages = {
    "Your Smile 😊": "Still my favorite sight in the world ❤️",
    "Your Mind 🧠": "Sharp, creative, and inspiring",
    "Your Heart 💗": "Pure gold. I’m lucky to have it"
  };
  el.innerText = messages[el.innerText];
  el.style.background = "#ffdde1";
}

// Final surprise
function finalSurprise() {
  document.getElementById("finalText").innerText =
    "27 looks beautiful on you… and forever looks even better 💍❤️";
}

// Floating hearts
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.className = "heart";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);