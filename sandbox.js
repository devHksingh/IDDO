const mobileBtnElement = document.querySelector('.mobile-btn')
// console.log(mobileBtnElement);
const mobileMenuCloseElement = document.querySelector(".mobile-menu-close-btn")
const mobileMenuOpenElement = document.querySelector(".mobile-menu-btn")
const mobileMenuElement = document.querySelector(".mobile-menu")
const mobileMenuLinkElement = document.querySelector(".mobile-menu ul li a")
// const deskMenuElement = document.querySelector('.desktop-menu')
const deskMenuLiAElements = document.querySelectorAll('.desktop-menu-li a')
// const menuATagElement = document.querySelector('.desktop-menu-li a')
// const deskMenu1Element = document.querySelector('#d-menu-1')
// const deskMenu2Element = document.querySelector('#d-menu-2')
// const deskMenu3Element = document.querySelector('#d-menu-3')
// const deskMenu4Element = document.querySelector('#d-menu-4')
// const deskMenu5Element = document.querySelector('#d-menu-5')

// const windowPathName = window.location.pathname
// deskMenuLiElements.forEach(navLink =>{
//     console.log(navLink);
//     // if(navLink.href.includes(windowPathName)){
//     //     navLink.classList.add('menu-active')
//     //     console.log(navLink.href);
        
//     // }else{
//     //     navLink.classList.remove('menu-active')
//     // }
// })


function placeBorder(id){
    deskMenuLiAElements.forEach((a)=>{
        a.classList.remove('menu-active');
    })
    console.log(id);
    id.classList.add('menu-active')
    
}

const openMenu = ()=>{
    mobileMenuOpenElement.style.display="none"
    mobileMenuCloseElement.style.display="block"
    mobileMenuElement.style.display="block"
}

const closeMenu = ()=>{
    console.log("close");
    mobileMenuOpenElement.style.display="block"
    mobileMenuCloseElement.style.display="none"
    mobileMenuElement.style.display="none"
    
    
}

mobileMenuOpenElement.addEventListener('click',openMenu)

mobileMenuCloseElement.addEventListener('click',closeMenu)
mobileMenuLinkElement.addEventListener('click',(e)=>{
    console.log("clicked a tag");
    
    mobileMenuElement.style.display="none"
    mobileMenuOpenElement.style.display="block"
    mobileMenuCloseElement.style.display="none"
})

// console.log(deskMenuLiElement);

// deskMenuElement.addEventListener('click',function(e){
//     console.log("a click");
//     console.log(deskMenuElement);
//     console.log(deskMenuLiHighperLinkElement);
//     console.log(menuATagElement);
//     console.log(e);
//     // menuATagElement.style.color ="yellow"

    
// })


