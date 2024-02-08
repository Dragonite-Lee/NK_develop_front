import { Link } from "react-router-dom";


import NKlogo from "../assets/header/NK_logo.png";
import UserCircle from "../assets/header/profile.png"
import List from "../assets/header/List.png"
import Notice from "../assets/header/notice.png"

const student_route = [
  {
    title: "숙제공지",
    href: "#"
  },
  {
    title: "숙제하기",
    href: "#"
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
    href: "#"
  },
  {
    title: "선생님과 채팅",
    href: "#"
  },
  {
    title: "공지사항",
    href: "#"
  }
];

const Header = () => {
    const role = sessionStorage.getItem("role");

    return (
        <header className="headerBorder desktop:px-[222px] tablet_change:px-[40px] mobile:px-[20px] py-[20px] flex items-center justify-between">
          <div className="flex items-center justify-start gap-[8px] h-[35px]">
            <img src={NKlogo} alt="NK로고" className="w-[35px] h-[35px]" />
            <div>
              <h1 className="font-nanum_700 text-[12px] text-gray">
                NK에듀
              </h1>
              <h2 className="font-nanum_700 text-[16px] text-black">
                학생 관리 서비스
              </h2>
            </div>
          </div>
          <div className="mobile:hidden tablet_change:flex justify-between gap-[44px] font-nanum_700 text-[16px] text-black">
            {role === "학생" && student_route.map((item,id) => {
              return (
                <Link key={id} href={item.href}>
                  {item.title}
                </Link>
              )
            })}
            {role === "선생님" && teacher_route.map((item,id) => {
              return (
                <Link key={id} href={item.href}>
                  {item.title}
                </Link>
              )
            })}
            {role === "학부모" && parent_route.map((item,id) => {
              return (
                <Link key={id} href={item.href}>
                  {item.title}
                </Link>
              )
            })}
          </div>
          <div className="mobile:hidden tablet_change:flex items-center justify-between gap-[6px]" >
            <img src={Notice} alt="user" className="w-[25px] h-[25px]" />
            <img src={UserCircle} alt="user" className="w-[25px] h-[2d5px]" />
            <div className="font-nanum_400 text-[14px] text-black">
              홍길동 {/* 학생이름 들어갈 예정 */}
            </div>
            <div className={`font-nanum_700 text-[13px] text-white rounded-[8px] px-[7px] h-[21px] flex items-center justify-center
              ${role === "학생" ? " bg-main1" : role === "선생님" ? " bg-main2" : " bg-main3"}`}
            >
              {role}
            </div>
          </div>
          <img src={List} alt="listbar" className="w-[32px] h-[32px] mobile:block tablet_change:hidden" />
        </header>
    )
}

export default Header;