//while 口語話對我而言就是類似for迴圈的東西，以下舉例

let a = 0;
let count = 0;
while (a < 10){
    a+=1
    count++
}
console.log(a);
console.log(count);
//上述程式碼，設一變數a = 0 進while迴圈，給的條件是 a只要<10 就會不斷重複while迴圈，
//當a >= 10後就會跳出while並印出10
//count變數是我後來加上， 一開始設一變數count = 0，
//只要while內跑過一次a還是<10，count就會+1，最後印出count = 10。