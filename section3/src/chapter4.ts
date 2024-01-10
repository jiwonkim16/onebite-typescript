// 대수 타입이란 ? 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// 합집합 타입 - Union 타입

let a: string | number;
a = 1;
a = "hello";

// 만약 문자열, 숫자, 불리언 타입도 가능하게 하려면 어떻게 해야할까
let a1: string | number | boolean;
a1 = 1;
a1 = "hi";
a1 = true;

// 여러 타입의 요소를 갖는 배열의 타입
let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입들을 이용한 유니언 타입 만들기

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "돌돌이",
  color: "yellow",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// name 이라는 프로퍼티 만을 가지고 있는 타입은 Union1 타입에 없기 때문에 오류가 발생한다.
// 집합으로 따지면 합집합 밖에 있기 때문이다.
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 타입 - Intersection 타입

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

// let intersection2: Intersection = {
//   name: "",
//   color: "",
// };
