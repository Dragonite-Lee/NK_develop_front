import { client } from "..";

//수업에 속한 학생 조회
export const getClassroomInStudent = async (classnameId) => {
  const data = await client.get(`/api/classroom/${classnameId}/student`);
  return data;
};

export const getStHomework = async (classnameId, page, filter) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework/my`, {
    params: { page, filter }
  });
  return data;
};

export const getStHomeworkDetail = async (classnameId) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework`);
  return data;
}

export const postImageId = async (data) => {
  const formData = new FormData();
  formData.append('image', data);

  const imageData = await client.post('api/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return imageData;
}

//스탑워치
export const putTime = async (classroomId, homeworkId, data) => {
  await client.put(`/api/classroom/${classroomId}/homework/${homeworkId}/submit/stopwatch`, data);
}

export const getHomeworkStopwatch = async (classroomId, homeworkId) => {
  const data = await client.get(`/api/classroom/${classroomId}/homework/${homeworkId}/submit/stopwatch`);
  return data;
};

//숙제 제출
export const putHomeworkSubmit = async (classroomId, homeworkId, data) => {
  await client.put(`/api/classroom/${classroomId}/homework/${homeworkId}/submit`, data)
}