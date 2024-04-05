import Layout from "@views/layouts/Layout"
import Intro from "@views/Intro"
import SplashScreen from "@views/SplashScreen"

import { Route, Routes } from "react-router-dom"

import CreateUser from "@/views/Sesions/CreateUser"
function App() {

  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[390px] max-h-[844px]"
  return (
    <Layout className={forceMobileStyles}>
      <Routes>
     
      <Route path="/createuser" element={<CreateUser/>} />
      <Route path="/" element={<SplashScreen delay={3000} destination="/intro" />}/>
      <Route path="/intro" element={<Intro/>}/>
     
   
      </Routes>
    </Layout>
  )
}

export default App
