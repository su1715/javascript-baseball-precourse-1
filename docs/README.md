# 구현할 기능 목록

## App 렌더링

- 버튼을 누르면 input 내용 받기
- 게임 결과 출력하기
  - 게임 결과: 에러일 때 `alert`로 에러메세지 보여주기
  - 게임 결과: 실패인 경우 `볼`, `스트라이크`, `낫싱` 메세지 렌더링하기
  - 게임 결과: 성공인 경우 축하메세지 렌더링하기
- 게임 성공 여부에 따라 재시작버튼 렌더링하기

## 게임진행(BaseballGame)

- 랜덤으로 숫자 생성하기
- 사용자 숫자 입력 받기
- 사용자 숫자 에러 검사하기
  - 숫자가 중복된 경우
  - 숫자가 세자리가 아닌 경우
  - 숫자(1 - 9) 가 아닌 다른 문자가 들어간 경우
- 에러가 아닌경우 랜덤 숫자와 사용자 숫자 비교하기
- 게임 결과 리턴하기
  - ex) {result: "error", message: "잘못된 입력입니다"}
  - ex) {result: "fail", message: "1볼 1스트라이크"}
  - ex) {result: "success", message: "정답을 맞추셨습니다"}
