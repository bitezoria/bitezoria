// ==========================
// LIQUID SWIRL EFFECT
// ==========================

export function liquidEffect(card) {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        card.style.background = `
            radial-gradient(circle at ${x * 100}% ${y * 100}%,
            rgba(255,107,0,0.25),
            #111 70%)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "#111";
    });

}