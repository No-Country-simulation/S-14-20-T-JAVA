import { NavLink, useLocation } from "react-router-dom";
import IconUser from "@components/icons/IconUser";
import IconHome from "@components/icons/IconHome";
import IconMessage from '@components/icons/IconMessage'

export default function NavBar({styles}) {
  
   /* tomar los params de la ruta actual (location) */
   const location = useLocation();
  const activeClass="text-primary"
    return (
    <nav className={" fixed bottom-0 left-0 right-0 flex flex-row justify-around p-8  bg-background bg-white " + styles}>
      <NavLink to="/home" activestyle={activeClass}>
        <IconHome  />
      </NavLink>
      <NavLink to="/chat" activestyle={activeClass}>
        <IconMessage />
      </NavLink>
      <NavLink to="/profile" activestyle={activeClass}>
       <IconUser />
      </NavLink>
    </nav>
  


  )
}
