import { client } from "..";

//수업에 속한 학생 조회
export const getClassroomInStudent = async (classnameId) => {
  const data = await client.get(`/api/classroom/${classnameId}/student`);
  return data;
};