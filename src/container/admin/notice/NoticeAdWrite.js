import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useInput from "../../../hooks/useInput";
import { putAdAdminNotice } from "../../../services/api/adminApi";
import ArrowLeft from "../../../assets/student/ArrowLeft.png";
import { useAdOneAdminNoticeQuery } from "../../../components/admin/adminQuery";

const NoticeAdWrite = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, titleHandler, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const [stToggle, setStToggle] = useState(false);
  const [paToggle, setPaToggle] = useState(false);
  const [teToggle, setTeToggle] = useState(false);
  const [noticeType, setNoticeType] = useState(new Set());
  const today = new Date();
  const createDate =
    `${today.getFullYear()  }.${  today.getMonth() + 1  }.${  today.getDate()}`;
  const { oneAdminNoticeData, } = useAdOneAdminNoticeQuery(id);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  useEffect(() => {
    const newSelection = new Set(noticeType);
    if (stToggle) {
      newSelection.add("STUDENT");
    } else {
      newSelection.delete("STUDENT");
    }
    if (paToggle) {
      newSelection.add("PARENT");
    } else {
      newSelection.delete("PARENT");
    }
    if (teToggle) {
      newSelection.add("TEACHER");
    } else {
      newSelection.delete("TEACHER");
    }
    setNoticeType([...newSelection]);
  }, [stToggle, paToggle, teToggle]);

  const putMutate = useMutation({
    mutationFn: (data) => {
      return putAdAdminNotice(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/admin/admin-notice");
      alert("공지가 수정 되었습니다.");
      navigate(`/main/noticeAd/${id}`);
    },
  });

  useEffect(() => {
    if (oneAdminNoticeData) {
      setTitle(oneAdminNoticeData.data.title);
      setContent(oneAdminNoticeData.data.content);
      for (let i = 0; i < oneAdminNoticeData.data.adminNoticeType.length; i++) {
        if (oneAdminNoticeData.data.adminNoticeType[i] === "STUDENT") {
          setStToggle(true);
        } else if (oneAdminNoticeData.data.adminNoticeType[i] === "PARENT") {
          setPaToggle(true);
        } else if (oneAdminNoticeData.data.adminNoticeType[i] === "TEACHER") {
          setTeToggle(true);
        }
      }
    }
  }, [oneAdminNoticeData]);
  
  const adminPutData = {
    admin: { id: 1 },
    title,
    content,
    adminNoticeType: noticeType,
  };

  return (
    <div className="min-w-[280px]">
        <Header />
        <main className="desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight">
          <Link to="/main/noticeAd">
            <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
              <img
                src={ArrowLeft}
                alt="ArrowLeftBlack"
                className="w-[24px] h-[24px]"
              />
              <div>전체 공지로 돌아가기</div>
            </div>
          </Link>
          <div className="glassWhite desktop:w-[999px] tablet:py-[28px] mobile:p-[20px] tablet:px-[40px] mobile:px-[24px]">
            <div className="flex tablet:items-center justify-start tablet:flex-row mobile:flex-col tablet:gap-[60px] mobile:gap-[12px] text-[15px] font-nanum_700">
              <div>
                공지명 <span className="text-error">*</span>
              </div>
              <input
                type="text"
                placeholder="공지명을 입력하세요."
                value={title}
                onChange={titleHandler}
                className="font-nanum_400 desktop:w-[800px] box-border mobile:w-8/12 h-[38px] border-border rounded-[10px] placeholder-grey"
              />
            </div>
            <div className="flex items-center justify-start gap-[60px] text-[15px] font-nanum_700 mt-[16px]">
              <div>
                등록일 <span className="text-error">*</span>
              </div>
              <div className="font-nanum_400 text-grayDark">{createDate}</div>
            </div>
            <div className="mt-[28px] quillHeight">
              <ReactQuill
                style={{ height: "200px" }}
                formats={formats}
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>
            <div className="mt-[28px] flex flex-col items-start gap-[12px] font-nanum_400 text-[15px]">
              <div className="flex items-center justify-start gap-[63px] py-[7.5px]">
                <div>학생에게 공개</div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={stToggle}
                    onChange={() => setStToggle(!stToggle)}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-[30px] h-[18px] bg-grayDark rounded-full 
                      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border-gray-300 
                      after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-management1"
                   />
                </label>
              </div>
              <div className="flex items-center justify-start gap-[48px] py-[7.5px]">
                <div>학부모에게 공개</div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={paToggle}
                    onChange={() => setPaToggle(!paToggle)}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-[30px] h-[18px] bg-grayDark rounded-full 
                      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border-gray-300 
                      after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-management1"
                   />
                </label>
              </div>
              <div className="flex items-center justify-start gap-[48px] py-[7.5px]">
                <div>선생님에게 공개</div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={teToggle}
                    onChange={() => setTeToggle(!teToggle)}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-[30px] h-[18px] bg-grayDark rounded-full 
                      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border-gray-300 
                      after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-management1"
                   />
                </label>
              </div>
            </div>
            <div className="tablet:mt-[28px] mobile:mt-[12px] flex justify-end">
              <div
                onClick={() => putMutate.mutate(adminPutData)}
                className="rounded-[10px] w-[120px] h-[41px] font-nanum_700 text-[15px] bg-management1 text-white flex items-center justify-center"
              >
                수정하기
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default NoticeAdWrite;
