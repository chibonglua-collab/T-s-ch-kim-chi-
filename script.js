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

});
