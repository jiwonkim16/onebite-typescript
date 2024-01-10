// Unknown 타입은 모든 타입들의 슈퍼 타입이다.
// 그러므로 모든 값을 넣을 수 있다. (모든 타입에 대한 업캐스팅 가능)
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //   let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

// never 타입은 계층도 가장 아래 있기 때문에 모든 집합의 부분집합 즉, 공집합을
// 의미하며, 모든 타입의 서브 타입이다.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  //   let never1: never = 10;
  //   let never: never = "string";
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("gi");
  }

  let voidVar: void = undefined;
  //   let voidConst: void = null;
}

// any 타입은 모든 타입의 슈퍼 타입으로 위치하기도 하며,
// 모든 타입의 서브 타입으로 위치하기도 한다.(never 타입만 제외)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar;
}
