import Button from "./Button";
import styled, { ThemeProvider } from "styled-components";

const ResultButton = () => {
  return (
    <Background>
      <ThemeProvider
        theme={{
          palette: {
            orange: "#F26E22",
            lightOrange: "#FFC7A7",
            gray: "#DBDBDB",

            // 작명은 제 마음대로 했습니다..
            kakaoOrange: "#F2C94C",
            googleGray: "#767676",
            facebookBlue: "#2D9CDB",
          },
        }}
      >
        <ButtonGroup>
          <Button size="sm" width="100px" color="orange">
            팔로우
          </Button>
          <Button size="sm" width="100px">
            취소
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          {/* 활성화 */}
          <Button size="ms" width="90px" color="orange">
            저장
          </Button>
          {/* 비활성화 */}
          <Button size="ms" width="90px">
            저장
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          {/* 활성화 */}
          <Button size="ms" width="90px" color="orange">
            업로드
          </Button>
          {/* 비 활성화 */}
          <Button size="ms" width="90px" color="lightOrange">
            업로드
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          {/* 활성화 */}
          <Button size="md" width="120px" color="orange">
            팔로우
          </Button>
          {/* 비 활성화 */}
          <Button size="md" width="120px" color="lightOrange">
            팔로우
          </Button>
          <Button size="md" width="120px" color="gray" outline>
            언팔로우
          </Button>
          <Button size="md" width="120px" color="gray" outline>
            프로필 수정
          </Button>
          <Button size="md" width="100px" color="gray" outline>
            상품 등록
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="lg" width="322px" color="kakaoOrange" outline>
            카카오톡 계정으로 로그인
          </Button>
          <Button size="lg" width="322px" color="googleGray" outline>
            구글 계정으로 로그인
          </Button>
          <Button size="lg" width="322px" color="facebookBlue" outline>
            페이스북 계정으로 로그인
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          {/* 활성화 */}
          <Button size="lg" width="322px" color="orange">
            감귤마켓 시작하기
          </Button>
          {/* 비 활성화 */}
          <Button size="lg" width="322px" color="lightOrange">
            감귤마켓 시작하기
          </Button>
          <Button size="lg" width="120px" color="orange">
            이전페이지
          </Button>
          <Button size="lg" width="120px" color="orange">
            검색하기
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </Background>
  );
};
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  margin: 10px;
`;
const Background = styled.div`
  background-color: #f1ecec7c;
`;

export default ResultButton;
