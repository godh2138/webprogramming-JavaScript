function User(name) { //첫 문자는 대글자    //생성자 생성
    this.name = name;
    this.isAdmin = false;
}

let user = new User("jack");

alert(user.namae);
alert(user.isAdmin);
//
// new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

// 1,빈 객체를 만들어 this에 할당합니다.
// 2,함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
// 3,this를 반환합니다.


// 생성되는 과정을 적어보자.
function User(name) {
    //this = {};           빈 객체가 암시적으로 만들어진다.
    // 새로운 프로퍼티를 this에 추가.

    this.name = name;
    this.isAdmin = false;

    //return this; (this 가 암시적으로 반환이 된다.)
}
