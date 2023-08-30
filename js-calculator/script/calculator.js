const calculator = document.querySelector('.calculator');

const inputScreen = calculator.querySelector('.input');
const outputScreen = calculator.querySelector('.current-operation');
const errScreen = calculator.querySelector('.error-msg')

const numBtns = calculator.querySelectorAll('button.num')
const signBtns = calculator.querySelectorAll('.sign')
const piBtn = calculator.querySelector('.pi-num');
const eBtn = calculator.querySelector('.e-num');
const ceBtn = calculator.querySelector('.ce');
const cBtn = calculator.querySelector('.c');
const delBtn = calculator.querySelector('.del');

let num;
let result = null;
let done = false;
let divide = false;

document.addEventListener('keydown', (e)=>{
    if(!calculator.classList.contains('hide')){
        if(done){
            outputScreen.textContent = null;
            done = false;
        }
        if(e.key >= 0 || e.key <= 9){
            inputScreen.textContent == 0?inputScreen.textContent = e.key: inputScreen.textContent += e.key;
            numBtns.forEach((button)=>{
                if(button.innerHTML == e.key){
                    button.classList.toggle('num-pressed');
                    setTimeout(()=>{
                    button.classList.toggle('num-pressed');
                    }, 220)
                }
            })
        }
        else{
            const lastSign = outputScreen.textContent.slice(-1);
            switch(e.key){ 
                case '/':
                    outputScreen.textContent += inputScreen.textContent;
                    inputScreen.textContent = null;
                    if(isNaN(lastSign)){
                        outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                        outputScreen.textContent += '/';
                    }else{
                        outputScreen.textContent += '/';
                    }
                    break;
                case '*':
                    outputScreen.textContent += inputScreen.textContent;
                    inputScreen.textContent = null;
                    if(isNaN(lastSign)){
                        outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                        outputScreen.textContent += '*';
                    }else{
                        outputScreen.textContent += '*';
                    }
                    break;
                case '-':
                    outputScreen.textContent += inputScreen.textContent;
                    inputScreen.textContent = null;
                    if(isNaN(lastSign)){
                        outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                        outputScreen.textContent += '-';
                    }else{
                        outputScreen.textContent += '-';
                    }
                    break;
                case '+':
                    outputScreen.textContent += inputScreen.textContent;
                    inputScreen.textContent = null;
                    if(isNaN(lastSign)){
                        outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                        outputScreen.textContent += '+';
                    }else{
                        outputScreen.textContent += '+';
                    }
                    break;
                case 'Enter':
                    outputScreen.textContent += inputScreen.textContent;
                    result = eval(outputScreen.textContent);
                    outputScreen.textContent += ' =';
                    inputScreen.textContent = result;
                    done = true;
                    break;
                case 'Escape':
                    inputScreen.textContent =null;
                    outputScreen.textContent = null;
                    errScreen.textContent = null;
                    cBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        cBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Backspace':
                    let str = inputScreen.textContent;
                    inputScreen.textContent = str.slice(0,-1)
                    delBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        delBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Delete':
                    inputScreen.textContent = null;
                    ceBtn.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        ceBtn.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case ',':
                    inputScreen.textContent += '.';
                    dotBtn.classList.toggle('btn-pressed');
                    setTimeout(()=>{
                        dotBtn.classList.toggle('btn-pressed');
                    }, 220)
                    break;
                case '.':
                    const dotBtn = calculator.querySelector('.dot');
                    inputScreen.textContent += '.';
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
numBtns.forEach((button) => button.addEventListener('click', (e)=> inputScreen.textContent == 0?inputScreen.textContent = e.target.textContent: inputScreen.textContent += e.target.textContent))
signBtns.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(done){
            outputScreen.textContent = null;
            done = false;
        }
        errScreen.textContent = null;
        num = parseFloat(inputScreen.textContent);
        if(e.target.classList[0]=='change-sign'){
            result = num * (-1);
            inputScreen.textContent = result;
        }
        else{
            outputScreen.textContent += inputScreen.textContent;
            inputScreen.textContent = 0;
        }
        const lastSign = outputScreen.textContent.slice(-1);
        switch(e.target.classList[0]){
            case 'equal':
                if(divide == true && num == 0){
                    errScreen.textContent = "You can't divide by 0!"
                    inputScreen.textContent =' '
                    divide = false;
                }
                else{
                    inputScreen.textContent = eval(outputScreen.textContent);
                    
                }
                outputScreen.textContent += ' ='
                done = true;
                break;
            case 'add':
                if(isNaN(lastSign)){
                    outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                    outputScreen.textContent += '+';
                }else{
                    outputScreen.textContent += '+';
                }
                break;
            case 'subtract':
                if(isNaN(lastSign)){
                outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                outputScreen.textContent += '-';
            }else{
                outputScreen.textContent += '-';
            }
                break;
            case 'multiply':
                if(isNaN(lastSign)){
                    outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                    outputScreen.textContent += '*';
                }else{
                    outputScreen.textContent += '*';
                }
                break;
            case 'factorial':
                result = 1;
                for(let i = 1; i <= num; i++){
                    result *= i;
                }
                outputScreen.textContent = `${num}! =`;
                inputScreen.textContent = result;
                done = true;
                break;
            case 'abs':
                result = Math.abs(num);
                outputScreen.textContent = `|${num}| =`;
                inputScreen.textContent = result;
                done = true;
                break;
            case 'divide':
                if(isNaN(lastSign)){
                    outputScreen.textContent = outputScreen.textContent.slice(0, -1);
                    outputScreen.textContent += '/';
                }else{
                    outputScreen.textContent += '/';
                }
                divide = true;
                break;
            case 'square-root':
                if(num <= 0){
                    errScreen.textContent = 'ERROR: Nie można pierwiastkować liczb niedodatnich';
                }
                else{
                    result = Math.sqrt(num);
                    outputScreen.textContent = `sqrt(${num}) =`
                    inputScreen.textContent = result;
                }
                done = true;
                break;
            case 'square':
                result = num*num;
                outputScreen.textContent = `${num} ^ 2 =`;
                inputScreen.textContent = result;
                done = true;
                break;
            case 'reverse':
                if(num == 0){
                    errScreen.textContent = 'ERROR: Nie mozna dzielic przez 0'
                }
                else{
                    result = 1/(num);
                    outputScreen.textContent = `1 / (${num}) =`;
                    inputScreen.textContent = result;
                }
                done = true;
                break;
        }
    })
})
piBtn.addEventListener('click', ()=>inputScreen.textContent = Math.PI)
eBtn.addEventListener('click', ()=>inputScreen.textContent = Math.E)
ceBtn.addEventListener('click', ()=>inputScreen.textContent =0)
cBtn.addEventListener('click', ()=>{
    inputScreen.textContent = 0;
    outputScreen.textContent = null;
    errScreen.textContent = null;
})
delBtn.addEventListener('click', () => {
    inputScreen.textContent != 0?inputScreen.textContent = inputScreen.textContent.slice(0,-1): null
    inputScreen.textContent == ''?inputScreen.textContent =0: null;
})