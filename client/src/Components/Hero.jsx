import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-center flex-col md:flex-row gap-4 text-2xl">
        <div className="flex justify-center items-center">
          <img
            src="https://i.pinimg.com/originals/54/d5/09/54d509aa9106ed57a4b38bdd201f9ae4.png"
            alt="CodeCrafters"
            className="md:h-64 w-full"
          />
        </div>
        <div className="my-auto">
          Master <span className="text-indigo-500 font-bold">Programming</span>,
          <br /> Create Limitless Possibilities!
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-4">
        <div className="md:px-6">
          <h3 className="font-bold text-2xl">
            Kickstart your programming career with us!
          </h3>
          <p>
            Do not know where to start? Check out our beginner guide now. Choose
            a language and start reading tutorials. Do exercises and quizes to
            check your knowledge and unleash your imagination, learn
            cutting-edge techniques, and leave your mark on the digital
            landscape with our diverse range of inspiring coding projects.
          </p>
          <div className="mt-4">
            <Link
              to="/tutorials"
              className="bg-black text-white rounded-lg px-4 py-2"
            >
              Tutorials
            </Link>
          </div>
        </div>
        <div className="w-full md:max-w-[23rem] mt-4 sm:mt-0">
          <form className="bg-gray-200 p-6 flex flex-col gap-4 w-full rounded-lg shadow-xl">
            <div>
              <div>Name:</div>
              <input
                type="text"
                name="name"
                className="w-full h-9 rounded-md outline-none px-2"
              />
            </div>
            <div>
              <div>Email:</div>
              <input
                type="email"
                name="email"
                className="w-full h-9 rounded-md outline-none px-2"
              />
            </div>
            <div>
              <div>Phone Number:</div>
              <input
                type="tel"
                name="phone"
                className="w-full h-9 rounded-md outline-none px-2"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-lg px-4 py-2"
            >
              Join the change
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
