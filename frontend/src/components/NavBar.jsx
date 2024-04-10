import { NavLink, useLocation } from "react-router-dom";
import IconUser from "@components/icons/IconUser";
import IconHome from "@components/icons/IconHome";


export default function NavBar() {
  
   /* tomar los params de la ruta actual (location) */
   const location = useLocation();
  
    return (
    <nav className=" flex flex-row justify-around p-8">
      <NavLink to="/home" 
      //</nav> className={navLinkClasses}
      >
        <IconHome />
      </NavLink>
      <NavLink to="/profile"
      //</nav>className={navLinkClasses}
      >
       <IconUser />
      </NavLink>
    </nav>
  


  )
}
