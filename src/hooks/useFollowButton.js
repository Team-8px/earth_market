import React, { useState, useEffect } from "react";

const UseFollowButton = () => {
  const [isAppeardGNB, setIsAppeardGNB] = useState(false);
  const { accountname } = useParams();

  useEffect(() => {
    if (pathname === "/gh" || pathname === "/gh/join/email") {
      setIsAppeardGNB(true);
    }
  }, [isAppeardGNB, setIsAppeardGNB]);

  if (pathname) {
    //accountname이 본인 계정 이고, 나를 팔로우한 경우가 아니라면 => 팔로우버튼
    return <button>팔로우버튼</button>;
  }

  if (pathname) {
    //accountname이 본인 계정 이면서, 상대방이 나를 팔로우를 한 경우라면 => 취소버튼
    return <button>취소 버튼</button>;
  }
  //이 모든게 아니라면
  return <React.Fragment></React.Fragment>;
};

export default UseFollowButton;
