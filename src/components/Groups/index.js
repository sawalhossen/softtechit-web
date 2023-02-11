import React from "react";
import GeneralGroups from "./GeneralGroups";
import OtherGroups from "./OtherGroups";
import SkillsGroups from "./SkillsGroups";
import WordpressOfflineGroups from "./WordpressOfflineGroups";
import { generalGroups } from "../../utils/Groups/General";
import { skillsGroups } from "../../utils/Groups/Skills";
import { wordpressOfflineGroups } from "../../utils/Groups/Wordpress";
import { otherGroups } from "../../utils/Groups/Others";

const Groups = () => {
  return (
    <section className="my-10 px-10" id="groups">
    {/* //! Title */}
      <div>
        <h1 className="text-[2rem] font-extrabold text-sky-500">
          Facebook{" "}
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            Groups
          </span>
        </h1>
      </div>
      <div className="px-5 flex flex-col justify-start items-start space-y-16"
      >

        {/* //! General Groups */}
        <GeneralGroups generalGroups={generalGroups} />

        {/* //! Skills Group */}
        <SkillsGroups skillsGroups={skillsGroups} /> 

        {/* //! Wordpress Offline Groups */}
        <WordpressOfflineGroups wordpressOfflineGroups={wordpressOfflineGroups} />

        {/* //! Other Groups */}
        <OtherGroups otherGroups={otherGroups} />

      </div>
    </section>
  );
};

export default Groups;
