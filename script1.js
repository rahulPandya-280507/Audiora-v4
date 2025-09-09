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

async function loadBooks() {
  try {
    const response = await fetch("books.json");
    const books = await response.json();

    const bookGrid = document.getElementById("book-grid");

    if (books.length === 0) {
      // Show a message if no books exist
      bookGrid.innerHTML = `<p class="no-books">No audiobooks available right now. Please check back later!</p>`;
      return;
    }

    books.forEach(book => {
      const card = document.createElement("div");
      card.classList.add("book-card");

      card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;
      bookGrid.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading books!", error);
  }
}

loadBooks();
