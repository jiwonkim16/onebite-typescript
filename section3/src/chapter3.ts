// 기본 타입 간의 호환성 : 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것이었다.
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// num2 = num1;

// 객체 타입 간의 호환성 : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal

type Book = {
  // 슈퍼타입
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "React",
};
book = programmingBook;
// programmingBook = book; 불가능

// 초과 프로퍼티 검사
// 변수를 초기화 할 때 객체 리터럴을 사용하면 발동하는 검사인데
// 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사이다.
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "React",
};
