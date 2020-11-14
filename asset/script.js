function switchNumber() {
    var A = 3;
    var B = 5;
    A = A + B;
    B = A - B;
    A = A - B;
    document.getElementById("switch").innerHTML=" A = " + A + "<br> B = " + B;
}


function arrayOnce() {
var arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100] , 
array = [], duplicates = [];
for(var i = 0; i < arr.length; i++){ 
    if(array.includes(arr[i]) && !duplicates.includes(arr[i])) 
    duplicates.push(arr[i])
    else
    array.push(arr[i]);
}
    document.getElementById("array").innerHTML=duplicates;
}

function missingNumber() {
var number =  [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    countNumber = number[number.length - 1];
    var missing = [];
    for ( var i = 1; i <= countNumber; i++ ) {
        if (number.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    document.getElementById("missing").innerHTML=missing;
}