import { NavLink, useLocation } from "react-router-dom";
import IconSearch from "../Icons/IconSearch";
import IconHome from "../Icons/IconHome";


export default function NavBar() {
  
   /* tomar los params de la ruta actual (location) */
   const location = useLocation();
   /* tomar el modo ("vendedor" | "comprador") del primer param de location después de "/" */
   const modo = location.pathname.split("/")[1];
 
  
 
  
    return (
    <nav className="">
      <NavLink to={`${modo}/home`} 
      //</nav> className={navLinkClasses}
      >
        <IconHome />
        <span className="sr-only btm-nav-label">Home</span>
      </NavLink>
      <NavLink to={`${modo}/search`} 
      //</nav>className={navLinkClasses}
      >
        <IconSearch />
        <span className="sr-only btm-nav-label">Buscar</span>
      </NavLink>
    </nav>
  


  )
}
