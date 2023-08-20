import React from "react";
import { Footer } from "../Components";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="py-40 sm:py-28 px-4 text-center">
        <div className="text-3xl mb-6">Umm, We think you're Lost</div>
        <Link to="/" className="bg-black text-white px-4 py-2 rounded-lg mt-10">
          Back to home?
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
