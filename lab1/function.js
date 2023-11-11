//loại 1: function không có parameter và không có return
//syntax cũ
function hello() {
   console.log('hello vietnam')
}
hello()
//syntax mới (ES6)
var sayHello = () => {
   console.log ('hello greenwich')
}
sayHello()

//loại 2: function không có parameter nhưng lại có return
function getCurrentYear() {
   return 2023
}
//var year = getCurrentYear()
console.log('We are living in ' + getCurrentYear())

//loại 3: function có parameter nhưng không có return
function getTotal(a, b) {                //a, b: parameter (tham số)
   console.log('Total : ' + (a+b))
}
getTotal(10, 20)                         //10, 20: argument (đối số)
/*
   parameter: input
   return:    output
*/

//loại 4: f2unction có cả parameter và return
function welcome(name) {
   return 'Welcome ' + name + ' to Greenwich Vietnam'
}
console.log(welcome('Ronaldo'))