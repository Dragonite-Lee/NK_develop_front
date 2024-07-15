import { client } from "..";

// 반 관리 (get, post, put, delete)
export const getTeAllClassroom = async () => {
    const data = await client.get(`/api/classroom/list`);
    return data;
};

//반에 속한 학생 관리(get, post, delete)
export const getTeClassroomStudent = async (id) => {
  const data = await client.get(`/api/classroom/${id}/student`);
  return data;
}

export const postTeClassroomStudent = async (id, data) => {
  await client.post(`/api/classroom/${id}/student`, data);
};

export const deleteTeClassroomStudent = async (id, data) => {
  await client.delete(`/api/classroom/${id}/student`,
    {data : { "studentIds": data}}
  );
};

  // 학생 관리 (get, post, put, delete)
export const getTeAllStudnet = async () => {
    const data = await client.get(`/api/student/list`);
    return data;
};


//관리자 공지 관리(get)
export const getTeAllAdminNotice = async () => {
  const data = await client.get(`/api/admin-notice/list`);
  return data;
};

//수업 공지 관리(get, post, put, delete)
export const getTeAllClassNotice = async (classnameId) => {
  const data = await client.get(`/api/classroom/${classnameId}/class-notice/list`);
  return data;
};

export const getTeOneClassNotice = async (classnameId, noticeId) => {
  const data = await client.get(`/api/classroom/${classnameId}/class-notice/${noticeId}`);
  return data;
};

export const getTeClassNotice = async (classnameId, page, keyword, type) => {
  const data = await client.get(`/api/classroom/${classnameId}/class-notice`, {
    params: { page, keyword, type },
  });
  return data;
};

export const postTeClassNotice = async (classnameId, data) => {
  await client.post(`/api/classroom/${classnameId}/class-notice`, data);
};

export const putTeClassNotice = async (classnameId, noticeId, data) => {
  await client.put(`/api/classroom/${classnameId}/class-notice/${noticeId}`, data);
};

export const deleteTeClassNotice = async (classnameId, noticeId) => {
  await client.delete(`/api/classroom/${classnameId}/class-notice/${noticeId}`);
};

//숙제 관리(get, post put, delete)
export const postTeHomework = async (classnameId, data) => {
  await client.post(`/api/classroom/${classnameId}/homework`, data);
};

export const putTeHomework = async (classnameId, homeworkId, data) => {
  await client.put(`/api/classroom/${classnameId}/homework/${homeworkId}`, data);
};

export const deleteTeHomework = async (classnameId, homeworkId) => {
  await client.delete(`/api/classroom/${classnameId}/homework/${homeworkId}`);
};

export const getTeOneHomework = async (classnameId, homeworkId) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework/${homeworkId}`);
  return data;
};

export const getTeAllHomework = async (classnameId) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework/list`);
  return data;
};

export const getTeHomework = async (classnameId, page, filter) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework`, {
    params: { page, filter }
  });
  return data;
};

export const getTeHomeworkAllStudent = async (classnameId, homeworkId) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework/${homeworkId}/submit/list`);
  return data;
};

export const getTeHomeworkDetailStudent = async (classnameId, homeworkId, submitId) => {
  const data = await client.get(`/api/classroom/${classnameId}/homework/${homeworkId}/submit/${submitId}`);
  return data;
};

export const putTeHomeworkFeedback = async (classnameId, homeworkId, submitId, data) => {
  await client.put(`/api/classroom/${classnameId}/homework/${homeworkId}/submit/${submitId}`, data);
};

//사진 다운로드
export const getFile = async (fileId) => {
  const { data } = await client.get(`/api/file/${fileId}`);
  return data;
}

//숙제 검사
