import { useQuery } from "@tanstack/react-query";

import { testDataAxios } from "./services/test";
import './App.css';

function App() {

  //쿼리 사용예제
  const {data} = useQuery({
    queryKey: ['test_data'],
    queryFn: () => testDataAxios()
      .then((res) => res.data),
  });
  console.log(data)
  

  return (
    <div className="text-lg underline text-purple-500">
     Hello world!
    </div>
  );
}

export default App;
