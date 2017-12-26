// 1.輸入數值時,輸出表格

// 宣告
var boomColumn = document.querySelector("#boomColumn");
var boomRow = document.querySelector("#boomRow");
var boomEnemies = document.querySelector("#boomEnemies");
var boomSubmit = document.querySelector("#boomSubmit");
var boomTable = document.querySelector("#boomTable");
// 函數

function boomFunc(e) {
  boomTable.innerHTML = "";
  var col = parseInt(boomColumn.value);
  var row = parseInt(boomRow.value);
  var sum = col * row;
  var tbl = document.createElement("table");
  tbl.setAttribute("border", "1");
  var tbdy = document.createElement("tbody");
  for (var i = 0; i < row; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < col; j++) {
      var td = document.createElement("td");
      td.style.width = "50px";
      td.style.height = "50px";
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  boomTable.appendChild(tbl);

  //   敵人

  var enemies = parseInt(boomEnemies.value);
  var ary = [];
  for (var i = 0; i < enemies; i++) {
    var randomRow = Math.floor(Math.random() * row);
    var randomCol = Math.floor(Math.random() * col);

    if (alreadyInArray([randomCol, randomRow], ary)) {
      i--;
      continue;
    }

    var y = tbl.tBodies[0].rows[randomRow].cells[randomCol];
    y.innerHTML += "壞人";
    ary.push([randomRow, randomCol]);
    // console.log(ary);
  }
}

function alreadyInArray(needil, haystack) {
console.log(needil)
}

// 判斷路徑是否正確
// function isPath() {
//   while (canCheck.length > 0) {

//   }
// }
// 監聽
boomSubmit.addEventListener("click", boomFunc);
