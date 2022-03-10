import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { towardProfileLink } from "../../../util/towardLinkAddress";
import PostIconBox from "../PostIconBox/index";
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
  hearted,
}) {
  console.log(hearted);
  const [activeIndex, setActiveIndex] = useState(0);
  const moveSlide = (e, i) => {
    setActiveIndex(i);
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

  const history = useHistory();

  return (
    <CardSection>
      <CardProfileContainer>
        <CardProfileImg
          alt="프로필 이미지"
          src={profileImage || basicImg}
          onError={e => {
            trigger(e);
          }}
          onClick={() => history.push(towardProfileLink(accountname))}
        />
        <CardAthorWrapper>
          <CardAthorName>{username}</CardAthorName>
          <CardAthorId>{accountname}</CardAthorId>
        </CardAthorWrapper>
      </CardProfileContainer>
      <CardContentContainer>
        <CardContentText>{content}</CardContentText>
        <CardImageContainer onClick={() => history.push(`/post/${postid}`)}>
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
                className={activeIndex === i ? "current" : ""}
              />
            ))}
          </CardDotList>
        </CardImageContainer>
        <PostIconBox
          like={likeCount}
          comment={commentCount}
          postId={postid}
          hearted={hearted}
        />
        <CardDateText>{updatedAt}</CardDateText>
      </CardContentContainer>
      <CardMoreBtn onClick={() => postDialog(postid)} />
    </CardSection>
  );
}
export default PostCard;
