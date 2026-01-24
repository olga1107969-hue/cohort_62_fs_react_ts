// Импортируем BrowserRouter, Route, Routes для настройки маршрутизации
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

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
//import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_12 from "lessons/Lesson_12/Lesson_12";
import Lesson_14 from "lessons/Lesson_14/Lesson_14";

// Homeworks
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
//import Homework_10 from "homeworks/Homework_10/Homework_10";
import Homework_12 from "homeworks/Homework_12/Homework_12";
import Homework_14 from "homeworks/Homework_14/Homework_14";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.LOGIN} element={<LogIn />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTES.CLIENTS} element={<Clients />} />
          <Route path={ROUTES.APPLE} element={<Apple />} />
          <Route path={ROUTES.GOOGLE} element={<Google />} />
          <Route path={ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
        </Routes>
      </Layout> */}
      {/* <Lesson_06 /> */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Homework_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Homework_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Homework_10 /> */}
      {/* <Lesson_12 /> */}
      {/* <Homework_12 /> */}
      {/* <Lesson_14 /> */}
      <Homework_14 />
    </BrowserRouter>
  );
}

export default App;
