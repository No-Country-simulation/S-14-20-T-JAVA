import { useLocation } from "react-router-dom";


import NavBar from "@components/NavBar";
import { Header } from "@components/Header";



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
    <div className={ className }> 
      
    
      {isHeaderHidden ? null : (
        <Header/>
      )}
    
      <main className="items-center flex-grow m-6">
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