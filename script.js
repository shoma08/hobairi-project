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
 
// const result = []
// let element = document.getElementsByTagName("input")[0];
// element.addEventListener("change", function () {
//     // console.log (element.value)
//     // result.push(element.value)
//     //console.log(result)
//     // console.log(result[0])
// })

// // const name = [];
// // for (const conect of element){
// //     name.push(conect);
// //}
// let result1 = document.getElementsByClassName("1")
 
// let button = document.getElementsByClassName("button1")[0]
// // console.log(button);
// button.addEventListener("click", function () {
//     for (const li of result1) {
//         li.innerText = element.value
//     }
// })


// const result = [];
// const li = document.getElementsByTagName("li")
// console.log(li)
// let element = document.getElementsByTagName("input")[0]
// console.log(element)
// element.addEventListener("change",function (){
//     result.push(element.value);
//     console.log(result);
//     for (let turn = 0; turn < result.length; turn++){
//     li[turn].innerText = result[turn];
// }
// })
// localStorage.setItem("D618", "坂入")
function showTraining(part) {
  const trainings = {
    '腕': 'インクラインダンベルカール、ケーブルプレスダウン、ダイアモンドプッシュアップ',
    '足': 'ランジ、レッグプレス、ブルガリアンスクワット',
    '背中': '懸垂、ベントオーバーロウ、ラットプルダウン、ケーブルローイング',
    '胸': 'ベンチプレス、腕立て伏せ、チェストフライ、ダンベルプレス、ディップス',
    '腹筋': 'クランチ、レッグレイズ、プランク、ロシアンツイスト'
  };
 
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `${part}のおすすめトレーニング: ${trainings[part]}`;
}
 
 
function showClubTraining(club) {
  const clubTrainings = {
    '野球': '・肩のインナーマッスル強化\n・体幹トレーニング（プランク）\n・下半身強化（スクワット）',
    'ソフト': '・股関節の柔軟性向上（ヒップリフト）\n・体幹強化（サイドプランク）\n・肩周りの筋トレ（ダンベルフライ）',
    'サッカー': '・下半身強化（ブルガリアンスクワット）\n・瞬発力向上（ジャンプトレーニング）\n・体幹（プランク）',
    'バスケ': '・ジャンプ力強化（ジャンピングスクワット）\n・腕と肩の筋トレ（プッシュアップ）\n・体幹（プランク）',
    'バレー': '・スパイク力向上（メディシンボール投げ）\n・ジャンプ力（カーフレイズ）\n・肩の安定性（チューブトレーニング）',
    '陸上': '・下半身強化（ランジ）\n・体幹（プランク）\n・柔軟性（ダイナミックストレッチ）',
    '剣道': '・体幹（プランク）\n・下半身（スクワット）\n・肩と腕（懸垂）',
    '吹奏楽': '・呼吸筋トレーニング（腹式呼吸）\n・姿勢維持（背筋トレーニング）\n・指の柔軟性（グリップトレーニング）',
    'ものづくり': '・集中力向上（瞑想＋呼吸法）\n・手首・指の筋トレ（ハンドグリップ）\n・姿勢改善（背筋トレーニング）'
  };
 
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = `${club}部のおすすめ筋トレ:\n${clubTrainings[club]}`;
}