// JSON.stringify – 객체를 JSON으로 바꿔줍니다.
// JSON.parse – JSON을 객체로 바꿔줍니다.
// 문자열은 JSON으로 인코딩된(JSON-encoded), 직렬화 처리된(serialized), 문자열로 변환된(stringified), 결집된(marshalled) 객체라고 부릅니다.
//  객체는 이렇게 문자열로 변환된 후에야 비로소 네트워크를 통해 전송하거나 저장소에 저장할 수 있습니다
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);

  console.log(typeof json); //문자열이다.
  console.log(json);``