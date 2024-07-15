import { useQuery } from "@tanstack/react-query";
import { getHomeworkStopwatch, getStHomework, getStHomeworkDetail } from "../../services/api/studentApi";

export const useHomeworkStopwatch = (classroomId, homeworkId, submitId) => {
  const { data, isLoading } = useQuery(['/student/homework/detail'],() =>
    getHomeworkStopwatch(classroomId, homeworkId, submitId)
  );
  return {
    homeworkStopwatch: data,
    isLoading
  }
}

export const useStHomeworkQuery = (classnameId, page, filter) => {
  const { data, isLoading } = useQuery(
    ["/student/homework", classnameId, filter],
    () => getStHomework(classnameId, page, filter)
  );
  return {
    homeworkData: data,
    isLoading,
  };
};

export const useStHomeworkDetailQuery = (classnameId) => {
  const { data, isLoading } = useQuery(
    ["/student/homework/detail", classnameId],
    () => getStHomeworkDetail(classnameId)
  );
  return {
    homeworkDetailData: data,
    isLoading,
  };
};

export const useStopwatch = (classroomId, homeworkId) => {
  const { data, isLoading } = useQuery(
    ["/student/homework/stopwatch", classroomId, homeworkId],
    () => getHomeworkStopwatch(classroomId, homeworkId)
  );
  return {
    stopwatchData: data,
    isLoading,
  };
};