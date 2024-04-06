import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Buttondynamic({ name, name2, to, to2 }) {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  const classLogin = "flex items-center justify-center bg-primary  rounded-full w-[116px] text-white "
  const classCreate = "flex items-center justify-center bg-[#F5F5F5] rounded-full w-[116px] font-black shadow-[4px_0_4px_0_rgba(0,0,0,0.25)] " 
  
  return (
    <div className="bg-primary rounded-full h-[50px] text-xs mt-auto flex  ">
      <Link
        className={currentPath.includes(to)? classCreate : classLogin}
        to={to}
      >
     {name}
      </Link>

      <Link
        className={currentPath.includes(to2)? classCreate : classLogin}
        to={to2}
      >
        {name2}
      </Link>
    </div>
  );
}
