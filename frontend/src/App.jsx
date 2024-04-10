import Layout from "@views/layouts/Layout";
import Login from "@views/Login";
import SplashScreen from "@views/SplashScreen";
import Forgottenpassword from "./components/Sesions/Forgottenpassword";
import VerificationCode from "./components/Sesions/VeriticationCode";
import CreatePassword from "./components/Sesions/CreatePassword";
import { Route, Routes } from "react-router-dom";


import CreateUser from "@/views/Sesions/CreateUser";
function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[430px] max-h-[844px]";
  return (
    <Layout className={forceMobileStyles}>
      <Routes>
        <Route path="/createuser" element={<CreateUser />} />
        <Route
          path="/"
          element={<SplashScreen delay={3000} destination="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgottenpassword />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route path="/createpass" element={<CreatePassword/>} />
      </Routes>
      
    </Layout>
  );
}

export default App;
