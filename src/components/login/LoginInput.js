const LoginInput = () => {
  return ( 
    <section className="tablet:w-full desktop:w-[486px] flex justify-center items-center h-[460px] glassWhite">
      <form action="#">
        <fieldset>
          <legend className="font-nanum_800 text-[28px]">로그인</legend>
          <div>
            버튼들
          </div>
          <div>
            <input type="text" placeholder="아이디를 입력하세요" />
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <button type="submit">로그인하기</button>
        </fieldset>
      </form>
    </section>
  );
}
 
export default LoginInput;