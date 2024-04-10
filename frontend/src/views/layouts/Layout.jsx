import { useLocation } from "react-router-dom";

import NavBar from "@components/NavBar";



const Layout = ({ 
  className, 
  children 
}) => {
  const location = useLocation();
  const hiddenNavPaths = ["/", "/intro"];
  const hiddenHeaderPaths = ["/", "/intro"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);
  console.log(isNavHidden)
  const isHeaderHidden = hiddenHeaderPaths.includes(location.pathname);

  return (
    <div className={ className}> 
      

      <main className="items-center">
        {children}
      </main>
      {/*
//!ESTO ESTÁ DESACTIVADO POR AHORA 
       Hide the footer on the intro and landing pages
      {isNavHidden ? null : (
        <footer>
          <NavBar />
        </footer>
      )} */}
    </div>
  );
}

export default Layout;