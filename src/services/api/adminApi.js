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
  await client.post("/api/school", id);
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
  await client.post("/api/student", id);
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
  await client.post("/api/parent", id);
};

// 선생님 관리 (get, post, put, delete)
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
  await client.post("/api/teacher", id);
};

// 반 관리 (get, post, put, delete)
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
  await client.post("/api/classroom", id);
};
