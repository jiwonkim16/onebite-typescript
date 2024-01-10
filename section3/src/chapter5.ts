// 타입 추론

// 타입스크립트는 점진적인 타입시스템을 체택한 언어이다.
// 점진적인 타입 시스템이란 변수에 타입이 정의되어있지 않을 때에도 초기값을 넣어주기만 하면
// 초기값을 기준으로 타입을 추론하는 편리한 시스템이다.

// 그러나 모든 상황에서 타입스트립트가 타입을 추론해주는 것은 아니다.
// 예를 들어 아래와 같은 함수의 매개변수에 타입을 정의하지 않으면 타입스크립트에서 오류를 발생시킨다.
// function func(params) {}

// 어떤 상황과 원리로 타입을 추론하는지
// 1. 일반적인 변수를 선언하는 상황 : 변수의 초기값을 기준으로 타입을 추론한다.
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "gi",
  profil: "dd",
};
let { id, name, profil } = c;
let [one, two, three] = [1, "hello", true];

// 2. 함수의 반환값 : return문 다음으로 오는 반환값을 기준으로 추론
function func1() {
  return "hello";
}

// 3. 매개변수에 기본값이 설정되어 있다면 기본값을 기준으로 타입 추론
function func2(message = "hello") {}

// 4. 타입이 변신하듯 바뀌는 상황 (any 타입의 진화)
// 변수의 초기값을 지정하지 않고 선언만 하면 암묵적인 any 타입이라고 추론되며 진화하게 된다.

let d; // any 타입
d = 10; // number 타입으로 진화
d.toFixed();

d = "hoooo"; // string 타입으로 진화
d.toUpperCase();

// 5. const 키워드를 사용해서 변수 선언하게 되면 리터럴 타입으로 추론된다.
const num = 10;
const str = "hello";

// 6. 여러 타입의 요소를 가지고 있는 배열은 유니온 타입으로 추론된다.
let arr = [1, "string"];
