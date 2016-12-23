// var k = +prompt("Enter number:");
//
//
//
// for(var j=1;j<=10;j++){
//     var i=0 ;
//     i += j;
//     console.log(i);
// }
//

//

//
// var a=[1,2,3,4,5,6];
// //var s = a.slice();
// //var s = a.splice(1,1,"Hello");//[ 1, 'Hello', 4, 5, 6 ]
// var s = a.indexOf(5);//4
//
//
// console.log(s);



// var a=[],
//     number=0;
//
// do{
//     number = prompt("Number:");
//     if(number != "q"){
//         a.push(parseInt(number));
//     }else{
//         alert("Done");
//         break;
//     }
// }while(true);
//
// alert(a);
// console.log(a);
//
// var start = +prompt("What to change");
// var changeTo = +prompt("change to...");
// var index = a.indexOf(start);
//
// console.log("Index "+index);
// var res = a.splice(index,1,changeTo);
//

// console.log(a);



//var res = a.join('-');
//var res = a.reverse();
//var res = a.sort();


var a =[];
var car = {};
for(var i=1; i<=5; i++ ){
    var label  = prompt("Choose your car");
    car = {
        model: label,
    }
    a.push(car);
    console.log(car);
}

console.log(a);