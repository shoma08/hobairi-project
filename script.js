'use strict';
const test = document.getElementById("test")
 
// console.log(test)
const today = new Date()
const month = today.getMonth() + 1
const date = today.getDate()
// console.log(month + "/" + date)
test.innerText = month + "/" + date
 
 
const test1 = document.getElementById("test1")
 
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
 
const monthTomorrow = tomorrow.getMonth() + 1;
const tomorrowDate = tomorrow.getDate();
test1.innerText = monthTomorrow + "/" + tomorrowDate
 
// console.log(monthTomorrow + "/" + tomorrowDate)
 
 
const test2 = document.getElementById("test2")
 
const afterTomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 2);
 
const monthAfterTomorrow = tomorrow.getMonth() + 1;
const afterTomorrowDate = tomorrow.getDate();
test2.innerText = monthAfterTomorrow + "/" + afterTomorrowDate
 
// console.log(monthAfterTomorrow + "/" + afterTomorrowDate)
 
 
const test3 = document.getElementById("test3")
 
// console.log(test3)
const today1 = new Date()
const month1 = today1.getMonth() + 1
const date1 = today1.getDate()
// console.log(month1 + "/" + date1)
test3.innerText = month1 + "/" + date1
 
 
const test4 = document.getElementById("test4")
 
const tomorrow1 = new Date(today1);
tomorrow1.setDate(today1.getDate() + 1);
 
const monthTomorrow1 = tomorrow1.getMonth() + 1;
const tomorrowDate1 = tomorrow1.getDate();
test4.innerText = monthTomorrow1 + "/" + tomorrowDate1
 
// console.log(monthTomorrow1 + "/" + tomorrowDate1)
 
 
const test5 = document.getElementById("test5")
 
const afterTomorrow1 = new Date(today1);
tomorrow1.setDate(today1.getDate() + 2);
 
const monthAfterTomorrow1 = tomorrow1.getMonth() + 1;
const afterTomorrowDate1 = tomorrow1.getDate();
test5.innerText = monthAfterTomorrow1 + "/" + afterTomorrowDate1
 
// console.log(monthAfterTomorrow1 + "/" + afterTomorrowDate1)
 
const result = []
let element = document.getElementsByTagName("input")[0];
element.addEventListener("change", function () {
    // console.log (element.value)
    //result.push(element.value)
    //console.log(result)
    // console.log(result[0])
})
let result1 = document.getElementsByTagName("li")
 
let button = document.getElementsByClassName("button1")[0]
// console.log(button);
button.addEventListener("click", function () {
    for (const li of result1) {
        li.innerText = element.value
    }
})
console.log(result)
for (const results of result) {
    console.log(results)
}
let count = 0
for (const li of result1) {
    li.innerHTML = result1[count++]