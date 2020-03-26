function sumNumber(num1,num2) {
    if (num1+num2 < 100 )
    return "true"
   else
    return "false"
}
console.log(sumNumber(10,12))
/*****/
function isEqual(num1,num2) {
    if (num1==num2)
    return "true"
   else
    return "false"
}
console.log(isEqual(10,12))
/*****/
function ifOneIsSum(num1,num2,num3) { 
    if (num1*num2>num3)
        return "true"
    else
        return "false"
    }
    console.log(ifOneIsSum(10,12,100))
/*****/
function isEmpty(str){ 
if (str=="")
    return "true"
else
    return "false"
}
console.log(isEmpty("Hi"))
/*****/
function isEqualZero(num) { 
if (num<=0)
    return "true"
else
    return "false"
}
console.log(isEqualZero(0))
/*****/
function isDevisible(num) { 
    if ((num % 100)===0)
        return "true"
    else
        return "false"
    }
    console.log(isDevisible(20))
/********/
function isEqualStr(str1, str2) { 
if (str1.length===str2.length)
    return "true"
else
    return "false"
}
console.log(isEqualStr("Hello", "str22"))
/********/
function isDevideBy(num1,  num2) { 
if ((num1 % num2)===0)
    return "true"
else
    return "false"
}
console.log(isDevideBy(20,3))
/********/
function moodToday(mood) {
if (mood!=undefined)
    return "Today, I am feeling " + mood
else
    return "Today, I am feeling neuter"
}
console.log(moodToday("fine"))
/********/
function isEvenOrOdd(num) {
    if ((num % 2)===0)
    return "even"
    else
    return "odd"
}
console.log(isEvenOrOdd(14))
/********/
function match(str1,str2) {
    if (str1.toLowerCase===str2.toLowerCase)
    return "true"
    else
    return "false"
}
console.log(match("hi","HI"))
/*******/
function getCase(str) { 
    if (str==str.toUpperCase())
        return "upper" 
    else if (str==str.toLowerCase())
        return "lower"
    else
        return "mixed"
}
console.log(getCase("salim"))
/******/
function swappName(Name, LastName) {
    return LastName +" "+ Name
}
    console.log(swappName("salim","amri"))  
/******/
function onlyCase(str) { 
    if (str==str.toUpperCase() || str==str.toLowerCase())
        return true 
    else
        return false
}
console.log(onlyCase("SALIM"))
/******/
function checkEnding(str1,  str2) { return }
/******/
function incrementOrDecrement(num1,  num2) { return }
/******/
function  toString(num) { return }




















