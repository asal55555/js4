let name = prompt ('Введите свое имя')
let year = +prompt ('Введите свой год рождения')
let current_year = +prompt ('Введите нынешний год')

let age = current_year - year

console.log(`${name}, Ваш возраст ${age} `);


function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

let amount = +prompt('Введите кол-во примеров');

for(let i =0; i < amount;i++) {
    let one = rand(1,10);
    let two = rand(1,10);
    let znak = rand(1,4);
    let result = 0;
    if(znak == 1) {
        result =  one + two
        znak = '+'
    }else if(znak == 2) {
        result =  one - two
        znak = '-'
    }else if(znak == 3) {
        result =  one * two
        znak = '*'
    }else if(znak == 4) {
        result =  one / two
        znak = '/'
    }
    let primer = +prompt(one + znak + two + ' =')
    console.log(primer == result ? ' Ваш ответ верный ' + primer : ' Ваш ответне верный ' + primer + ' Правильный ответ будет ' + result);
    
}
