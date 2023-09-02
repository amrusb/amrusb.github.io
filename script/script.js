const galleryImages = document.querySelectorAll('.gallery img');
const posterCounter = galleryImages.length - 1; //ilosc grafik plakatow (liczac od 0)

const setAge = () => {  //setting my current age
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let age;
    if (month == 6 && day >= 6) {
        age = year - 1999;
    }
    else if (month > 6) {
        age = year - 1999;
        
    }
    else{
        age = year - 1999 - 1;
    }
    $(".age").text(age);
}

const portfolioTypes = document.querySelectorAll('.portfolio-type');
const project = document.querySelector(".project-wrapper")
const poster = document.querySelector(".poster-wrapper")


$(document).ready(function () {
    const body =  document.querySelector("body");
    const loadingScreen = document.querySelector(".loading-screen")
    console.log(loadingScreen.classList);
    body.classList.toggle("scrollLock");
    loadingScreen.classList.toggle("hide");
    portfolioTypes.forEach(type =>{
        type.addEventListener("click", (e)=>{
           if(!e.target.classList.contains("active")){
            portfolioTypes.forEach(type =>{
                type.classList.toggle("active");
            })
            poster.classList.toggle("hide");
            project.classList.toggle("hide");
           };
        });
    })
});


window.onload = function(e){ 
    const body =  document.querySelector("body");
    const loadingScreen = document.querySelector(".loading-screen")
    console.log(loadingScreen.classList);
    body.classList.toggle("scrollLock");
    loadingScreen.classList.toggle("hide");
}