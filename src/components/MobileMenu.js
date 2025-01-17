import { Link, useNavigate } from "react-router-dom";

import List from "../assets/header/List.png";

import useUserStore from "../store/user";
import { removeCookie } from "../utils/cookie";


const MobileMenu = ({
  studentRoute,
  teacherRoute,
  parentRoute,
  adminRoute,
  onClick,
  role,
  pathname,
  sidebar,
}) => {
  const { user } = useUserStore();
  const navigator = useNavigate();
  
  const logout = () => {
    removeCookie("refreshToken");
    navigator("/");
  };
  return (
    <div>
      <div
        className="transition-all w-screen tablet_header_change:hidden h-screen bg-black opacity-50 fixed top-0 z-30"
        onClick={onClick}
       />
      <div
        className="w-[37%] h-screen tablet_header_change:hidden bg-whiteTotal opacity-100 fixed top-0 right-0 z-40"
      >
        <div className="mobile:flex flex-wrap tablet_header_change:hidden items-center justify-start gap-[6px] mt-[24px] tablet:ml-[33px] mobile:ml-[16px]">
          {/* 공지가 있다면 Bell_notice로 바뀔예정 */}
          {/* <div className="flex gap-[8px] items-center justify-start"> */}
          {/* </div> */}
          {/* <div className="flex gap-[8px] items-center justify-start" > */}
          <div className="font-nanum_400 text-[14px] text-black">
            {user ? user.nickname : "관리자"}
          </div>
          <div
            className={`font-nanum_700 text-[13px] text-white rounded-[8px] px-[7px] h-[21px] flex items-center justify-center
              ${
                role === "학생"
                  ? " bg-main1"
                  : role === "선생님"
                  ? " bg-main2"
                  : role === "학부모"
                  ? " bg-main3"
                  : " bg-grayDark"
              }`}
          >
            {role}
          </div>
          <button className="underline" onClick={logout}>
            로그아웃
          </button>
          {/* </div> */}
          <img
            src={List}
            alt="listbar"
            onClick={onClick}
            className="flex items-center justify-start w-[32px] h-[32px] mobile:block tablet_header_change:hidden"
          />
        </div>
        <div className="mobile:flex tablet_header_change:hidden flex-col justify-between gap-[44px] font-nanum_700 text-[16px] text-black tablet:ml-[33px] mobile:ml-[16px] mt-[40px]">
          {role === "학생" &&
            studentRoute.map((item, id) => {
              return (
                <Link
                  key={id}
                  to={item.href}
                  className={`${pathname === item.href && " text-main1"}`}
                >
                  {item.title}
                </Link>
              );
            })}
          {role === "선생님" &&
            teacherRoute.map((item, id) => {
              return (
                <Link
                  key={id}
                  to={item.href}
                  className={`${pathname === item.href && " text-main1"}`}
                >
                  {item.title}
                </Link>
              );
            })}
          {role === "학부모" &&
            parentRoute.map((item, id) => {
              return (
                <Link
                  key={id}
                  to={item.href}
                  className={`${pathname === item.href && " text-main1"}`}
                >
                  {item.title}
                </Link>
              );
            })}
          {role === "관리자" &&
            adminRoute.map((item, id) => {
              return (
                <Link
                  key={id}
                  to={item.href}
                  className={`${pathname === item.href && " text-main1"}`}
                >
                  {item.title}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
