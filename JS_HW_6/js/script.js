/* 
1. Реализовать функцию foo:
let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10)); 
//В консоль выведет: [{name:'static', count:0},
//{name:'static', count:1}, ..., {name:'static', count:9}] 
*/

let a = {
    name: 'static',
    count: 0
}
function foo(objA, propName, count) {
    let first = objA[propName],
        res_arr = [];

    for (i = first; i < count; i++){
        let copyObj = {};
        for (let key in objA){
            copyObj[key] = objA[key];
        }
        copyObj[propName] = i;
        res_arr.push(copyObj);
    }
    console.log(res_arr);
}
foo(a, 'count', 10);

/* 
2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.
*/
function tsk2(){
    let arr = [];
    return function rnd(){
        let rnd_number = Math.round(Math.random()*100);
        if (arr.indexOf(rnd_number) === -1) {
            arr.push(rnd_number);
        } else return rnd();   
    }
    
}
rnd_func = tsk2();
for (let i = 0; i < 100; i++)
    console.log(rnd_func());

/*
3. Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
*/
let stud_obj = {
    Имя: 'Terk',
    Фамилия: 'Terklton',
    Возраст: 25,
    Интересы: ['Na', 'Nan', 'Nyan'],
    'Место обучения':'ITMO',
    info() {
        keys = Object.keys(this);
        for (let i = 0; i < keys.length; i++){
            if (typeof stud_obj[keys[i]] != 'function')
                console.log(`${keys[i]}: ${stud_obj[keys[i]]}`);
        }
    }
}
stud_obj.info();

/*
4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1
*/
function task4(n){
    if (n > 1)
        return n * task4(n-1)
    else return n;     
}
console.log(task4(4));


/*
5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},]; 
*/
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},]; 
arr.sort((n1, n2)=>{ 
    return n2.price - n1.price; 
});
console.log(arr);