num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num);

const num1 = [1, true, "Ehed"]
console.log(num1);

const num2 = [0, 1, 2, 3, 4, 5]
console.log(num2);

const num3 = Object.assign(num2)
console.log("num2 ;" + num3);

const num4 = [0, 1, 2, 3, 4, 5, 6, 7]
num4.push(8, 9);
console.log(num4);

const num5 = []
console.log(num5);
num5.push(5, 6, 7)
console.log(num5);
num5.shift(5);
console.log(num5);
num5.unshift(2);
console.log(num5);


const arry = [
    "Ehed",
    "Haciyev",
    21,
    "Quba"
]
console.log(arry);






const obj = {
    id: 1,
    firstName: {
        yourName: "Ehed",
    },
    lastName: {
        yourSurname: "Haciyev",
    },
    location:{
        uni: "GDU"
    }
}
console.log(obj)

const obj2=Object.assign(obj);
console.log(obj2);

const obj3 = {
    id: 3,
    firstName: {
        yourName: "Ehed",
    },
    lastName: {
        yourSurname: "Haciyev",
    },
    location:{
        uni: "GDU"
    }
}
console.log(obj3);
obj3.id=3;



const obj4 = {
    id: 4,
    firstName: {
        yourName: "Ehed",
    },
    lastName: {
        yourSurname: "Haciyev",
    },
    location:{
        uni: "GDU"
    }
}
