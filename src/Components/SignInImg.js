import image from "./images/sign.svg";
const SignInImg = () => {
  return (
    <>
      <div className="right_data mt-5">
        <div className="signIn_img mt-5">
          <img src={image} alt="" style={{ width: "400px" }} />
        </div>
      </div>
    </>
  );
};
export default SignInImg;
