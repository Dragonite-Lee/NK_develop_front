import { useQuery } from "@tanstack/react-query";
import { getParentInfo, getParentStudentData } from "../../services/api/parentApi";

export const useParentStudentQuery = (studentId) => {
  const { data, isLoading } = useQuery(
    ["/parent/student/homework", studentId],
    () => getParentStudentData(studentId),
    {
      enabled: !!studentId,
    }
  );
  return {
    studentHomeworkData: data,
    isLoading,
  };
};

export const useParentInfo = (username) => {
  const { data, isLoading } = useQuery(
    ["/parent", username],
    () => getParentInfo(username),
    {
      enabled: !!username,
    }
  );
  return {
    parnetInfoData: data,
    isLoading,
  };
};