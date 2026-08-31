document.addEventListener("DOMContentLoaded", () => {
    // Smooth appearance when the page loads
    document.body.classList.add("loaded");
    // Simple hover effect for book cards
    const bookCards = document.querySelectorAll(".book-card");
    bookCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease";
        });
    });
    // Current year in footer
    const year = new Date().getFullYear();
    const footerYear = document.querySelector("footer");
    if (footerYear) {
        footerYear.innerHTML = `
            <p>Made with ♡ by Kim Chi</p>
            <p>© ${year} Tủ sách Kim Chi</p>
        `;
    }
    // Remember the scrolling position on the bookshelf page
    if (window.location.pathname.endsWith("books.html")) {
        const savedPosition = sessionStorage.getItem("booksScrollPosition");
        if (savedPosition !== null) {
            setTimeout(() => {
                window.scrollTo({
                    top: parseInt(savedPosition),
                    behavior: "instant"
                });
                sessionStorage.removeItem("booksScrollPosition");
            }, 100);
        }
        // Save the current position before opening a review
        const reviewLinks = document.querySelectorAll(
            '.book-card a[href^="review-"]'
        );
        reviewLinks.forEach((link) => {
            link.addEventListener("click", () => {
                sessionStorage.setItem(
                    "booksScrollPosition",
                    window.scrollY
                );
            });
        });
    }
});
