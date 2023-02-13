const textCard = document.querySelector('p');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const copy = document.getElementById('copy');
const char = 'abcdefghijklmnopqrstuvwzxyz!@#$%^&*0123456789ABCDEGHIJKLMNOPQRSTUVWXYZ';
function StringGeneration(){
    let outcome ='';
    const charLenght = char.length;
    for(let i = 0; i< 10 ; i++){
        outcome += char.charAt(Math.floor(Math.random() * charLenght));
    }
    const timer = setTimeout(StringGeneration,3000);
    textCard.textContent = outcome;
    btn.classList.add("hide");
    btn1.classList.add("btn1");
    btn1.textContent = "Stop";
    btn1.classList.remove("hide");
    btn1.addEventListener('click',()=>{
        clearTimeout(timer);
        btn1.classList.remove("btn1");
        btn1.classList.add("hide");
        btn.classList.remove("hide");
    });
  
}
function copy1() {
    let textTOCopy = document.getElementById('password').innerHTML;
    
    // textTOCopy.select();
    navigator.clipboard.writeText(textTOCopy).then(()=>{
        console.log('Text Copied');
    },()=>{
        console.log('Something went wrong');
    });
}

btn.addEventListener('click',StringGeneration);
copy.addEventListener('click',copy1);