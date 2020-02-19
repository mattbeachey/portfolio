
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
const navBarTopEl = document.getElementById("navBar2")
const mainPicEl = document.getElementById("main-pic")
const aboutFlexEl = document.getElementById("about-flex")
const bigBoyEl = document.getElementById("big-boy")
const focusedEl = document.activeElement
const lineEl = document.getElementById("line")

//-----------------------------Animate Nav-Burger Box and Nav Menu Modal------------------------------------
const aboutBurgerEl = document.getElementById("nav-burger-box")
const bar1El = document.getElementById("bar1")
const bar2El = document.getElementById("bar2")
const bar3El = document.getElementById("bar3")
const modalNavMenuEl = document.getElementById("modal-nav-menu")

aboutBurgerEl.addEventListener("click", function () {
    bar1El.classList.toggle("bar1clicked")
    bar2El.classList.toggle("bar2clicked")
    bar3El.classList.toggle("bar3clicked")
    modalNavMenuEl.classList.toggle("modal-nav-menu-visible")
})

//-------------------------------Typewriter Effect-------------------------------------------------
const typeTextEl = document.getElementById("typewriter")
let i = 0
let txt = "many moving pieces"
function typewriter() {
    if (i < txt.length) {
        typeTextEl.innerHTML += txt.charAt(i);
        i++
        setTimeout(typewriter, 120)
    }

}

//-------------------remove focus from a clicked (or right-clicked) "a" link after 2.5 seconds

document.body.addEventListener("click", function (event) {
    setTimeout(function () {
        console.log(event.target)
        document.activeElement.blur();
    }, 2500)
})

window.oncontextmenu = function () {
    setTimeout(function () {
        document.activeElement.blur();
    }, 2500)
}


//-----------------------------functions to set dynamic element measures------------------------------------
//----------------------------------------------------------------------------------------------------------
//math to determine how long to make the blue element and where to start footer/contact section
let fromTop = contentFlexContainerEl.offsetTop
let elHeight = contentFlexContainerEl.getBoundingClientRect().height
let totalHeight = fromTop + elHeight
let angle1from = angleOneEl.offsetTop
let totatTotal = totalHeight + angle1from
let totalHeightPlus = totalHeight + 930
// angleOneEl.style.borderBottom = `${totalHeight}px`
contactSectionEl.style.top = `${totalHeight}px`

window.addEventListener("resize", function () {
    fromTop = contentFlexContainerEl.offsetTop
    elHeight = contentFlexContainerEl.getBoundingClientRect().height
    totalHeight = fromTop + elHeight
    angle1from = angleOneEl.offsetTop
    totatTotal = totalHeight + angle1from
    totalHeightPlus = totalHeight + 930
    contactSectionEl.style.top = `${totalHeight}px`
})
window.addEventListener("scroll", function () {
    fromTop = contentFlexContainerEl.offsetTop
    elHeight = contentFlexContainerEl.getBoundingClientRect().height
    totalHeight = fromTop + elHeight
    angle1from = angleOneEl.offsetTop
    totatTotal = totalHeight + angle1from
    totalHeightPlus = totalHeight + 930
    contactSectionEl.style.top = `${totalHeight}px`
})

// console.log(totalHeight)
// console.log(totalHeightPlus)

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
    // console.log(flexHeight)
}
setAngleFlatHeight()

//both functions are called every time the window is resized
window.addEventListener('resize', function () {
    setTopBarWidth()
    setAngleFlatHeight()
});

//------------------------------------Contact Section----------------------------------------------

//--------------------------------mouseover for contact section-----------------------------------
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

//--------------------------------focus select for contact section-----------------------------
// console.log(focusedEl)


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
            mainPicEl.classList.add("blur")
            aboutFlexEl.classList.add("blur")
            aboutBurgerEl.classList.add("nav-bar-transparent")
            navBarEl.classList.remove("none")
            navBarTopEl.classList.add("fadeout")
            // bigBoyEl.classList.remove("blur")
            // navBarTopEl.classList.add("blur")
        } else {
            //make top bar opaque
            topBarEl.classList.remove("top-bar-transparent")
            mainPicEl.classList.remove("blur")
            aboutFlexEl.classList.remove("blur")
            aboutBurgerEl.classList.remove("nav-bar-transparent")
            navBarEl.classList.add("none")
            navBarTopEl.classList.remove("fadeout")
            // bigBoyEl.classList.add("blur")
            // navBarTopEl.classList.remove("blur")
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
            document.getElementById("scrollstyle").setAttribute("href", "./Assets/style/scroll2.css");
            topBarEl.classList.add("top-bar-fixed");
            contentFlexContainerEl.classList.remove("disappear")
            aboutBurgerEl.classList.add("nav-burger-box-2nd")
            lineEl.classList.remove("shrink")
            // setTimeout(typewriter, 600) ;
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
            transition: all 1.2s;
            `
            document.getElementById("scrollstyle").setAttribute("href", "./Assets/style/scroll1.css");
            topBarEl.classList.remove("top-bar-fixed")
            contentFlexContainerEl.classList.add("disappear")
            aboutBurgerEl.classList.remove("nav-burger-box-2nd")
            lineEl.classList.add("shrink")
        }
    });
    observer.observe(document.querySelector("#scroll-anchor-1"));
}

//set copyright year
const year = (new Date).getFullYear();
document.getElementById("copyright").innerText = `Hard-coded with love. Copyright Matt Beachey ${year}`

console.log(`%c
•••                       •••                      •••
•••••••                 •••••••                •••••••
•••••••••••           •••••••••••          •••••••••••
•••••••••••••••     •••••••••••••••    •••••••••••••••
••••••••••••••••• •••••undefined•••• •••••••••••••••••
•••••••••••••••     •••••••••••••••    •••••••••••••••
•••••••••••           •••••••••••          •••••••••••
•••••••                 •••••••                •••••••
•••                       •••                      •••
`, "font-family:monospace")

