const num = document.querySelector('#numHolder');

let counter = 0;
num.innerHTML = counter;

const interval = setInterval(()=>{
    counter ++;
    num.innerHTML = counter;

    if(counter > 20 && counter < 80) num.style.opacity = 1 - counter/200;
    if(counter >= 80 && counter < 95 ) num.style.opacity = 1 - counter/150;
    if(counter > 95) num.style.opacity = 1 - counter/100;
    if(counter == 100) clearInterval(interval);
},10);
