import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { towardProfileLink } from "../../../util/towardLinkAddress";
import PostIconBox from "../PostIconBox/index";
import basicImg from "../../../asset/basic-profile-img.svg";
import {
  CardLayout,
  CardProfileContainer,
  CardProfileLink,
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
  CardDotBtn,
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
  hearted,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const history = useHistory();

  const moveSlide = (e, i) => {
    setActiveIndex(i);
    const target = e.target.parentNode.parentNode.parentNode.firstChild;
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
    <CardLayout>
      <h3 className="textHidden">게시물</h3>
      <CardProfileContainer>
        <h4 className="textHidden">게시물 작성자</h4>
        <CardProfileLink to={() => (towardProfileLink(accountname))} onError={e => {
          trigger(e);
        }}>
          <CardProfileImg
            alt="프로필 이미지"
            src={profileImage || basicImg}
          />
          <CardAthorWrapper>
            <CardAthorName>{username}</CardAthorName>
            <CardAthorId>{accountname}</CardAthorId>
          </CardAthorWrapper>
        </CardProfileLink>
      </CardProfileContainer>
      <CardContentContainer>
        <h4 className="textHidden">게시물 내용</h4>
        <CardContentText>{content}</CardContentText>
        <CardImageContainer>
          <CardImageList>
            {postImages.map(img => (
              <CardImageItem key={img}>
                <CardImage
                  src={img}
                  alt="게시글 이미지"
                  onError={e => imgErrorHandler(e)}
                  onClick={() => history.push(`/post/${postid}`)}
                />
              </CardImageItem>
            ))}
          </CardImageList>
          {postImages.length !== 1 ? (
            <CardDotList>
              {postImages &&
                postImages.map((_, i) => (
                  <CardDotItem>
                    <CardDotBtn
                      key={Math.random() * 100}
                      onClick={e => moveSlide(e, i)}
                      className={activeIndex === i ? "current" : ""}
                    />
                  </CardDotItem>
                ))}
            </CardDotList>
          ) : null}
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
    </CardLayout >
  );
}
export default PostCard;
