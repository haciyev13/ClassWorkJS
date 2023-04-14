let myText = `An Array is a collection of items of same data type stored at contigous memory locationns.`
let x = 0;
for (let i = 0; i < myText.length; i++) {
    if (myText[i] == "a" || myText[i] == "A") {
        x++;
    }
}
console.log(x);



const arr1 = [1, 2, 4, 5, 7, 9, 13, 22]
let sum = 0
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum)



const arry2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"]
let arry3 = []
for (let i = 0; i < arry2.length; i++) {
    if (i % 2 == 1) {
        arry3.push(arry2[i])
    }
}
console.log(arry3);





let text1 = `how is it going?`
let newtext = ""
for (let i = 0; i < text1.length; i++) {
    if (text1[i] != i) {
        newtext += text1[i]
    }
}
console.log(newtext);




const numbersArr = [2, false, "5", "true", 9, 0, "1"]
let newNum = 0;
for (let i = 0; i < numbersArr.length; i++) {
    if (typeof Number[i] == "Number") {
        newNum += numbersArr[i]
    }
}
console.log(newNum);