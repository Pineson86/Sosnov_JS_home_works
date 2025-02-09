//Ищем количество простых чисел в диапазоне от 2 до заданного числа, переданного как параметр в функцию
const [, , x] = process.argv.map(Number);
if (isNaN(x)) {
    console.log('Ошибка! Переданное значение должно быть числом!');
} else {
    function primesCounter(x) {
        let counter = 1; // Начинаем счетчик с единицы - учитываем двойку как простое число по умаолчанию
        for (let i = 3; i < x; i += 2) { // Исключаем из прверки четные числа
            let isPrime = true;
            for (let k = 2; k <= parseInt(i ** 0.5 + 1); k++) {
                if (i % k === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) counter++;
        }

        return counter;
    }

    console.log(primesCounter(x));
}