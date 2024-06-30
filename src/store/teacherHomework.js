import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useTeacherHomeworkStore = create(
  persist(
    (set) => ({
      classnameIdClient: '', // 초기값 작성
      classnameNameClient: '', // name의 초기값 작성
      setClassnameIdClient: (value) => set({ classnameIdClient: value }), // id 변경 함수
      setClassnameNameClient: (value) => set({ classnameNameClient: value }), // name 변경 함수
    }),
    {
      name: 'teacher-homework',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useTeacherHomeworkStore;