import React from "react";
import Navbar from "../components/common/Navbar";
import CommonHeader from "../components/common/CommonHeader";
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const Profile = () => {
  return (
    <>
      <CommonHeader />
      <main className="main">
        <ProfileContainer />
        <ProductContainer />
        <GalleryContainer />
      </main>
      <Navbar />
    </>
  );
};

export default Profile;
