import { useLocation } from "react-router-dom";


import NavBar from "@components/NavBar";
import { Header } from "@components/Header";



const Layout = ({ 
  className, 
  children 
}) => {
  const location = useLocation();
  const hiddenNavPaths =     ["/","/login","/createuser","/forgottenpassword","/verificationcode","/createpass"];
  const hiddenHeaderPaths =  ["/","/login","/createuser","/forgottenpassword","/verificationcode","/createpass"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);

//   Se deja comentado el console,log() que viene desde otra rama
  //   console.log(isNavHidden)

  const isHeaderHidden = hiddenHeaderPaths.includes(location.pathname);

  return (
    <div className={ className }> 
      
    
      {isHeaderHidden ? null : (
        <Header/>
      )}
    
      <main className="items-center w-full flex-grow">
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