// 輸入數字，計算 sum = x+1,x-1,...x 的總和
var sum = 0, even = 0,odd = 0;
function one(x) {
  for (var i = 1; i < x + 1; i++) {
    if (i % 2 == 0) {
      even += i;
        // console.log(i);
    } else {
      odd += -i;
        // console.log(-i);
    }
  }
  console.log(odd + even);
}
one(11);



