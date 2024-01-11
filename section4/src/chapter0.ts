// 함수의 타입을 정의하는 방법
// 어떤 매개변수를 받고 어떤 결과값을 반환하는지를 이야기 해주어야
// 타입스크립트에선 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 결과값을 반환하는지를 이야기한다.
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "jiwon", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("jiwon", 123);
introduce("jiwon"); // 선택적 매개변수로 정의하면 이처럼 모든 매개변수가 없어도 함수를 호출할 수 있다.

// rest 파라미터
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
