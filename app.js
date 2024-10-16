window.onload = function() {
    let burger = document.querySelector('#burger');
    let nav = document.querySelector('.navbar');
    let ul = document.querySelector('.ul');
    let navbar_logo = document.querySelector('#navbar_logo');

    burger.addEventListener('click' , ()=>{
        nav.classList.toggle('nav-resp');
        ul.classList.toggle('ul-resp');
    })   

    // show active menu when scrolling
    const  highLightmenu = () =>{
        const elem = document.querySelector('.highlight');
        const homeMenu = document.querySelector('#home-page');
        const aboutMenu = document.querySelector('#about-page');
        const servicesMenu = document.querySelector('#services-page');
        let scrollPos = window.scrollY;
    

    // adds 'highlight' class to my menu item 
    if (window.innerWidth > 500 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 500 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 500 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if ( (elem && window.innerWidth<500 && ScrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highLightmenu);
window.addEventListener('click', highLightmenu);
}