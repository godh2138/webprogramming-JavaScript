
var arr =[3,9,4,2,7,6];
arr.forEach(function (n) {    //foreach 를 써서 arr 하나씩 대입.
    if (n % 2 ==0) {
        console.log(n);
    }
});

var arr =[3,9,4,2,7,6];
arr.forEach((n) => {
    if (n % 2 == 0){
        console.log(n);
    }
});

var arr = ['foo', 'hello', 'diamond', 'A'];
var arr2 = arr.map(str => str.length);
console.log(arr2);

//foreach 는 배열 하나하나 씩 함수에 들어가는것,,
//map은 한번에 함수에 대입. map 메소드는 요소를 일괄적으로 변경하는데 효과적입니다.
const days = ["Mon", "Tue", "Wed", "Thus", "Fri"];
const selected_days = days.map(day => console.log(day));

var testJson = 
    [{name : "이건", salary : 50000000},
     {name : "홍길동", salary : 1000000},
     {name : "임신구", salary : 3000000},
     {name : "이승룡", salary : 2000000}];
let newJson = testJson.map((element, index) => {
    console.log(element);
    let returnObj = {}
    returnObj[element.name]
});

function test() {
    let testArray = [1,2,3,4,5];
    let returnArray = testArray.map(function(currentValue, a, array){
        console.log(currentValue);
        console.log(a);
        console.log(array);
        return('end', returnArray);
    });
}
function compare(a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let arr = [ 1, 2, 15  ];
