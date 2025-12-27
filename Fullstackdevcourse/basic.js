// alert("welcome to your bank")
// var deposit = prompt("enter amount")
// alert("deposited " + deposit)
// console.log("cool person")

var num = prompt("enter lbs:")
var k = num*0.454
alert("weight in kgs: "+k)
console.log("conversion completed")

for (var i=0; i<5; i++)
    {
    console.log(i)
}
var i=0
while(i<5){
    console.log("hello")
        i++
    
}

//functions
function hello(){
    console.log("hello world")
}
hello()

function hi(a=1,b=2){
    return a+b
}

c = hi()
console.log("hello" +c)

var myArr = ["one", "two", "three"]

var last = myArr.pop()
console.log(last)

//objects

var carInfo ={make: "Toyota", year:1990, model:"camry"}
console.log(carInfo["make"])

for(i in carInfo){
    console.log(i)
}