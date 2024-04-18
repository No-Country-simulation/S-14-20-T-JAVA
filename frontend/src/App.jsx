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

function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[430px] max-h-[844px] bg-background";
  return (
    <Layout className={forceMobileStyles}>
      <Routes>
     
      <Route path="/createuser" element={<CreateUser/>} />
      <Route path="/" element={<SplashScreen delay={3000} destination="/login" />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/" element={<SplashScreen delay={3000} destination="/login" />}/>

        
        <Route path="/login" element={<Login />} />
        <Route path="/forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/createpass" element={<CreatePassword/>} />

        // descomentar para ver la pantalla profile
        {/* <Route path="/login" element={<AnotherProfile  />} /> */}

      
      </Routes>
      
    </Layout>
  );
}

export default App;
