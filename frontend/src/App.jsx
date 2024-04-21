import Layout from "@views/layouts/Layout";
import Login from "@views/Login";
import SplashScreen from "@views/SplashScreen";
import Forgottenpassword from "./views/Sesions/Forgottenpassword";
import VerificationCode from "./views/Sesions/VeriticationCode";
import CreatePassword from "./views/Sesions/CreatePassword";
import { Route, Routes } from "react-router-dom";
import AnotherProfile from './views/Porfile/AnotherProfile'
import Search from "@/views/SEarch/Search"
import CreateUser from "@/views/Sesions/CreateUser";
import Reports from "./views/Reporte/Reports";
import Report from "./views/Reporte/Report";


function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
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

        <Route path="/reports" element={<Reports/>}/>
        <Route path="reports/report" element={<Report/>}/>
        
        {/* <Route path="/login" element={<AnotherProfile  />} /> */}

      

      </Routes>
      
    </Layout>
  );
}

export default App;
