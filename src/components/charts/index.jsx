import React from "react";
import StackedBarChart from "./stackedBarChart";
import StackedBarChart2 from "./stackedBarChart2";
import ApexChart from "./horizontalChart";

const Charts = () => {
  return (
    <div className="p-4 text-white">
      <div className="lg:flex justify-between items-start gap-4">
        <div className="lg:w-1/2 w-full txt-white">
          <div className="bg-black rouned-lg p-4 mb-5">
            <StackedBarChart />
          </div>
          <div className="bg-black rouned-lg p-4 mb-5">
            <StackedBarChart2 />
          </div>
        </div>
        <div className="lg:w-1/2 w-full text-white">
            <ApexChart/>
        </div>
      </div>
    </div>
  );
};

export default Charts;
