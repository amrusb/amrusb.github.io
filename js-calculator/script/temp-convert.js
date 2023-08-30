const tempConverter = document.querySelector('.temp-convert');

const reverseBtn = tempConverter.querySelector('.reverseBtn');
const tempDeafult = tempConverter.querySelector('#temp-input-choose');
const temp2Convert = tempConverter.querySelector('#temp-output-choose');

const inputTemp = tempConverter.querySelector('.temp-input');
const outputTemp = tempConverter.querySelector('.temp-output');

const nums = tempConverter.querySelectorAll('button.num');
const changeSign = tempConverter.querySelector('button.change-sign');
const dot = tempConverter.querySelector('button.dot');
const del = tempConverter.querySelector('button.del');
const ce = tempConverter.querySelector('button.ce');

const C2F = (cel) =>{
    return cel * 1.8 + 32.0
}
const F2C = (far) =>{
    return (far - 32.0) / 1.8
}
const C2K = (cel)=>{
    return cel + 273.15
}
const K2C = (kel)=>{
    return kel - 273.15
}
const converter = (temperature)=>{
    let convertedTemp;
    switch(tempDeafult.value){
        case "C":
            switch(temp2Convert.value){
                case "C":
                    convertedTemp = temperature;
                    break;
                case "F":
                    convertedTemp = C2F(temperature);
                    break;
                case "K":
                    convertedTemp = C2K(temperature);
                    break;
            }
            break;
        case "F":
            switch(temp2Convert.value){
                case "C":
                    convertedTemp = F2C(temperature);
                    break;
                case "F":
                    convertedTemp = temperature;
                    break;
                case "K":
                    const temp = F2C(temperature)
                    convertedTemp = C2K(temp);
                    break;
            }
            break;
        case "K":
                switch(temp2Convert.value){
                    case "C":
                        convertedTemp = K2C(temperature);
                        break;
                    case "F":
                        const temp = K2C(temperature)
                        convertedTemp = C2F(temp);
                        break;
                    case "K":
                        convertedTemp = temperature;
                        break;
                }
            break;
    }
    convertedTemp = Number(convertedTemp).toFixed(2);
    return convertedTemp;
}
setInterval(()=>{
    let temp = parseFloat(inputTemp.textContent);
    let newTemp = converter(temp)
    outputTemp.textContent = newTemp;
}, 500);
nums.forEach(button => button.addEventListener('click',(e)=>inputTemp.textContent == 0? inputTemp.textContent = e.target.textContent: inputTemp.textContent += e.target.textContent))
changeSign.addEventListener('click', ()=>inputTemp.textContent *= -1)
dot.addEventListener('click', ()=>inputTemp.textContent +='.')
del.addEventListener('click', ()=>{
    inputTemp.textContent != 0?inputTemp.textContent = inputTemp.textContent.slice(0, -1) : null
    inputTemp.textContent == ''?inputTemp.textContent = 0:null;
})
ce.addEventListener('click', ()=>{
    inputTemp.textContent = 0;
    outputTemp.textContent = null;
})

reverseBtn.addEventListener('click', ()=>{
    const arrows = reverseBtn.firstChild;
    arrows.classList.toggle('rotate');
    const temp = temp2Convert.value;
    temp2Convert.value = tempDeafult.value;
    tempDeafult.value = temp;
    inputTemp.textContent = outputTemp.textContent;
})

document.addEventListener('keydown', (e)=>{
    if(!tempConverter.classList.contains('hide')){
        if(e.key >= 0 || e.key <= 9){
            inputTemp.textContent == 0?inputTemp.textContent = e.key: inputTemp.textContent += e.key;
            nums.forEach((button)=>{
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
                    inputTemp.textContent =null;
                    ce.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        ce.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Backspace':
                    let str = inputTemp.textContent;
                    inputTemp.textContent = str.slice(0,-1)
                    del.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        del.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case 'Delete':
                    inputTemp.textContent = null;
                    ce.classList.toggle('del-pressed');
                    setTimeout(()=>{
                        ce.classList.toggle('del-pressed');
                    }, 220)
                    break;
                case ',':
                    inputTemp.textContent += '.';
                    dotBtn.classList.toggle('btn-pressed');
                    setTimeout(()=>{
                        dotBtn.classList.toggle('btn-pressed');
                    }, 220)
                    break;
                case '.':
                    inputTemp.textContent += '.';
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