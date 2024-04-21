import { Link, useLocation } from "react-router-dom";

export const classCreate =
  "flex items-center justify-center bg-[#F5F5F5] rounded-full font-semibold md:text-button-font-size sm:text-base shadow-[4px_0_4px_0_rgba(0,0,0,0.25)]] min-w-[160px] min-h-[73px]";

export default function Buttondynamic({ name, name2, to, to2 }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const classLogin = "flex items-center justify-center bg-primary rounded-full text-white md:text-button-font-size sm:text-base min-w-[160px] min-h-[73px]";

  return (
    <div className='flex justify-center mt-2'>
      <div className="bg-primary rounded-full flex">
        <Link
          className={currentPath.includes(to) ? classCreate : classLogin}
          to={to}
        >
          {name}
        </Link>

        <Link
          className={currentPath.includes(to2) ? classCreate : classLogin}
          to={to2}
        >
          {name2}
        </Link>
      </div>
    </div>
  );
}
