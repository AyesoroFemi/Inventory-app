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


import React from "react";
import styled from "styled-components";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import Button from "../common/Button";
import ProfileImage from "../../assets/obi.png";
import BgHeader from "../../assets/bg1.png";
import BgPattern from "../../assets/pattern-bg.png";
import SelectIcon from "../common/SelectIcon";

const StepOne = () => {
  return (
    <StyledStepOne className="mx-4 lg:mx-0">
      <div className="header__image mt-10 mb-4">
        <div className="card py-8 px-6 text-white flex flex-col justify-between">
          <h1 className="text-base font-semibold md:text-2xl md:font-bold md:w-4/5">
            Welcome to your Decagon Institute Application Process
          </h1>
          <p className="w-full text-[13.4px] font-light md:w-[92%] pt-6">
            "Decagon gave me the structure and access to mentors who shared
            their wealth of experience; as well as a curriculum that put me on
            the right path to a successful career in Software Engineering. I put
            in the hard work and today, I've led projects and mentored
            developers. Decagon was the platform I needed to become the software
            engineer I am today and there are over 500 Decagon Graduates with
            success stories like mine."
          </p>
        </div>
        <div className="profile__wrapper py-7 ">
          <div className="flex justify-center">
            <img src={ProfileImage} alt="" />
          </div>
          <h1 className="text-center text-2xl font-bold">Obinna Aseigbulam</h1>
          <p className="text-center">Software Developer</p>
          <p className="text-center">(TheoremOne)</p>
        </div>
      </div>
      <div className="flex justify-between lg:mr-60 mb-6">
        <p className="font-bold">Tell us about yourself</p>
        <p className="text-[#3CAB52]">STEP 1 of 4</p>
      </div>
      <div className="lg:mr-60">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <InputField
            type="text"
            label="First Name"
            placeholder={"Type your first name"}
          />
          <InputField
            type="text"
            label="Last Name"
            placeholder={"Type your last name"}
          />
          <InputField
            type="text"
            label="Middle Name"
            placeholder={"Type your middle name"}
          />
          <InputField
            type="Email"
            label="Email"
            placeholder={"maryokafor@decagonhq.com"}
          />
          <InputField
            type="Email"
            label="Gender"
            placeholder={"maryokafor@decagonhq.com"}
          />
          <InputField
            type="Date"
            label="Date of Birth"
            placeholder={"Pick date"}
          />
          <InputField
            type="number"
            label="Phone No"
            placeholder={"Type your phone No"}
          />
          <SelectField
            placeholder="Select"
            name="Select"
            label="State of Origin"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">Sangotedo</option>
            <option value="">Ibeju lekki</option>
            <option value="">Eti Osa</option>
          </SelectField>
          <SelectField
            placeholder="Select"
            name="Select"
            label="What State do you live in?"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">Lagos</option>
            <option value="">Ondo</option>
            <option value="">Ibadan</option>
          </SelectField>
        </div>
        <div>
          <p className="text-sm md:text-base pt-4 mb-6 font-semibold">
            Create a password for your Application Account
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <InputField
              type="password"
              label="Create Password"
              placeholder={"Enter password"}
            />
            <InputField
              type="password"
              label="Confirm Password"
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div>
          <p className="mt-6 mb-2 font-semibold">Education</p>
          <p className="mb-6">We would like some more information</p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <SelectField
              placeholder="Select"
              name="Select"
              label="Highest Qualification"
            >
              <option className="text-sm" value="">
                Select
              </option>
              <option value="">PhD</option>
              <option value="">Masters</option>
              <option value="">Bachelors</option>
              <option value="">HND</option>
              <option value="">Others</option>
            </SelectField>
            <InputField
              type="text"
              label="School"
              placeholder="Type in your school"
            />
            <InputField
              type="text"
              label="Course of Study"
              placeholder="Type in your course of study"
            />
            <InputField type="text" label="Grade Achieved" placeholder="" />
            <SelectField placeholder="Select" name="Select" label="NYSC Status">
              <option className="text-sm" value="">
                Select
              </option>
              <option value="">Completed</option>
              <option value="">Exempted</option>
              <option value="">Awaiting Service</option>
              <option value="">Currently Serving</option>
            </SelectField>
          </div>
        </div>
        <div>
          <p className="font-semibold mt-6 mb-2">Others</p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <SelectField
              placeholder="Select"
              name="Select"
              label="Choose preferred resumption date & location"
            />
            <SelectField
              placeholder="Select"
              name="Select"
              label="Preferred Payment Option"
            >
              <option className="text-sm" value="">
                <SelectIcon/>
                Select
              </option>
              <option value="">Self-sponsorship</option>
              <option value="">Student loan</option>
              <option value="">Not sure</option>
            </SelectField>
            <SelectField
              placeholder="Select"
              name="Select"
              label="How did you hear about us?"
            />
            <InputField
              type="text"
              label="Linkedin Profile Link (Optional)"
              placeholder=""
            />
          </div>
          <p className="mt-4 text-[15px]">
            During the recruitment process, we will be communicating with you
            via our community (Circle Community Platform), Email, SMS, Whatsapp,
            and possibly phone calls.{" "}
          </p>
          <p className="text-[15px] my-4">
            By proceeding (if you click Next), you agree to be contacted via the
            channels listed above, and agree to Decagon's{" "}
            <a href="/" className="font-semibold text-[#FAC515]">
              Privacy Policy
            </a>
          </p>
          <p className="sm:hidden bg-[#FEFDF0] text-[13px] text-[#932F19] p-2.5">
            Kindly look through your responses carefully; once you click on next
            you will not be able to modify your responses.
          </p>
        </div>
        <div className="mt-10 w-full md:w-2/12 mb-24">
          <Button>Next</Button>
        </div>
      </div>
    </StyledStepOne>
  );
};

