// ==========================
// STEAM EFFECT
// ==========================

export function steamEffect(card) {

    const steam = document.createElement("div");
    steam.classList.add("steam-layer");

    card.appendChild(steam);

    setInterval(() => {
        steam.style.opacity = Math.random();
        steam.style.transform = `translateY(-${Math.random() * 20}px)`;
    }, 800);

}