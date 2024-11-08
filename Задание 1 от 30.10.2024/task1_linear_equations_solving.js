// Решение системы линейных уравнений методом Крамера
// Коэффициенты
const [, , n1, n2, n3, n4, n5, n6] = process.argv.map(Number); //преобразуем все переданные значения в числа
if ([n1, n2, n3, n4, n5, n6].some(isNaN)) {
    console.log('Ошика! Все переданные значения должны быть числами');
} else{
    const mainDet = n1 * n5 - n2 * n4; //Основной определитель

    const xDet = n3 * n5 - n2* n6; //Определитель для x

    const yDet = n1 * n6 - n3 * n4; // Определитель для y

    const x = xDet / mainDet;
    const  y = yDet / mainDet;

    mainDet === 0 ? console.log('У системы бесконечное множество решений') : console.log(`${x} ${y}`);
}