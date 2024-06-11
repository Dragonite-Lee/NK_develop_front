import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserIdStore = create(
  persist(
    (set) => ({
      userId: '', // 초기값 작성
      setUserId: (value) => set({ userId: value }), // name 변경 함수
    }),
    {
      name: 'user-id',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useUserIdStore;