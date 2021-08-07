//problem 1
function addFive(num){
    return num+5;
}

//problem 2
function getOpposite(num){
    return -num;
}

//problem 3
function toSeconds(minutes){
    return minutes*60;
}

//problem 4
function toInteger(mystr){
    let num = parseInt(mystr);
    return num;
}

//problem 5
function nextNumber(num){
    return num+1;
}

//problem 6
function getFirstElement(arr){
    if(arr.length==0){
        return undefined;
    }
    return arr[0];
}

//problem 7
function hourToSeconds(hour){
    return hour*3600;
}

//problem 8
function findPerimeter(num1,num2){
    return 2*(num1+num2);
}

//problem 9
function lessThan100(num1,num2){
    if(num1+num2 <= 100){
        return true;
    }

    return false;
}

//problem 10
function remainder(num1,num2) {
    return num1%num2;
}

//problem 11
function CountAnimals(tur,horse,pigs) {
    return tur*2 + horse*4 + pigs*4;
}

//problem 12
function frames(num1,num2) {
    return num1*60*num2;
}

//problem 13
function divisibleByFive(num1) {
    num1 = Math.abs(num1);
    if(num1%5==0){
        return true;
    }
    return false;
}

//problem 14
function isEven(num){
    if(Number.isInteger(num) && num>=0){
        if(num%2==0){
            return true;
        }
        return false;
    }
    return -1;
}

//problem 15
function areBothOdd(num1, num2){
    if(num1%2!=0 && num2%2!=0)
        return true;
    return false;
}

//problem 16
function getFullName(firstName, lastName){
    if(firstName == undefined && secondName == undefined)
    {
        return undefined;
    }
}

//problem 17
function getLengthOfWord(word1){
    if(typeof word1 == "string")
    {
        return word1.length;
    }
    return -1;
}

//problem 18
function isSameLength(word1, word2){
    if(word1.length == word2.length)
        return true;
    return false;
}
