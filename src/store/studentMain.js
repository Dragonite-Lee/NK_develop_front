import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStudentMainStore = create(
  persist(
    (set) => ({
      stClassnameIdClient: '', // 초기값 작성
      stClassnameNameClient: '', // name의 초기값 작성
      setStClassnameIdClient: (value) => set({ stClassnameIdClient: value }), // id 변경 함수
      setStClassnameNameClient: (value) => set({ stClassnameNameClient: value }), // name 변경 함수
    }),
    {
      name: 'student-main',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useStudentMainStore;