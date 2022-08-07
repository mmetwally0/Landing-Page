// Select Elements from the DOM
const sections = document.querySelectorAll('section');
const navLinks = document.querySelector('.navigation-links');


// Create A document fragment to store the 'li' elements before appending them to the DOM
const fragment = document.createDocumentFragment();


// Looping through each of the sections
sections.forEach((section) => {
    // Creating a new li Element and setting its contents to the data-set from section.
    const li = document.createElement('li');
    li.textContent = `Section ${section.dataset.nav}`;
    li.setAttribute('id', `${section.dataset.nav}`)
    li.classList.add('nav-link')

    // Adding the Element to the fragment
    fragment.appendChild(li);
});

// Adding the Navigation links to the DOM
navLinks.appendChild(fragment);

// Creating a click event listener
navLinks.addEventListener('click', (event) => {
    const clickedLink = `section-${event.target.id}`
    event.preventDefault()
    
    // Scroll to the desired section
    const element = document.querySelector(`#${clickedLink}`)
    
    element.scrollIntoView()
})

// Creating a scroll event listener
document.addEventListener('scroll', (event) => {
    // // use inner height and this.scrollY to get the height scrolled.
    // const section = document.querySelector('#section-one')
    // const rect = section.getBoundingClientRect()
    // const link = document.querySelector('#one')
    // // console.log(rect.top)
    // // console.log(rect.bottom)
    
    // if ((0 - rect.height) <= rect.top && rect.top < 1) {
    //     link.classList.add('active')
    // } else {
        
    //     link.classList.remove('active')
    // }
    //---------------------------------

    // Loop Through Every section on page
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navLinks = document.querySelectorAll('nav-link')
        const navLink = document.querySelector(`#${section.dataset.nav}`)
        
        if ((0 - rect.height) <= rect.top && rect.top < 0) {
            navLink.classList.add('active')
        } else {
            navLink.classList.remove('active')
        }
    })
})

const btn = document.querySelector('.menu-btn')

btn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    btn.classList.toggle('animate');

})