# 깃허브 컨벤션

---

> 깃허브 브랜치

`main`: 제품으로 출시 되는 브랜치

`Develop`: 다음 출시 버전을 개발하는 브랜치

`feature`: 기능을 개발하는 브랜치

`Realease`: 이번 출시 버전을 준비하는 브랜치

`Hotfix` : 출시 버전에서 발생한 버그를 수정하는 브랜치.

```css
Develop 브랜치를 통해서 기능 개발 →
Realease 브랜치를 통하여 임시 출시 →
main 브랜치를 통하여 프로젝트 완료
```

# 로컬 브랜치

---

```jsx
// 예시
-Jy / Build_page - Jy / Build_Component - Jy / API_pages - Jy / Feat_ClickEvent;
```

- `Jy/Build_Page`: 퍼블리싱 관련
- `Jy/Build_Component`: 공통 컴포넌트 생성 관련
- `Jy/API_Pages`: API 작업 관련
- `Jy/Feat_ClickEvent`: 기능 및 데이터 패칭 관련

# 컨벤션

---

```jsx
컨벤션: 내용;
```

- `Init` : 처음 커밋할 때 ( 환경설정 )
- `Add` : 기능 (새로운 기능 및 디자인)
- `Refactor`: 리팩토링
- `Chore`: 기타 변경사항(빌드 스크립트 수정 등)
- `Fix` : 버그 및 에러 수정
- `Edit` : JavaScript 변경시
- `Test` : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- `Style`: (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
- `Docs` : 문서(문서 추가, 수정, 삭제)

# 커밋메세지

---

```css
※커밋 종류 = 추가, 수정, 삭제, 스타일링 등...

--- 제목 ---
[커밋 종류]: [작업내용을 50자 이내 요약] --- 본문 --- 1 무엇을 수정했는지 2 왜
  수정했는지;
```

```jsx
Add: Layout

1. 카드형 디자인을 만들어 보았습니다.
2. 카드형 레이아웃 디자인 연습을 해보기 위함입니다.
```

- 모두에게 작성하는 것은 힘드니 누군가에게 전달할 목적으로 작성한다

# formet

---

> 변수명

- [camelCase](https://yangbox.tistory.com/65)

> 스타일 컴포넌트 명

- [PascalCase](https://yangbox.tistory.com/65)

> 코딩 스타일

prettier + ESLint

> 데이터 포맷

JSON

> Class명

Hypen 사용 ex )cont-nav

> 주석

`주석처리` : HTML / CSS 한번에 처리 && javaScript merge 하면서 궁금한 부분 주석 체크
