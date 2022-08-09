// Select Elements from the DOM
const sections = document.querySelectorAll("section");
const navLinks = document.querySelector(".navigation-links");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const btnScrollToTop = document.querySelector('#btnScrollToTop');

const isInViewPort = function(element) {
    const rect = element.getBoundingClientRect();
    // Returns true if the element is in view port
    return (100 - rect.height <= rect.top && rect.top < 100)
}

// Create A document fragment to store the 'li' elements before appending them to the DOM
const fragment = document.createDocumentFragment();

// Looping through each of the sections
sections.forEach((section) => {
    // Creating a new li Element and setting its contents to the data-set from section.
    const li = document.createElement("li");
    li.textContent = `Section ${section.dataset.nav}`;
    li.setAttribute("id", `${section.dataset.nav}`);
    li.classList.add("nav-link");

    // Adding the Element to the fragment
    fragment.appendChild(li);
});

// Adding the Navigation links to the DOM
navLinks.appendChild(fragment);

// Creating a click event listener
navLinks.addEventListener("click", (event) => {
    const clickedLink = `section-${event.target.id}`;
    event.preventDefault();

    // Scroll to the desired section
    const element = document.querySelector(`#${clickedLink}`);

    element.scrollIntoView({
        behavior: 'smooth'
    });
});

// Creating a scroll event listener
document.addEventListener("scroll", (event) => {
    // Loop Through Every section on page
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navLink = document.querySelector(`#${section.dataset.nav}`);
        const secContainer = document.querySelector(`#${section.id} > .section-container`)

        // Check if the section is in view port
        if (isInViewPort(section)) {
            navLink.classList.add("active");
            secContainer.classList.add('active');

        } else {
            navLink.classList.remove('active');
            secContainer.classList.remove('active')
        }
    });

    // Show nav Bar on scroll
    nav.classList.remove("hide");

    // Hide Nav Bar when not scrolling
    let prevScroll = this.scrollY;

    setTimeout(() => {
        const currentScroll = this.scrollY;
        if (currentScroll === prevScroll && this.scrollY != 0 && !(navLinks.classList.contains('open'))) {
            nav.classList.add("hide");
        }
    }, 1000);

    // Show Scroll to top button if one page scrolled
    if (this.scrollY >= window.innerHeight) {
        btnScrollToTop.classList.add('scroll-btn-visible')
    } else {
        btnScrollToTop.classList.remove('scroll-btn-visible')
    }
});

// Add menu Button animation and function
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("animate");
});

// Show nav Bar If the page is scrolled to the top
if (window.scrollY === 0) {
    nav.classList.remove("hide")
};

// Scroll To Top
btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})