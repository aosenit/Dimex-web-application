  
const toggle = document.querySelector('.toggle')
const navUl = document.querySelector('.header-ul')
const changeToggle = document.getElementById('toggle-icon')

/*...shoes the menu */
function showMenu() {
    navUl.classList.toggle('show')
}


/*...control toggle button */
function toggleEffect () {

    toggle.addEventListener('click', ()=>{

        showMenu()

        if (changeToggle.classList.contains('fa-bars')) {
            changeToggle.classList.toggle('fa-times')
        } 

    })
}

/*...control navlist items */
const navList = document.querySelectorAll('.header-li')
function navEffect () {

        navList.forEach((list) => list.classList.remove('active'))
        this.classList.add('active')

       showMenu()

       if (changeToggle.classList.contains('fa-times')) {
       toggle.classList.remove('fa-times')
} 
   
}
navList.forEach(list => list.addEventListener('click', navEffect ))

toggleEffect()



/*===== SCROLL REVEAL ANIMATION =====*/

const ft = ScrollReveal({
    origin: 'right',
    distance: '500px',
    duration: 2000,
    reset: true
});




/*SCROLL*/
ft.reveal('.hide-bg',{delay: 200}); 
