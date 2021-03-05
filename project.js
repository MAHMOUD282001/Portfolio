const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu');



const navLink = document.querySelectorAll('.nav_link')


function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navmenu.classList.remove('show-menu');

}

navLink.forEach(n=>n.addEventListener('click',linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-50;
        sectionId = current.getAttribute('id');


        if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive);



function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY>=200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');

}

window.addEventListener('scroll',scrollHeader);




function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY>=560) scrollTop.classList.add('show-scroll'); else header.classList.remove('show-scroll');

}

window.addEventListener('scroll',scrollTop);




const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});




const linkPortfolio = document.querySelectorAll('.portfolio_item');

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-Portfolio'))
        this.classList.add('active-Portfolio');
    }
}

linkPortfolio.forEach(l => l.addEventListener('click',activePortfolio))






const swiper = new Swiper('.testimonial_container', {
    loop: true,
    grapCurser: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
  });



