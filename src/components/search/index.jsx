import React, { useState } from "react";

import {FaTimes } from "react-icons/fa";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Search = () => {
  const [activeClass, setActiveClass] = useState("hidden");
  const cancel = (e) => {
    e.preventDefault();
    setActiveClass("hidden");
  };
  const toggleSearch = () => {
    setActiveClass(activeClass === "hidden" ? "block" : "hidden");
  };

  const [visibleSearchPopup, setVisibleSearchPopup] = useState(false);

  const [lastSearches, setLastSearches] = useState(["Recent search"]);
  const [favSearches, setFavSearches] = useState([
    "Recent search",
    "Recent search",
    "Recent search",
    "Recent search",
    "Recent search",
  ]);
  const deleteItem = (index) => {
    const newSearches = lastSearches.filter((search, i) => i !== index);
    setLastSearches(newSearches);
  };

  const deleteFavItem = (index) => {
    const newSearches = favSearches.filter((search, i) => i !== index);
    setFavSearches(newSearches);
  };
  return (
    <>
      <div className="ml-auto w-full flex justify-between items-center rounded">
        <div className="bg-white px-1 flex just items-center w-full rounded relative">
          <button
            onClick={toggleSearch}
            className="bg-[#323232] py-1 rounded text-white w-[150px] text-sm font-bold"
          >
            advance search
          </button>
          <input
            type="text"
            onClick={() => setVisibleSearchPopup(!visibleSearchPopup)}
            placeholder="search by sec_id/sec_name, issuer, sector, indices"
            className="p-2 w-full ml-3 text-right rounded-none placeholder:text-black text-sm focus:outline-none"
          />

          {visibleSearchPopup && (
            <div className="search-popup bg-white p-3">
              <div className="flex flex-wrap justify-end items-center">
                {lastSearches.map((search, index) => (
                  <div
                    className="bg-[#E5E5E5] px-3 py-1 rounded text-sm text-black mr-2 flex justify-center items-center"
                    key={index}
                  >
                    <IoCloseOutline
                      className="mr-2"
                      onClick={() => deleteItem(index)}
                    />{" "}
                    {search}
                  </div>
                ))}
                <span className="fw-semibold text-sm">:Last searches</span>
              </div>
              <div className="flex flex-wrap justify-end items-center mt-2">
                {favSearches.map((search, index) => (
                  <div
                    className="bg-[#E5E5E5] px-3 py-1 rounded text-sm text-black mr-2 flex justify-center items-center"
                    key={index}
                  >
                    <IoCloseOutline
                      className="mr-2"
                      onClick={() => deleteFavItem(index)}
                    />{" "}
                    {search}
                  </div>
                ))}
                <span className="fw-semibold text-sm">:Favorite searches</span>
              </div>
            </div>
          )}
        </div>

        <div className="btns flex justify-center items-center w-auto px-3 ml-2 h-[38px] overflow-hidden rounded bg-white">
          <button className="btn bg-white hover:bg-transparent border-0 p-0 text-black mx-2 text-xl">
            <FiArrowLeft />
          </button>
          <button className="btn bg-white hover:bg-transparent border-0 p-0 text-black mx-2 text-xl">
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="relative px-2">
        <div
          className={`bg-white p-3 w-1/3 absolute top-0 z-10 ${activeClass}`}
        >
          <div className="flex justify-between items-start">
            <p
              onClick={cancel}
              className="close bg-transparent hover:bg-transparent border-0 text-black"
            >
              <FaTimes />
            </p>

            <div className="text-right">
              <p className="font-semibold">Title</p>
              <p className="text-sm">Description</p>
            </div>
          </div>
          <form className="mt-4">
            <select className="w-full border py-2 rounded mb-3">
              <option>option</option>
            </select>
            <select className="w-full border py-2 rounded mb-3">
              <option>option</option>
            </select>
            <select className="w-full border py-2 rounded mb-3">
              <option>option</option>
            </select>
            <select className="w-full border py-2 rounded mb-3">
              <option>option</option>
            </select>

            <div className="flex justify-start items-center mt-5">
              <button className="bg-[#6691E7] text-white px-3 py-2">
                search
              </button>
              <button
                className="bg-gray-100 text-black px-3 py-2 ml-3"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-right text-sm mt-3 text-white flex justify-end align-items-center">
        <p className="mx-3">AZORIM</p>
        <p className="mx-3">AZRM.B11</p>
        <p className="mx-3">AZORIM B12</p>
        <p className="mx-3">AZRM.B12</p>
        <p className="mx-3">:related search</p>
      </div>
    </>
  );
};

export default Search;
