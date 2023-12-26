/* footer styles */
footer {
  text - align: center;
  padding: 2em 0;
  color: white;

  display: flex;
  flex - direction: column;
  align - items: center;
  justify - content: center;
}

button {
  padding: 0.8em;
  font - size: 100 %;
  color: white;
  border: none;
  border - radius: 5px;
  cursor: pointer;
  width: 10rem!important;
  height: 3.5rem;
  max - width: 150px;
  margin: 0 0.5rem;
  z - index: 1;
}

#shareButton {
  background - color: #fff;
  color: #e8344e;
  font - weight: bold;
  transition: background - color 0.3s ease;
}

#studyButton {
  background - color: #E8334E;
  color: white;
  font - weight: bold;
  transition: background - color 0.3s ease;
}

#studyButton a {
  color: white;
  text - decoration: none;
}


/* 화면 크기가 작을 때의 스타일 */
@media(max - width: 768px) {

  #shareButton,
    #studyButton {
    width: 90 %;
    /* 더 작은 화면에서 버튼 너비를 늘림 */
    padding: 0.75em;
    font - size: 90 %;
    /* 작은 화면에서 폰트 크기 줄임 */
  }
}

/* 호버 효과는 모든 화면 크기에 적용 */
#shareButton:hover {
  background - color: #fae1e1;
}

/* 호버 효과는 모든 화면 크기에 적용 */
#studyButton:hover {
  background - color: #bc2a40;
}

/* 하단부 안내 */
.copyright {
  width: 25rem;
  font - size: 1rem;
}
// 날짜 기준 카드 오픈 기능
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 현재 한국 시간을 얻어오기
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

    // 각 날짜에 해당하는 날짜를 계산
    const openDate = new Date(2023, 11, index + 1); // 2023년 12월 1일부터 시작

    // 현재 날짜가 열 수 있는 날짜 이후인지 확인
    if (now.getTime() > openDate.getTime()) {
      // 여기에 모달을 열거나 특정 동작을 수행하는 코드 추가

      // 상위 div의 class 번호를 찾아서 image url에 사용합니다
      const imageUrl = `image/card/card-${index + 1}.png`;

      // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
      const doorDiv = document.querySelector(`.day-${index + 1}`)
      const backDiv = doorDiv.querySelector(`.back`);

      const style = window.getComputedStyle(backDiv);
      const pTag = backDiv.querySelector('p')
      const text = modalMessageList[index]['message']

      // showModal 함수를 호출하여 모달을 표시합니다.
      showModal(imageUrl, text);
      // alert('이벤트 캘린더를 엽니다.');

    } else {
      // 현재 날짜가 열 수 있는 날짜보다 이전인 경우 몇 일 후에 열 수 있다는 메시지를 표시
      const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
      console.log(openDate, now, daysRemaining)
      alert(`이 카드는 ${daysRemaining}일 후에 열 수 있어요!`);
    }
  });
});