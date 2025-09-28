// Fade-in Sections on Scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Poll System
let votes = { jester: 0, slayer: 0, phantom: 0 };
function vote(choice) {
  votes[choice]++;
  let total = votes.jester + votes.slayer + votes.phantom;
  let result = `
    Jester: ${Math.round((votes.jester/total)*100)||0}%<br>
    Slayer: ${Math.round((votes.slayer/total)*100)||0}%<br>
    Phantom: ${Math.round((votes.phantom/total)*100)||0}%`;
  document.getElementById("pollResults").innerHTML = result;
}

// Sound Toggle
const laugh = document.getElementById("clownLaugh");
const soundBtn = document.getElementById("soundToggle");
soundBtn.addEventListener("click", () => {
  if (laugh.muted) {
    laugh.muted = false;
    soundBtn.textContent = "🔊 Mute Laugh";
  } else {
    laugh.muted = true;
    soundBtn.textContent = "🔇 Unmute Laugh";
  }
});

// Easter Egg: Press "C" for clown joke
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "c") {
    alert("🤡 Why don’t clowns play hide and seek? Because good luck hiding when you’re this TOXIC!");
  }
});
