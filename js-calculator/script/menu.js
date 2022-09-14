const barsMenuBtn = document.querySelector('.fa-bars');
const closeMenuBtn = document.querySelector('.fa-xmark');
const fullMenu = document.querySelector('.full-menu');
const menuItems = document.querySelector('.menuItems');
const creditsDiv = document.querySelector('.credits');
const menuInfo = document.querySelector('.menu-display-info');

const calcBtn = document.querySelector('.calc');
const calcBdy = document.querySelector('.calculator');

const tempBtn = document.querySelector('.temp');
const tempBdy = document.querySelector('.temp-convert');

const currencyBtn = document.querySelector('.curr');
const currencyBdy = document.querySelector('.curr-convert');

const openMenu = ()=>{
    barsMenuBtn.classList.toggle('rotate')
    setTimeout(()=>{
        barsMenuBtn.classList.toggle('hide')
        barsMenuBtn.classList.toggle('rotate')
    }, 700)
    setTimeout(()=>{
        closeMenuBtn.classList.toggle('hide')
    }, 700)
    setTimeout(()=>{
        fullMenu.classList.toggle('side-roll')
    }, 400)
    setTimeout(()=>{
        creditsDiv.classList.toggle('hide');
        menuItems.classList.toggle('hide');
    }, 1000)
}
const closeMenu = ()=>{
    closeMenuBtn.classList.toggle('rotate')
    setTimeout(()=>{
        closeMenuBtn.classList.toggle('hide')
    }, 700)
    setTimeout(()=>{
        barsMenuBtn.classList.toggle('hide')
    }, 700)
    setTimeout(()=>{
        fullMenu.classList.toggle('side-roll')
    }, 300)
    setTimeout(()=>{
        creditsDiv.classList.toggle('hide');
        menuItems.classList.toggle('hide');
    }, 400)
}
barsMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

calcBtn.addEventListener('click', () =>{
    menuInfo.textContent = "Calculator";

    calcBtn.classList.add('choosen');
    tempBtn.classList.remove('choosen');
    currencyBtn.classList.remove('choosen');

    calcBdy.classList.remove('hide');
    calcBdy.classList.add('show');

    currencyBdy.classList.add('hide');
    currencyBdy.classList.remove('show');

    tempBdy.classList.add('hide')
    tempBdy.classList.remove('show');
    closeMenu();
})

tempBtn.addEventListener('click', () =>{
    menuInfo.textContent = "Temperature";

    tempBtn.classList.add('choosen');
    calcBtn.classList.remove('choosen');
    currencyBtn.classList.remove('choosen');

    tempBdy.classList.remove('hide');
    currencyBdy.classList.add('hide');
    calcBdy.classList.add('hide')
    closeMenu();
})
currencyBtn.addEventListener('click', () =>{
    menuInfo.textContent = "Currency";
    
    currencyBtn.classList.add('choosen');
    calcBtn.classList.remove('choosen');
    tempBtn.classList.remove('choosen');

    currencyBdy.classList.remove('hide');
    tempBdy.classList.add('hide');
    calcBdy.classList.add('hide')
    closeMenu();
})