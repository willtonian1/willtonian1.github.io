const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click', mobileMenu )

// show acitve menu when scrolling
//uses the ids for the menus(html)
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos)

    //adds the highlight class to my menu items

    if(window.innerWidth > 960 && scrollPos < 300){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 900){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1800){
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    

        if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
        }
    };

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const MenuBars = document.querySelector('.is-active')
    if(window.innerWidth <=768 && MenuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')

    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)