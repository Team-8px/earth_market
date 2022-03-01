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
  CardDateText,
} from "./index.style";

function CardGallery({
  postid,
  profileImage,
  username,
  accountname,
  content,
  postImages,
  likeCount,
  commentCount,
  updatedAt,
  postDialog,
}) {
  const trigger = e => {
    e.target.src = basicImg;
  };

  return (
    <CardGallerySection>
      <CardProfileContainer>
        <CardProfileImg
          alt="프로필 이미지"
          src={profileImage || basicImg}
          onError={e => {
            trigger(e);
          }}
        />
        <CardAthorWrapper>
          <CardAthorName>{username}</CardAthorName>
          <CardAthorId>{accountname}</CardAthorId>
        </CardAthorWrapper>
      </CardProfileContainer>
      <CardContentContainer>
        <CardContentText>{content}</CardContentText>
        <CardImageContainer>
          {/* 조건부 렌더링 하여 img가 없을 경우에는 cardImageList에 displaynone을 주게하면된다 */}
          <CardImageList>
            {postImages.map(img => (
              <CardImageItem key={Math.random() * 100}>
                <CardImage src={img} alt="게시글 이미지" />
              </CardImageItem>
            ))}
          </CardImageList>
        </CardImageContainer>
        <CardIconContainer>
          <CardLikeBtn>
            <span>{likeCount}</span>
          </CardLikeBtn>
          <CardCommentBtn to={`/post/${postid}`}>
            <span>{commentCount}</span>
          </CardCommentBtn>
        </CardIconContainer>
        <CardDateText>{updatedAt}</CardDateText>
      </CardContentContainer>
      <CardMoreBtn onClick={() => postDialog(postid)} />
    </CardGallerySection>
  );
}
export default CardGallery;
