// ================================
// MOBILE MENU TOGGLE
// ================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// ================================
// POPUP OPEN / CLOSE FUNCTIONS
// ================================
function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

function submitPopupForm(e) {
    e.preventDefault();
    alert("Appointment Booked Successfully ✔");
    closePopup();
}

// ================================
// ATTACH BUTTON CLICK EVENTS
// ================================
document.addEventListener("DOMContentLoaded", () => {

    // Open popup when clicking any appointment button
    const openButtons = document.querySelectorAll(
        ".book-btn, .hero-btn, .expert-btn, .rct-btn, .buy-btn, .open-appointment"
    );

    openButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            openPopup();
        });
    });

    // Close when clicking outside popup
    const overlay = document.getElementById("popupOverlay");
    if (overlay) {
        overlay.addEventListener("click", function (e) {
            if (e.target === this) closePopup();
        });
    }

    // Close when clicking submit button inside popup
    const popupSubmit = document.getElementById("popupSubmit");
    if (popupSubmit) {
        popupSubmit.addEventListener("click", submitPopupForm);
    }
});
