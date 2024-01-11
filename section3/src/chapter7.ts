// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 의미한다.

// value 타입이 number일 때 toFixed 출력
// value 타입이 string이면 toUpperCase를 적용한 값을 출력
function func(value: number | string) {
  value; // 조건문 밖에선 number | string 타입으로 정의되어 있음.

  if (typeof value === "number") {
    console.log(value.toFixed()); // value타입이 number로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value타입이 string로 추론
  }
}

// typeof 외 다른 타입 가드
// instanceof 는 왼쪽에 있는 값이 오른쪽의 인스턴스인지를 물어보는 연산자
// 예 : value 타입이 Date 객체일 경우 getTime 값 출력
function func1(value: number | string | Date | null) {
  // Date와 같이 노드js에서 기본적으로 제공되는
  // 내장 객체들은 타입들이 기본적으로 제공된다.
  value;

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}
