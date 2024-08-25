import React from 'react';
import { useParentStudentQuery } from '../parentQuery';

const PaMainHwList = ({ studentId }) => {
  const { studentHomeworkData } = useParentStudentQuery(studentId);
  console.log(studentHomeworkData);

  return (
    <section className='glassWhite py-[24px] desktop:w-[840px] mobile:w-full tablet:px-[26px] mobile:px-[26px]'>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left font-nanum_700 text-gray-700 border-b">숙제명</th>
            <th className="py-3 px-4 text-left font-nanum_700 text-gray-700 border-b">마감일</th>
            <th className="py-3 px-4 text-left font-nanum_700 text-gray-700 border-b">상태</th>
          </tr>
        </thead>
        <tbody>
          {studentHomeworkData?.data.results.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 font-nanum_700">{item.title}</td>
              <td className="py-3 px-4">{item.deadline.slice(0, 10)}</td>
              <td className="py-3 px-4 font-nanum_700">
                {item.status === 'TODO' ? (
                  <span className="text-homework1">미제출</span>
                ) : item.status === 'COMPLETE' ? (
                  <span className="text-homework2">검사 완료</span>
                ) : (
                  <span className="text-main2">제출 완료</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PaMainHwList;