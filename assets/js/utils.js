// ==========================
// FORMAT NAME → IMAGE FILE
// ==========================

export function formatImageName(name) {
    return name.toLowerCase().replace(/ /g, '');
}

// ==========================
// CREATE ELEMENT HELPER
// ==========================

export function createElement(tag, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}

// ==========================
// RANDOM NUMBER (ANIMATION)
// ==========================

export function random(min, max) {
    return Math.random() * (max - min) + min;
}