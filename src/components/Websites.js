import React from "react";
import { Link } from "react-router-dom";
import { websites } from "../utils/AllWebsites";

const Websites = () => {
  return (
    <section
      className="my-5 px-10"
      id="websites"
    >
    {/* //! Title */}
      <div>
        <h1 className="text-[1.7rem] font-extrabold text-sky-500">
          Web
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            sites
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full mt-10 px-5">
      {/* //! Website links */}
        {websites.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              className="bg-gray-300 xl:w-full rounded-lg cursor-pointer border-2 shadow-lg shadow-gray-600 hover:scale-110 transition-all duration-500 p-2"
            >
            {/* //! website image */}
              <div className="overflow-hidden rounded-t-md">
                <img
                  className="w-full scale-[1.05] transition-all duration-500 object-contain"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center my-2 mx-2">
              {/* //! Website Title */}
                <div className="">
                  <h2 className="text-lg font-bold"> {item.title} </h2>
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
    </section>
  );
};

export default Websites;
