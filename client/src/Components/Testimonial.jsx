import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="flex items-center flex-col py-8">
      <h2 className="text-3xl mb-4 font-bold">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center max-w-full gap-6">
        <div className="bg-slate-200 rounded-xl p-4 lg:w-[30rem]">
          <FaQuoteRight className="text-4xl" />
          <div className="leading-relaxed mb-6 my-4 text-xl">
            I had always been fascinated by programming but felt intimidated by
            the complexity of C++. Thanks to this educational website, I was
            able to grasp the core concepts and build my coding skills from
            scratch.
          </div>
          <div className="flex gap-4 items-center">
            <img
              alt="testimonial"
              src="https://randomuser.me/api/portraits/men/66.jpg"
              className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
            />
            <div className="flex flex-col">
              <span className="title-font font-medium text-[#6366f1]">
                <b>Holden Caulfield</b>
              </span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-xl p-4 lg:w-[30rem]">
          <FaQuoteRight className="text-4xl" />
          <div className="leading-relaxed mb-6 my-4 text-xl">
            I stumbled upon this website while searching for beginner-friendly
            C++ resources, and it turned out to be a game-changer for me. The
            step-by-step tutorials and clear explanations helped me overcome my
            initial apprehension.
          </div>
          <div className="flex gap-4 items-center">
            <img
              alt="testimonial"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
            />
            <div className="flex flex-col">
              <span className="title-font font-medium text-[#6366f1]">
                <b>Alper Kamu</b>
              </span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
