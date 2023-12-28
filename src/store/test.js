import { create } from "zustand";

const useTestStore = create((set) => ({
  testValue: '', //초기값 작성
  setTestValue: (value) => set({ testValue : value }) //변경함수
}))

// 사용시엔 사용하려는 파일에
// const { testValue, setTestValue } = useTestStore() 이런 식으로 사용

export default useTestStore;