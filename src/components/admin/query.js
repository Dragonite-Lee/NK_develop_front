import { useQuery } from "@tanstack/react-query";

import { getAdMainNotice, getAdMainStudent, getAdMainTeacher, getAdParent } from "../../services/adminApi"

export const useAdMainNoticeQuery = () => {
  const { data, isLoading } = useQuery(['/admin/main/notice'],() =>
    getAdMainNotice()
  );
  return {
    noticeData: data,
    isLoading
  }
}

export const useAdMainStudentQuery = () => {
  const { data, isLoading } = useQuery(['/admin/main/student'],() =>
    getAdMainStudent()
  );
  return {
    studentData: data,
    isLoading
  }
}

export const useAdMainTeacherQuery = () => {
  const { data, isLoading } = useQuery(['/admin/main/teacher'],() =>
    getAdMainTeacher()
  );
  return {
    teacherData: data,
    isLoading
  }
}

export const useAdParentQuery = () => {
  const { data, isLoading } = useQuery(['/admin/parent'],() =>
  getAdParent()
  );
  return {
    parentData: data,
    isLoading
  }
}