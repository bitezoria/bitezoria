// ==========================
// SCROLL REVEAL (GLOBAL)
// ==========================

export function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (pos < screen - 100) {
            el.classList.add("active");
        }
    });
}

// ==========================
// HOVER SCALE (GLOBAL)
// ==========================

export function hoverScale(element) {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.05)";
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
    });
}

// ==========================
// FLOATING EFFECT
// ==========================

export function floatingEffect(element) {
    let pos = 0;

    setInterval(() => {
        pos += 0.5;
        element.style.transform = `translateY(${Math.sin(pos) * 5}px)`;
    }, 30);
}

/* STEAM LAYER */
.steam-layer {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, #ffffff20, transparent);
    transform: translateX(-50%);
    pointer-events: none;
}