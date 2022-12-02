import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/logoMobile.svg";
import backArrow from "../assets/back.svg";

function Password() {
  return (
    <StyledPassword>
      <div className="hidden sm:flex justify-center pt-24 pb-20">
        <img src={logo} alt="decagon_logo" />
      </div>
      <div className="flex justify-center mt-16 mb-10 sm:hidden">
        <img src={logoMobile} alt="decagon_logo" />
      </div>
      <div className="w-full px-4 sm:mx-auto text-black sm:w-[32rem] sm:px-14 sm:pt-10 bg-white">
        <div className="hidden sm:flex gap-4 pb-10">
          <img className="" src={backArrow} alt="back-arrow" />
          <span> Go back</span>
        </div>
        <h5 className="text-base font-semibold mb-6 sm:pb-8 sm:text-[24px] font-bold">
          Enter password to continue
        </h5>
        <InputField label="Password" placeholder={"Enter your password"} />
        <div className="pb-12 mt-8">
          <Button width="">Begin your Application</Button>
        </div>
      </div>
    </StyledPassword>
  );
}

const StyledPassword = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  @media (max-width: 640px) {
    background-image: none;
  }
`;

export default Password;



import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/logoMobile.svg";


function Email() {
  return (
    <StyledEmail>
      <div className="hidden sm:flex justify-center pt-24 pb-20">
        <img src={logo} alt="decagon_logo" />
      </div>
      <div className="flex justify-center mt-16 mb-10 sm:hidden">
        <img src={logoMobile} alt="decagon_logo" />
      </div>
      <div className="w-full px-4 sm:mx-auto text-black sm:w-[30rem] sm:px-10 sm:pt-10 bg-white">
        <h5 className="text-base font-semibold mb-6 sm:mb-10 sm:text-[24px] font-bold">
          Input your email to get started
        </h5>
        <InputField label="Email" placeholder={"maryokafor@decagonhq.com"} />
        <a href="/#" className="text-[#2E90FA] text-[14px]">
          Forget Password?
        </a>
        <div className="my-8">
          <Button width="">Next</Button>
        </div>
        <div className="text-black sm:flex justify-center pb-2 text-[14px]">
          <p>
            Already have an account?{" "}
            <a href="/#" className="text-[#3CAB52] font-semibold">
              {" "}
              Enter Password
            </a>
          </p>
        </div>
      </div>
    </StyledEmail>
  );
}

const StyledEmail = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  @media (max-width: 640px){
    background-image: none;
    
  }
`;

export default Email;
