import axios from "axios"

// const client = axios.create({
//   // baseURL: process.env.REACT_APP_API,
//   baseURL: "http://localhost:3001/",
//   headers: {
//       "Content-Type": "application/json",
//   },
// });

axios.defaults.withCredentials = true;

export const getAdMainNotice = async () => {
  const data = await axios.get('/notice?_limit=8').then((res) => res.data);
  return data;
}

export const getAdMainStudent = async () => {
  const data = await axios.get('/student?_limit=6').then((res) => res.data);
  return data;
}

export const getAdMainTeacher = async () => {
  const data = await axios.get('/teacher?_limit=6').then((res) => res.data);
  return data;
}

export const getAdParent = async () => {
  const data = await axios.get('/parent').then((res) => res.data);
  return data;
}

export const deleteAdParent = async (id) => {
  await axios.delete(`/parent/${id}`)
}

export const getAdStudent = async () => {
  const data = await axios.get('/student').then((res) => res.data);
  return data;
}

export const deleteAdStudent = async (id) => {
  await axios.delete(`/student/${id}`)
}

export const getAdTeacher = async () => {
  const data = await axios.get('/teacher').then((res) => res.data);
  return data;
}

export const deleteAdTeacher = async (id) => {
  await axios.delete(`/teacher/${id}`)
}

export const getAdClassroom = async () => {
  const data = await axios.get('/classroom').then((res) => res.data);
  return data;
}

export const deleteAdClassroom = async (id) => {
  await axios.delete(`/classroom/${id}`)
}