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
import SerEmprendedor from "./views/FormularioEmprendedor/serEmprendedor";
import TuOcupacion from "./views/FormularioEmprendedor/tuOcupacion";
import Ocupacion from "./views/FormularioEmprendedor/Ocupacion";
import Enviado from "./views/FormularioEmprendedor/Enviado";

function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[430px] max-h-[844px]";
  return (
    <Layout className={forceMobileStyles}>
      <Routes>

        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/" element={<SplashScreen delay={3000} destination="/login" />}/>

        
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/forgottenpassword" element={<Forgottenpassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/createpass" element={<CreatePassword/>} />
        <Route path="/search" element={<Search/>}/>
        // descomentar para ver la pantalla profile
        {/* <Route path="/login" element={<AnotherProfile  />} /> */}
        <Route path="/login" element={<SerEmprendedor/>} />
        <Route path="/tuocupacion" element={<TuOcupacion/>} />
        <Route path="/ocupacion" element={<Ocupacion/>} />
        <Route path="/enviado" element={<Enviado/>} />


      </Routes>
      
    </Layout>
  );
}

export default App;
