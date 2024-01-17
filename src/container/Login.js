import LoginHeader from "../components/login/LoginHeader";
import LoginInfo from "../components/login/LoginInfo";
import LoginInput from "../components/login/LoginInput";

const Login = () => {
  return ( 
    <main className='desktop:w-[1200px] desktop:mx-auto tablet:w-auto tablet:mx-10 my-[110px]'>
     <LoginHeader />
     <div className='desktop:flex desktop:items-center desktop:gap-[126px]'>
      <LoginInfo />
      <LoginInput />
     </div>
    </main>
  );
}
 
export default Login;