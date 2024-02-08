import Footer from "../components/Footer";
import Header from "../components/Header";
import Homeworklist from "../components/student/HomeworkList"

const Main = () => {
  return ( 
    <>
      <Header/>
      <div>
      <Homeworklist />
      </div>
      <Footer />
    </>
   );
}
 
export default Main;