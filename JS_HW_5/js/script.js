/*
1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, 
сравнивает их и возвращает true, если массивы равны и false, если не равны. 
2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
3. Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.
4* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно.
*/

/*TASK 1
1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
*/
function tsk1() {
    let tsk1_str = document.getElementById('tsk1_str').value;
    let symb, sum = 0;
    for (let i = 0; i < tsk1_str.length; i++) {
        symb = parseInt(tsk1_str[i]);
        if (symb) {
            sum = sum + symb;
        }
    }
    document.getElementById('tsk1_result').value = sum;
}
document.getElementById('tsk1_btn').onclick = tsk1;


/*
2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
*/

function tsk2() {
    let tsk2_str = document.getElementById('tsk2_str').value;
    let tsk2_symb = document.getElementById('tsk2_symb').value;
    let msv = tsk2_str.slice().split(''),
        res = msv.slice();
    counter = 0;
    for (let i = 0; i < msv.length; i++) {
        if (msv[i] == tsk2_symb) {
            res.splice(i + counter, 0, tsk2_symb);
            counter += 1;
        }
    }
    document.getElementById('tsk2_result').value = res.join('');
}
document.getElementById('tsk2_btn').onclick = tsk2;

/* 
3. Проверить что введенный пароль удовлетворяет 
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %).
*/

function tsk3() {

    let psd = document.getElementById('tsk3_psd').value;
    
    //проверяем количество символов
    let regexp = /.{9,}/ig;
    if (!psd.match(regexp)){
        alert('too short password');
        return;
    };
    console.log(psd.match(regexp))

    //содержит обязательно один из неалфавитных символов (например, !, $, #, %)
    regexp = /\W/ig;
    if (!psd.match(regexp)){
        alert('There must be at least one special symbol');
        return;
    };
    console.log(psd.match(regexp))

    //содержит обязательно английские буквы верхнего и нижнего регистра
    regexp = /.*[A-Z]+.*[a-z]+/g;
    if (!psd.match(regexp)){
        alert('There must be at least one uppercase and one lowercase letters');
        return;
    };
    console.log(psd.match(regexp))
    
    //проверяем количество цифр
    regexp = /\d*.*\d*.*\d*/i;
    if (!psd.match(regexp)){
        alert('There must be at least 3 numbers');
        return;
    };
    console.log(psd.match(regexp));

    alert('Your password is OK')
}
document.getElementById('tsk3_btn').onclick = tsk3;