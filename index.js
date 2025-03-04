console.log("Exercise 1")
console.log("---- ---- ----")

const items = ['apple', 'banana', 'orange'];
const formatArray = (str) => {
    return `The array has ${str.length} items, and the first item is ${str[0]} and the last item is ${str[str.length-1]}`
}
const message = formatArray(items);
console.log(message)

console.log("==== ==== ====")
console.log("Exercise 2")
console.log("---- ---- ----")

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };
const formatProduct = (product) => {
    if(product.inStock === true){
        return `${product.name} costs INR ${product.price} and is in stock.`
    }
    else{
        return "Not in Stock."
    }
}  

const messagge = formatProduct(product);
console.log(messagge);

console.log("==== ==== ====")
console.log("Exercise 3")
console.log("---- ---- ----")

const personArr = [{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }, "Akhil"]
const findPerson = (arr, name = "Akhil") => arr.find(person => person.name === name) || null
console.log(findPerson(personArr))

console.log("==== ==== ====")
console.log("Exercise 4")
console.log("---- ---- ----")

const arr1 = ["grapes", "banana", "apple"]
const arr2 = ["red", "blue", "green"]
const pickFirstAndSecond = ([first, second]) => {
    return {first, second}
}
console.log(pickFirstAndSecond(arr1))
console.log(pickFirstAndSecond(arr2))

console.log("==== ==== ====")
console.log("Exercise 5")
console.log("---- ---- ----")

const startsWithA = str => str.charAt(0) === "A" ? true : false
console.log(startsWithA("Akshita"))
console.log(startsWithA("Jeena"))

console.log("==== ==== ====")
console.log("Exercise 6")
console.log("---- ---- ----")

const printFirstCharacter = (arr) => arr[0]
console.log(printFirstCharacter([1, 2, 3, 5, 8]))

console.log("==== ==== ====")
console.log("Exercise 7")
console.log("---- ---- ----")

const printLastFive = (arr) => arr.slice(-5)
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))

console.log("==== ==== ====")
console.log("Exercise 8")
console.log("---- ---- ----")

const printSecondCharacter = (arr) => arr[1]*20
console.log(printSecondCharacter([1, 2, 3, 5, 8]))

console.log("==== ==== ====")
console.log("Exercise 9")
console.log("---- ---- ----")

const sayHello = (arr) => {
    return "Hello " + arr[1]
}
console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))

console.log("==== ==== ====")
console.log("Exercise 10")
console.log("---- ---- ----")

const sumOfEvenIndices = (arr) => arr.reduce((acc, curr, index) => index % 2 === 0 ? acc + curr : acc, 0)
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5]))
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25]))

console.log("==== ==== ====")
console.log("Exercise 11")
console.log("---- ---- ----")

const sumFirstTwoElements = (arr) => arr[0] + arr[1]
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5]))
console.log(sumFirstTwoElements([12, 14, 3, 27, 15]))

console.log("==== ==== ====")
console.log("Exercise 12")
console.log("---- ---- ----")

const printMultipleOfFive = (arr) => arr.find(arr => arr % 5 === 0)
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3]))
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3]))

console.log("==== ==== ====")
console.log("Exercise 13")
console.log("---- ---- ----")

const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  const getAddress = (data) => ({postalcode: data.postalCode, city: data.city})
  console.log(getAddress(userData));

  console.log("==== ==== ====")
console.log("Exercise 14")
console.log("---- ---- ----")

const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }
  const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
  }
  const printData = (data) => `${data.name} lives in ${data.country}`
  console.log(printData(userData1))
  console.log(printData(userData2))

  console.log("==== ==== ====")
console.log("Exercise 15")
console.log("---- ---- ----")

  const productt = {
    name: "Apple MacBook Air 2020",
      specification: {
          capacity: "256GB",
        size: "13.3 Inch"
      },
    price: 82900
  }
const printProductDetails = (data) => `${data.name} which is of ${data.specification.size}, has a capacity of ${data.specification.capacity}`
console.log(printProductDetails(productt))