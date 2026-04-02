// ==========================
// IMPORTS
// ==========================

import { revealOnScroll } from "../animations.js";


// ==========================
// HERO LIQUID MOVEMENT
// ==========================

const hero = document.querySelector(".hero");
const liquidBg = document.querySelector(".liquid-bg");

if (hero && liquidBg) {

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        liquidBg.style.background = `
            radial-gradient(circle at ${x}% ${y}%,
            rgba(255,107,0,0.25),
            transparent 70%)
        `;
    });

}


// ==========================
// CATEGORY HOVER EFFECT
// ==========================

const categories = document.querySelectorAll(".category");

categories.forEach(cat => {

    cat.addEventListener("mouseenter", () => {
        cat.style.transform = "scale(1.05)";
    });

    cat.addEventListener("mouseleave", () => {
        cat.style.transform = "scale(1)";
    });

});


// ==========================
// SCROLL REVEAL (STORY)
// ==========================

window.addEventListener("scroll", revealOnScroll);


// ==========================
// FEATURED CARD TILT
// ==========================

const featuredCards = document.querySelectorAll(".featured .card");

featuredCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / midY) * 5;
        const rotateY = ((x - midX) / midX) * 5;

        card.style.transform = `
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });

});