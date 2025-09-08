const miniplayer = document.getElementById("miniplayer");
const closeBtn = document.getElementById("close-btn");
const playerBar = document.querySelector(".player-bar");

// Function to check if device is "mobile"
function isMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}

// Expand only on mobile
playerBar.addEventListener("click", () => {
  if (isMobile()) {
    miniplayer.classList.add("expanded");
  }
});

// Collapse everywhere (works on all screens)
closeBtn.addEventListener("click", () => {
  miniplayer.classList.remove("expanded");
});
