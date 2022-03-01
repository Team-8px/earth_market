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
  const trigger2 = e => {
    const target = e.target.parentNode.parentNode;
    target.style.display = "none";
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
          <CardImageList>
            {postImages.map(img => (
              <CardImageItem key={Math.random() * 100}>
                <CardImage
                  src={img}
                  alt="게시글 이미지"
                  onError={e => trigger2(e)}
                />
              </CardImageItem>
            ))}
          </CardImageList>
        </CardImageContainer>
        <CardIconContainer>
          <CardLikeBtn>
            <span>{likeCount}</span>
          </CardLikeBtn>
          <CardCommentBtn to="/">
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
