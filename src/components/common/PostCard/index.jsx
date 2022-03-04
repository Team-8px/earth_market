import React from "react";

import basicImg from "../../../asset/basic-profile-img.svg";
import {
  CardSection,
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
  CardDotList,
  CardDotItem,
  CardIconContainer,
  CardLikeBtn,
  CardCommentBtn,
  CardMoreBtn,
  CardDateText,
} from "./index.style";

function PostCard({
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
  Link,
}) {
  const moveSlide = (e, i) => {
    const target = e.target.parentNode.parentNode.firstChild;
    target.style.transform = `translateX(${-304 * Number(i)}px)`;
  };
  const trigger = e => {
    e.target.src = basicImg;
  };
  const imgErrorHandler = e => {
    const target = e.target.parentNode.parentNode;
    target.style.display = "none";
  };

  return (
    <CardSection>
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
                  onError={e => imgErrorHandler(e)}
                />
              </CardImageItem>
            ))}
          </CardImageList>
          <CardDotList>
            {postImages.map((_, i) => (
              <CardDotItem
                key={Math.random() * 100}
                onClick={e => moveSlide(e, i)}
              />
            ))}
          </CardDotList>
        </CardImageContainer>
        <CardIconContainer>
          <CardLikeBtn>
            <span>{likeCount}</span>
          </CardLikeBtn>
          <CardCommentBtn to={Link}>
            <span>{commentCount}</span>
          </CardCommentBtn>
        </CardIconContainer>
        <CardDateText>{updatedAt}</CardDateText>
      </CardContentContainer>
      <CardMoreBtn onClick={() => postDialog(postid)} />
    </CardSection>
  );
}
export default PostCard;
