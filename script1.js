'use strict';



// const result = [];
// const li = document.getElementsByTagName("li")
// console.log(li)
// let element = document.getElementsByClassName("1")[0]
// let button = document.getElementsByTagName("button")[0]
// console.log(element)
// console.log(button)

// button.addEventListener("click", function(){
//     result.push(element.value)
//     for (let turn = 0; turn < result.length; turn++){
//     li[turn].innerText = result[turn];
//     // localStorage.setItem(, result.value);
//     // console.log(localStorage);
// }
// })
const reserv = document.getElementById("reserv");
reserv.addEventListener("click", saveData);



 function saveData() {
    const input = document.getElementById('inputData').value.trim();
    
      if (input === "") {
        alert("空のデータは保存できません。");
        return;
      }

      // すでに保存されているデータを取得（なければ空配列）
      let dataList = JSON.parse(localStorage.getItem('savedData')) || [];

      // 新しいデータを追加
      dataList.push(input);

      // ローカルストレージに再保存（JSON文字列として）
      localStorage.setItem('savedData', JSON.stringify(dataList));

      alert("データを追加保存しました！");
      document.getElementById('inputData').value = ""; // 入力欄をリセット
    }


    const check = document.getElementById("check");
    check.addEventListener("click", showData);

    function showData() {
      const output = document.getElementById('output');
      output.innerHTML = ""; // 一度クリア

      let dataList = JSON.parse(localStorage.getItem('savedData')) || [];

      if (dataList.length === 0) {
        output.innerHTML = "<li>保存されたデータはありません。</li>";
        return;
      }

      dataList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${item}`;
        output.appendChild(li);
      });
    }

    const cancel = document.getElementById("cancel");
    console.log(cancel)

    const number = document.getElementById("number");
    console.log(number)
cancel.addEventListener("click", clearData)
    function clearData(){
    const data = JSON.parse(localStorage.getItem("savedData"));
    localStorage.clear();
    data.splice(Number(number.value) - 1, 1);
    localStorage.setItem("savedData", JSON.stringify(data));
    


    // console.log(data)
    // console.log(typeof Number(number.value));
    


    }
    