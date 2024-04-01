import ArrowRightBlack from "../assets/ArrowRightBlack.png"
import ArrowLeftBlack from "../assets/ArrowLeftBlack.png"

const Pagination = ({numOfData, itemsPerPage, setCurrentPage, currentPage}) => {

	const pageList = [];
	const currentpage = currentPage;
	const totalPages = Math.ceil(numOfData / itemsPerPage);

	for (let i = 1; i <= totalPages; i++) {
		pageList.push(i);
	}

	const NextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const PrevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	if (totalPages === 1) {
		return null;
	}

	return (
		<div className="flex justify-center items-center w-full tablet:gap-[60px] mobile:gap-[30px] text-[12px]">
			<button onClick={PrevPage} disabled={currentPage === 1} className={currentPage === 1 ? 'invisible' : ''}>
			<div className="flex justify-center items-center gap-[3px]">
				<img src={ArrowLeftBlack} alt="ArrowleftBlack" className="w-[20px] h-[20px]" />
				<div className="text-grayDark font-nanum_400" >이전</div>
			</div>
			</button>
			
			<div className="items-center text-grayDark font-nanum_400">
				{currentpage} / {totalPages}
			</div>

			<button onClick={NextPage} disabled={currentPage === pageList.length} className={currentPage === pageList.length ? 'invisible' : ''}>
				<div className="flex justify-center items-center gap-[3px]">
          <div className="text-grayDark font-nanum_400" >다음</div>
          <img src={ArrowRightBlack} alt="ArrowRightBlack" className="w-[20px] h-[20px]" />
        </div>
			</button>
		</div>
	);
}

export default Pagination;