import React from "react";
import { Hero, About, CodeExample, Testimonial } from "../Components";

const Home = () => {
  return (
    <div className="px-4 md:px-8">
      <Hero />
      <About />
      <CodeExample />
      <Testimonial />
    </div>
  );
};

export default Home;
