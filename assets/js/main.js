// ==========================
// LOAD COMPONENTS (Navbar + Footer)
// ==========================

function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");


// ==========================
// HERO MOUSE MOVE EFFECT
// ==========================

document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".liquid-bg");

    let x = (e.clientX / window.innerWidth) * 50;
    let y = (e.clientY / window.innerHeight) * 50;

    bg.style.transform = `translate(${x}px, ${y}px)`;
});


// ==========================
// SCROLL TEXT REVEAL
// ==========================

window.addEventListener("scroll", () => {
    const text = document.querySelector(".reveal-text");

    let pos = text.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (pos < screen - 100) {
        text.style.opacity = 1;
        text.style.transform = "translateY(0)";
    }
});
// ==========================
// LOAD LOADER COMPONENT
// ==========================

loadComponent("loader", "components/loader.html");

// ==========================
// HIDE LOADER AFTER LOAD
// ==========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});