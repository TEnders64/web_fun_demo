var x = "Jenny";
// console.log(x[0]);
var num = 2.2;
var bool = true;
var arr = [1,2,3,"David", x];
// console.log(arr);
// arr[3] = "Sam";
// var m = arr[0];
// arr[0] = arr[1];
// arr[1] = m;
console.log("Hello World");

// var toddsOddFacts = {
//     favoriteNumber: 1, // key: value pair 
//     numberOfEyes: 2,
//     sidesInTriangle: 3,
//     name: "David",
//     wildcard: x,
//     sayHello: function(){ console.log("Hello") }
// };

// console.log(toddsOddFacts.favoriteNumber);
// toddsOddFacts.favoriteColor = "Blue";
// toddsOddFacts.numberOfEyes = 4;
// console.log(toddsOddFacts);
// toddsOddFacts.sayHello();



function removeVals(arr, start, end){
    var newArr = [];
    for (var i = 0; i < start; i++){
        newArr.push(arr[i]);
    }
    for (var j = end+1; j < arr.length; j++){
        newArr.push(arr[j]);
    }
    console.log(newArr);
}


function removeVals2(arr, start, end){
    for (var i=start; i < arr.length; i++){
        arr[i] = arr[i+3];
    }
    arr.length-=3;
    console.log(arr);
}
removeVals2([20,30,40,50,60,70,80,90],2,4); // [20,30,70,80]




