// void
// 공허라는 뜻을 가지고 있다.즉, 아무것도 없음을 의미하는 타입이다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// never
// 존재하지 않는, 즉 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
