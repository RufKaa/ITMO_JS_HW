/*TASK 1
1. Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A.
*/
let A = [12, 4, 3, 10, 1, 20],  
    B = [-3, -7, -100, -33];
    C = A + B;
console.log(C);



/*TASK 2
2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
*/

let area = [1, null, 1,
            null, 0, null,
            1, null, 1];
let tbody = document.getElementById('tsk2_tbl').getElementsByTagName("TBODY")[0];
let td = document.createElement("TD");
let counter = 0;

for (let i = 0; i < 3; i++) {
    let row = document.createElement("TR");
    for (let j = 0; j < 3; j++) {
        let td = document.createElement("TD");
        let symb = ' ';
        switch (area[counter]) {
            case (0): { symb = 'O'; break }
            case (1): { symb = 'X'; break }
            default: symb = ' ';
        }
        td.appendChild(document.createTextNode(symb));
        row.appendChild(td);
        counter += 1;
    }
    tbody.appendChild(row);
}

/* TASK 3
3. Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение.
*/

let array  = [12, 4, 3, 10, 1, 20],
    arrNum = array.slice();


for (let i = 0, len = arrNum.length; i < len; i ++) { //для каждого прохода
    for (let j = 0; j < len - 1 - i; j++) {
        if (arrNum[j] > arrNum[j+1]) {
            let tmp     = arrNum[j];
            arrNum[j]   = arrNum[j+1];
            arrNum[j+1] = tmp;
        }
    }
}

let min = arrNum.pop(),
    max = arrNum.shift();

console.log(`max ${max}, min ${min}, array ${array}`);

array.splice(array.indexOf(min), 1);
array.splice(array.indexOf(max), 1);
console.log(`result ${array}`);
