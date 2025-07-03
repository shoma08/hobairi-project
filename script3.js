'use strict';



const result = [];
const li = document.getElementsByTagName("li")
console.log(li)
let element = document.getElementsByTagName("input")[0]
console.log(element)
element.addEventListener("change",function (){
    result.push(element.value);
    console.log(result);
    for (let turn = 0; turn < result.length; turn++){
    li[turn].innerText = result[turn];
}
})
