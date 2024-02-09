import Footer from "../components/Footer";
import LoginHeader from "../components/login/LoginHeader";
import LoginInfo from "../components/login/LoginInfo";
import LoginInput from "../components/login/LoginInput";

const Login = () => {
  return ( 
    <>
      <main className='desktop:w-[1200px] desktop:mx-auto tablet:w-auto tablet:mx-10 mobile:mx-[20px] tablet:pt-[110px] mobile:pt-[27px] tablet:pb-[111px] mobile:pb-[72px] loginHeight'>
        <LoginHeader />
        <div className='desktop:flex desktop:items-center desktop:gap-[126px]'>
          <LoginInfo />
          <LoginInput />
        </div>
      </main>
      <Footer />
    </>
  );
}
 
export default Login;