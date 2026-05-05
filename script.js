// ========================================
// COUNTDOWN TIMER
// ========================================

// Target date: June 1, 2026
const targetDate = new Date("2026-06-01T00:00:00").getTime();

// DOM Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

/**
 * Update countdown timer
 */
function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // If countdown is finished
  if (difference < 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";

    // Optional: Display a message or redirect
    document.querySelector(".countdown-title").textContent = "🎉 We're Live!";

    clearInterval(countdownInterval);
    return;
  }

  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update DOM with animation
  updateValue(daysEl, days);
  updateValue(hoursEl, hours);
  updateValue(minutesEl, minutes);
  updateValue(secondsEl, seconds);
}

/**
 * Update individual countdown value with smooth transition
 */
function updateValue(element, value) {
  const formattedValue = value.toString().padStart(2, "0");

  if (element.textContent !== formattedValue) {
    element.style.transform = "scale(1.1)";
    element.textContent = formattedValue;

    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 200);
  }
}

// Initialize countdown
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// ========================================
// SMOOTH ANIMATIONS ON LOAD
// ========================================

window.addEventListener("load", () => {
  // Add loaded class for any additional animations
  document.body.classList.add("loaded");
});

// ========================================
// EASTER EGG: Konami Code
// ========================================

let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join("") === konamiSequence.join("")) {
    // Easter egg activated!
    document.body.style.animation = "rainbow 2s linear infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 5000);
  }
});

// Rainbow animation for easter egg
const style = document.createElement("style");
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// SMOOTH SCROLL (if you add sections later)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ========================================
// CONSOLE MESSAGE (Fun developer greeting)
// ========================================

console.log(
  "%c👋 Hello Developer! ",
  "background: #7f5af0; color: #fffffe; padding: 8px 16px; border-radius: 4px; font-size: 16px; font-weight: bold;",
);
console.log(
  "%cLooking for something? The portfolio is coming June 1, 2026! 🚀",
  "color: #94a1b2; font-size: 12px;",
);
console.log(
  "%cWant to work together? Reach out: hello@abdullahmorsy.com",
  "color: #7f5af0; font-size: 12px;",
);

// ========================================
// PERFORMANCE: Preload critical assets
// ========================================

// Preload any images or assets you might add later
function preloadImages(...urls) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Example usage (uncomment when you have images):
// preloadImages('/logo.png', '/avatar.jpg');
