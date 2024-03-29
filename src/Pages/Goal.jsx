/* eslint-disable no-unused-vars */
import { useState } from "react";
import Chatting from "../Components/Goal/Chatting";
import ChattingNext from "../Components/Goal/ChattingNext";
import FlowHome from "../Components/Goal/FlowHome";
import FlowSidebar from "../Components/sidebar/FlowSidebar";
import { useSelector } from "react-redux";

const Goal = () => {
  const [chatting, setChatting] = useState(true);
  const { activeComponent } = useSelector((state) => state.global);
  return (
    <div className="flex items-start justify-between relative">
      <FlowHome />
      {activeComponent?.component && <FlowSidebar />}

      {/* <div className="max-w-[703px] w-full mx-auto">
      <div className="point pt-[56px] pb-[21px] px-[60px] mt-[130px] md:mt[80px] mb-[21px] bg-white  rounded-[10px]">
        {chatting ? <Chatting /> : <ChattingNext />}
      </div>
      <div className="pub_btn text-end">
        <button
          onClick={() => setChatting(!chatting)}
          className="py-4 w-[170px] inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC] transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default Goal;
