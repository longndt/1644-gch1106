//cách 1
a = 3

//cách 2 (global variable)
var b = 5

//cách 3 (local variable)
let c = 7

//cách 4 (hằng số)
const PI = 3.14

a = 8
b = 5
c = a + b  //13
d = a - b  //3
e = a * b  //40
f = a / b  //1.6
g = a % b  //3
console.log("f = " + f)
console.log(`g = ${g}`)
console.log('c = ' + c + '\n' + 'd = ' + d) // \n: new line
//Remember to save code (CTRL + S) before run

n = 10
n += 1  //n = n+1
n *= 3  //n = n*3
console.log(n)

x = 1
y = x++ //posfix operator : y=x=1 => x++=x+1=1+1=2
z = ++x //prefix operator : ++x=x+1=2+1=3 => z=x=3

console.log('x = ' + x)  //3
console.log('y = ' + y)  //1
console.log('z = ' + z)  //3
