import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {}, // 초기값 작성
      setUser: (value) => set({ user: value }), // name 변경 함수
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

// 사용시엔 사용하려는 파일에

export default useUserStore;