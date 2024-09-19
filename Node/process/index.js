console.log(process.argv);

function add(a,b){
    return a+b;
}
console.log(add (2,8));


var args = process.argv.slice(2);

console.log("Adding the two numbers", add(parseInt(args[0]), parseInt(args[1])));



