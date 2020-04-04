function sumNumber(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumNumber(3));

/*** */
function reverse(arr) {
  return arr.reverse();
}

console.log(reverse(["one", "two", "three"]));

/*** */
function getLastItem(arr1) {
  return arr1[arr1.length - 1];
}
console.log(getLastItem(["one", "two", "three"]));

/*** */

function concatt(array1, array2) {
  return array1.concat(array2);
}
console.log(concatt(["one", "two", "three"], ["one", "two", "three"]));

/*** */

function search(array3, item) {
  if (array3.includes(item)) return array3.indexOf(item);
  else return -1;
}

console.log(search(["one", "two", "three"], "two"));

/*** */

function getMultipliedArr(array4) {
  return array4.map((el) => el * 2);
}

console.log(getMultipliedArr(["1", "2", "3", "4"]));

/*** */

function wordLengths(array5) {
  return array5.map((x) => x.length);
}

console.log(wordLengths(["simplon", "Tunis"]));

/*** */
function noOdds(array7) {
  return array7.filter((x) => x % 2 == 0);
}

console.log(noOdds([11, 2, 4]));

/*** */
function findLargestNum(array8) {
  return Math.max(...array8);
}
console.log(findLargestNum([11, 2, 4]));

/*** */
function findSmallerNum(array9) {
  return Math.min(...array9);
}
console.log(findSmallerNum([11, 2, 4]));

/*** */
function firstLast(array10) {
  return array10[0] + array10[array10.length - 1];
}
console.log(firstLast([11, 2, 4]));
/*** */
function diffMaxMin(array11) {
  return Math.max(...array11) - Math.min(...array11);
}
console.log(diffMaxMin([11, 2, 4]));

/*** */

function multiplyByLength(array12) {
  return array12.map((x) => x * array12.length);
}

console.log(multiplyByLength([2, 3, 1, 0]));
/*** */

function negate(array13) {
  return array13.map((x) => x * -1);
}

console.log(negate([2, 3, -1, 0]));
/*** */
function isFourLetters(array14) {
  return array14.filter((x) => x.length % 4 === 0);
}

console.log(isFourLetters(["Tomato", "Potato", "Pair"]));

/*** */

function removeNull(array16) {
  return array16.filter((x) => x != null);
}

console.log(removeNull([7, 8, null, 9]));
/*** */
function unlucky(array17) {
  return array17.filter((x) => x % 13 != 0);
}

console.log(unlucky([53, 182, 435, 591, 637]));
/*** */

function transform(array18) {
  return array18.map(function trans(x) {
    if (x % 2 == 0) return x - 1;
    else return x + 1;
  });
}

console.log(transform([2, 3, 1, 0]));
/*** */
function filterArray(array19) {
  return array19.filter((x) => x * 0 == 0);
}
console.log(filterArray([1, 2, "e", "f"]));
/**** */
function societyName(friends) {
  return friends
    .map((x) => x[0])
    .sort()
    .join("");
}
console.log(societyName(["Saief", "Mouna", "Sirine"]));
/**** */
function sum(array20) {
  return array20.reduce((a, b) => a + b, 0);
}
console.log(sum([1, 8, 2]));

/**** */
function firstLast(array21) {
  return [array21[0], array21[array21.length - 1]];
}
console.log(firstLast([2, 3, 1, 20]));
/*** */
function addEnding(array22, ending) {
  return array22.map((array22) => array22.concat(ending));
}
console.log(addEnding(["new", "pander", "scoop"], "er"));
/*** */
function shortToLong(array23) {
  return array23.sort((a, b) => a.length - b.length);
}

console.log(shortToLong(["Simplon", "Skills", "Development"]));
//

function findLargestNums(array24) {
  return array24.map((x) => Math.max(...x));
}
console.log(
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
);
//

function toArray(array25) {
  return (array25 + "").split("");
}
console.log(toArray(201));
/**/
function toNumber(array26) {
  return array26.join("");
}
console.log(toNumber([4, 8, 8]));
//

function spelling(array27) {
  let y = "";
  return array27.split("").map((x) => (y += x));
}
console.log(spelling("abc"));

//
function toArray(array) {
  return Object.entries(array);
}
console.log(toArray({ a: 1, b: 2 }));
//

function getSalaries(array) {
  let y = null;
  let array2 = array.map((x) => (y += x.salary));
  return array2[array2.length - 1];
}
console.log(
  getSalaries([
    { name: "Amira", age: 21, salary: 23000 },
    { name: "Takwa", age: 32, salary: 40000 },
    { name: "Manel", age: 16, salary: 2700 },
  ])
);
//

var h = [1, 2, 3];
function numOfSubbarrays(array) {
  return array.filter((x) => x.constructor == h.constructor).length;
}
console.log(
  numOfSubbarrays([
    "chaima",
    "Soltane",
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    { name: "Manel", age: 16, salary: 2700 },
  ])
);
//

function NoNamesPlease(array) {
  return array.map((x) => x.name);
}
console.log(
  NoNamesPlease([{ name: "Ahmed" }, { name: "Achref" }, { name: "Ayoub" }])
);
