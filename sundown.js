let translate = 0;
let tab_no = 0;
const scroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: document.querySelector("body"),
        content: document.documentElement,
        lerp: 0.1,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
});

/**
 * Add event listener to prevent page reload on browser back button click.
 * We do this because we want to handle the back button click event ourselves
 * and not let the browser handle it.
 */
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
});

/**
 * Handle the menu button click event.
 *
 * @function
 * @param {Event} event - The click event.
 */
let menu = document.querySelector("#menu");
let on = 0; // Whether the menu is open or not
menu.addEventListener("click", (event) => {
    // Toggle the menu open/close state
    if (on === 0) {
        // Open the menu
        document.querySelector("#menu-options").style.height = "90vw";
        document.querySelector("#menu-shadow").style.height = "100vh";
        document.querySelector(".ri-menu-line").style.display = "none";
        document.querySelector(".ri-close-line").style.display = "flex";
        // After a short delay, make the menu options visible
        setTimeout(() => {
            document.querySelector("#menu-options-text").style.display = "block";
        }, 100);
        on = 1;
    } else {
        // Close the menu
        document.querySelector("#menu-options").style.height = "0px";
        document.querySelector("#menu-shadow").style.height = "0px";
        document.querySelector(".ri-menu-line").style.display = "flex";
        document.querySelector(".ri-close-line").style.display = "none";
        // After a short delay, make the menu options invisible
        setTimeout(() => {
            document.querySelector("#menu-options-text").style.display = "none";
            document.querySelector("#menu-options-text").style.display = "none";
        }, 50);
        on = 0;
    }
});

// fixed img

const fixed_img = document.querySelector("#fixed-img");

const fixed_video = document.querySelector("#fixed-video");
const video = document.querySelector("#video");
let d = document.querySelectorAll(".img");
let link = document.querySelector("#fixed-link");
document.querySelector("#featured-container").addEventListener("mouseenter", () => {
    fixed_img.style.display = "block";
})
document.querySelector("#featured-container").addEventListener("mouseleave", () => {
    fixed_img.style.display = "none";
})
/**
 * Function to change the source of the fixed image
 * when the user hovers over a different image
 * @param {MouseEvent} event - The mouse event
 */
d.forEach(value => {
    /**
     * Add an event listener to the current image
     * to detect when the user hovers over it
     */
    value.addEventListener("mouseenter", event => {
        /**
         * Check if the current image has a data-img attribute
         * If it does, then change the source of the fixed image
         * to the value of the attribute
         */
        if (value.hasAttribute("data-img")) {
            fixed_img.src = value.getAttribute("data-img");
        }
    });
});
const tab1 = document.querySelector("#service1");
const tab2 = document.querySelector("#service2");
const tab3 = document.querySelector("#service3");
//tab1
tab1.addEventListener("click", () => {
    document.querySelector("#tab-1").style.display = "block";
    document.querySelector("#tab-2").style.opacity = "0";
    document.querySelector("#tab-3").style.opacity = "0";
    document.querySelector("#tab-2").style.display = "none";
    document.querySelector("#tab-3").style.display = "none";
    document.querySelectorAll("#services-menu a")[0].style.borderLeft = "3px solid #FE330A";
    document.querySelectorAll("#services-menu a")[1].style.borderLeft = "3px solid #504A45";
    document.querySelectorAll("#services-menu a")[2].style.borderLeft = "3px solid #504A45";
    document.querySelector("#tab-1").style.transition = "all, opacity 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335)";
    tab_no = 0;
    tab1.style.opacity = "1";
    tab2.style.opacity = ".3";
    tab3.style.opacity = ".3";
    setTimeout(() => {
        document.querySelector("#tab-1").style.opacity = "1";
    }, 200);

});
//tab2
tab2.addEventListener("click", () => {
    document.querySelector("#tab-2").style.display = "block";
    document.querySelector("#tab-1").style.opacity = "0";
    document.querySelector("#tab-3").style.opacity = "0";
    document.querySelector("#tab-1").style.display = "none";
    document.querySelector("#tab-3").style.display = "none";
    document.querySelectorAll("#services-menu a")[0].style.borderLeft = "3px solid #504A45";
    document.querySelectorAll("#services-menu a")[1].style.borderLeft = "3px solid #FE330A";
    document.querySelectorAll("#services-menu a")[2].style.borderLeft = "3px solid #504A45";
    document.querySelector("#tab-2").style.transition = "all, opacity 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335)";
    tab_no = 1;
    tab1.style.opacity = ".3";
    tab2.style.opacity = "1";
    tab3.style.opacity = ".3";
    setTimeout(() => {
        document.querySelector("#tab-2").style.opacity = "1";
    }, 200);
});
//tab3
tab3.addEventListener("click", () => {
    document.querySelector("#tab-3").style.display = "block";
    document.querySelector("#tab-1").style.opacity = "0";
    document.querySelector("#tab-2").style.opacity = "0";
    document.querySelector("#tab-1").style.display = "none";
    document.querySelector("#tab-2").style.display = "none";
    document.querySelectorAll("#services-menu a")[0].style.borderLeft = "3px solid #504A45";
    document.querySelectorAll("#services-menu a")[1].style.borderLeft = "3px solid #504A45";
    document.querySelectorAll("#services-menu a")[2].style.borderLeft = "3px solid #FE330A";
    document.querySelector("#tab-3").style.transition = "all, opacity 300ms cubic-bezier(0.6, 0.04, 0.98, 0.335)";
    tab1.style.opacity = ".3";
    tab2.style.opacity = ".3";
    tab3.style.opacity = "1";
    tab_no = 2;
    setTimeout(() => {
        document.querySelector("#tab-3").style.opacity = "1";
    }, 200);
});

