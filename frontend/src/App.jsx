import { Link, Route, Routes } from 'react-router-dom';

import Layout from '@views/layouts/Layout';
import SplashScreen from '@views/SplashScreen';
import Login from '@views/Login';
import CreateUser from '@views/Sesions/CreateUser';
import Home from '@views/Home';
import SerEmprendedor from './components/FormularioEmprendedor/serEmprendedor';
import Forgottenpassword from './views/Sesions/Forgottenpassword';
import VerificationCode from './views/Sesions/VeriticationCode';
import CreatePassword from './views/Sesions/CreatePassword';
import AnotherProfile from './views/Porfile/AnotherProfile';
import Search from '@/views/SEarch/Search';
import Reports from "./views/Reporte/Reports";
import Report from "./views/Reporte/Report";
import Ocupacion from './components/FormularioEmprendedor/Ocupacion';
import TuOcupacion from './components/FormularioEmprendedor/tuOcupacion';
import Enviado from './components/FormularioEmprendedor/Enviado'


function App() {
    
    return (
        <Layout>
            <Routes>
                <Route path="/createuser" element={<CreateUser />} />
                <Route
                    path="/"
                    element={<SplashScreen delay={3000} destination="/login" />}
                />

                <Route path="/login" element={<Login />} />
                <Route
                    path="/forgottenpassword"
                    element={<Forgottenpassword />}
                />
                <Route
                    path="/verificationcode"
                    element={<VerificationCode />}
                />
                <Route path="/createpassword" element={<CreatePassword />} />
                <Route path="/createuser" element={<CreateUser />} />
                <Route path="/search" element={<Search />} />
                <Route path="/home" element={<Home />} />

                {/* //* es la pantalla de vero que yo, Fer, le puse momentaneamente esa ruta para no tener que estar cambiando constantemente para verla. */}
                <Route path="/profile" element={<AnotherProfile />} />
                <Route path="/reports" element={<Reports/>}/>
                 <Route path="reports/report" element={<Report/>}/>
                  {/* <Route path="/login" element={<SerEmprendedor />} />
                 <Route path="/tuocupacion" element={<TuOcupacion />} />
                 <Route path="/ocupacion" element={<Ocupacion />} />
                 <Route path="/enviado" element={<Enviado />} /> */}
            </Routes>

            
        </Layout>

        
    );
}

export default App;
