import { useQuery } from "@tanstack/react-query";

import {
  getTeAllAdminNotice,
  getTeAllClassNotice,
  getTeAllClassroom,
  getTeAllHomework,
  getTeAllStudnet,
  getTeClassNotice,
  getTeClassroomStudent,
  getTeHomework,
  getTeHomeworkAllStudent,
  getTeOneClassNotice,
  getTeOneHomework,
} from "../../services/api/teacherApi";

// 반 관리getAdAllClassroom
export const useTeAllClassroomQuery = () => {
  const { data, isLoading } = useQuery(["/teacher/classroom"], () =>
    getTeAllClassroom()
  );
  return {
    allClassroomData: data,
    isLoading,
  };
};

export const useTeClassroomStudentQuery = (id) => {
  const { data, isLoading } = useQuery(
    ["/teacher/classroom/student", id],
    () => getTeClassroomStudent(id),
    {
      enabled: !!id,
    }
  );
  return {
    classroomStudentData: data,
    isLoading,
  };
};

// 학생 관리
export const useTeAllStudentQuery = () => {
  const { data, isLoading } = useQuery(["/teacher/student"], () =>
    getTeAllStudnet()
  );
  return {
    allStudentData: data,
    isLoading,
  };
};

// 어드민 공지 관리
export const useTeAllAdminNoticeQuery = () => {
  const { data, isLoading } = useQuery(["/teacher/admin-notice"], () =>
    getTeAllAdminNotice()
  );
  return {
    allAdminNoticeData: data,
    isLoading,
  };
};

// 수업 공지 관리
export const useTeAllClassNoticeQuery = (classnameId) => {
  const { data, isLoading } = useQuery(
    ["/teacher/class-notice", classnameId],
    () => getTeAllClassNotice(classnameId),
    {
      enabled: !!classnameId,
    }
  );
  return {
    allClassNoticeData: data,
    isLoading,
  };
};

export const useTeAdminNoticeQuery = (classnameId, page, keyword, type) => {
  const { data, isLoading } = useQuery(
    ["/teacher/class-notice", classnameId, page, keyword, type],
    () => getTeClassNotice(classnameId, page, keyword, type)
  );
  return {
    classNoticeData: data,
    isLoading,
  };
};

export const useTeOneAdminNoticeQuery = (classnameId, noticeId) => {
  const { data, isLoading } = useQuery(
    ["/teacher/class-notice/one", classnameId, noticeId],
    () => getTeOneClassNotice(classnameId, noticeId),
    {
      enabled: !!noticeId,
    }
  );
  return {
    oneclassNoticeData: data,
    isLoading,
  };
};

export const useTeOneHomeworkQuery = (classnameId, homeworkId) => {
  const { data, isLoading } = useQuery(
    ["/teacher/homework/one", classnameId, homeworkId],
    () => getTeOneHomework(classnameId, homeworkId)
  );
  return {
    oneHomeworkData: data,
    isLoading,
  };
};

export const useTeAllHomeworkQuery = (classnameId) => {
  const { data, isLoading } = useQuery(
    ["/teacher/homework", classnameId],
    () => getTeAllHomework(classnameId),
    {
      enabled: !!classnameId,
    }
  );
  return {
    allHomeworkData: data,
    isLoading,
  };
};

export const useTeHomeworkQuery = (classnameId, page, filter) => {
  const { data, isLoading } = useQuery(
    ["/teacher/homework", classnameId, filter],
    () => getTeHomework(classnameId, page, filter)
  );
  return {
    homeworkData: data,
    isLoading,
  };
};

export const useTeHomeworkAllStudentQuery = (classnameId, homeworkId) => {
  const { data, isLoading } = useQuery(
    ["/teacher/homework/student", classnameId, homeworkId],
    () => getTeHomeworkAllStudent(classnameId, homeworkId)
  );
  return {
    homeworkAllStudentData: data,
    isLoading,
  };
};
