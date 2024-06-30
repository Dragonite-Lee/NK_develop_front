import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useInput from "../../hooks/useInput";
import useUserStore from "../../store/user";

import { loginApi, onLoginSuccess, userApi } from "../../services/api/loginApi";

const roleArray = [
  {
    id: 0,
    title: "학생",
    default: true,
    path: "student"
  },
  {
    id: 1,
    title: "학부모",
    default: false,
    path: "parent"
  },
  {
    id: 2,
    title: "선생님",
    default: false,
    path: "teacher"
  },
  {
    id: 3,
    title: "관리자",
    default: false,
    path: "admin"
  }
]

const LoginInput = () => {
  const [emailValue, emailHandle] = useInput("");
  const [pwValue, pwhHandler] = useInput("");

  const [role, setRole] = useState(roleArray);
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const onClickRoleHandler = (id) => {
    const changeActiveDefault = role.map((item) => {
      return item.id === id
        ? { ...item, default: true }
        : { ...item, default: false };
    });
  
    setRole(changeActiveDefault);
  };
  
  const onLoginHandler = async (id, pw, role) => {
    const data = {
      "username" : id,
      "password" : pw
    };

    await loginApi.login(data).then((response) => {
      onLoginSuccess(response);
      // console.log("success")
      for (let i = 0; i < role.length; i++) {
        if (role[i].default === true) {
          sessionStorage.setItem("role", role[i].title);
          if (role[i].title != "관리자") {
            userApi(role[i].path, id).then((res) => {
              setUser(res.data);
            })
          }
        }
      };
      navigate("/main");
    }).catch(() => {
      alert("잘못된 정보입니다.")
    })
<<<<<<< HEAD
=======
    
    navigate("/parent");
>>>>>>> 63ea915cf62364e15a4a7127aae449923af0cc07
  }

  return (
    <section className="mobile:w-full desktop:w-[486px] flex justify-center items-center tablet:h-[460px] mobile:h-full glassWhite tablet:p-0 mobile:p-[13px]">
      <div className="mobile:w-full tablet:w-auto">
        <div className="font-nanum_700 tablet:text-[28px] mobile:text-[20px] tablet:block mobile:flex justify-center">로그인</div>
        <div className="flex items-center justify-center tablet:p-0 mobile:p-[5px] tabelt:mx-0 mobile:mx-[8px] gap-[10px] mobile:text-[12px] tablet:mt-[19px] mobile:mt-[16px] tablet:mb-[33px] mobile:mb-[12px] font-nanum_700 tablet:text-[16px] desktop:w-[330px] tablet:w-[488px] mobile:w-auto tablet:h-[58px] mobile:h-[43px] bg-main4 rounded-[37px]">
          {role && role.map((item) => {
            return (
              <button className={`flex items-center justify-center desktop:w-[100px] tablet:w-[150px] mobile:w-full tablet:h-[48px] mobile:h-[33px] rounded-[37px]
                ${item.default === true ? " font-nanum_700 bg-main3" : " font-nanum_400 hover:bg-main3/50"}
                `}
                onClick={() => onClickRoleHandler(item.id)}
                key={item.id}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-[8px] items-center justify-center">
          <input
            value={emailValue}
            onChange={emailHandle}
            autoComplete="off"
            className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] mobile:w-full h-[48px] tablet:indent-[24px] mobile:indent-[6px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${
              emailValue !== ""
                ? " outline-none border-main1"
                : " border-border"
            }`}
            name="id"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <input
            value={pwValue}
            onChange={pwhHandler}
            className={`font-nanum_400 text-[15px] desktop:w-[330px] tablet:w-[488px] mobile:w-full h-[48px] tablet:indent-[24px] mobile:indent-[6px] bg-white rounded-[10px] focus:outline-none focus:border-main1 border-solid border-[1px] ${
              pwValue !== "" ? " outline-none border-main1" : " border-border"
            }`}
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <button className={`tablet:mt-[30px] mobile:mt-[4px] font-nanum_700 text-[15px] desktop:w-[282px] tablet:w-[440px] mobile:w-full h-[49px] rounded-[30px] text-white 
            ${emailValue !== "" && pwValue !== "" ? " bg-main3 hover:bg-main3/50 active:bg-main2 cursor-pointer" : " bg-grayLight cursor-auto"}` }
            onClick={() => onLoginHandler(emailValue, pwValue, role)}
          >
            로그인하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginInput;
