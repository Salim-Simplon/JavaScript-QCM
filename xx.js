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

function getMultipliedArr(array4){

  return array4.map(el => el * 2)
  /*array4.map(el => {return el * 2})*/
}

console.log(getMultipliedArr(["1", "2", "3", "4"]));

/*** */

function wordLengths(array5) { 
    return array5.map(x => x.length)
}

console.log(wordLengths(["simplon", "Tunis"]))

/*** */

function sum(array6){
    return array6.map( x => {
        let s = 0
        function somme(s){
            s=s+x
        }
    }
    )
}
console.log(sum([11, 2, 4]))

/*** */
function noOdds(array7){
    return array7.filter(x => x%2 ==0)
}

console.log(noOdds([11, 2, 4]))

/*** */
function findLargestNum(array8){
    return Math.max(...array8)
}
console.log(findLargestNum([11, 2, 4]))

/*** */
function findSmallerNum(array9){
    return Math.min(...array9)
}
console.log(findSmallerNum([11, 2, 4]))

/*** */
function firstLast(array10){

    return array10[0]+array10[array10.length-1]
}
console.log(firstLast([11, 2, 4]))
/*** */
function diffMaxMin(array11){
    return Math.max(...array11)-Math.min(...array11)
}
console.log(diffMaxMin([11, 2, 4]))

/*** */

function multiplyByLength(array12) { 
    return array12.map(x => x*array12.length)
}

console.log(multiplyByLength([2, 3, 1, 0]))
/*** */

function negate(array13) { 
    return array13.map(x => x* (-1))
}

console.log(negate([2, 3, -1, 0]))
/*** */
function isFourLetters(array14){
    return array14.filter(x => x.length%4 ==0)
}

console.log(isFourLetters(["Tomato", "Potato", "Pair"]))

/*** */
function addEnding(array15, ending){
    return array15.filter(x => x.concat(ending))
}

console.log(addEnding(["new", "pander", "scoop"], "er"))

/*** */

function removeNull(array16){
    return array16.filter(x => x!=null)
}

console.log(removeNull([7, 8, null, 9]))
/*** */
function unlucky(array17){
    return array17.filter(x => x%13!=0)
}

console.log(unlucky([53, 182, 435, 591, 637]))
/*** */

function transform(array18) { 
    return array18.map(
        function trans(x){
            if(x%2==0)
            return x-1
            else
            return x+1
        }
        )
}

console.log(transform([2, 3, 1, 0]))
/*** */
function filterArray(array19){
    return array19.filter(x => x*0==0)
}
console.log(filterArray([1, 2, "e", "f"]))
/**** */
function societyName(friends){
    return friends.map(x => x[0]).sort().join("")
}
console.log(societyName(["Saief", "Mouna", "Sirine"]))
/**** */
function findLargestNums(array20){
    return array20.map(x => x[Math.max(...array20)])
}
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))
/**** */