import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStudentCurrentHomeworkStore = create(
  persist(
    (set) => ({
      homeworkIdClient: '', 
      homeworkTitleClient: '', 
      homeworkTeacherClient: '',
      hoemworkTimewatch: '',
      setHomeworkIdClient: (value) => set({ homeworkIdClient: value }), // id 변경 함수
      setHomeworkTitleClient: (value) => set({ homeworkTitleClient: value }), // name 변경 함수
      setHomeworkTeacherClient: (value) => set({ homeworkTeacherClient: value }), // id 변경 함수
      setHoemworkTimewatch: (value) => set({ hoemworkTimewatch: value }), // name 변경 함수
    }),
    {
      name: 'student-current-homework',
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useStudentCurrentHomeworkStore;