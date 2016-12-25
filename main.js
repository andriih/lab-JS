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


// var a =[];
// var car = {};
// for(var i=1; i<=5; i++ ){
//     var label  = prompt("Choose your car");
//     car = {
//         model: label,
//     }
//     a.push(car);
//     console.log(car);
// }
//
// console.log(a);

var FirmName,
    ModelName,
    EngineDisplacement=0,
    allCars=[],
    currentCar={};



for(var i=1;i<=5;i++){
    do{
        FirmName = prompt("Enter Firm Name");
        if(FirmName.length === 0){
            alert("Firm Name cant be empty");
            continue;
        }else{
            console.log(FirmName);
            break;
        }
    }while(true);
    do{
        ModelName= prompt("Enter Model Name");
        if(ModelName.length===0){
            alert("Model Name cant be empty");
            continue;
        }else{
            console.log(ModelName);
            break;
        }
    }while(true);
    do{
        EngineDisplacement = prompt("enter Engine Displacement");

        if(EngineDisplacement.length === 0){
            alert("Engine Displacement cant be empty");
            continue;
        }else if(isNaN(EngineDisplacement)){
            alert("Engine Displacement must be number");
            continue;
        }else{
            console.log(EngineDisplacement);
            break;
        }
    }while(true);

    currentCar = {
        "Firm":FirmName,
        "Model":ModelName,
        "Engine":EngineDisplacement
    };

    allCars.push(currentCar);
}
console.log(allCars);