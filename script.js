let input = document.getElementsByTagName('input')[0];
let number1 = document.getElementsByTagName('div')[0];
let number2 = document.getElementsByTagName('div')[2];
let math = document.getElementsByTagName('div')[1];
let but = document.getElementsByTagName('button')[0];

number1.innerHTML = Math.floor(Math.random() * 100);
number2.innerHTML = Math.floor(Math.random() * 100);


let a = ['+', '-', '*', '/'];
math.innerHTML = a[Math.floor(Math.random() * a.length)];
let x = Number(number1.innerHTML);
let y = Number(number2.innerHTML);

let j = 0;
let i = 0;
let k = 0;
 but.addEventListener('click',f);
 function f() {
 
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    ul.appendChild(li);
    if (input.value == eval(number1.innerHTML + math.innerHTML + number2.innerHTML)) {
        li.innerHTML = 'true';
        li.style.color = 'green';
        i += 1;
    } else {
        li.innerHTML = 'false ' + 'Ճիշտ պատասխանը ' + eval(number1.innerHTML + math.innerHTML + number2.innerHTML) ;
        li.style.color = 'red';
        k += 1;
    }
    number1.innerHTML = Math.floor(Math.random() * 100);
    number2.innerHTML = Math.floor(Math.random() * 100);
    let a = ['+', '-', '*', '/'];
    math.innerHTML = a[Math.floor(Math.random() * a.length)];
    j += 1; 
       if (j == 10) {
        document.body.append(document.createElement('p').innerHTML = 'Դուք ավարտեցիք թեստը՝ ' + i + ' Ճիշտ ' + k + 'Սխալ');
        but.removeEventListener('click', f);
    }
    let but1 = document.getElementsByTagName('button')[1];
    but1.addEventListener('click', function () {
        but.addEventListener('click',f);
        ul.removeChild(li);
    j -= 10;
    
}) 
}
