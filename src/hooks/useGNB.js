import React, { useState, useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import Navigation from "../components/template/common/Navigation";

const UseGNB = () => {
  const [isAppeardGNB, setIsAppeardGNB] = useState(false);
  const { pathname } = useLocation();

  const id = pathname.split("/");

  //console.log(postId);

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/join/email" ||
      pathname === "/join/email/" ||
      pathname === "/post/my/upload" ||
      pathname === "/post/my/upload/" ||
      pathname === "/profile/my/update" ||
      pathname === "/profile/my/update/" ||
      pathname === "/post/my/upload" ||
      pathname === "/post/my/upload/" ||
      pathname === "/product/upload" ||
      pathname === "/product/upload/" ||
      pathname === `/post/${id[2]}` ||
      pathname === `/post/${id[2]}/` ||
      pathname === `/product/${id[2]}/update` ||
      pathname === `/product/${id[2]}/update/`
    ) {
      setIsAppeardGNB(true);
    }
  }, [isAppeardGNB, setIsAppeardGNB]);

  return (
    <React.Fragment>
      {isAppeardGNB && isAppeardGNB ? (
        <React.Fragment></React.Fragment>
      ) : (
        <Navigation />
      )}
    </React.Fragment>
  );
};

export default UseGNB;
