let arr = ['Bora', 'Lee'];

let [firstName, surname] =arr;
 //구조 분해 할당을 이용해 firstName에는 arr[0] surname에는 arr[1]을 할당.

console.log(firstName);


let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

let {title, width, height}= options;
alert(title);