

let burger = document.querySelector('.burger')
let burgerClose = document.querySelector('.close-pop-up')
let linkClose = document.querySelectorAll('.popup-btn-menu')


const tlMenu = gsap.timeline({defaults: {duration: 0.4}, paused: true})

tlMenu.fromTo('.burger-menu',{opacity: 0}, {opacity: 1, display: 'block'})
        .fromTo('.popup', {x: -100}, {x: 0, display: 'block'}, '<' )

        

burger.addEventListener('click', () => {
    tlMenu.play();
    document.body.style.overflowY = 'hidden'
})

burgerClose.addEventListener('click', () => {
    tlMenu.reverse();
    document.body.style.overflowY = 'scroll'  
})

// linkClose.addEventListener('click', () => {
//     tlMenu.reverse();
//     document.body.style.overflowY = 'scroll'  
// })



function darkMode() {
    const btnDark2 = document.getElementById('dark-btn-mode')
    const body = document.body
    const card = document.querySelectorAll('.item-card')
    const tittle3 = document.querySelectorAll('.title-3')
    const deskr = document.querySelectorAll('.deskr')
    const sectiontitle = document.querySelectorAll('.section-title') 
    const footertext = document.querySelector('.footer-deskr')
    const footerList1 = document.querySelectorAll('.footer-text')
    const footerLink = document.querySelectorAll('.footer-link')
    const footerLink2 = document.querySelectorAll('.footer-link2')
    const fotLogo = document.querySelector('.footer-logo')
    const fotGoogle = document.querySelector('.link-gogle')
    const headerBack = document.querySelector('.ddwfe')
    const headerburrger = document.querySelector('.burger')
    const headerLogo = document.querySelector('.logo')
    const headerDesker = document.querySelector('.header-deskr')
    const svgHead = document.querySelectorAll('.svg-head')
    const popUp = document.querySelector('.popup')
    const headerNav = document.querySelectorAll('.header-text-nav')
    const popUpBtn = document.querySelectorAll('.popup-btn-menu')
    
    const popUpClose = document.querySelector('.pop-up-close')

    const btnDark1 = document.getElementById('dark-btn-mode1')

    const darkText = document.querySelector('.dark-text-btn')

    


    

    
    
    btnDark2.addEventListener('click', () => {
        body.classList.toggle('dark-mode')
        card.forEach(element => {
            element.classList.toggle('card-item-dark')
            
        });
        tittle3.forEach(element => {
            element.classList.toggle('title-dark')
            
        });
        deskr.forEach(element => {
            element.classList.toggle('dark-text')
            
        });
        sectiontitle.forEach(element => {
            element.classList.toggle('section-title-dark')
            
        });
        footertext.classList.toggle('footer-text-dark')
           
        footerList1.forEach(element => {
            element.classList.toggle('footer-list-dark')
            
        });

        footerLink.forEach(element => {
            element.classList.toggle('footer-link-dark')
            
        });
        
        footerLink2.forEach(element => {
            element.classList.toggle('footer-link2-dark')
            
        });

        fotLogo.classList.toggle('footer-logo-dark')

        fotGoogle.classList.toggle('link-gogle-dark')

        headerBack.classList.toggle('ddwfe-dark')

        headerburrger.classList.toggle('burger-dark')

        headerLogo.classList.toggle('logo-dark')

        headerDesker.classList.toggle('header-deskr-dark')

        svgHead.forEach(element => {
            element.classList.toggle('svg-head-dark')
            
        });
        
        popUp.classList.toggle('popup-dark')

        headerNav.forEach(element => {
            element.classList.toggle('header-text-nav-dark')
            
        });

        popUpBtn.forEach(element => {
            element.classList.toggle('popup-btn-menu-dark')
            
        });


        popUpClose.classList.toggle('pop-up-close-dark')



        // dark-btn-mode-mode

        
        btnDark1.classList.toggle('dark-mode-btn1-mode')
        
        btnDark2.classList.toggle('dark-mode-btn-mode')
        
        darkText.classList.toggle('dark-text-btn-mode')

        
    })


    btnDark1.addEventListener('click', () => {
        body.classList.toggle('dark-mode')
        card.forEach(element => {
            element.classList.toggle('card-item-dark')
            
        });
        tittle3.forEach(element => {
            element.classList.toggle('title-dark')
            
        });
        deskr.forEach(element => {
            element.classList.toggle('dark-text')
            
        });
        sectiontitle.forEach(element => {
            element.classList.toggle('section-title-dark')
            
        });
        footertext.classList.toggle('footer-text-dark')
           
        footerList1.forEach(element => {
            element.classList.toggle('footer-list-dark')
            
        });

        footerLink.forEach(element => {
            element.classList.toggle('footer-link-dark')
            
        });
        
        footerLink2.forEach(element => {
            element.classList.toggle('footer-link2-dark')
            
        });

        fotLogo.classList.toggle('footer-logo-dark')

        fotGoogle.classList.toggle('link-gogle-dark')

        headerBack.classList.toggle('ddwfe-dark')

        headerburrger.classList.toggle('burger-dark')

        headerLogo.classList.toggle('logo-dark')

        headerDesker.classList.toggle('header-deskr-dark')

        svgHead.forEach(element => {
            element.classList.toggle('svg-head-dark')
            
        });
        
        popUp.classList.toggle('popup-dark')

        headerNav.forEach(element => {
            element.classList.toggle('header-text-nav-dark')
            
        });

        popUpBtn.forEach(element => {
            element.classList.toggle('popup-btn-menu-dark')
            
        });


        popUpClose.classList.toggle('pop-up-close-dark')


        btnDark1.classList.toggle('dark-mode-btn1-mode')



        
        btnDark2.classList.toggle('dark-mode-btn-mode')
        
        darkText.classList.toggle('dark-text-btn-mode')
        
        

        
    })

}

darkMode()