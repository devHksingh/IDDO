const mobileBtnElement = document.querySelector('.mobile-btn')
// console.log(mobileBtnElement);
const mobileMenuCloseElement = document.querySelector(".mobile-menu-close-btn")
const mobileMenuOpenElement = document.querySelector(".mobile-menu-btn")
const mobileMenuElement = document.querySelector(".mobile-menu")
const mobileMenuLinkElement = document.querySelector(".mobile-menu ul li a")

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

console.log(mobileMenuLinkElement);
