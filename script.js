
const contactNameEl = document.getElementById("contact-line-name")
const contactEmailEl = document.getElementById("contact-line-email")
const contactMessageEl = document.getElementById("contact-line-message")
const contactNameLeftblockEl = document.getElementById("contact-left-block-name")
const contactEmailLeftblockEl = document.getElementById("contact-left-block-email")
const contactMessageLeftblockEl = document.getElementById("contact-left-block-message")

const angleOneEl = document.getElementById("angleOne")
const topBarEl = document.getElementById("topBar")
const portfolioTitleEl = document.getElementById("portfolio-title")
const contactSectionEl = document.getElementById("contactSection")


function noScroll() {
    // window.scrollTo(0, 0);
    window.scrollLeft = 0;
}

window.addEventListener('scroll', noScroll);




//mouseover for contact section
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


//scroll position css changes

//scroll anchor 0 - set up top bar for appearance 
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            topBarEl.classList.add("top-bar-transparent")
        } else {
            topBarEl.classList.remove("top-bar-transparent")
        }
    });
    observer.observe(document.querySelector("#scroll-anchor-0"));
}

//scroll anchor 1 - change angle
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            angleOne.classList.add("angle1flat");
            topBarEl.classList.add("top-bar-fixed");
            // setTimeout(function () {
            //     topBarEl.classList.add("top-bar-fixed")
            // }, 1000) 
            portfolioTitleEl.classList.remove("disappear")
        } else {
            angleOne.classList.remove("angle1flat");
            topBarEl.classList.remove("top-bar-fixed")
            portfolioTitleEl.classList.add("disappear")
        }
    });
    observer.observe(document.querySelector("#scroll-anchor-1"));
}

//contact anchor - change contact section height
// if (
//     "IntersectionObserver" in window &&
//     "IntersectionObserverEntry" in window &&
//     "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
//     let observer = new IntersectionObserver(entries => {
//         if (entries[0].boundingClientRect.y < 0) {
//             contactSectionEl.classList.add("top-bar-transparent")
//         } else {
//             topBarEl.classList.remove("top-bar-transparent")
//         }
//     });
//     observer.observe(document.querySelector("#contact"));
// }