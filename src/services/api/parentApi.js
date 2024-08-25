import { client } from "..";

//학생 데이터 조회
export const getParentStudentData = async (studentId) => {
  const data = await client.get(`/api/homework`, {
    params: { student_id: studentId },
  });
  return data;
};

export const getParentInfo = async (username) => {
  const data = await client.get(`/api/parent/${username}`)
  return data;
}