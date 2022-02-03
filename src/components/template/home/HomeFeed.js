import styled from "styled-components";
import UserBox from "../../Molecules/Box/UserBox";
import IconBox from "../../Molecules/Box/IconBox";
import Text from "../../Atoms/Text";

const LayOut = styled.main``;
const Container = styled.section``;
function HomeFeed() {
  const [test, SetTest] = useState(null);
  return (
    <>
      <Header></Header>
      {test ? (
        <LayOut>
          <HomeLogo></HomeLogo>
          <Button></Button>
        </LayOut>
      ) : (
        <LayOut>
          <PostLayOut>
            <UserInfoBox></UserInfoBox>
            <ContentBox></ContentBox>
            <IconBox></IconBox>
            <Date></Date>
          </PostLayOut>
        </LayOut>
      )}
      <Navigation></Navigation>
    </>
  );
}

export default HomeFeed;
