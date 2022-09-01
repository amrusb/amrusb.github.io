const ageSpan = document.querySelector('.age');

const checkAge = () =>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let age = 0;
    console.log(year);
    console.log(month);
    console.log(day);
    if(month == 6 && day >=6){
        age = year - 1999;
            console.log(age);
    }
    else if(month > 6){
            age = year - 1999;
            console.log(age);
    }
    ageSpan.textContent = age;
}

checkAge();