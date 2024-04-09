import { useLocation } from "react-router-dom";

import LogoBIzWIz from "@components/icons/LogoBIzWIz";

import NavBar from "@components/NavBar";



const Layout = ({ 
  className, 
  children 
}) => {
  const location = useLocation();
  const hiddenNavPaths = ["/", "/login", "/createuser"];
  const hiddenHeaderPaths = ["/", "/login","/createuser"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);
  console.log(isNavHidden)
  const isHeaderHidden = hiddenHeaderPaths.includes(location.pathname);

  return (
    <div className={ className}> 
      
    <header>
      {isHeaderHidden ? null : (
        <div className="flex justify-between">
          <LogoBIzWIz />
        </div>
      )}
    </header>
      <main className="items-center">
        {children}
      </main>
           
      {isNavHidden ? null : (
        <footer>
          <NavBar />
        </footer>
      )}
    </div>
  );
}

export default Layout;