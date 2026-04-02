import { liquidEffect } from "./liquid.js";
import { steamEffect } from "./steam.js";
import { tiltEffect } from "./tilt.js";
// ==========================
// GLOBAL INTERACTION HANDLER
// ==========================

export function applyInteractions(category, card) {

    // RESET
    card.classList.remove(
        "steam", "liquid", "bubble", "cheese", "melt", "noodle"
    );
// ==========================
// TEA / COFFEE
// ==========================
if (category === "tea" || category === "coffee") {
    card.classList.add("steam");
    steamEffect(card);

 // ==========================
// SHAKES / BOBA
// ==========================
if (category === "shakes" || category === "boba" || category === "mocktail") {
    card.classList.add("liquid");
    liquidEffect(card);
}

// ==========================
// GLOBAL EFFECT (ALL CARDS)
// ==========================
tiltEffect(card);

        card.addEventListener("mousemove", (e) => {
            const x = e.offsetX / card.offsetWidth;
            const y = e.offsetY / card.offsetHeight;

            card.style.background = `
                radial-gradient(circle at ${x*100}% ${y*100}%,
                rgba(255,107,0,0.3),
                #111)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.background = "#111";
        });
    }

    // ==========================
    // ICE CREAM
    // ==========================
    if (category === "icecream") {
        card.classList.add("melt");
    }

    // ==========================
    // PIZZA / BURGER
    // ==========================
    if (category === "pizza" || category === "burger") {
        card.classList.add("cheese");

        card.addEventListener("click", () => {
            card.style.transform = "scale(1.1)";
            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 300);
        });
    }

    // ==========================
    // MAGGI / PASTA
    // ==========================
    if (category === "maggi" || category === "pasta") {
        card.classList.add("noodle");

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    }
}