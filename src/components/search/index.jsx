import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

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
  const [visibleSuggestions, setVisibleSuggestions] = useState(false);

  const [searchedTerms, setSearchedTerms] = useState([]);

  const [lastField, setLastField] = useState(false);

  const [lastSearches, setLastSearches] = useState(["Recent search"]);
  const [favSearches, setFavSearches] = useState([
    "Recent search",
    "Recent search",
    "Recent search",
    "Recent search",
    "Recent search",
  ]);

  const searchSuggestions = [
    "Ayo",
    "Oba",
    "Baby",
    "Babe",
    "Love",
    "Cynthia",
    "Felicia",
    "Grace",
  ];
  const deleteItem = (index) => {
    const newSearches = lastSearches.filter((search, i) => i !== index);
    setLastSearches(newSearches);
  };

  const deleteFavItem = (index) => {
    const newSearches = favSearches.filter((search, i) => i !== index);
    setFavSearches(newSearches);
  };

  // make visiblesearchpopup false when start typing

  const search = document.getElementById("search");

  const searchKeyUp = (e) => {
    if (e.target.value.length > 0) {
      setVisibleSearchPopup(false);
      setVisibleSuggestions(true);
    } else {
      setVisibleSearchPopup(true);
      setVisibleSuggestions(false);
    }
  };
  // search.addEventListener("keyup", (e) => {

  // });

  // if .sugg-btn clicked, the value of the button will be added to the input value
  const addValue = (index) => {
    const value = searchSuggestions[index];
    search.value = "";

    // set search placeholder to the value
    search.placeholder = "";

    // insert value to searched terms
    const newSearchedTerms = [...searchedTerms, value];
    setSearchedTerms(newSearchedTerms);

    // push the value to last searches
    const newSearches = [...lastSearches, value];
    setLastSearches(newSearches);

    setVisibleSearchPopup(false);
    setVisibleSuggestions(false);
    // setVisibleSuggestions(false);
  };

  const searchClicked = (e) => {
    if (e.target.value.length <= 0) {
      setVisibleSearchPopup(!visibleSearchPopup);
      setLastField(false);
    } else if (e.target.value.length > 0) {
      setVisibleSearchPopup(false);
      setVisibleSuggestions(true);

      // if search clicked again hide suggestions
      if (visibleSuggestions) {
        setVisibleSuggestions(false);
        setLastField(true);
      }
    }
  };

  const removeTerm = (index) => {
    const newTerms = searchedTerms.filter((term, i) => i !== index);
    setSearchedTerms(newTerms);

    // if searched terms is empty, display make input field empty
    if (newTerms.length <= 0) {
      search.value = "";
      search.placeholder = "search by sec_id/sec_name, issuer, sector, indices";
    }
  };

  const suggestionToValue = (index) => {
    const value = favSearches[index];
    search.value = "";

    // set search placeholder to the value
    search.placeholder = "";

    // insert value to searched terms
    const newSearchedTerms = [...searchedTerms, value];
    setSearchedTerms(newSearchedTerms);

    // push the value to last searches
    const newSearches = [...lastSearches, value];
    setLastSearches(newSearches);

    setVisibleSearchPopup(false);
    setVisibleSuggestions(false);
  };

  const lastSearchToValue = (index) => {
    const value = lastSearches[index];
    search.value = "";

    // set search placeholder to the value
    search.placeholder = "";

    // insert value to searched terms
    const newSearchedTerms = [...searchedTerms, value];
    setSearchedTerms(newSearchedTerms);

    // push the value to last searches
    const newSearches = [...lastSearches, value];
    setLastSearches(newSearches);

    setVisibleSearchPopup(false);
    setVisibleSuggestions(false);
  };

  return (
    <>
      <div className="ml-auto w-full flex justify-between items-center rounded">
        <div className="bg-white px-1 flex just items-center w-full rounded relative">
          <button
            onClick={toggleSearch}
            className="bg-[#323232] py-1 rounded text-white min-w-[150px] text-sm font-bold"
          >
            advance search
          </button>

          {searchedTerms !== "" && (
            <button className="pl-3">
              <IoCloseOutline
                className="mr-2"
                onClick={() => setSearchedTerms([])}
              />
            </button>
          )}
          <input
            type="text"
            onClick={searchClicked}
            onKeyUp={searchKeyUp}
            // defaultValue={"search by sec_id/sec_name, issuer, sector, indices"}
            placeholder="search by sec_id/sec_name, issuer, sector, indices"
            id="search"
            autoComplete="off"
            className="p-2 w-full ml-3 text-right rounded-none placeholder:text-black text-sm focus:outline-none"
          />
          <div className="search-tags flex pr-0 text-sm">
            {searchedTerms &&
              searchedTerms.map((term, index) => (
                <span
                  key={index}
                  className="bg-[#E5E5E5] px-3 py-1 rounded flex text-xs text-black mr-2 justify-center flex-nowrap items-center min-w-[120px]"
                >
                  <button onClick={() => removeTerm(index)}>
                    <IoCloseOutline
                      className="mr-2"
                      onClick={() => deleteItem(index)}
                    />
                  </button>{" "}
                  {term}
                </span>
              ))}
          </div>

          {visibleSearchPopup && (
            <div className="search-popup bg-white p-3">
              <>
                <div className="flex flex-wrap justify-end items-center">
                  {lastSearches.map((search, index) => (
                    <div
                      className="bg-[#E5E5E5] px-3 py-1 rounded text-sm text-black mr-2 flex justify-center items-center"
                      key={index}
                      onClick={() => lastSearchToValue(index)}
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
                      onClick={() => suggestionToValue(index)}
                    >
                      <IoCloseOutline
                        className="mr-2"
                        onClick={() => deleteFavItem(index)}
                      />{" "}
                      {search}
                    </div>
                  ))}
                  <span className="fw-semibold text-sm">
                    :Favorite searches
                  </span>
                </div>
              </>
            </div>
          )}
          {visibleSuggestions && (
            <div className="search-popup bg-white p-3">
              <div className="text-right">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => addValue(index)}
                    className="block mb-2 ml-auto font-semibold w-full text-right sugg-btn"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          {lastField && (
            <div className="search-popup bg-white p-3">
              <div className="text-center">Similar Securities</div>

              <div className="px-1 py-5">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-sm font-semibold pb-5">duration</th>
                      <th className="text-sm font-semibold pb-5">maalot</th>
                      <th className="text-sm font-semibold pb-5">sector_sub</th>
                      <th className="text-sm font-semibold pb-5">sector</th>
                      <th className="text-sm font-semibold pb-5">
                        sec_type_sub
                      </th>
                      <th className="text-sm font-semibold pb-5">sec_type</th>
                    </tr>
                  </thead>

                  <tbody className="text-center pt-5">
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                    <tr>
                      <td className="text-sm px-5">2.1</td>
                      <td className="text-sm bg-[#E0E0E0] px-5">7</td>
                      <td className="text-sm px-5">1.1</td>
                      <td className="text-sm px-5">2</td>
                      <td className="text-sm px-5">Elupi</td>
                      <td className="text-sm px-5">Elupi</td>
                    </tr>
                  </tbody>
                </table>
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
