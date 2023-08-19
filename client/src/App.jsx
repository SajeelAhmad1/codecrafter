import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import { Header, Footer } from "./Components";
import { CppAtGlance } from "./pages";
import { Ch1, Ch2, Ch3, Ch4, Ch5, Ch6, Ch7 } from "./Components/Chapters";
import {
  Quiz1,
  Quiz2,
  Quiz3,
  Quiz4,
  Quiz5,
  Quiz6,
  Quiz7,
} from "./Components/Quizes";
import { Projects, Error404 } from "./pages";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/tutorials" element={<Ch1 />} />
        <Route path="/tutorials/Chapter1" element={<Ch1 />} />
        <Route path="/tutorials/Chapter2" element={<Ch2 />} />
        <Route path="/tutorials/Chapter3" element={<Ch3 />} />
        <Route path="/tutorials/Chapter4" element={<Ch4 />} />
        <Route path="/tutorials/Chapter5" element={<Ch5 />} />
        <Route path="/tutorials/Chapter6" element={<Ch6 />} />
        <Route path="/tutorials/Chapter7" element={<Ch7 />} />

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cppatglance" element={<CppAtGlance />} />
        <Route path="/quizes" element={<Quiz1 />} />
        <Route path="/quizes/quiz1" element={<Quiz1 />} />
        <Route path="/quizes/quiz2" element={<Quiz2 />} />
        <Route path="/quizes/quiz3" element={<Quiz3 />} />
        <Route path="/quizes/quiz4" element={<Quiz4 />} />
        <Route path="/quizes/quiz5" element={<Quiz5 />} />
        <Route path="/quizes/quiz6" element={<Quiz6 />} />
        <Route path="/quizes/quiz7" element={<Quiz7 />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
