import React from "react";
import { Link } from "react-router-dom";

export default function Buttondynamic({ name, name2, to, to2 }) {
  
  return (
    <div className="bg-primary rounded-full h-[50px] text-xs mt-auto  flex  ">
      <Link
        className="flex items-center justify-center
      bg-primary  rounded-full w-[116px] text-white shadow-[-5px_1px_4px_0px_#00000038]"
        to={to}
      >
     {name}
      </Link>

      <Link
        className="
      flex items-center justify-center
      bg-[#F5F5F5]  rounded-full w-[116px]  shadow-[-5px_1px_4px_0px_#00000038]"
        to={to2}
      >
        {name2}
      </Link>
    </div>
  );
}
