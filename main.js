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


var num,
    a= [],
    sum=0;

for(;;){

}

for(var i=1;i<=500;i++){
    if(i%num == 0){
        a.push(i);
    }
}
for(var j=0; j<= a.length-1; j++){
    sum+= a[j];
}

for(var k=0; k <=a.length-1;k++){
    console.log(a[k]);
}

console.log("Summa = "+sum);