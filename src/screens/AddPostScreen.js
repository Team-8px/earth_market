import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createPost } from "../actions/postActions";
import { multipleImageUploadsHandler } from "../util/multipleImageUploads";

const AddPostScreen = () => {
  const [myImage, setMyImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  // 이미지 업로드 갯수 제한
  const MAX_UPLOAD = 3;

  const onChange = (e) => {
    //console.log(myImage.length);
    if (myImage.length <= MAX_UPLOAD - 1) {
      const nowSelectImageList = e.target.files; //최종1건만, 한번에 받은 파일리스트 (obj임)

      console.log(nowSelectImageList, "파일 데이터"); // 한번에 받은 파일리스트 (obj임)

      const nowImgURLList = [...myImage]; // 현재 myImage를 복사하고 깊은 복사? 얕은복사?

      //console.log(nowImgURLList, "미리보기 파일 & 파일 배열");

      const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

      nowImgURLList.push({
        previewImg: nowImageUrl,
        fileData: nowSelectImageList[0],
      });

      console.log(nowImgURLList, "미리보기 파일 & 파일 배열");
      //nowImgURLList.push(nowImageUrl);

      setMyImage(nowImgURLList);
    } else {
      alert("사진 3개까지만 업로드 가능");
    }
  };

  const onSubmit = async (data) => {
    const { postText } = data;
    const fileDatas = myImage;
    //console.log(fileDatas);
    const image = await multipleImageUploadsHandler(fileDatas);

    dispatch(createPost(postText, image));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />

      <div>
        <label onChange={onChange} htmlFor="input-file">
          {/* <img src={IMG_URL} alt="상품 업로드 사진" /> */}
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="itemImage"
            multiple="multiple"
            {...register("itemImage")}
          ></input>
        </label>
      </div>

      <div>
        {myImage &&
          myImage.map((x, i) => {
            return (
              <div key={i}>
                <img src={x.previewImg} alt="미리보기 사진" />
              </div>
            );
          })}
      </div>

      <br />
      <br />
      <br />

      <div>
        <input
          name="postText"
          type="text"
          placeholder="상품명"
          {...register("postText")}
        />
      </div>

      <div>
        <button>저장</button>
      </div>
    </form>
  );
};

export default AddPostScreen;
