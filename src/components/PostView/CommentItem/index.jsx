import React, { useEffect } from "react";
import { getAccountNameFromloacalStorage } from "../../../util/getWhichUser";
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
  }, [accountname]);

  return (
    <CommentItemBox onClick={() => isDialog(commentId)}>
      <CommentWrapper>
        <img src={img || EllipseImg} alt={alt} />
        <strong>{username}</strong>
        <span>{timeForToday(time)}</span>
      </CommentWrapper>
      <CommentText>{comment}</CommentText>
      <CommentBox></CommentBox>
    </CommentItemBox>
  );
}
