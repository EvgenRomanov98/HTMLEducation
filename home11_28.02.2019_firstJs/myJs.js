//1.Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'.
//
// Если посетитель вводит '2015', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2015!'.
var year = prompt('Какой сейчас год?');
if (year === 2015) {
    alert('Вы правы!')
} else {
    alert('Ты что с луны свалился? 2015')
}
;


//2. Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'
//
// Затем выведите alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

var number = prompt('Введите любое число');
if (number > 0) {
    alert(1)
} else if (number === 0) {
    alert(0);
} else if (number < 0) {
    alert(-1);
}

//3. Напишите код, который будет запрашивать логин пользователя (prompt).
// Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
//
// Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.

var login = prompt('Введите логин');
if (login === 'admin') {
    var password = prompt('Введите пароль');
    if (password === 'passw0rd') {
        alert('Welcome home!')
    } else if (login === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (login === null) {
    alert('Canceled');
} else {
    alert('Access denied');
}


//4. Перепишите if с использованием оператора '?':
// var array = 1, b = 2;
//
// if (array + b >= 3) {
// 	result = 'Yep!';
// } else {
//   result = 'Noup!';
// }

var a = 1, b = 2;
var result = (a + b >= 3) ? 'Yep!' : 'Noup!';


//+Перепишите if..else с использованием нескольких операторов '?':
//
// var name = 'admin', text;
//
// if (name == 'admin') {
//   text = 'Hi';
// } else if (name == 'manager') {
//   text = 'Hello';
// } else if (name == '') {
//   text = 'No login';
// } else {
//   text = '';
// }

var text = (name == 'admin') ? 'Hi' : (name == 'manager') ? 'Hello' : (name === '') ? 'No login' : '';

// 6. http://www.codewars.com/kata/convert-a-number-to-a-string/
function numberToString(num) {
    var res = String(num);
    console.log(res);
}

numberToString(123);


//7. http://www.codewars.com/kata/convert-a-string-to-a-number/
function stringToNumber(str) {
    var resFunc = +str;
    console.log(resFunc);

}

stringToNumber('123');