var num = prompt('Введите число: ');
var degree = prompt('Введите степень: ');
var answer = 1;

if (!isNaN(num) && num > 0 && !isNaN(degree) && degree >= 2) {
    answer = num;

    for (let i = 1; i < degree; i++) {
        answer = answer * num;

    }

}
document.writeln(answer);