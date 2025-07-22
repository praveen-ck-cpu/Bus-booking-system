import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { TbArrowsExchange } from "react-icons/tb";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {
  fromdata: "",
  todata: "",
  dateData: "",
};

const Search = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [searchdata, setsearchdata] = useState(data);
  const [suggestion, setsuggestion] = useState([]);
  const [activeField, setActiveField] = useState("fromdata");
  const sugges = useCallback(_.debounce(async (test,name) => {
    if (!test.trim()) return;
    try {
      if (name === "fromdata") {
        const { data } = await axios.get(`http://localhost:3105/user/suggestions/?query=${test}`) || {};
      setsuggestion(data);
      }
      else{
        const { data } = await axios.get(`http://localhost:3105/user/suggestionsto/?query=${test}`) || {};
      setsuggestion(data);
      }
    } catch (error) {
      window.alert(error);
    }
  }, 300), []);
  const handlechage = async (event) => {
    const { name, value } = event.target;
    setActiveField(name);
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    setsearchdata((prevdata) => ({
      ...prevdata,
      [name]: name === "fromdata" || name === "todata" ? capitalizeFirstLetter(value) : value,
    }));
    if (value.trim().length > 1) {
      sugges(value,name);
    }
  };
  const handleSelectSuggestion = (item) => {
    setsearchdata((prevdata) => ({
      ...prevdata,
      [activeField]: item,
    }));
    setsuggestion([]);
  };
  const handleexchange = () => {
    setsearchdata((prevdata) => ({
      fromdata: prevdata.todata,
      todata: prevdata.fromdata,
      dateData: prevdata.dateData,
    }));
  };
  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const { fromdata, todata, dateData } = searchdata;
      if (!fromdata || !todata || !dateData) {
        toast.info("Please enter all values");
        return;
      };
      const final = await axios.get(
        `http://localhost:3105/user/search/?source=${fromdata}&destination=${todata}&date=${dateData}`,
        { headers: { "Content-Type": "application/json" } }
      );
      if (!final?.data) {
        toast.error("Oops, Server Error");
        return;
      };
      if (final.data.message) {
        toast.error(final.data.message);
        return;
      };
      navigate("/bus-tickets", { state: final.data });
    } catch (error) {
      toast.error("Something went wrong!");
    };
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.85, ease: "easeOut" }}
      className="w-full bg-neutral-50/20 border-neutral-300 shadow-lg rounded-xl p-5"
    >
     
      <form onSubmit={handlesubmit} className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-5">
        <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-center gap-4 md:gap-5 relative">
          <div className="w-full sm:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center rounded-lg">
            <input
              type="text"
              placeholder="From..."
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
              name="fromdata"
              value={searchdata.fromdata}
              onChange={handlechage}
              autoComplete="off"
            />
            {activeField === "fromdata" && suggestion.length > 0 && (
              <ul className="absolute mt-1.5 left-0 p-1 top-full w-[320px] h-auto border rounded-lg border-neutral-300 text-gray-50 bg-red-500 pl-5 items-center">
                {suggestion.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-white hover:text-red-500 border border-transparent hover:border-red-500 rounded-lg cursor-pointer flex items-center transition-all duration-300"
                    role="button"
                    onClick={() => handleSelectSuggestion(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <FaMapMarkerAlt className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="sm:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center rounded-lg">
            <input
              type="text"
              placeholder="To..."
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
              name="todata"
              value={searchdata.todata}
              onChange={handlechage}
              autoComplete="off"
            />
            {activeField === "todata" && suggestion.length > 0 && (
              <ul className=" p-1 absolute mt-1.5 left-[340px] top-full w-[320px] h-auto border rounded-lg border-neutral-300 text-gray-50 bg-red-500 pl-5 items-center">
                {suggestion.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-white hover:text-red-500 border border-transparent hover:border-red-500 rounded-lg cursor-pointer flex items-center transition-all duration-300"
                    role="button"
                    onClick={() => handleSelectSuggestion(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <FaMapMarkerAlt className="w-5 h-5 text-neutral-400 hover:text-red-500" />
          </div>
          <button
            type="button"
            className="absolute w-10 h-10 top-1/2 left-[45%] sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-500 shadow-md"
            onClick={handleexchange}
          >
            <TbArrowsExchange className="w-5 h-5 text-neutral-50" />
          </button>
        </div>
        <div className="w-full md:w-[40%] flex flex-col sm:flex-row items-center gap-4 md:gap-5">
          <div className="w-full sm:flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center rounded-lg">
            <input
              type="date"
              className="flex-1 h-full border-none bg-transparent focus:outline-none min-w-[160px]"
              name="dateData"
              value={searchdata.dateData}
              onChange={handlechage}
              min={today}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 h-14 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 transition-all duration-300"
          >
            <FaSearch />
            Search
          </button>
        </div>
      </form>
    </motion.div>
  );
};
export default Search;