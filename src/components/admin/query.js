import { useQuery } from "@tanstack/react-query";

import { 
  getAdAllStudnet, 
  getAdClassroom, 
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

//반 관리
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