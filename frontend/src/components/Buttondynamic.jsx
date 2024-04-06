import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Buttondynamic({ name, name2, to, to2 }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const classLogin = "flex items-center justify-center bg-primary  rounded-full w-[116px] text-white shadow-[-5px_1px_4px_0px_#00000038]"
  const classCreate = "flex items-center justify-center bg-[#F5F5F5] rounded-full w-[116px]  shadow-[-5px_1px_4px_0px_#00000038]"
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
