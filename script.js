
const contactNameEl = document.getElementById("contact-line-name")
const contactEmailEl = document.getElementById("contact-line-email")
const contactMessageEl = document.getElementById("contact-line-message")
const contactNameLeftblockEl = document.getElementById("contact-left-block-name")
const contactEmailLeftblockEl = document.getElementById("contact-left-block-email")
const contactMessageLeftblockEl = document.getElementById("contact-left-block-message")




contactNameEl.addEventListener("mouseover", function () {
    contactNameLeftblockEl.classList.add("contact-left-block-hover");
});
contactNameEl.addEventListener("mouseout", function () {
    contactNameLeftblockEl.classList.remove("contact-left-block-hover");
});
contactEmailEl.addEventListener("mouseover", function () {
    contactEmailLeftblockEl.classList.add("contact-left-block-hover");
});
contactEmailEl.addEventListener("mouseout", function () {
    contactEmailLeftblockEl.classList.remove("contact-left-block-hover");
});
contactMessageEl.addEventListener("mouseover", function () {
    contactMessageLeftblockEl.classList.add("contact-left-block-hover");
});
contactMessageEl.addEventListener("mouseout", function () {
    contactMessageLeftblockEl.classList.remove("contact-left-block-hover");
});