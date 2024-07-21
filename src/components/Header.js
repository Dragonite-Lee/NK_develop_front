import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu";
import useUserStore from "../store/user";
import NKlogo from "../assets/header/NK_logo.png";
import UserCircle from "../assets/header/profile.png";
import List from "../assets/header/List.png";
import Bell from "../assets/header/Bell.png";
import { getCookie, removeCookie } from "../utils/cookie";

const studentRoute = [
  {
    title: "우리반 공지",
    href: "/main/noticeSt",
  },
  {
    title: "숙제하기",
    href: "/main/homeworkSt",
  },
];

const teacherRoute = [
  {
    title: "숙제 관리",
    href: "/main/homeworkTe",
  },
  {
    title: "공지사항",
    href: "/main/noticeTe",
  },
  {
    title: "학생 관리",
    href: "/main/studentTe",
  },
];

const parentRoute = [
  {
    title: "학습태도 분석",
    href: "/parent/behaving",
  },
  {
    title: "공지사항",
    href: "/main/noticePa",
  },
];

const adminRoute = [
  {
    title: "학생 관리",
    href: "/main/studentAd",
  },
  {
    title: "선생님 관리",
    href: "/main/teacherAd",
  },
  {
    title: "반 관리",
    href: "/main/classroomAd",
  },
  {
    title: "학부모 관리",
    href: "/main/parentAd",
  },
  {
    title: "공지사항",
    href: "/main/NoticeAd",
  },
];

const Header = () => {
  const role = sessionStorage.getItem("role");
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUserStore();
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const refreshToken = getCookie("refreshToken");
  // useEffect(() => {
  //   if (!refreshToken) {
  //     navigator("/");
  //   }
  // }, [refreshToken]);

  const logout = () => {
    removeCookie("refreshToken");
    navigator("/");
  };

  return (
    <>
      <header className="min-w-[280px] headerBorder desktop_header:px-[222px] tablet_header_change:px-[40px] mobile:px-[20px] py-[20px] flex items-center justify-between">
        <Link
          className="flex items-center justify-start gap-[8px] h-[35px]"
          to="/main"
        >
          <img src={NKlogo} alt="NK로고" className="w-[35px] h-[35px]" />
          <div>
            <h1 className="font-nanum_700 text-[12px] text-grey">NK에듀</h1>
            <h2 className="font-nanum_700 text-[16px] text-black">
              학생 관리 서비스
            </h2>
          </div>
        </Link>
        <div className="mobile:hidden tablet_header_change:flex justify-between gap-[44px] font-nanum_700 text-[16px] text-black">
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
        <div className="mobile:hidden tablet_header_change:flex items-center justify-between gap-[6px]">
          {/* 공지가 있다면 Bell_notice로 바뀔예정 */}
          <img src={Bell} alt="bell" className="w-[23px] h-[23px] mr-[6px]" />
          <img src={UserCircle} alt="user" className="w-[25px] h-[25px] " />
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
        </div>
        <img
          src={List}
          alt="listbar"
          onClick={() => setSidebar(true)}
          className="w-[32px] h-[32px] mobile:block tablet_header_change:hidden"
        />
      </header>
      {sidebar && (
        <MobileMenu
          studentRoute={studentRoute}
          teacherRoute={teacherRoute}
          parentRoute={parentRoute}
          adminRoute={adminRoute}
          onClick={() => setSidebar(false)}
          role={role}
          pathname={pathname}
          sidebar={sidebar}
        />
      )}
    </>
  );
};

export default Header;
