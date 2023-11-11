cities = ["hanoi", "danang", "cantho"]
console.log(cities)
console.log(cities[1])

cities.forEach(display)

function display(item, index) {
   console.log((index+1) + " : " + item)
}