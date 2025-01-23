import React from "react";

function Demo() {
  return (
    <div id="testimonials">
    <section className="bg-gradient-to-b from-[#e0f7fa] to-blue-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-[#1ddbb2] mb-4">
        See a Demo of Saksham in Action
      </h2>
      <p className="text-gray-600 mb-6">
        Watch this quick demo to understand how Saksham can create personalized courses instantly.
      </p>
      <div className="flex justify-center">
        <iframe
          className="rounded-lg shadow-lg"
          width="720"
          height="405"
         src="https://www.youtube.com/embed/ggx-FtuV5mM?si=ONTYFopIn5rLKB_h"
          title="Saksham Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    </div>
  );
}

export default Demo;
