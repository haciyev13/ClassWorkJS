// function name() {
//     return 8+4
// }
// console.log(name());

// const arr1 =[1,2,3,4]
// let sum= 0
// function calculate() {
//     for (let i = 0; 1 < arr1.length; 1++) {
//         const arr1 = array[1];
//         sum+=arr1[i]
//     }
//     return sum
// }
// console.log(calculate());


// 1
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'y', 'u'];
function getRandomLetter() {
    return arr1[Math.floor(Math.random() * arr1.length)]
}
console.log(getRandomLetter());






// 2

const arr2 = [1, 2, 3, 4, 14, 5, 6, 8]
let sum = 0
function calcSum() {
    for (let item of arr2) {
        if (item % 2 == 0) {
            sum += item
        }
    }
    return sum;
}
console.log(calcSum(arr2));





// 3

const arr3 = [-3, -5, -9, 3, 0, true, false, -22]

const positive = []
const getPositive = function () {
    for (let sun of arr3) {
        positive.push(Math.abs(sun))
    }
    return positive;


























    
}
console.log(getPositive(arr3));





// 4

const arr4 = [4, 9, 16, 20, 24, 43, 81, 100]

const calcSquare = [];
const calcSquareRoot = () => {
    for (let nam of arr4) {
        calcSquare.push(Math.floor(Math.sqrt(nam)))
    }
    return calcSquare
}
console.log(calcSquareRoot(arr4));




// 5

const arr5 = [
    {
        name: 'Ehed',
        surname: 'Haciyev',
        city: 'Goranboy'
    },
    {
        name: 'Ehed',
        surname: 'Haciyev',
        city: 'Goranboy'
    },
    {
        name: 'Ehed',
        surname: 'Haciyev',
        city: 'Goranboy'
    },
]


function fillInfo() {
    for (let item of arr5){
        item.name='Vilayet',
        item.surname='Zeynalli',
        item.city='Imisli'
    }
    return arr5
}
console.log(fillInfo());