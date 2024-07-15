import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useParentMainStore = create(
  persist(
    (set) => ({
      paClassnameIdClient: '', // 초기값 작성
      paClassnameNameClient: '', // name의 초기값 작성
      setPaClassnameIdClient: (value) => set({ paClassnameIdClient: value }), // id 변경 함수
      setPaClassnameNameClient: (value) => set({ paClassnameNameClient: value }), // name 변경 함수
    }),
    {
      name: 'parent-main',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useParentMainStore;