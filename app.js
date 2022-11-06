const btnMenu=document.getElementById('btn-menu');
const navBar=document.getElementById('nav');
const menuItems=document.getElementById('menu-items');
let expand=false;
btnMenu.addEventListener('click',()=>{
    if(expand){
        navBar.style.cssText='background: transparent';
        menuItems.style.height='';
    }else{
        navBar.style.cssText='background: #000';
        menuItems.style.height='100vh';
    }
    expand=!expand;
})