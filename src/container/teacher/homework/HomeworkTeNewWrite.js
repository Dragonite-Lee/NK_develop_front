import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useInput from "../../../hooks/useInput";
import ArrowLeft from "../../../assets/student/ArrowLeft.png";
import { postTeHomework } from "../../../services/api/teacherApi";
import useUserStore from "../../../store/user";
import { getCookie } from "../../../utils/cookie";
import useTeacherHomeworkStore from "../../../store/teacherHomework";

const HomeworkTeNewWrite = () => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const refreshToken = getCookie("refreshToken");

  const {
    classnameIdClient
  } = useTeacherHomeworkStore();
  const { user } = useUserStore();

  const [title, titleHandler] = useInput("");
  const [content, setContent] = useState('');
  const [deadline, deadlineHandler] = useInput("");

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
  

  const postMutate = useMutation({
    mutationFn: (data) => {
      return postTeHomework(classnameIdClient, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/teacher/homework');
      alert("숙제가 추가 되었습니다.");
      navigate('/main/homeworkTe');
    }
  });
  
  const teacherPostData = {
    "classroomId" : classnameIdClient,
    "teacherId" : user?.id,
    "title" : title,
    "description" : content,
    "deadline" : deadline
  }
  
  return ( 
    <div className="min-w-[280px]">
        <Header/>
          <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
            <Link to="/main/homeworkTe">
              <div className="text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]">
                <img src={ArrowLeft} alt="ArrowLeftBlack" className="w-[24px] h-[24px]" />
                <div>숙제 목록으로 돌아가기</div>
              </div>
            </Link>
            <div className="glassWhite desktop:w-[999px] tablet:py-[28px] mobile:p-[20px] tablet:px-[40px] mobile:px-[24px]">
              <div className="flex tablet:items-center justify-start tablet:flex-row mobile:flex-col tablet:gap-[60px] mobile:gap-[12px] text-[15px] font-nanum_700">
                <div>숙제명 <span className="text-error">*</span></div>
                <input type="text" placeholder="숙제명을 입력하세요." value={title} onChange={titleHandler} className="font-nanum_400 desktop:w-[800px] box-border mobile:w-8/12 h-[38px] border-border rounded-[10px] placeholder-grey"/>
              </div>
              <div className="flex items-center justify-start gap-[60px] text-[15px] font-nanum_700 mt-[16px]">
                <div>등록일 <span className="text-error">*</span></div>
                <div>
                  <input
                    type="date"
                    value={deadline}
                    onChange={deadlineHandler}
                    className="font-nanum_400 tablet:text-[14px] mobile:text-[12px] tablet:w-[167px] mobile:w-[127px] h-[36px] border-border rounded-[10px] placeholder-grey"
                  />
                </div>
              </div>
              <div className="mt-[28px] quillHeight">
                <ReactQuill 
                  style={{ height: "200px"}}
                  formats={formats}
                  modules={modules}
                  theme="snow"
                  onChange={setContent}
                />
              </div>
              <div className="tablet:mt-[28px] mobile:mt-[12px] flex justify-end">
                <div onClick={() => postMutate.mutate(teacherPostData)} className="rounded-[10px] w-[120px] h-[41px] font-nanum_700 text-[15px] bg-homework2 text-white flex items-center justify-center">
                  등록하기
                </div>
              </div>
            </div>
          </main>
        <Footer />
      </div>
  );
}
 
export default HomeworkTeNewWrite;