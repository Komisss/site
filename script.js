let isOpen = false;

let menu = document.getElementsByClassName('mobile-menu-button')[0];

console.log(menu);

menu.addEventListener("click", ()=>{
    
    if(isOpen){
        mobileMenu = document.getElementsByClassName('mobile-menu')[0];
        mobileMenu.classList.remove('mobile-menu');
        mobileMenu.classList.add('mobile-menu-content');
        //mobileMenu.style.display = "none";
    }
    else{
        mobileMenu = document.getElementsByClassName('mobile-menu-content')[0];
        mobileMenu.classList.remove('mobile-menu-content');
        mobileMenu.classList.add('mobile-menu');
    }
    isOpen = !isOpen;
    console.log("click");
});