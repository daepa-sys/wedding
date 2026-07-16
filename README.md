# 모바일 청첩장 GitHub Pages 프로젝트

이 폴더 전체를 GitHub 저장소에 업로드하면 모바일 청첩장 사이트로 사용할 수 있습니다.

## 1. 가장 먼저 수정할 파일

`config.js`를 메모장 또는 Visual Studio Code로 열고 다음 항목을 변경하세요.

- 신랑·신부 이름
- 부모님 성함
- 연락처
- 결혼 날짜와 시간
- 초대 문구
- 예식장명, 주소, 전화번호
- 네이버지도·카카오맵·Google 지도 링크
- 계좌번호

날짜는 다음 형식을 유지하세요.

```javascript
weddingDate: "2027-03-20T14:00:00+09:00"
```

## 2. 사진 교체

`images` 폴더 안의 예시 SVG 파일을 실제 사진으로 교체합니다.

권장 파일명:

- `main.jpg`
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

JPG 사진을 사용할 경우 `index.html`에서 다음 경로를 수정하세요.

```html
images/main.svg  → images/main.jpg
images/photo1.svg → images/photo1.jpg
```

가급적 파일명에는 한글과 공백을 사용하지 마세요.

## 3. PC에서 미리보기

가장 쉬운 방법:

1. Visual Studio Code 설치
2. 프로젝트 폴더 열기
3. `index.html`을 마우스 오른쪽 버튼으로 클릭
4. Live Server 확장 기능으로 실행

단순 확인은 `index.html`을 더블클릭해도 됩니다.

## 4. GitHub 업로드

1. GitHub 로그인
2. 새 저장소 생성
3. 저장소 이름을 `wedding`으로 지정
4. 공개 범위를 Public으로 설정
5. `Add file` → `Upload files`
6. 이 폴더 안의 파일과 폴더를 모두 업로드
7. `Commit changes` 클릭

중요: `wedding-invitation` 폴더 자체가 아니라, 그 안의 `index.html`, `style.css` 등이 저장소 최상단에 보여야 합니다.

## 5. GitHub Pages 활성화

1. 저장소의 `Settings`
2. 왼쪽 메뉴의 `Pages`
3. Source에서 `Deploy from a branch`
4. Branch는 `main`, 폴더는 `/(root)`
5. `Save`

주소 예시:

```text
https://사용자이름.github.io/wedding/
```

## 6. 수정 사항 반영

GitHub에서 파일을 수정하거나 새 파일을 업로드한 뒤 Commit하면 같은 주소에 반영됩니다.

## 개인정보 주의

- 계좌번호와 전화번호는 인터넷에 공개됩니다.
- 필요할 때만 표시하고, 원하지 않으면 관련 섹션을 삭제하세요.
- GitHub 저장소가 Public이면 원본 코드도 누구나 볼 수 있습니다.
