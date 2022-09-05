const galleryImages = document.querySelectorAll('.gallery img');

const checkAge = () =>{  //setting my current age
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let age;
    if(month == 6 && day >=6){
        age = year - 1999;
    }
    else if(month > 6){
            age = year - 1999;
    }
    $(".age").text(age);
}

$(document).ready(function(){
    checkAge();
    $('.box').click(function(){
        this.classList.toggle('box-clicked')
         galleryImages.forEach(img => {
            if(img.alt !== this.children[0].alt){
               $(img.parentElement).removeClass('box-clicked');
            }
        });
    })
    $('*').click(function(e){
        if(!e.target.parentElement.classList.contains('box')){
        galleryImages.forEach(img =>{
            $(img.parentElement).removeClass('box-clicked');
        })
    }
    })
    const sign = document.querySelector('.python');

    $(sign.parentElement).mouseenter(function(){
        $(sign).attr('icon', 'logos:python')
    })
    $(sign.parentElement).mouseleave(function(){
        $(sign).attr('icon', 'simple-icons:python')
    })
});
