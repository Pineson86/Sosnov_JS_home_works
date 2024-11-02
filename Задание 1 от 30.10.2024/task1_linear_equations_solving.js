// Решение системы линейных уравнений методом Крамера
// Коэффициенты
const n1 = 2;
const n2 = 4;
const n3 = 6;
const n4 = 8;
const n5 = 10;
const n6 = 12;

const mainDet = n1 * n5 - n2 * n4; //Основной определитель

const xDet = n3 * n5 - n2* n6; //Определитель для x

const yDet = n1 * n6 - n3 * n4; // Определитель для y

const x = xDet / mainDet;
const  y = yDet / mainDet;

mainDet === 0 ? console.log('Система не имеет единственного решения') : console.log('x = ', x, 'y = ', y);