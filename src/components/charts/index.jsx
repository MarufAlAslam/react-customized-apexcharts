import React from "react";
// import StackedBarChart from "./stackedBarChart";
// import StackedBarChart2 from "./stackedBarChart2";
import ApexChart from "./horizontalChart";
import ApexBar from "./stackedBarChart/apexBar";
import ApexBar2 from "./stackedBarChart2/apexBar2";
import { FaCaretDown, FaStar } from "react-icons/fa";

const Charts = () => {
  return (
    <div className="p-4 text-white">
      <div className="lg:flex justify-between items-start gap-4">
        <div className="lg:w-[45%] w-full txt-white">
          <div className="bg-black rouned-lg p-4 mb-5">
            {/* <StackedBarChart /> */}
            <ApexBar />
          </div>
          <div className="bg-black rouned-lg p-4 mb-5">
            {/* <StackedBarChart2 /> */}
            <ApexBar2 />
          </div>
        </div>
        <div className="lg:w-[55%] flex justify-between items-start w-full text-white bg-black p-4">
          <div className="w-[80%]">
            <ApexChart />
          </div>
          <div className="vals w-[20%]">
            <div className="header flex justify-between items-center">
              <div className="flex h-45px] justify-between pr-5 items-center bg-[#292E32] w-full px-2">
                <div className="dropdown dropdown-bottom dropdown-end p-0 bg-transparent hover:bg-transparent w-auto">
                  <label
                    tabIndex={0}
                    className="btn bg-transparent border-0 hover:bg-transparent m-1 p-0"
                  >
                    <FaCaretDown />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-black w-[100px]"
                  >
                    <li className="text-white text-sm">Par Value</li>
                    <li className="text-white text-sm">Market Cap</li>
                    <li className="text-white text-sm">0% of capital</li>
                  </ul>
                </div>
                <div className="text-center text-white">
                  <p className="text-sm">Par Value</p>
                  <p className="text-sm font-semibold">12,854,568,995</p>
                </div>
              </div>
              <div className="h-[56px] bg-[#292E32] ml-2 p-2 min-w-[50px] flex justify-center items-center">
                <FaStar className="m-auto text-xl" />
              </div>
            </div>

            <div className="bg-white py-0 h-[25px] my-2 flex justify-between items-center">
              <div className="dropdown dropdown-bottom dropdown-end p-0 bg-transparent w-auto">
                <label
                  tabIndex={0}
                  className="btn bg-transparent hover:bg-transparent text-black border-0"
                >
                  <FaCaretDown />
                </label>
                {/* <ul
                  tabIndex={0}
                  className=""
                >
                  <li className="text-black text-sm">Par Value</li>
                  <li className="text-white text-sm">Market Cap</li>
                  <li className="text-white text-sm">0% of capital</li>
                </ul> */}

                <div className="dropdown-content menu p-2 shadow bg-white min-w-[250px]">
                  <form>
                    <div className="flex justify-between items-center">
                      <div className="w-1/2">
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <p className="text-xs text-black p-2 font-semibold">2022 4 QUARTE</p>
            </div>

            <table className="w-full mt-2">
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">854,966,325</td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">CLAL</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
