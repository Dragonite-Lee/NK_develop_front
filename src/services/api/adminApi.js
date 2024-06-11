import { client } from "..";

// 학교 관리 (get, post, delete)
export const getAdSchool = async () => {
  const data = await client.get("/api/school").then((res) => res.data);
  return data;
};

export const postAdSchool = async (data) => {
  await client.post("/api/school", data);
};

export const deleteAdSchool = async (id) => {
  await client.delete("/api/school",
    {data : { "schoolNames": id}}
  );
};

// 학생 관리 (get, post, put, delete)
export const getAdAllStudnet = async () => {
  const data = await client.get(`/api/student/list`);
  return data;
};

export const getAdStudnet = async (page, keyword) => {
  const data = await client.get("/api/student", { params: { page, keyword } });
  return data;
};

export const getAdOneStudnet = async (username) => {
  const data = await client.get(`/api/student/${username}`);
  return data;
};

export const postAdStudent = async (data) => {
  await client.post("/api/student", data);
};

export const putAdStudent = async (username, data) => {
  await client.put(`/api/student/${username}`, data);
};

export const deleteAdStudent = async (id) => {
  await client.delete("/api/student",
    {data : { "studentIds": id}}
  );
};

// 학부모 관리 (get, post, put, delete)
export const getAdParent = async (page, keyword) => {
  const data = await client.get("/api/parent", { params: { page, keyword } });
  return data;
};

export const getAdOneParent = async (username) => {
  const data = await client.get(`/api/parent/${username}`);
  return data;
};

export const postAdParent = async (data) => {
  await client.post("/api/parent", data);
};

export const putAdParent = async (username, data) => {
  await client.put(`/api/parent/${username}`, data);
};

export const deleteAdParent = async (id) => {
  await client.delete("/api/parent", 
    {data : { "parentIds": id}}
  );
};

// 선생님 관리 (get, post, put, delete)
export const getAdAllTeacher = async () => {
  const data = await client.get(`/api/teacher/list`);
  return data;
};

export const getAdAllTeacherClassroom = async () => {
  const data = await client.get("/api/teacher/classroom");
  return data;
};

export const getAdTeacher = async (page, keyword) => {
  const data = await client.get("/api/teacher", { params: { page, keyword } });
  return data;
};

export const getAdOneTeacher = async (username) => {
  const data = await client.get(`/api/teacher/${username}`);
  return data;
};

export const postAdTeacher = async (data) => {
  await client.post("/api/teacher", data);
};

export const putAdTeacher = async (username, data) => {
  await client.put(`/api/teacher/${username}`, data);
};

export const deleteAdTeacher = async (id) => {
  await client.delete("/api/teacher",
    {data : { "teacherIds": id}}
  );
};

// 반 관리 (get, post, put, delete)
export const getAdAllClassroom = async () => {
  const data = await client.get(`/api/classroom/list`);
  return data;
};

export const getAdClassroom = async (page, keyword) => {
  const data = await client.get("/api/classroom", {
    params: { page, keyword },
  });
  return data;
};

export const getAdOneClassroom = async (id) => {
  const data = await client.get(`/api/classroom/${id}`);
  return data;
};

export const postAdClassroom = async (data) => {
  await client.post("/api/classroom", data);
};

export const putAdClassroom = async (id, data) => {
  await client.put(`/api/classroom/${id}`, data);
};

export const deleteAdClassroom = async (id) => {
  await client.delete(`/api/classroom/${id}`
  );
};

//반에 속한 학생 관리(get, post, delete)
export const getAdClassroomStudent = async (id) => {
  const data = await client.get(`/api/classroom/${id}/student`);
  return data;
}

export const postAdClassroomStudent = async (id, data) => {
  await client.post(`/api/classroom/${id}/student`, data);
};

export const deleteAdClassroomStudent = async (id, data) => {
  await client.delete(`/api/classroom/${id}/student`, 
    {data : { "studentIds": data}}
  );
};

//관리자 공지 관리(get, post, delete, put)
export const getAdAllAdminNotice = async () => {
  const data = await client.get(`/api/admin-notice/list`);
  return data;
};

export const getAdOneAdminNotice = async (id) => {
  const data = await client.get(`/api/admin-notice/${id}`);
  return data;
};

export const getAdAdminNotice = async (page, keyword, type) => {
  const data = await client.get(`/api/admin-notice`, {
    params: { page, keyword, type },
  });
  return data;
};

export const postAdAdminNotice = async (data) => {
  await client.post(`/api/admin-notice`, data);
};

export const putAdAdminNotice = async (id, data) => {
  await client.put(`/api/admin-notice/${id}`, data);
};

export const deleteAdAdminNotice = async (id) => {
  await client.delete(`/api/admin-notice/${id}`);
};