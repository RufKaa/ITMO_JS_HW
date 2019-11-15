let sqr = 1000, 
    ridge = 15 * 25;
document.write(`Space left ${sqr%ridge}`)

let ellipse1 = 15*100,
    ellipse2 = 600;
document.write(`<br> Ring Square ${ellipse1-ellipse2}`);

let num1 = 10, 
    num2 = 3,
    num3 = 7; 
document.write(`<br> Min from ${num1}, ${num2}, ${num3} is ${Math.min(num1, num2, num3)}`);

let a = 10,
    b = +prompt('Input b:'),
    c = +prompt('Input c:');

document.write(`<br> Next to ${a} is ${(Math.abs(a-b) < Math.abs(a-c)) ? b : c}`);

let ax = 10, ay = 8, az = 4,
    bx = 1,  by = 3, bz = 6,
    cx = 4,  cy = 7, cz = 0;
