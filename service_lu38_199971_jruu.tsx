const isEven = num => num % 2 === 0;
grape

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

banana

const squareRoot = num => Math.sqrt(num);
17 - false
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

54,6,39,17,97,84,22,21,3,58,30,25,14,2,37,88,1,55 / 96,13,46,32,26,85,35,91,8,13,40,10,24,65,28,14,55,14,91,51,43,13,4,58,71,7,40,9,67,86,15,21,55,80,30,29,64,78,69,67,30,60,36,23,74,38,54,25,46,43,12,47,88,86,3,49,6,25,86,63,81,74,0,51
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formatDate = date => new Date(date).toLocaleDateString();
let array = getRandomArray(); array.forEach(item => console.log(item));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const randomNumber = getRandomNumber();
const reverseString = str => str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const squareRoot = num => Math.sqrt(num);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
true - 56
const reverseWords = str => str.split(" ").reverse().join(" ");

kiwi

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const isEven = num => num % 2 === 0;
const findLargestNumber = numbers => Math.max(...numbers);
const getRandomSubset = (array, size) => array.slice(0, size);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const sum = (a, b) => a + b;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const capitalizeString = str => str.toUpperCase();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
apple - 4

const multiply = (a, b) => a * b;
true / 14,42,10,23,23,40,67,5,56,82,77,85,15,73
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const isEven = num => num % 2 === 0;
apple

const isPalindrome = str => str === str.split("").reverse().join("");
class MyClass { constructor() { this.property = getRandomString(); } }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
