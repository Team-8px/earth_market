import React from "react";
import basicImg from "../../../asset/basic-profile-img.png";
import {
  CardGallerySection,
  CardProfileContainer,
  CardProfileImg,
  CardAthorWrapper,
  CardAthorName,
  CardAthorId,
  CardContentContainer,
  CardContentText,
  CardImageContainer,
  CardImageList,
  CardImageItem,
  CardImage,
  CardIconContainer,
  CardLikeBtn,
  CardCommentBtn,
  CardMoreBtn,
} from "./index.style";

function CardGallery() {
  const trigger = e => {
    e.target.src = basicImg;
  };

  return (
    <CardGallerySection>
      {/* 프로필 */}
      <CardProfileContainer>
        <CardProfileImg
          alt="프로필 이미지"
          src={"test" || basicImg}
          onError={e => {
            trigger(e);
          }}
        />
        <CardAthorWrapper>
          <CardAthorName>Name</CardAthorName>
          <CardAthorId>Id</CardAthorId>
        </CardAthorWrapper>
      </CardProfileContainer>
      {/* 컨텐츠 */}
      <CardContentContainer>
        {/* 컨텐츠 - 텍스트 */}
        <CardContentText>CardContentText</CardContentText>
        {/* 컨텐츠 - 이미지 */}
        <CardImageContainer>
          {/* 조건부 렌더링 하여 img가 없을 경우에는 cardImageList에 displaynone을 주게하면된다 */}
          <CardImageList>
            {[1, 2, 3].map(img => (
              <CardImageItem key={Math.random() * 100}>
                <CardImage src={basicImg} />
              </CardImageItem>
            ))}
          </CardImageList>
        </CardImageContainer>
        {/* 컨텐츠 - 아이콘 */}
        <CardIconContainer>
          <CardLikeBtn>
            <span>1</span>
          </CardLikeBtn>
          <CardCommentBtn to="/">
            <span>1</span>
          </CardCommentBtn>
        </CardIconContainer>
      </CardContentContainer>
      <CardMoreBtn />
    </CardGallerySection>
  );
}
// onClick={() => isPostDialog(post.id)}
export default CardGallery;