const StyledStepOne = styled.div`
  .header__image {
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 62% 38%;
    margin-right: 8rem;
  }
  .card {
    background-image: url(${BgHeader});
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
  }
  .profile__wrapper {
    background-image: url(${BgPattern});
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
  }
  @media (max-width: 990px) {
    .header__image {
      grid-template-columns: 1fr;
      margin-right: 0rem;
    }
    .card {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    .profile__wrapper {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;

export default StepOne;

import React from "react";
import styled from "styled-components";

const SelectField = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  defaultValue,
  disabled,
  children,
  required = false,
}) => {
  return (
    <StyledSelect>
      {label && (
        <label className="mb-2 text-[14px]" htmlFor={name}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <select
        className="w-full outline-0 outline-[#98A2B3] border-[1px] mt-2 text-sm text-[#98A2B3] border-gray-400 px-3 py-3 rounded-md"
        name={name}
      >
        {children}
      </select>
      {error && <div className="text-red-800 text-xs">{error}</div>}
    </StyledSelect>
  );
};

const StyledSelect = styled.div``;

export default SelectField;

<div className="flex items-center">
        <Sidebar setCurrentTab={setCurrentTab} />
        <div className="w-full">
          <StyledHeader className="flex items-center justify-between py-8 pl-9 pr-24">
            <h3 className="text-2xl font-bold">Get Started</h3>
            <a href="/">Help</a>
          </StyledHeader>
          <div>
            {currentTab === 0 && <StepOne />}
            {currentTab === 1 && <StepTwo />}
          </div>

          import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import SelectField from "../common/SelectField";

const StepTwo = () => {
  return (
    <StyledStepTwo className="mx-4 lg:ml-[37px] mr-4 lg:mr-60">
      <div className="flex justify-between mt-10">
        <h4 className="font-semibold text-base">Programming Experience</h4>
        <p className="text-[#3CAB52] text-sm">STEP 2 of 4</p>
      </div>
      <p className="text-sm">We would like some more information</p>
      <div className="pt-10 grid md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="mt-6 2xl:mt-0">
          <SelectField
            placeholder="Select"
            name="Select"
            label="Programming Experience"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">None</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
          </SelectField>
        </div>
        <SelectField
          placeholder="Select"
          name="Select"
          label="Have you contributed to any project using your programming experience?"
        >
          <option className="text-sm" value="">
            Select
          </option>
          <option value="">None</option>
          <option value="">Beginner</option>
          <option value="">Intermediate</option>
        </SelectField>
        <SelectField
          placeholder="Select"
          name="Select"
          label="Briefly describe your programming contribution to the product/project"
        >
          <option className="text-sm" value="">
            Select
          </option>
          <option value="">None</option>
          <option value="">Beginner</option>
          <option value="">Intermediate</option>
        </SelectField>
      </div>
      <div>
        <p className="text-sm md:text-base pt-4 mb-6 font-semibold">
          Achievements & Leadership
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <SelectField
            placeholder="Select"
            name="Select"
            label="What do you consider as your most outstanding achievements?"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">None</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
          </SelectField>
          <SelectField
            placeholder="Select"
            name="Select"
            label="Have you held any leadership positions in the past?"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">None</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
          </SelectField>
          <SelectField
            placeholder="Select"
            name="Select"
            label="If Yes, Describe the leadership position(s) and how you played it/them"
          >
            <option className="text-sm" value="">
              Select
            </option>
            <option value="">None</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
          </SelectField>
        </div>
      </div>
      <div>
        <p className="text-sm md:text-base pt-4 mb-2 my-4 font-semibold">
          Commitment to the Decagon Mission
        </p>
        <p className="text-[15px]">
          Decagon is on a mission to help transform Nigeria into one of the most
          respected sources of elite software engineering talent in the world.
          Decagon has the experience and capability to help people become
          world-class software engineers. We are looking for candidates (to
          partner with) who have the potential to be a great software engineer,
          leader and ambassador, and driver of the Decagon mission.
        </p>
        <div className="mt-8">
          <label className="text-sm">
            Tell us why you are an ideal candidate for our software engineering
            program
          </label>
          <textarea
            placeholder="Write here..."
            className="border-[1px] p-4 text-sm border-gray-400 mt-2 rounded-md w-full"
            rows="10"
            cols="50"
          ></textarea>
        </div>
      </div>
      <div className="mt-10 w-full md:w-2/12 mb-24">
        <Button>Next</Button>
      </div>
    </StyledStepTwo>
  );
};

const StyledStepTwo = styled.div``;

export default StepTwo;
