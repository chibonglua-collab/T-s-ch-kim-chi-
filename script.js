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
    // =========================
    // REMEMBER BOOKSHELF POSITION
    // =========================
    const isBooksPage = window.location.pathname.endsWith("books.html");
    if (isBooksPage) {
        const savedPosition = sessionStorage.getItem("booksScrollPosition");
        if (savedPosition !== null) {
            const restorePosition = () => {
                window.scrollTo(
                    0,
                    Number(savedPosition)
                );
            };
            // Wait for images and layout to finish loading
            if (document.readyState === "complete") {
                setTimeout(restorePosition, 200);
            } else {
                window.addEventListener(
                    "load",
                    () => {
                        setTimeout(restorePosition, 200);
                    },
                    { once: true }
                );
            }
            sessionStorage.removeItem("booksScrollPosition");
        }
        // Save position when opening ANY review
        const reviewLinks = document.querySelectorAll(
            'a[href^="review-"]'
        );
        reviewLinks.forEach((link) => {
            link.addEventListener("click", () => {
                sessionStorage.setItem(
                    "booksScrollPosition",
                    String(window.scrollY)
                );
            });
        });
    }
});
