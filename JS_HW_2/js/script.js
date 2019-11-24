/*TASK 1
1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название 
    соответствующего времени года ("зима", "весна" и т.д.). 
*/
function tsk1() {
    let tsk1_month = +document.getElementById("tsk1_month").value;
    switch (tsk1_month) {
        case 12:
        case 1:
        case 2: 
            alert('Winter');
            break;
        case (3):
        case (4):
        case (5):
            alert('Spring');
            break;
        case 6:
        case 7:
        case 8:
            alert('Summer');
            break;
        case 9:
        case 10:
        case 11: 
            alert('Autumn');
            break;
        default:
            alert('WTF?');
    }
}
document.getElementById("tsk1_btn").onclick = tsk1;

/*TASK 2
2. Единицы длины пронумерованы следующим образом: 
    1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
    Дан номер единицы длины и длина отрезка L в этих единицах (вещественное 
    число). Вывести длину данного отрезка в метрах.
*/
function tsk2() {
    let tsk2_length = +document.getElementById("tsk2_length").value,
        tsk2_measure = +document.getElementById("tsk2_measure").value,
        result = 0;

    switch (tsk2_measure) {
        case 1: 
            result = tsk2_length * 0.1;
            break;
        case 2:
            result = tsk2_length * 1000;
            break;
        case 3:
            result = tsk2_length;
            break;
        case 4:
            result = tsk2_length / 1000;
            break;
        case 5:
            result = tsk2_length / 100;
            break;
        default:
            alert('WTF?');
            return;
    }
    document.getElementById("tsk2_result").value = Math.round(result*1000)/1000;
}
document.getElementById("tsk2_btn").onclick = tsk2;

/* TASK 3
3. Дано целое число, лежащее в диапазоне от -999 до 999. 
    Вывести строку - словесное описание данного числа вида 
    "отрицательное двузначное число", 
    "нулевое число", 
    "положительное однозначное число" и т.д.
*/
function tsk3() {
    let tsk3_number = +document.getElementById("tsk3_number").value;
    let result = '', str_number = '';

    str_number = Math.abs(tsk3_number).toString();

    if (tsk3_number < 0)
        result = 'отрицательное';
    else if (tsk3_number == 0) {
        result = 'нулевое число';
        document.getElementById("tsk3_result").value = result;
        return;
    }
    else result = 'положительное';

    switch (str_number.length) {
        case 1: {
            result += ' однозначное число';
            break;
        }
        case 2: {
            result += ' двузначное число';
            break;
        }
        case 3: {
            result += ' трехзначное число';
            break;
        }
        default: {
            alert('WTF?');
            return;
        }
    }
    document.getElementById("tsk3_result").value = result;
}
document.getElementById("tsk3_btn").onclick = tsk3;

/* TASK 4
4. Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
    Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
    а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
    Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
*/
for (let i = 1; i <= 100; i++){
    if ((i%5 === 0)&&(i%3 === 0))
        console.log(i + ' ThreeFive');
    else if (i%5 === 0) {
        console.log(i + ' Five');
    }
    else if (i%3 === 0) {
        console.log(i + ' Three');
    }
}