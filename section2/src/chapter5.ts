// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "us",
}

const user1 = {
  name: "ji",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user2 = {
  name: "gi",
  role: Role.USER, // 일반직원
};
const user3 = {
  name: "ai",
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
