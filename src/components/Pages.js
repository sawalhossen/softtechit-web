import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../utils/AllFbPages";

const Pages = () => {

  return (
    <div className="my-10 px-10" id="pages"
    >
    {/* //! Title */}
      <div>
        <h1 className="text-[1.7rem] font-extrabold text-sky-500">
          Facebook <span className="underline underline-offset-[10px] text-[#f1971a]">
            Pages
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 w-full mt-10 px-5">
      {/* //! FB Pages */}
        {pages.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              className="bg-gray-300 w-full rounded-lg cursor-pointer border-2 shadow-lg shadow-gray-600 hover:scale-110 transition-all duration-500 p-2"
            >
            {/* //! Page Image */}
              <div className="overflow-hidden">
                <img className="w-full scale-[1.05] transition-all duration-500 object-contain rounded-sm" src={item.img} alt="" />
              </div>
              <div className="flex justify-between items-center my-2 mx-2">
              {/* //! Page Title */}
                <div className="">
                  <h2 className="text-base font-bold"> {item.title} </h2>
                </div>
                <div>
                {/* //! View Button */}
                  <button className="text-sky-500 underline underline-offset-2 font-bold">
                    {" "}
                    View{" "}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pages;
