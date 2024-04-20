import { Route, Routes } from "react-router-dom";

import Layout from              "@views/layouts/Layout"
import SplashScreen from        "@views/SplashScreen"
import Login from               "@views/Login"
import CreateUser from          "@views/Sesions/CreateUser"
import Home  from               "@views/Home"


import Forgottenpassword from "./views/Sesions/Forgottenpassword";
import VerificationCode from "./views/Sesions/VeriticationCode";
import CreatePassword from "./views/Sesions/CreatePassword";
import AnotherProfile from './views/Porfile/AnotherProfile'
import Search from "@/views/SEarch/Search"



function App() {
  
  const forceMobileStyles = "mx-auto max-w-[430px] max-h-[844px]";
  return (
    <Layout className={forceMobileStyles}>
      <Routes>

        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/" element={<SplashScreen delay={3000} destination="/login" />}/>

        
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/createpass" element={<CreatePassword/>} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/home" element={<Home/>}/>


        //* es la pantalla de vero que yo, Fer, le puse momentaneamente esa ruta para no tener que estar cambiando constantemente para verla.
        <Route path="/profile" element={<AnotherProfile  />} />

      

      </Routes>
      
    </Layout>
  );
}

export default App;







