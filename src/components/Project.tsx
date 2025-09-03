import React from "react";

const Project: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto my-10 p-5 text-center">
        <h2 className="text-3xl font-bold mb-5">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Project One</h3>
            <p className="text-gray-700 mb-4">A brief description of Project One.</p>
            <a href="#" className="text-purple-500 hover:underline">View Details</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Project Two</h3>
            <p className="text-gray-700 mb-4">A brief description of Project Two.</p>
            <a href="#" className="text-purple-500 hover:underline">View Details</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Project Three</h3>
            <p className="text-gray-700 mb-4">A brief description of Project Three.</p>
            <a href="#" className="text-purple-500 hover:underline">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
