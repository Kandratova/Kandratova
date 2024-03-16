const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
true + banana
const variableName = getRandomNumber();
const deepClone = obj => JSON.parse(JSON.stringify(obj));
apple

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape - apple
function addNumbers(a, b) { return a + b; }
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
apple

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true - true
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const isPalindrome = str => str === str.split("").reverse().join("");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
grape

const reverseString = str => str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const multiply = (a, b) => a * b;
92,68,36,74,10,7,55,13,31,19,28,99,44,9,76,18,78,89,78,85,7,30,2,19,29,5,56,87,64,28,31,67,24,2,9,7,49,26,79,84,4,66,62,29,30,52,88,51,7,57,77,71,33,67,63,0,21,13,98,87,4,33,94,50,15,90,17,74,28,77 - 74
const findSmallestNumber = numbers => Math.min(...numbers);
const getRandomElement = array => array[getRandomIndex(array)];

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana / false

const capitalizeString = str => str.toUpperCase();
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
37,74,34,82,14,53,52,30,99,36,58,44,51,25,67,36,9,70,20,3,83,46,15,40,3,28,14,87,2,38,26,86,39,60,58,57,96,0,16,55,48,84,85,87,53,1,17,64,77,10,86,95,40,48,18,66,3,79,91,81,84,24,14,37,12,74,91,17,85,8,88,48,63,4,70,23 / 99
const formatDate = date => new Date(date).toLocaleDateString();
function addNumbers(a, b) { return a + b; }
banana + banana
const formatDate = date => new Date(date).toLocaleDateString();
banana

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

function addNumbers(a, b) { return a + b; }
const isPalindrome = str => str === str.split("").reverse().join("");
apple

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
kiwi


const filterEvenNumbers = numbers => numbers.filter(isEven);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
75,33,71,9,46,47,32,4,97,18,65,85,69,92,44,65,94,5,3,81,30,0,62,44,14,98,82,17,70,9,14,0,49,2,40,6,87,14,18,47,24,17,94,81 - banana
const getRandomSubset = (array, size) => array.slice(0, size);
90 / grape
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
true - true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

35 - 10
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomSubset = (array, size) => array.slice(0, size);
kiwi - 17
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi

const capitalizeString = str => str.toUpperCase();
const squareRoot = num => Math.sqrt(num);
35 * 85,8,13,2,1,53,28,52,40,81,30,27,99,22,95,81,43,67,8,43,61,67,79,9,46,61,44,35,83,92,17,96,91,53,94,17,95,33,40,73,6,53,17,81,65,4,12,51,75,94,7,98,8,75,86,54,24,72,74,70,83,9,1,51,82,57,80,64,23,51,78,0,36,37,46,68,35,26,93,42,37,20,7,99,59,46,67,8,11,35
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

grape

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
console.log(getRandomString());
