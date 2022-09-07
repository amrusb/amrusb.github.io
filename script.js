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
    $('.frame').find('a').hide();
    $('.frame').click(function(){
        $(this).toggleClass('frame-clicked')
        $(this).children('a').fadeToggle();
         galleryImages.forEach(img => {
            if(img.alt !== this.children[0].alt){
               $(img.parentElement).removeClass('frame-clicked');
               $(img).next().fadeOut();
            }
        });
    })

    $('*').click(function(e){
        if(!e.target.parentElement.classList.contains('frame')){
        galleryImages.forEach(img =>{
            $(img).parent().removeClass('frame-clicked');
            $(img).next().fadeOut();
        })
    }
    })

    $('.text-box').slideToggle();
    $('.img-box').click(function(){
        $(this).next().slideToggle(1500);
    });

    $('.python').parent().mouseenter(function(){
        $('.python').attr('icon', 'logos:python');
    })
    $('.python').parent().mouseleave(function(){
        $('.python').attr('icon', 'simple-icons:python');
    })
});
