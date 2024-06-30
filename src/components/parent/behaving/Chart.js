import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({complete, amount}) => {

  const Data = {
		datasets: [
			{
			data: [complete,amount-complete],
			backgroundColor: ["#789AF4", "#F1F1F5" ],
			circumference: 180, // 도넛 반 자르기
      rotation: 270, // 도넛 돌리기
			}
		]
  };

  const Options = {
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context) {
						return context.formattedValue ;
					},
				},
			},
		},
	};

  return (
    <Doughnut data={Data} options={Options}></Doughnut>
  );
}

export default Chart;