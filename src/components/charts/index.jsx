import React, { useState } from "react";
// import StackedBarChart from "./stackedBarChart";
// import StackedBarChart2 from "./stackedBarChart2";
import ApexChart from "./horizontalChart";
import ApexBar from "./stackedBarChart/apexBar";
import ApexBar2 from "./stackedBarChart2/apexBar2";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const Charts = () => {
  const [active, setActive] = React.useState(false);
  const [customDropdown, setCustomDropdown] = useState(false);

  const handleStarClick = () => {
    setActive(!active);
  };

  const handleCustomDropdown = () => {
    setCustomDropdown(!customDropdown);
  };
  return (
    <div className="p-4 text-white">
      <div className="lg:flex justify-between items-start gap-4">
        <div className="lg:w-[45%] w-full txt-white">
          <div className="bg-black rounded-[3px] p-4 mb-5">
            {/* <StackedBarChart /> */}
            <ApexBar />
          </div>
          <div className="bg-black rounded-[3px] p-4 mb-5">
            {/* <StackedBarChart2 /> */}
            <ApexBar2 />
          </div>
        </div>
        <div className="lg:w-[55%] rounded-[3px] flex justify-between items-start w-full text-white bg-black p-4">
          <div className="w-[80%]">
            <ApexChart />
          </div>
          <div className="vals w-[20%]">
            <div className="header flex justify-between items-center">
              <div className="flex h-[45px] rounded justify-between pr-5 items-center bg-[#292E32] w-full px-2">
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
                  <p className="text-sm heb">Par Value</p>
                  <p className="text-sm heb font-semibold">12,854,568,995</p>
                </div>
              </div>
              <div
                onClick={handleStarClick}
                className="h-[45px] rounded bg-[#292E32] ml-2 p-2 min-w-[45px] flex justify-center items-center"
              >
                <IoStarSharp
                  className={`m-auto text-3xl  ${
                    active ? "text-[#F7B84B]" : "text-[#7F7F7F]"
                  }`}
                />
              </div>
            </div>
            <div className="bg-white py-0 h-[25px] my-2 flex justify-between items-center relative">
              <div className="p-0 bg-transparent w-auto">
                <label
                  onClick={handleCustomDropdown}
                  tabIndex={0}
                  className="btn pl-3 bg-transparent hover:bg-transparent text-black border-0"
                >
                  {
                    customDropdown ? <FaCaretUp /> : <FaCaretDown />
                  }
                </label>
                {/* <ul
                  tabIndex={0}
                  className=""
                >
                  <li className="text-black text-sm">Par Value</li>
                  <li className="text-white text-sm">Market Cap</li>
                  <li className="text-white text-sm">0% of capital</li>
                </ul> */}

                {/* <div className="dropdown-content menu p-2 shadow bg-white min-w-[250px]">
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
                </div> */}

                {customDropdown && (
                  <div className="custom-dropdown bg-white p-2 rounded">
                    <div className="flex justify-between items-center">
                      <div className="w-1/2">
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                        <div className="flex mb-3 justify-start items-center">
                          <input type="checkbox" className="mr-1" />
                          <label className="text-black text-sm">
                            2022 - Jan
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-black p-2 font-semibold">
                2022 4 QUARTE
              </p>
            </div>

            <table className="w-full mt-2">
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
              <tr>
                <td className="text-white text-xs font-semibold py-3 h-[42px]">
                  854,966,325
                </td>
                <td className="text-white text-xs font-semibold py-3 h-[42px] text-right">
                  CLAL
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