/**
 * This function is called when the user scrolls the page.
 * It checks if the user is currently viewing the services section of the page.
 * If the user is viewing the services section, it changes the translateY property of the images in the section.
 * The translateY property is changed based on the position of the scroll bar.
 * @param {Event} event - The scroll event.
 */
let service_container = document.querySelector("#service-container");
let store_value = document.querySelector(".services-images").getBoundingClientRect().top;
let currentTranslate = 0.045;
document.addEventListener("scroll", function () {
    /**
     * Get the bounding rectangle of the services container.
     * The bounding rectangle is the smallest rectangle that contains the element and its margin, border, and padding.
     * @type {DOMRect}
     */

    /**
     * Check if the services container is currently in the viewport.
     * The viewport is the area of the screen that the user is currently viewing.
     * The services container is considered to be in the viewport if its top is less than or equal to the window's inner height, and its bottom is greater than or equal to 0.
     */
    if (service_container.getBoundingClientRect().top <= window.innerHeight && service_container.getBoundingClientRect().bottom >= 0) {
        /**
         * Get the current translateY value of the images in the services container.
         * The translateY value is the value of the transform property of the images that controls their vertical position.
         */

        /**
         * Check if the user is currently viewing the top or bottom of the services container.
         * If the user is viewing the top of the services container, increment the translateY value.
         * If the user is viewing the bottom of the services container, decrement the translateY value.
         */
        if (store_value <= document.querySelectorAll(".services-images")[tab_no].getBoundingClientRect().top) {
            currentTranslate += 0.045;
            store_value = document.querySelectorAll(".services-images")[tab_no].getBoundingClientRect().top
            console.log("top")
        } else {
            currentTranslate -= 0.045;
            store_value = document.querySelectorAll(".services-images")[tab_no].getBoundingClientRect().top;
            console.log("bottom")

        }

        /**
         * Set the translateY property of the images in the services container.
         * The translateY property is set to the current translateY value.
         */
        document.querySelectorAll("#services-tabs-contents img").forEach(function (value) {
            value.style.transform = `translate3d(0px,${-currentTranslate}%,0px) scale3d(1.1,1.1,1)`;
        });
    }
});



var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// slider custom cursor

let cursor = document.querySelector("#clients-container i");
document.querySelector("#swapper-main-component").addEventListener("mouseenter", () => {
    cursor.style.display = "block";
    setTimeout(() => {
        cursor.style.opacity = "1"
        cursor.style.padding = "2.5vw 3vw"
    }, 50);
})

document.querySelector("#swapper-main-component").addEventListener("mousemove", (e) => {
    custom_cursor(e.clientX, e.clientY);
})

/**
 * Adds an event listener to the main component that listens for the mouse to
 * leave the component. When the mouse leaves the component, the custom cursor
 * is hidden after a short delay.
 */
document.querySelector("#swapper-main-component").addEventListener("mouseleave", () => {
    // Reset the padding of the cursor so it doesn't overlap with other elements
    cursor.style.padding = "0vw";
    // Hide the cursor after a short delay
    setTimeout(() => {
        cursor.style.opacity = "0";
        cursor.style.display = "none";
    }, 60);
});


/**
 * Updates the position of the custom cursor.
 *
 *The x-coordinate of the cursor position.
 *The y-coordinate of the cursor position.
 * 
 */
function custom_cursor(x, y) {
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
};


/**
 * When the page is loaded, this function is called. It hides the main content
 * and displays the animation. After the animation is finished, it shows the
 * main content again.
 */
window.addEventListener("load", () => {
    animation();
});

/**
 * This function is called when the page is loaded. It hides the main content
 * and displays the animation. After the animation is finished, it shows the
 * main content again.
 */
function animation() {
    // Hide the main content
    document.querySelector("#Contents").style.display = "none";

    // Wait for 2.2 seconds and then set the overflowY property of the body to
    // "scroll" so that the user can scroll down the page.
    setTimeout(() => {
        document.body.style.overflowY = "scroll";
    }, 2200);

    // Wait for 2.1 seconds and then set the height of the animation container
    // to 0, so that the animation is finished.
    setTimeout(() => {
        document.querySelector("#body_animation").style.height = "0vh";
    }, 2100);

    // Show the environments section
    document.querySelector("#Environments").style.display = "flex";

    // Wait for 0.7 seconds and then hide the environments section and show the
    // experiences section
    setTimeout(() => {
        document.querySelector("#Environments").style.display = "none";
        document.querySelector("#Experiences").style.display = "flex";
    }, 700);

    // Wait for 1.4 seconds and then hide the experiences section and show the
    // main content
    setTimeout(() => {
        document.querySelector("#Experiences").style.display = "none";
        document.querySelector("#Contents").style.display = "flex";
    }, 1400);
}
