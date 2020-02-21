// function showMessage (presentYear,yearBirth) {
//    let result = presentYear - yearBirth;
//    return result;
// }

// let userName = prompt('Введите ваше имя: ');
// let presentYear = +prompt('Введите текущий год: ');
// let yearBirth = +prompt('Введите год рождение');
 
//  console.log(userName+ ', ваш возраст ' + showMessage(presentYear, yearBirth));

// --------------------------------------------------------------------------,

let number = +prompt('Введите количество примеров: ');
let min = +prompt('Введите минимальное число: ');
let max = +prompt('Введите максимальное число: ');

function myRandom(min, max) {
    return Math.floor(myRandom() * (max - min + 1) + min);
}

for (let i = 0; i < number; i++) {
    let num1 = myRandom(min, max), 
        num2 = myRandom(min, max);

    let result = +prompt('Решите пример: ' +num1+ ' + ' +num2+ ' = ?');
    if (result == (num1 + num2))  console.log('Правильно! ');        
    else console.log('Неправильно! ');

            
}

