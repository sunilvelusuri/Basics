console.log("Hi there")  // Printing the o/p

function add(a, b, c){    //function declaration
    return a+b+c;
}

console.log(add(2, 3, 4))  //function calling

console.log(process.argv);   //giving i/p after execution

var args=process.argv.slice(2);  //
console.log("adding the two numbers", add(parseInt(args[0]),parseInt(args[1]),parseInt(args[2])));

console.log(args[0]);