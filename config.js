// 이 파일의 값만 수정하면 청첩장 주요 내용이 바뀝니다.
const WEDDING_CONFIG = {
  groom: {
    name: "박대형",
    parents: "박인락 · 김정희",
    phone: "010-xxxx-xxxx"
  },

  bride: {
    name: "조소현",
    parents: "조원래 · 최미자",
    phone: "010-xxxx-xxxx"
  },

  // ISO 형식: YYYY-MM-DDTHH:MM:SS+09:00
  weddingDate: "2026-10-31T11:00:00+09:00",

  invitationMessage:
`서로가 마주 보며 다져온 사랑을
이제 함께 한곳을 바라보며
걸어가고자 합니다.

저희 두 사람이 사랑의 이름으로
지켜나갈 수 있도록
앞날을 축복해 주시면 감사하겠습니다.`,

  venue: {
    name: "오린하우스",
    address: "부산 기장군 일광읍 학리2길 6",
    tel: "TEL : 0507-1327-6933",
    subway: "일광역에서 택시로 5분",
    bus: "시청앞 정류장 하차",
    parking: "주차안내를 받아 바닷가쪽 주차장이용",

    // 실제 예식장 링크로 교체하세요.
    naverMap: "https://naver.me/FCARAnDz",
    kakaoMap: "https://kko.to/KhwZvv2XOw",
    googleMap: "https://maps.app.goo.gl/14SeUBx9594jroQT7"
  },

  accounts: [
    {
      label: "신랑",
      bank: "국민은행",
      number: "123456789012",
      holder: "홍길동"
    },
    {
      label: "신부",
      bank: "신한은행",
      number: "987654321000",
      holder: "김영희"
    }
  ]
};
