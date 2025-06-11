import React from "react";

const Aboutus = () => {
  return (
    <section
      aria-label="About us information"
      // Changed background to a subtle light blue
      className="bg-blue-50 min-h-screen py-16 px-6 font-inter"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-blue-800 text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-center">
          {/* Changed heading color to a deep blue */}
          About Master Model
        </h1>
        {/* Added some top margin for better spacing on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            {/* Changed sub-heading color to a vibrant blue */}
            <h2 className="text-blue-600 text-2xl font-bold mb-4">
              Our Mission
            </h2>
            {/* Changed paragraph text color to a darker gray for readability */}
            <p className="text-gray-700 text-base leading-relaxed">
              At Master Model, we are dedicated to creating an inspiring study
              environment where every student can thrive and reach their full
              potential.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            <h2 className="text-blue-600 text-2xl font-bold mb-4">
              Study Environment
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our study spaces are thoughtfully designed for focus and comfort,
              with quiet zones, collaborative areas, and modern facilities.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            <h2 className="text-blue-600 text-2xl font-bold mb-4">Structure</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We offer a structured curriculum that balances theory and practice,
              ensuring students build strong foundational knowledge and skills.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            <h2 className="text-blue-600 text-2xl font-bold mb-4">
              Expert Teachers
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our teachers are experienced professionals passionate about guiding
              and mentoring students throughout their learning journey.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            <h2 className="text-blue-600 text-2xl font-bold mb-4">
              Continuous Support
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We provide ongoing support with tutoring, counseling, and academic
              resources to help students succeed.
            </p>
          </article>

          <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-100">
            <h2 className="text-blue-600 text-2xl font-bold mb-4">
              Community & Growth
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Master Model fosters a vibrant community that encourages growth,
              collaboration, and lifelong learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
