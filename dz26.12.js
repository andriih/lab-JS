//var a = ['one','two','three','four','five'];
var a = [1,2,3,4,5,6,7,8,9,10];
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
function smallestInArr (arr,step){
    var newArr = [];
    if(arr.length === 0){
        console.log('Array is empty!');
    }else{
        for(var i=0; i <=arr.length-1; i++ ){
            for(var j=0;j <= arr.length-1;j+=2){

            }
        }
    }
    return newArr;
}
console.log(smallestInArr(a));