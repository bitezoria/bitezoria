// ==========================
// IMPORT INTERACTIONS
// ==========================
import { applyInteractions } from "../interactions/hover-effects.js";


// ==========================
// LOAD MENU DATA
// ==========================

let menuData = {};
const tabsContainer = document.getElementById("menuTabs");
const itemsContainer = document.getElementById("menuItems");

fetch("data/menu.json")
    .then(res => res.json())
    .then(data => {
        menuData = data;
        createTabs();
        showItems(Object.keys(menuData)[0]); // first category default
    });


// ==========================
// CREATE CATEGORY TABS
// ==========================

function createTabs() {
    Object.keys(menuData).forEach(category => {

        const btn = document.createElement("button");
        btn.innerText = category;

        btn.onclick = () => {
            document.querySelectorAll(".menu-tabs button")
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");
            showItems(category);
        };

        tabsContainer.appendChild(btn);
    });

    tabsContainer.firstChild.classList.add("active");
}


// ==========================
// SHOW ITEMS (UPDATED)
// ==========================

function showItems(category) {

    itemsContainer.innerHTML = "";

    menuData[category].forEach(item => {

        // ==========================
        // CREATE CARD
        // ==========================
        const card = document.createElement("div");
        card.classList.add("menu-card");

        // ==========================
        // APPLY INTERACTIONS (MAIN CHANGE)
        // ==========================
        applyInteractions(category, card);

        // ==========================
        // SET CONTENT
        // ==========================
        card.innerHTML = `
            <img src="assets/images/products/${category}/${item.name.toLowerCase().replace(/ /g, '')}.webp">
            <h3>${item.name}</h3>
            <p>₹ ${item.price}</p>
        `;

        // ==========================
        // APPEND
        // ==========================
        itemsContainer.appendChild(card);
    });
}