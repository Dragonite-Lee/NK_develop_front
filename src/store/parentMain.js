import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useParentMainStore = create(
  persist(
    (set) => ({
      paStudentIdClient: '', // 초기값 작성
      paStudentNameClient: '', // name의 초기값 작성
      setPaStudentIdClient: (value) => set({ paStudentIdClient: value }), // id 변경 함수
      setPaStudentNameClient: (value) => set({ paStudentNameClient: value }), // name 변경 함수
    }),
    {
      name: 'parent-main',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useParentMainStore;