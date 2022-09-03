const checkAge = () =>{  //setting my current age
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let age;
    if(month == 6 && day >=6){
        age = year - 1999;
            console.log(age);
    }
    else if(month > 6){
            age = year - 1999;
            console.log(age);
    }
    $(".age").text(age);
    // ageSpan.textContent = age;
}

$(document).ready(function(){
    checkAge();
});
