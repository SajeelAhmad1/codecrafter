import React from "react";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import AboutHome from "./AboutHome";
import { CodeExample } from "../../Components";

const Home = () => {
  return (
    <div className="px-4 md:px-8">
      <Intro />
      <AboutHome />
      <CodeExample />
      <Testimonial />
    </div>
  );
};

export default Home;
