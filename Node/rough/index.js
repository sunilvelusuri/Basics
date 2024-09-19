// var name="global";
// function outer(){
//     var i=1;
//     console.log(name);
//     name="outer-scope";
//     function inner(){
//         console.log(i);
//         console.log(name);
//     }

// const { setInterval } = require("timers/promises");

//     inner();
// }
// outer();
// // inner();


// var addition = function add(a){
//     return a+a;
// }

// console.log(addition);

// var arr = [1,2,3,4,5];
// var arr2 = [1,2,3,4,5];
// arr.splice(1,1,11,12);
// console.log(arr);
// console.log(arr2.slice(1,4));


// var arr = [1,2,3,4,5];
// function print(element){
    
//     console.log(element);
// }

// arr.forEach(print);


// var student={
//     nam:"sunil",
//     marks:10,
//     age:23    
// };

// for(var prop in student){
//     console.log(prop, student[prop]);
// }


// var student={
//     nam:"sunil",
//     marks:10,
//     age:23    
// };

// var anil={
//     color:"white",
//     age:20,

// }
// console.log(student)
// delete student.marks;
// console.log(student)

// function printProperty(obj,prop){
//     console.log(obj[prop]);
// }
// var prop="age";
// printProperty(anil,prop);

// // console.log(student.age);

// let address;
// var studentObj={
//     name:"sunil",
//     age:24,
//     rollNo:207
//     address:{
//     city:"Nellore",
//     state:"AP"
// };
// };

// delete studentObj.rollNo;


// var studentObj = {
//     name: "sunil",
//     age: 24,
//     rollNo: 207,
//     address: {
//         city: "Nellore",
//         state: "AP"
//     }
// };

// delete studentObj.rollNo;



// var sec=1;
// function calling(){
//     console.log("After", sec);
//     sec++;
//     if(sec==6){
//         clearInterval(i);
//     }
// }

// var i = setInterval(calling,1000);

// var count =10;
// function timer(){
//     console.log(count);
//     count--;
//     if(count==0){
//         console.log("Times up");
//         clearInterval(id);
//     }
    
// }

// var id=setInterval(timer,1000);


// function timer() {
//     console.log("Hello ninjas!");
//    for (let i = 1; i <= 5; i++) {
//      setTimeout(
//        function (num) {
//          console.log(num);
//        },
//        i * 1000,
//        i
//      );
//    }
//  }
 
//  timer();
  
  

