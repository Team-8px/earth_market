import React, { useEffect } from "react";
import { getAccountNameFromloacalStorage } from "../../../util/getWhichUser";
import { Link } from "react-router-dom";
import EllipseImg from "../../../asset/basic-profile-img-small.svg";
import { timeForToday } from "../../../util/timeForToday";
import {
  CommentLayout,
  CommentListBox,
  CommentItemBox,
  CommentWrapper,
  CommentText,
  CommentBox,
} from "./index.style.js";

export function CommentList({ children }) {
  return (
    <CommentLayout>
      <CommentListBox>{children}</CommentListBox>
    </CommentLayout>
  );
}

export function CommentItem({
  img,
  username,
  time,
  comment,
  alt,
  isDialog,
  commentId,
  setIsAuthorization,
  accountname,
}) {
  useEffect(() => {
    if (accountname === getAccountNameFromloacalStorage()) {
      setIsAuthorization(true);
    } else {
      setIsAuthorization(false);
    }
  }, [accountname, setIsAuthorization]);

  return (
    <CommentItemBox>
      <CommentWrapper>
        <Link to={`/profile/${accountname}`}>
        <img src={img || EllipseImg} alt={alt} />
        </Link>
        <Link to={`/profile/${accountname}`}>
        <strong>{username}</strong>
        </Link>
        <span>{timeForToday(time)}</span>
      </CommentWrapper>
      <CommentText>{comment}</CommentText>
      <CommentBox onClick={() => isDialog(commentId)}></CommentBox>
    </CommentItemBox>
  );
}
