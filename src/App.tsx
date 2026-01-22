import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Home from "pages/EmployeeApp/Home/Home";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import Google from "pages/EmployeeApp/Clients/Google/Google";
import { ROUTES } from "constants/routes";

import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.LOGIN} element={<LogIn />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTES.CLIENTS} element={<Clients />} />
          <Route path={ROUTES.APPLE} element={<Apple />} />
          <Route path={ROUTES.GOOGLE} element={<Google />} />
          <Route path={ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={ROUTES.NOT_FOUND} element={"Page Not Found"} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;






