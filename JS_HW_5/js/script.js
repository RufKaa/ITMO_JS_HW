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
1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, 
сравнивает их и возвращает true, если массивы равны и false, если не равны. 
*/
let length = 3;
let arr1 = [],
    arr2 = [];
for (let i = 0; i < length; i++) {
    arr1.push(Math.round(Math.random() * 5));
    arr2.push(Math.round(Math.random() * 5));
}
function tsk1(arrA, arrB) {
    for (let i = 0; i < length; i++){
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;    
}
console.log(tsk1(arr1, arr2));

/*
2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
*/
function range (start, end, step = 1) {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(range(4, 11, 3));


/* 
3. Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.
*/
let student = {
    'name': 'Ruf',
    'secondName': 'Kaa',
    'age': 25,
    'hobby': ['snowboard', 'windserfing', 'hiking'],
    'institute': 'ITMO',
};
function tsk3(stud_obj) {
    keys = Object.keys(stud_obj);
    for (let i = 0; i < keys.length; i++){
        console.log(`${keys[i]}: ${stud_obj[keys[i]]}`);
    }
}
tsk3(student);
