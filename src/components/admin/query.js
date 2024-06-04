import { useQuery } from "@tanstack/react-query";

import { 
  getAdAdminNotice,
  getAdAllAdminNotice,
  getAdAllClassroom,
  getAdAllStudnet, 
  getAdAllTeacher, 
  getAdAllTeacherClassroom, 
  getAdClassroom, 
  getAdClassroomStudent, 
  getAdOneAdminNotice, 
  getAdOneClassroom, 
  getAdOneParent, 
  getAdOneStudnet, 
  getAdOneTeacher, 
  getAdParent, 
  getAdSchool, 
  getAdStudnet, 
  getAdTeacher } from "../../services/api/adminApi"

// 학교 관리
export const useAdSchoolQuery = () => {
  const { data, isLoading } = useQuery(['/admin/school'],() =>
    getAdSchool()
  );
  return {
    schoolData: data,
    isLoading
  }
}

//학생 관리
export const useAdAllStudentQuery = () => {
  const { data, isLoading } = useQuery(['/admin/student'],() =>
    getAdAllStudnet()
  );
  return {
    allStudentData: data,
    isLoading
  }
}

export const useAdStudentQuery = (page,keyword) => {
  const { data, isLoading } = useQuery(['/admin/student', page, keyword],() =>
    getAdStudnet(page, keyword)
  );
  return {
    studentData: data,
    isLoading
  }
}

export const useAdOneStudentQuery = (username) => {
  const { data, isLoading } = useQuery(['/admin/student/one'],() =>
    getAdOneStudnet(username)
  );
  return {
    oneStudentData: data,
    isLoading
  }
}

//학부모 관리
export const useAdParentQuery = (page,keyword) => {
  const { data, isLoading } = useQuery(['/admin/parent', page, keyword],() =>
    getAdParent(page, keyword)
  );
  return {
    parentData: data,
    isLoading
  }
}

export const useAdOneParentQuery = (username) => {
  const { data, isLoading } = useQuery(['/admin/parent/one'],() =>
    getAdOneParent(username)
  );
  return {
    oneParentData: data,
    isLoading
  }
}

//선생님 관리
export const useAdAllTeacherQuery = () => {
  const { data, isLoading } = useQuery(['/admin/teacher'],() =>
    getAdAllTeacher()
  );
  return {
    allTeacherData: data,
    isLoading
  }
}

export const useAdAllTeacherClassroomQuery = () => {
  const { data, isLoading } = useQuery(['/admin/teacher/classroom'],() =>
    getAdAllTeacherClassroom()
  );
  return {
    allTeacherClassroomData: data,
    isLoading
  }
}

export const useAdTeacherQuery = (page,keyword) => {
  const { data, isLoading } = useQuery(['/admin/teacher', page, keyword],() =>
    getAdTeacher(page, keyword)
  );
  return {
    teacherData: data,
    isLoading
  }
}

export const useAdOneTeacherQuery = (username) => {
  const { data, isLoading } = useQuery(['/admin/teacher/one'],() =>
    getAdOneTeacher(username)
  );
  return {
    oneTeacherData: data,
    isLoading
  }
}

//반 관리getAdAllClassroom
export const useAdAllClassroomQuery = () => {
  const { data, isLoading } = useQuery(['/admin/classroom'],() =>
    getAdAllClassroom()
  );
  return {
    allClassroomData: data,
    isLoading
  }
}

export const useAdClassroomQuery = (page,keyword) => {
  const { data, isLoading } = useQuery(['/admin/classroom', page, keyword],() =>
    getAdClassroom(page, keyword)
  );
  return {
    classroomData: data,
    isLoading
  }
}

export const useAdOneClassroomQuery = (username) => {
  const { data, isLoading } = useQuery(['/admin/classroom/one'],() =>
    getAdOneClassroom(username)
  );
  return {
    oneClassroomData: data,
    isLoading
  }
}

export const useAdClassroomStudentQuery = (id) => {
  const { data, isLoading } = useQuery(['/admin/classroom/student', id],() =>
    getAdClassroomStudent(id)
  );
  return {
    classroomStudentData: data,
    isLoading
  }
}

//어드민 공지 관리
export const useAdAllAdminNoticeQuery = () => {
  const { data, isLoading } = useQuery(['/admin/admin-notice'],() =>
    getAdAllAdminNotice()
  );
  return {
    allAdminNoticeData: data,
    isLoading
  }
}

export const useAdAdminNoticeQuery = (page,keyword,type) => {
  const { data, isLoading } = useQuery(['/admin/admin-notice', page, keyword, type],() =>
    getAdAdminNotice(page, keyword, type)
  );
  return {
    adminNoticeData: data,
    isLoading
  }
}

export const useAdOneAdminNoticeQuery = (id) => {
  const { data, isLoading } = useQuery(['/admin/admin-notice/one'],() =>
    getAdOneAdminNotice(id)
  );
  return {
    oneAdminNoticeData: data,
    isLoading
  }
}