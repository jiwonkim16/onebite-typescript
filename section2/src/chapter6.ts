// any
// 특정 변수의 타입을 우리가 확실히 모를 경우 사용

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;

if (typeof unknownVar === "number") {
  num = unknownVar;
}
