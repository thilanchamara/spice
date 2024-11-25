import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" container w-full h-screen flex flex-col "
    >
      
        <div className=" mb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className=" my-6">Submit the form below to touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            className=" flex flex-col w-full md:w-1/2 "
            action="https://getform.io/f/amdpyglb"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" p-2 bg-transparent border-2 rounded-md
                 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md 
                 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className=" p-2 bg-transparent border-2 rounded-md
             focus:outline-none"
            />
            <button
              className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500
             px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110
              duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default Contact;
