///////////////////////////////////////////////// 1.Splice method

const arr1 = ['a', 'b', 'c', 'd', 'e']
// arr1.splice(1,2)
// console.log(arr1);

// 2.Sual

// arr1.splice(2,4,'e');
// console.log(arr1);

// 3.Sual

// arr1.splice(arr1.length-1)
// console.log(arr1);

// 4.Sual

// arr1.splice(arr1.length-3,3)
// console.log(arr1);

// 5.Sual

// arr1.splice(3,0,'3','4')
// console.log(arr1);

// 5.Sual

// arr1.splice(0,2,'A','B')
// console.log(arr1);



//////////////////////////////////////////////////////////////////////////2.Slice Metod

// 1.Sual
const arr2 = ['user1', 'user2', 'user3', 11, 3, 5]
// const newArr = arr2.slice();

// console.log(newArr);

// 2.Sual
// const newArr=arr2.slice(2)
// console.log(newArr)



// 3.Sual

// const newArr=arr2.slice(2)
// console.log(newArr);


//////////////////////////////////////////////////////////////////////////////////////// 3. Concat metod

// 1
const arr3 = [1, 2, 3]
const arr33 = [4, 5, 6]

// let num =arr3.concat(arr33)
// console.log(num);


// 2

// let num =arr3.concat('a','b')
// console.log(num);

////////////////////////////////////////////////////////////////////////////////////////// 4 forEach

const arr4 = ['name', 'surname', 10, 'age', 'city', 'uni', 80, 20];
// arr4.forEach((name) => console.log(name));

// 2

// arr4.forEach((item) => {
//     if (typeof item === 'number') {
//         console.log(item * 2);
//     }
// })

// 55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555

const arr5 = [4, 5, 6, '2', 6, true, undefined, '55']
// 1

// const map1= arr5.map((item)=>console.log(item));

// 2
// const result = arr5.map((item) => {
//     if (typeof item == 'number') {
//         return item * 5
//     }
//     else return item
// })
// console.log(result);


// // 3

const newArray4 = arr5.map((item) => String(item))
console.log(newArray4);

// 4
const newArray5 = arr5.map((item) => Boolean(item))
console.log(newArray5);
// 5

const newArray6 = arr5.map((item) => Number(item))
console.log(newArray6);

////////////////////////////////////////////////////////////////////////// 6


// 1
const mixArray = ['1', 2, 4, 'a', false, '9', 12, undefined, 3, true, null]

const newMixarr = mixArray.filter((item) => typeof item === 'number')
console.log(newMixarr);
// 2
const newMixarr2 = mixArray.filter((item) => typeof item === 'string')
console.log(newMixarr2);
// 3
const newMixarr3 = mixArray.filter((item) => typeof item === 'boolean')
console.log(newMixarr3);
// 4
const newMixarr4 = mixArray.filter((item) => !item)
console.log(newMixarr4);