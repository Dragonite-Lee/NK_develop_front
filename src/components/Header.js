import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import NKlogo from "../assets/header/NK_logo.png";
import UserCircle from "../assets/header/profile.png"
import List from "../assets/header/List.png"
import Bell from "../assets/header/Bell.png"
import Bell_notice from "../assets/header/Bell_notice.png"
import MobileMenu from "./MobileMenu";

const student_route = [
  {
    title: "우리반 공지",
    href: "/student/noticelist"
  },
  {
    title: "숙제하기",
    href: "/student/homeworklist"
  },
  {
    title: "선생님과 채팅",
    href: "#"
  }
];

const teacher_route = [
  {
    title: "우리반 관리",
    href: "#"
  },
  {
    title: "채팅하기",
    href: "#"
  },
  {
    title: "공지사항",
    href: "#"
  },
  {
    title: "학생 관리",
    href: "#"
  }
];

const parent_route = [
  {
    title: "학습태도 분석",
    href: "/parent/behaving"
  },
  {
    title: "선생님과 채팅",
    href: "#"
  },
  {
    title: "공지사항",
    href: "/parent/noticelist"
  }
];

const Header = () => {
    const role = "학부모"
    const [sidebar, setSidebar] = useState(false);
    let { pathname } = useLocation();
    
    return (
      <>
        <header className="min-w-[280px] headerBorder desktop:px-[222px] tablet_change:px-[40px] mobile:px-[20px] py-[20px] flex items-center justify-between">
          <Link className="flex items-center justify-start gap-[8px] h-[35px]" to="/parent">
            <img src={NKlogo} alt="NK로고" className="w-[35px] h-[35px]" />
            <div>
              <h1 className="font-nanum_700 text-[12px] text-gray">
                NK에듀
              </h1>
              <h2 className="font-nanum_700 text-[16px] text-black">
                학생 관리 서비스
              </h2>
            </div>
          </Link>
          <div className="mobile:hidden tablet_change:flex justify-between gap-[44px] font-nanum_700 text-[16px] text-black">
            {role === "학생" && student_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
            {role === "선생님" && teacher_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
            {role === "학부모" && parent_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
          </div>
          <div className="mobile:hidden tablet_change:flex items-center justify-between gap-[6px]" >
            {/* 공지가 있다면 Bell_notice로 바뀔예정 */}
            <img src={Bell} alt="bell" className="w-[23px] h-[23px] mr-[6px]" />
            <img src={UserCircle} alt="user" className="w-[25px] h-[25px] " />
            <div className="font-nanum_400 text-[14px] text-black">
              홍길동 {/* 학생이름 들어갈 예정 */}
            </div>
            <div className={`font-nanum_700 text-[13px] text-white rounded-[8px] px-[7px] h-[21px] flex items-center justify-center
              ${role === "학생" ? " bg-main1" : role === "선생님" ? " bg-main2" : " bg-main3"}`}
            >
              {role}
            </div>
          </div>
          <img src={List} alt="listbar" onClick={() => setSidebar(true)} className="w-[32px] h-[32px] mobile:block tablet_change:hidden" />
        </header>
        {sidebar && (
          <MobileMenu student_route={student_route} teacher_route={teacher_route} parent_route={parent_route} 
            onClick={() => setSidebar(false)}
            role={role} pathname={pathname}
            sidebar={sidebar}
          />
        )}
      </>
    )
}

export default Header;