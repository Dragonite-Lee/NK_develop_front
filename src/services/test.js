
import axios from "axios"

//api및 react-query관련 폴더

export const testDataAxios = async () => {
  const res = await axios.get('https://reqres.in/api/users?page=2')
  
  return res.data;
}

