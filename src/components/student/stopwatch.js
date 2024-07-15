import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useStudentHomeworkStore from "../../store/studentHomework";
import { useParams } from "react-router-dom";
import { putTime } from "../../services/api/studentApi";
import { useStopwatch } from "./studentQuery";

const Stopwatch = ({submitData}) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { id } = useParams();
  const { classnameIdClient } = useStudentHomeworkStore();
  
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const queryClient = useQueryClient();
  const { stopwatchData } = useStopwatch(classnameIdClient, id);

  useEffect(() => {
    setTime(stopwatchData?.data)
  }, [stopwatchData]);

  
  const putMutate = useMutation({
    mutationFn: (data) => {
      return putTime(classnameIdClient, id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/student/homework/stopwatch");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  // console.log(classnameIdClient, id, submitData?.data.id, submitData)
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const stopwatchPutData = {
    "stopwatch" : time
  }

  const handleStart = () => {
    setIsActive(true);
  };

  const handleComplete = () => {
    setIsComplete(true);
    setIsActive(false);
    putMutate.mutate(stopwatchPutData)
  };
  
  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsComplete(false);
    setTime(0);
  };

  return (
    <div className="border-t-[1px] border-[#f0f0f0] py-[28px]">
      <div className="font-nanum_700">숙제하기</div>
      <div className="mt-[16px] flex items-center justify-start gap-[20px] flex-wrap">
        <div className="font-nanum_900 text-[36px] text-homework1 textStroke">
          {formatTime(time)}
        </div>
        <div className="flex items-center justify-start gap-[20px] flex-wrap">
        {!isActive && time === 0 && (
          <button className="flex items-center justify-center cursor-pointer font-nanum_700 text-[14px] text-white bg-homework2 w-[125px] h-[36px] rounded-[10px]" onClick={handleStart}>시작하기</button>
        )}
        {isActive && <button className="flex items-center justify-center cursor-pointer font-nanum_700 text-[14px] text-white bg-homework3 w-[125px] h-[36px] rounded-[10px]" onClick={handleStop}>일시정지</button>}
        
        {!isActive && !isComplete && time > 0 && (
          <button className="flex items-center justify-center cursor-pointer font-nanum_700 text-[14px] text-white bg-homework3 w-[125px] h-[36px] rounded-[10px]" onClick={handleStart}>이어하기</button>
        )}
        {!isComplete && time > 0 && (
          <button className="flex items-center justify-center cursor-pointer font-nanum_700 text-[14px] text-white bg-homework1 w-[125px] h-[36px] rounded-[10px]" onClick={handleComplete}>완료하기</button>
        )}
        {isComplete && time > 0 && (
          <button className="flex items-center justify-center cursor-pointer font-nanum_700 text-[14px] text-white bg-grey w-[125px] h-[36px] rounded-[10px]" onClick={handleReset}>다시하기</button>
        )}
        </div>
      </div>
    </div>
  )
}

export default Stopwatch;