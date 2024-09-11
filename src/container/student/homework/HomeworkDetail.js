import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
  useTeHomeworkDetailStudentQuery,
  useTeOneHomeworkQuery,
} from '../../../components/teacher/teacherQuery';
import ArrowLeft from '../../../assets/student/ArrowLeft.png';
import Delete from '../../../assets/student/whiteDelete.png';
import useStudentHomeworkStore from '../../../store/studentHomework';
import {
  postImageId,
  putHomeworkSubmit,
} from '../../../services/api/studentApi';
import Stopwatch from '../../../components/student/stopwatch';
import {
  useHomeworkSubmitQuery,
  useStopwatch,
} from '../../../components/student/studentQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUserStore from '../../../store/user';
import BlueModal from '../../../components/BlueModal';
import Mg from '../../../assets/MagnifyingGlassPlus.png';
import useStudentCurrentHomeworkStore from '../../../store/studentCurrentHomework';
import BlueModalImg from '../../../components/teacher/BlueModalImg';

const HomeworkDetail = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const fileInputRef = useRef(null);
  const queryClient = useQueryClient();
  const { user } = useUserStore();

  const { classnameIdClient } = useStudentHomeworkStore();
  const { oneHomeworkData } = useTeOneHomeworkQuery(classnameIdClient, id);
  const markDownText = `${oneHomeworkData?.data.description}`;
  const [submitModal, setSubmitModal] = useState(false);
  const [enlargeModal, setEnlargeModal] = useState(false);
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [imageIds, setImageIds] = useState([]);
  const {
    setHomeworkIdClient,
    setHomeworkTitleClient,
    setHomeworkTeacherClient,
    setHoemworkTimewatch,
  } = useStudentCurrentHomeworkStore();
  const { stopwatchData } = useStopwatch(classnameIdClient, id);

  const { submitData } = useHomeworkSubmitQuery(classnameIdClient, id);
  const { homeworkDetailStudentData } = useTeHomeworkDetailStudentQuery(
    classnameIdClient,
    id,
    submitData?.data[0].id
  );

  useEffect(() => {
    setHomeworkIdClient(id);
    setHomeworkTitleClient(oneHomeworkData?.data.title);
    setHomeworkTeacherClient(oneHomeworkData?.data.teacher.nickname);
    setHoemworkTimewatch(stopwatchData?.data);
  }, [id, oneHomeworkData, stopwatchData]);
  const uploadFile = async (e) => {
    let fileArr = Array.from(e.target.files); // 선택한 파일을 배열로 변환

    // 각 파일에 대해 API 호출 및 이미지 업로드 처리
    for (const file of fileArr) {
      try {
        const response = await postImageId(file);
        setImageIds((prevIds) => [...prevIds, response.data.id]); // 각 파일의 id 저장
        if (images.length < 20) {
          setImages((prevImages) => [...prevImages, file]);
          const fileReader = new FileReader();
          fileReader.onload = () => {
            setPreviews((prevPreviews) => [...prevPreviews, fileReader.result]); // 이미지 미리보기 생성
          };
          fileReader.readAsDataURL(file);
        }
      } catch (error) {
        if (error.response.status === 413) {
          alert('사진 파일의 용량이 너무 큽니다.');
        }
      }
    }
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    const newImageIds = imageIds.filter((_, i) => i !== index);

    setImages(newImages);
    setPreviews(newPreviews);
    setImageIds(newImageIds);
  };

  const putMutate = useMutation({
    mutationFn: (data) => {
      return putHomeworkSubmit(classnameIdClient, id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/student/homework/submit');
      alert('숙제가 제출 되었습니다.');
      navigator('/main/homeworkSt');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const enlargeHandler = (name, src) => {
    setName(name);
    setSrc(src);
    setEnlargeModal(true);
  };

  const putSubmitData = {
    homeworkId: id,
    studentId: user.id,
    fileIds: imageIds,
    status: 'SUBMIT',
  };

  return (
    <>
      {submitModal && (
        <BlueModal
          setState={setSubmitModal}
          mutate={putMutate.mutate}
          selection={putSubmitData}
          title='숙제 최종 제출'
          content1='숙제 스톱워치와 이미지를 업로드 했습니다.'
          content2='숙제를 최종 제출하시겠습니까?'
          cancle='취소하기'
          del='제출하기'
        />
      )}
      {enlargeModal && (
        <BlueModalImg setState={setEnlargeModal} name={name} src={src} />
      )}
      <div className='min-w-[280px]'>
        <Header />
        <main className='desktop:w-[996px] desktop:mx-auto tablet:w-auto tablet:mx-[40px] mobile:mx-[20px] pt-[28px] pb-[58px] mainHeight'>
          <Link to='/main/homeworkSt'>
            <div className='text-[15px] font-paybooc_700 flex items-center gap-[6px] mb-[27px]'>
              <img
                src={ArrowLeft}
                alt='ArrowLeftBlack'
                className='w-[24px] h-[24px]'
              />
              <div>숙제 목록으로 돌아가기</div>
            </div>
          </Link>
          <div className='glassWhite desktop:w-[999px] py-[32px] px-[40px]'>
            <div className='font-nanum_700 flex tablet:flex-row mobile:flex-col items-start justify-between gap-[12px]'>
              <div>{oneHomeworkData?.data.title}</div>
              <div className='font-nanum_700 text-[13px]'>
                {oneHomeworkData?.data.status === 'TODO' ? (
                  <div className='text-homework1 w-[81px] h-[26px] rounded-[10px] flex items-center justify-center border border-homework1 outline outline-1 outline-homework1'>
                    해야할 숙제
                  </div>
                ) : oneHomeworkData?.data.status === 'SUBMIT' ? (
                  <div className='text-main2 w-[81px] h-[26px] rounded-[10px] flex items-center justify-center border border-main2 outline outline-1 outline-main2'>
                    제출한 숙제
                  </div>
                ) : oneHomeworkData?.data.status === 'COMPLETE' ? (
                  <div className='text-main3 w-[81px] h-[26px] rounded-[10px] flex items-center justify-center border border-main3 outline outline-1 outline-main3'>
                    완료된 숙제
                  </div>
                ) : (
                  <div className='text-homework2 w-[81px] h-[26px] rounded-[10px] flex items-center justify-center border border-homework2 outline outline-1 outline-homework2'>
                    반려된 숙제
                  </div>
                )}
              </div>
            </div>
            <div className='text-[13px] flex flex-col item-end justify-center pt-[20px] pb-[16px] gap-[10px] text-grayDark'>
              <div className='flex items-center justify-end gap-[21px]'>
                <div className='font-nanum_400 text-grayDark'>담당 선생님</div>
                <div className='font-nanum_700'>
                  {oneHomeworkData?.data.teacher.nickname} 선생님
                </div>
              </div>
              {oneHomeworkData?.data.deadline ? (
                <div className='flex items-center justify-end gap-[21px]'>
                  <div className='font-nanum_400 text-grayDark'>
                    숙제 마감일
                  </div>
                  <div className='font-nanum_700'>
                    {oneHomeworkData?.data.deadline.slice(0, 10) + ' 까지'}
                  </div>
                </div>
              ) : null}
            </div>
            {/* content 시작점 */}
            <div className='py-[28px] border-t-[1px] border-[#f0f0f0] font-nanum_400 text-[14px] text-grayDark'>
              <div dangerouslySetInnerHTML={{ __html: markDownText }} />
            </div>
            {oneHomeworkData?.data.status === 'TODO' ||
            oneHomeworkData?.data.status === 'REJECT' ? (
              <>
                {/* 스탑워치 */}
                <Stopwatch submitData={oneHomeworkData} />
                {/* image제출란 */}
                <div className='border-t-[1px] border-[#f0f0f0] py-[28px]'>
                  <div className='font-nanum_700'>제출하기</div>
                  <div className='font-nanum_400 text-[14px] text-grayDark mt-[20px]'>
                    숙제 스톱워치를 기록한 후에 이미지를 업로드하세요. <br />
                    이미지는 총 20장까지 업로드 가능합니다. 정확한 숙제 사진을
                    제출하세요.
                  </div>
                  <label
                    htmlFor='fileUpload'
                    className={`flex items-center justify-center  font-nanum_700 text-[14px] text-white mt-[20px] ${
                      images.length >= 20 || stopwatchData?.data === 0
                        ? ' bg-grayLight'
                        : ' bg-homework2 cursor-pointer'
                    } rounded-[10px] w-[168px] h-[37px]`}
                    onClick={(e) => images.length >= 20 && e.preventDefault()}
                    disabled={stopwatchData?.data !== 0}
                  >
                    <input
                      type='file'
                      ref={fileInputRef}
                      id='fileUpload'
                      accept='image/*'
                      multiple={true}
                      onChange={uploadFile}
                      className='hidden'
                      disabled={
                        images.length >= 20 || stopwatchData?.data === 0
                      }
                    />
                    이미지 업로드하기
                  </label>
                  <div className='flex flex-wrap items-center justify-start gap-[16px] mt-[16px]'>
                    {previews.map((preview, index) => (
                      <div key={index} className='relative'>
                        <img
                          src={preview}
                          alt={`preview-${index}`}
                          className='w-[169px] h-[158px] object-cover rounded-[10px]'
                        />
                        <button
                          className='absolute top-[14px] right-[14px] text-white'
                          onClick={() => removeImage(index)}
                        >
                          <img
                            src={Delete}
                            alt='삭제아이콘'
                            className='w-[15px] h-[15px]'
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='border-t-[1px] border-[#f0f0f0] pt-[28px] font-nanum_700 text-[13px] text-white flex flex-wrap items-center justify-end gap-[12px]'>
                  <button
                    onClick={() => setSubmitModal(true)}
                    disabled={images.length < 1}
                    className={`${
                      images.length > 0 && stopwatchData.data > 0
                        ? ' bg-homework1'
                        : ' bg-grey'
                    } rounded-[10px] w-[150px] h-[36px] flex items-center justify-center`}
                  >
                    최종 제출하기
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='py-[28px] border-t-[1px] border-[#f0f0f0]'>
                  <div className='flex items-center justify-between'>
                    <div className='font-nanum_700'>제출 내역</div>
                  </div>
                  <div className='mt-[16px] flex flex-wrap items-center justify-start gap-[16px]'>
                    {homeworkDetailStudentData?.data.fileIds.length > 0 ? (
                      homeworkDetailStudentData?.data.fileIds.map(
                        (id, index) => (
                          <div key={index} className='relative'>
                            <img
                              src={`http://ec2-52-78-180-130.ap-northeast-2.compute.amazonaws.com:8080/api/file/${id}`}
                              alt='url'
                              className='w-[169px] h-[158px] object-cover rounded-[10px]'
                            />
                            <button
                              className='absolute top-[10px] right-[10px] text-white'
                              onClick={() =>
                                enlargeHandler(
                                  homeworkDetailStudentData?.data.studentName,
                                  id
                                )
                              }
                            >
                              <img
                                src={Mg}
                                alt='확대'
                                className='w-[32px] h-[32px]'
                              />
                            </button>
                          </div>
                        )
                      )
                    ) : (
                      <div className='font-nanum_400'>
                        제출된 사진이 존재하지 않습니다.
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomeworkDetail;
