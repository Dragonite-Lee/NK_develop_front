// import { useQuery } from "@tanstack/react-query";

// import { testDataAxios } from "./services/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './container/Main';
import Login from './container/Login';
import './App.css';

function App() {

  //쿼리 사용예제
  // const {data} = useQuery({
  //   queryKey: ['test_data'],
  //   queryFn: () => testDataAxios()
  //     .then((res) => res.data),
  // });
  // console.log(data)
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
