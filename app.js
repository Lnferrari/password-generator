// Password options
const lettersOpt = 'abcdefghijklmnopqrstuvwxyz';
const digitsOpt = '0123456789';
const symbolsOpt = '!@§$%&/()=?#,;.:-_';

// HTML Elements -----------
let form = document.querySelector('form')
let visor = document.getElementById('visor');
let btnCopy = document.getElementById('copy')
let btnGenerate = document.getElementById('generate')
let showPsw = document.getElementById('showpsw')
let upperC = document.getElementById('uppercase')
let lowerC = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let length = document.getElementById('length')

// Functions -----------
randomPicker = x => x[Math.floor(Math.random() * x.length)];

copyText = text => {
    text.select();
    document.execCommand("copy");
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
form.addEventListener('click', (e)=>{
    if(e.target.id === 'copy' || e.target.id === 'generate'){
        e.preventDefault();
    }
    switch (e.target.id) {
        case 'copy':
            copyText(e.target.previousElementSibling);
            e.target.className = 'fas fa-check';
            setTimeout(()=>{
                e.target.className = 'far fa-clipboard'
            }, 1000)
            break;
        case 'generate':
            visor.value = generatePassword(length);
            break;
        case 'showpsw':
            if(showPsw.checked){
                visor.setAttribute('type', 'text')
            } else {
                visor.setAttribute('type', 'password')
            };
            break;
    }
})