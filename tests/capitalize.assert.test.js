import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');

// assert.equal(capitalize(''), '');
// // Первый параметр actual – то, что пришло
// // Второй параметр expected – то, что ожидает тест
// // Правильный порядок аргументов имеет большое значение при анализе ошибки
// assert.equal(capitalize('hello'), 'Hello');
console.log('Все тесты пройдены!');