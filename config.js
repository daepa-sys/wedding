// 이 파일의 값만 수정하면 청첩장 주요 내용이 바뀝니다.
const WEDDING_CONFIG = {
  groom: {
    name: "홍길동",
    parents: "홍아버지 · 이어머니",
    phone: "010-0000-0000"
  },

  bride: {
    name: "김영희",
    parents: "김아버지 · 박어머니",
    phone: "010-1111-1111"
  },

  // ISO 형식: YYYY-MM-DDTHH:MM:SS+09:00
  weddingDate: "2027-03-20T14:00:00+09:00",

  invitationMessage:
`서로가 마주 보며 다져온 사랑을
이제 함께 한곳을 바라보며
걸어가고자 합니다.

저희 두 사람이 사랑의 이름으로
지켜나갈 수 있도록
앞날을 축복해 주시면 감사하겠습니다.`,

  venue: {
    name: "라온웨딩홀 그랜드홀",
    address: "서울특별시 중구 세종대로 110",
    tel: "02-1234-5678",
    subway: "1·2호선 시청역 5번 출구에서 도보 5분",
    bus: "시청앞 정류장 하차",
    parking: "웨딩홀 지하주차장 2시간 무료",

    // 실제 예식장 링크로 교체하세요.
    naverMap: "https://map.naver.com/",
    kakaoMap: "https://map.kakao.com/",
    googleMap: "https://maps.google.com/"
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
