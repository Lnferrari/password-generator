// Password options
const lettersOpt = 'abcdefghijklmnopqrstuvwxyz';
const digitsOpt = '0123456789';
const symbolsOpt = '!@§$%&/()=?#,;.:-_';

// HTML Elements -----------
const form = document.querySelector('form')
const visor = document.getElementById('visor');
const buttons = document.querySelectorAll('button')
const btnCopy = document.getElementById('copy')
const btnGenerate = document.getElementById('generate')
const showPsw = document.getElementById('showpsw')
const upperC = document.getElementById('uppercase')
const lowerC = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const length = document.getElementById('length')

// Functions -----------
randomPicker = x => x[Math.floor(Math.random() * x.length)];

copyText = text => {
    text.select();
    document.execCommand("copy");
    console.log(document.execCommand("copy"));
}

generatePassword = length => {
    let psw = ''
    let char;
    let charset = lettersOpt;
    if (numbers.checked) charset += digitsOpt;
    if (symbols.checked) charset += symbolsOpt;

    for(let i = 0; i < length.value; i++){
        char = randomPicker(charset)
        if(upperC.checked && lowerC.checked && char.match(/[a-z]/) && (i+1) % 3 === 0){
            char = char.toUpperCase()
        } else if(upperC.checked && !lowerC.checked){
            char = char.toUpperCase()
        }
        psw += char
    }
    return psw
}

// Events -----------
btnCopy.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
    copyText(visor.textContent);
})

btnGenerate.addEventListener('click', (e)=>{
    e.preventDefault();
    visor.value = generatePassword(length);
})

showPsw.addEventListener('click', ()=>{
    if(showPsw.checked){
        visor.setAttribute('type', 'text')
    } else {
        visor.setAttribute('type', 'password')
    }
});