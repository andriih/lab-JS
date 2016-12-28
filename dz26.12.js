//var a = ['one','two','three','four','five'];
var a = [1,2,303,4,5,6,7,8,9,10];
//first function
function outputArrayInOne (arr){
    var newArr = [];
    if(arr.length === 0){
        console.log('Array is empty!');
    }else{
        for(var i=0; i <=arr.length-1 ; i += 2 ){
            console.log(i);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//second function
function outputArrayStep (arr,step){
    var newArr = [];
    if(arr.length === 0){
        console.log('Array is empty!');
    }else{
        for(var i=0; i <=arr.length-1 ; i += step ){
            console.log(i);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//third function
function smallestInArr (arr){
    var newArr = [];
    var small = arr[0];

    if(arr.length === 0){
        console.log('Array is empty!');
    }else{
        for(var i=1; i <= arr.length; i++ ){
            if(arr[i] < small){
                small = arr[i];
            }
        }
    }
    
    return ("smallest number "+small);
}
//Largest element
function largestInArr (arr){
    var newArr = [];
    var large = arr[0];

    if(arr.length === 0){
        console.log('Array is empty!');
    }else{
        for(var i=1; i <= arr.length; i++ ){
            if(arr[i] > large){
                large = arr[i];
            }
        }
    }   
    return ("largest number "+large);
}
console.log(outputArrayInOne(a));
console.log(outputArrayStep(a,3));
console.log(smallestInArr(a));
console.log(largestInArr(a));