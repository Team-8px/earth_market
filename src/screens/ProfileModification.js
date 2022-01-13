import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";
// 유효성검사 로직
//   const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

const ProfileModification = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { profileImg, username, accountname, intro } = data;
    const image = await imageUploadsHandler(profileImg[0]);
    dispatch(updateUserProfile(image, username, accountname, intro));
  };

  return (
    <>
      <br />

      {/* 사용자 프로필 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profileImg"
            {...register("profileImg")}
          ></input>
        </div>

        {/* 사용자 이름 */}
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            {...register("username")}
          />
        </div>

        {/* 계정 id */}
        <div>
          <input
            name="accountname"
            type="text"
            placeholder="accountname"
            {...register("accountname")}
          />
        </div>

        {/* 소개 */}

        <div>
          <input
            name="accountname"
            type="text"
            placeholder="intro"
            {...register("intro")}
          />
        </div>
        <button>update</button>
      </form>
    </>
  );
};

export default ProfileModification;
