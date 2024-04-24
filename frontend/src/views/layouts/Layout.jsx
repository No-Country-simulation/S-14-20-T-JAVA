import { useLocation } from "react-router-dom";
import '/src/Layout.css'

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
  const PathName= window.location.pathname;
  console.log(PathName)
  let Estilos = {};
  if(PathName == '/' ){
    
      Estilos={display:'flex',
       
        } 
  }

  if(PathName==='/login'| PathName==='/createuser'){
    Estilos={display:'flex',
    
      }
  }
  return (
    <div className={ className } id="app" 
   style={
    Estilos
   }
     > 
      
    
      {isHeaderHidden ? null : (
        <Header Styles={'[grid-area:header] relative header '}  />
      )}
    
      <main className=" flex items-center w-full flex-grow  [grid-area:main] main bg-gray-50 
       max-lg:justify-center max-lg:overflow-y-auto lg:my-10 ">
        {children}
      </main>
           
      {isNavHidden ? null : (
        <footer className="[grid-area:footer]  ">
          <NavBar styles={"relative footer"}/>
        </footer>
      )}
    </div>
  );
}

export default Layout;
