const currencyConverter = document.querySelector('.curr-convert');

const rvrsBtn = currencyConverter.querySelector('.reverseBtn');
const currencyDefault = currencyConverter.querySelector('#currency-code-input');
const currency2Convert = currencyConverter.querySelector('#currency-code-output')

const currencyInput = currencyConverter.querySelector('.currency-input');
const currencyOutput = currencyConverter.querySelector('.currency-output')
const numBtn = currencyConverter.querySelectorAll('.num');
const dotBtn = currencyConverter.querySelector('button.dot');
const deleteBtn = currencyConverter.querySelector('button.del');
const clearBtn = currencyConverter.querySelector('button.ce');

const questionCircles = currencyConverter.querySelectorAll('.fa-circle-question');
const currencyName = currencyConverter.querySelectorAll('.currency-name');

const currencyConvert = () =>{
    let fromCode = currencyDefault.value;
    let toCode = currency2Convert.value;
    const URL = `https://api.exchangerate.host/convert?from=${fromCode}&to=${toCode}`;
    fetch(URL)
        .then(res=>res.json())
        .then(data => {
            const rate = data.info.rate;
            const inputValue = parseFloat(currencyInput.textContent);
            currencyOutput.textContent = Number(inputValue * rate).toFixed(2);
        })
        .catch(err=>console.log("ERROR: " + err));
}



function appendCodeList(){
    const URL = 'https://api.exchangerate.host/symbols';
    fetch(URL)
        .then(res=>res.json())
        .then(data =>{ 
            const codesArray = Object.keys(data.symbols)
            codesArray.forEach(code =>{
                const newOption1 = document.createElement('option')
                const newOption2 = document.createElement('option')
                newOption1.setAttribute('value', code);
                newOption1.textContent = code;
                newOption2.setAttribute('value', code);
                newOption2.textContent = code;
                currencyDefault.append(newOption1);
                currency2Convert.append(newOption2);
            })
        })
        .catch(err=>console.error("ERROR: "+ err))
}

function setCurrencyName(code, i){
    const URL = 'https://api.exchangerate.host/symbols'; 
    fetch(URL)
    .then(res=>res.json())
    .then(data =>{ 
        currencyName[i].textContent = data.symbols[code].description;
    })
    .catch(err=>console.error("ERROR: "+err))
}

function checkCurrencyName(){
    for(let i = 0; i < questionCircles.length; i++){
        let currencyCode;
        i == 0 ? currencyCode = currencyDefault.value : currencyCode = currency2Convert.value
        questionCircles[i].addEventListener('mouseenter', ()=>{
            setCurrencyName(currencyCode, i)
            currencyName[i].classList.remove('hide');
        });
        questionCircles[i].addEventListener('mouseleave', ()=>{
            setCurrencyName(currencyCode, i)
            currencyName[i].classList.add('hide');
        });
    }
}

setInterval(currencyConvert, 100);
appendCodeList();
questionCircles.forEach(questionMark=>questionMark.addEventListener('mouseover', checkCurrencyName))

numBtn.forEach(button => button.addEventListener('click', e=>{
    console.log(e.target.textContent);
    if(e.target.textContent == 1){
        currencyInput.textContent += e.target.textContent;
    }
    else{
        currencyInput.textContent == 1 ? currencyInput.textContent = e.target.textContent: currencyInput.textContent += e.target.textContent;
    }
}))
rvrsBtn.addEventListener('click', ()=>{
    const arrows = rvrsBtn.firstChild;
    arrows.classList.toggle('rotate');
    const code = currencyDefault.value
    currencyDefault.value = currency2Convert.value;
    currency2Convert.value = code;
})
dotBtn.addEventListener('click', ()=>currencyInput.textContent +='.')
deleteBtn.addEventListener('click', ()=>{
    currencyInput.textContent!= 1? currencyInput.textContent = currencyInput.textContent.slice(0, -1): null;
    currencyInput.textContent == ''?currencyInput.textContent = 1: null;
})
clearBtn.addEventListener('click', ()=>{
    currencyInput.textContent = 1;
    currencyOutput.textContent = null;
})

document.addEventListener('keydown', (e)=>{
    if(!currencyConverter.classList.contains('hide')){
        if(e.key >= 0 || e.key <= 9){
            currencyInput.textContent == 0?currencyInput.textContent = e.key: currencyInput.textContent += e.key;
            numBtn.forEach((button)=>{
                if(button.innerHTML == e.key){
                    button.classList.toggle('num-pressed');
                    setTimeout(()=>{
                    button.classList.toggle('num-pressed');
                    }, 220);
                }
            })
        }
        else{
            switch(e.key){
                case 'Escape':
                    currencyInput.textContent =null;
                    clearBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        clearBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Backspace':
                    let str = currencyInput.textContent;
                    currencyInput.textContent = str.slice(0,-1)
                    deleteBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        deleteBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Delete':
                    currencyInput.textContent = null;
                    clearBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        clearBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case ',':
                    currencyInput.textContent += '.';
                    dotBtn.classList.toggle('btn-pressed');
                    setTimeout(()=>{
                        dotBtn.classList.toggle('btn-pressed');
                    }, 220)
                    break;
                case '.':
                    currencyInput.textContent += '.';
                    dotBtn.classList.toggle('btn-pressed');
                    setTimeout(()=>{
                        dotBtn.classList.toggle('btn-pressed');
                    }, 220)
                    break;
                default:
                    null;
                    break;
            }
        }
    }
})