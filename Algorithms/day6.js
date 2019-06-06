// returnOddsArray1To255()

// Create an array with all the odd integers 
// between 1 and 255 (inclusive).
function returnOddsArray(){
    var arr = [];
    for (var i = 1; i <= 255; i=i+2){ // i++ == i+=1 == i=i+1
        arr.push(i);
    }
    return arr;
}
// console.log(returnOddsArray());

// returnArrayCountGreaterThanY(arr, y)

// Given an array and a value Y, count and print 
// the number of array values greater than Y.

function returnArrayCountGreaterThanY(arr, y){
    var count = 0; // holds onto the number of values greater than y
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > y){
            count=count+1;
        }
    }
    console.log(count);
}
returnArrayCountGreaterThanY([1,5,-10,7], 4);

//Given an array, print the max, min and average values for that array
function printMaxMinAverageArrayVals(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i=0; i<arr.length;i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = (sum)/arr.length;
    console.log("Max: "+max+" Min: "+min+" Average: "+avg); 
}

printMaxMinAverageArrayVals([5,2,8])

function filterRange(arr, min, max) {

    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {

            arr[counter] = arr[i];
            counter++;
        }
    }
    arr.length = counter;
    console.log(counter);
    return arr;
}

console.log(filterRange([8, 23, 5, 15, 7, 2, 12], 4, 15));
