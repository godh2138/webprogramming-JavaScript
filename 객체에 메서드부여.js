let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {    //sayHi라는 메서드를 부여.
    alert("안녕하세요!");
  };
  
  user.sayHi(); // 안녕하세요!

  user = {
    sayHi() { // "sayHi: function()"과 동일합니다.
      alert("Hello");
    }
  };




  //
  let group = {
    title: "1모둠",
    students: ["보라", "호진", "지민"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student) //this.title = group.title
      );
    }
  };
  
  group.showList();


  //
  function defer(f ,ms) {
      return function() {
          setTimeout(() => f.apply(this.arguments), ms)
      };
  }
  function sayHi(who) {
      alert('안녕' + who);
  }
  let sayHiDeffered = defer(sayHi, 2000);
  sayHiDeffered('철수');

  //

  //계산기 만들기

  let Calculator = {
      sum() {
          return this.a + this.b;
      },
      mul: function() {
          return this.a * this.b;
      },
      read() {
          this.a = +prompt('첫번쨰 값:',0);
          this.b = +prompt('두번째 값:',0);
      }
  };

  Calculator.read();

  
  //체이닝

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;   //호출할 때마다 객체 자신을 반환
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
      alert( this.step );
      return this;
    }
  };
  
  ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1

  