
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
const contentFlexContainerEl = document.getElementById("contentFlexContainer")
const navBarEl = document.getElementById("navBar")



//math to determine how long to make the blue element and where to start footer/contact section
let fromTop = contentFlexContainerEl.offsetTop
let elHeight = contentFlexContainerEl.getBoundingClientRect().height
let totalHeight = fromTop + elHeight
let angle1from = angleOneEl.offsetTop
let totatTotal = totalHeight + angle1from
let totalHeightPlus = totalHeight + 500
// angleOneEl.style.borderBottom = `${totalHeight}px`
contactSectionEl.style.top = `${totalHeight}px`

window.addEventListener("resize", function () {
    fromTop = contentFlexContainerEl.offsetTop
    elHeight = contentFlexContainerEl.getBoundingClientRect().height
    totalHeight = fromTop + elHeight
    angle1from = angleOneEl.offsetTop
    totatTotal = totalHeight + angle1from
    totalHeightPlus = totalHeight + 500
    contactSectionEl.style.top = `${totalHeight}px`
})
window.addEventListener("scroll", function () {
    fromTop = contentFlexContainerEl.offsetTop
    elHeight = contentFlexContainerEl.getBoundingClientRect().height
    totalHeight = fromTop + elHeight
    angle1from = angleOneEl.offsetTop
    totatTotal = totalHeight + angle1from
    totalHeightPlus = totalHeight + 500
    contactSectionEl.style.top = `${totalHeight}px`
})

console.log(totalHeight)
console.log(totalHeightPlus)

//-----------------------------function to set dynamic element measures------------------------------------

//width of triangle top bar (border-right can't be set to 100% in CSS)
function setTopBarWidth() {
    const docWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const topBar = document.getElementById("topBar")
    topBar.style.borderRight = `${docWidth}px solid rgb(233, 110, 27)`
}
setTopBarWidth();

//height of block changes with arrangment of child elements
function setAngleFlatHeight() {
    const flexHeight = document.getElementById("portfolio-title").offsetHeight
    console.log(flexHeight)
}
setAngleFlatHeight()

//both functions are called every time the window is resized
window.addEventListener('resize', function () {
    setTopBarWidth()
    setAngleFlatHeight()
});

//----------------------------------------------------------------------------------------------------------



//try this with jQuery
// function noScroll() {
//     // window.scrollTo(0, 0);
//     window.scrollRight = 0;
// }
// window.addEventListener('scroll', noScroll);


//--------------------------------mouseover for contact section------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------



//------------------------------------scroll position css changes-------------------------------------------

//scroll anchor 0 - set up top bar for appearance 
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            //make top bar transparent
            topBarEl.classList.add("top-bar-transparent")
            navBarEl.classList.remove("nav-bar-top")
        } else {
            //make top bar opaque
            topBarEl.classList.remove("top-bar-transparent")
            navBarEl.classList.add("nav-bar-top")
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
        //setting the angled div flat when scroll down
        if (entries[0].boundingClientRect.y < 0) {
            angleOne.style.cssText = `
            width: 100%;
            height: 0;
            border-bottom: ${totalHeightPlus}px solid #859bd8;
            border-right: 0 solid transparent;
            position: absolute;
            top: -65vh;
            left: 0;
            transition: all 1.2s;
            `
            topBarEl.classList.add("top-bar-fixed");
            contentFlexContainerEl.classList.remove("disappear")
        } else {
            //setting the angled div up when scroll up
            angleOne.style.cssText = `
            width: 0vw;
            height: 0vh;
            border-bottom: 250vh solid rgb(233, 110, 27);
            border-right: 50vw solid transparent;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 1.5s;
            z-index: 5;
            `
            topBarEl.classList.remove("top-bar-fixed")
            contentFlexContainerEl.classList.add("disappear")
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