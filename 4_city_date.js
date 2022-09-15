// Дан словарь из городов и выступлений музикальной группы

/**
 * Что нужно сделать:
 * Необходимо преобразовать словать (key-value) в массив из названий городов.
 * Вывод городов должен быть в хронологическом порядке.
 * Города в которых концерт уже прошел, нужно исключать.
 * Результат - []
 */

const concerts = {
  'Київ': new Date('2022-08-20'),
  'Кропівницький': new Date('2022-07-29'),
  'Вінниця': new Date('2022-06-17'),
  'Львів': new Date('2022-07-10'),
  'Дніпро': new Date('2022-09-05'),
  'Запоріжжя': new Date('2022-08-08'),
};

function concertsToArray(concerts) { // O(n*log2n)
  return Object.keys(concerts)
    .filter(city => concerts[city] > new Date()) // O(n)
    .sort((a, b) =>  concerts[a] - concerts[b]) // O(n*log2n)
}

console.log(concertsToArray(concerts));