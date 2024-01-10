// 타입 단언
// 타입 단언이 필요한 상황 : 의도와 달리 변수의 타입이 추론되는 경우
// 값 뒤에 "as 타입" 과 같이 쓰면 이 타입으로 앞의 값을 간주하라고 알려주는 것이다.
type Person = {
  name: string;
  age: number;
};

// 변수 person은 초기화 값으로 추론되기 때문에 아래 코드처럼 name과 age의 값을 넣어도 오류가 발생한다.
// 이를 해결하기 위해 초기화 값의 타입을 단언해주면 된다.
let person = {} as Person;
person.name = "";
person.age = 27;

// 예제
type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언은 아무때나 사용할 수 있는 것은 아니고 적어도 한가지의 규칙을 만족해야 한다.
// "값 as 타입" 형식을 단언식이라 하는데
// A as B라고 했을 때 A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.

let num1 = 10 as never; // A(숫자타입)이 B(never타입)의 슈퍼타입이기 때문에 성립.
let num2 = 10 as unknown; // A(숫자타입)이 B(unknown타입)의 서브타입이기 때문에 성립.
// let num3 = 10 as string;

// const 단언이란?
// 변수를 const로 선언한 것과 같은 효과를 주는 단언 방식이다.
// 주로 객체에서 사용되며, 그 객체의 모든 프로퍼티가 읽기 전용 프로퍼티가 된 객체로 추론된다.
// 그러므로 프로퍼티의 값을 수정할 수 없는 객체가 된다.
// 그래서 객체의 프로퍼티 각각 readonly 를 작성하기 번거롭다면 "as const" 로 단언해주면 편리하게 읽기 전용 프로퍼티를 만들 수 있다.

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// Non Null 단언
// 어떤 값이 null이거나 undefined이 아니라고 타입스크립트 컴파일러에게 알려주는 역할을 한다.
// 예제
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "lee",
};

const len: number = post.author!.length;
