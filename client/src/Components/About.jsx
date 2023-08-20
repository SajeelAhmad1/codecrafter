import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 my-8">
      <div className="lg:w-2/3 text-center mx-auto pb-8">
        <h4 className="sm:text-3xl text-2xl font-bold mb-4 text-gray-900">
          What we are offering?
        </h4>
        <p className="text-xl leading-relaxed">
          Strengthen your coding skills with hands-on exercises, test your
          understanding with engaging quizzes, and apply your knowledge to
          real-world scenarios through our stimulating coding projects.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-center px-4">
        <div className="md:w-1/3">
          <img src="/images/tutorial.png" alt="Tutorial" className="h-10 mx-auto" />
          <h4 className="tracking-widest text-2xl font-semibold font-xl text-gray-800 mb-1">
            Tutorials
          </h4>
          <p class="sm:text-2xl text-lg text-gray-600 mb-3">
            With our tutorials, we provide limitless possibilities to learn C++.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/images/quiz.png" alt="Quiz" className="h-10 mx-auto" />
          <h4 className="tracking-widest text-2xl font-semibold font-xl text-gray-800 mb-1">
            Quizzes
          </h4>
          <p class="sm:text-2xl text-lg text-gray-600 mb-3">
            Unleash your imagination, learn cutting-edge techniques, and leave
            your mark on the digital landscape with our diverse range of
            inspiring coding projects.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/images/project.png" alt="Project" className="h-10 mx-auto" />
          <h4 className="tracking-widest text-2xl font-semibold font-xl text-gray-800 mb-1">
            Projects
          </h4>
          <p class="sm:text-2xl text-lg text-gray-600 mb-3">
            Put your knowledge to the test and solidify your understanding of
            programming concepts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
