// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 의미한다.

// 예를 들어 string 타입과 number 타입이 있을 때 이 두 타입은 어떠한 교집합도 존재하지 않는다.
// 이렇듯 공통 원소가 하나도 없는 두개의 집합을 서로소 관계에 있다라고 하며, 두 집합을 서로소 집합이라 한다.
// 그래서 string | number 를 서로소 유니온 타입이라 한다.

// 서로소 유니언 타입을 언제 사용하는지??
// 예를 들어 웹서비스에 회원관리 기능을 만든다고 가정했을 때
// 회원분류는 3가지이고 회원의 타입을 각각 별칭으로 정의한다.

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else if ("visitCount" in user) {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
  }
}

// 위처럼 코드를 작성하면 직관적이지 않다. 그래서 이럴때 서로소 유니온 타입을 사용하는데
// 방법은 각 타입 별칭에 tag 라는 프로퍼티를 추가하고 거기에 타입을 string 리터럴로 정의한다.
function login1(user: User) {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else if (user.tag === "GUEST") {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
  }
}

// 또는 switch 문을 이용해서도 작성할 수 있다.
function login2(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log();
      break;
    }
    case "MEMBER": {
      console.log();
      break;
    }
    case "GUEST": {
      console.log();
      break;
    }
  }
}
