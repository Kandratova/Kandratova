const squareRoot = num => Math.sqrt(num);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
grape

const fetchData = async url => { const response = await fetch(url); return response.json(); }
86 - 74,46,17,43,95,27,57,41,60,54,58,92,93,96,92,32,57,41,39,59,5,54,96,99,37,30,17,47,1,55,33,97,41,26,90,68,74,2,96,95,65,43,19,94,92,13,75,56,91,63,94,49,82,8,41,13,14

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape / false

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
grape


const getUniqueCharacters = str => Array.from(new Set(str)).join("");
45 * 92,54,98,85,32,18,79,28,62,61,90,60,11,21,58,73,36,15,15,86
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

false + 36
const reverseWords = str => str.split(" ").reverse().join(" ");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
25 / 76
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
99 - 10

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange - false

const formatDate = date => new Date(date).toLocaleDateString();
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const greet = name => `Hello, ${name}!`;
const variableName = getRandomNumber();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
59,46,79,86,49,17,32,85,83,84,19,40,30,28,22,93,10,15,47,3,45,11,43,43,4,7,55,59,56,84 - false
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const capitalizeString = str => str.toUpperCase();

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findLargestNumber = numbers => Math.max(...numbers);
true / 61
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

grape + banana
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false + kiwi
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const randomNumber = getRandomNumber();

kiwi

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false / 43

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
80,61,81,51,47,21,5,17,19,73,26,53,42,59,75,64,94 + true
const removeDuplicates = array => Array.from(new Set(array));
const isPalindrome = str => str === str.split("").reverse().join("");
const reverseWords = str => str.split(" ").reverse().join(" ");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
