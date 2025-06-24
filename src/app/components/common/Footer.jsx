import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col min-w-full h-20 bg-gray-100 ">
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 md:p-6 lg:p-10">
        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2">WEB INFO</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Terms of Use
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Website Policies
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Document Help
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Sitemap
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Web Information Manager
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2">About Dhanbid</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Introduction
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Statistics
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Right To Information
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Analytics
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            New on Dhanbid
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Testimonials
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Brand Gem
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2">NEWS & EVENTS</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Newsroom
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Gallery
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Notifications
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            CCM Schedule
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Forums
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2">RESOURCES</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Dhanbid Handbook
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            OM's/Circulars
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Terms and Conditions
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Policies/Manuals
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Miscellaneous
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Dhanbid Integration Toolkit
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            MoU's
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2 text-left">TRAINING</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Interactive Training Courses
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Training Calendar
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Training Resources
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Training Feedback
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-2">
          <span className="font-bold text-lg py-2">CONTACT US</span>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Contact Directory
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Feedback
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Grievance Redressal
          </button>
          <button className="text-sm text-gray-400 dark:text-gray-500 py-1.5 cursor-pointer hover:underline hover:text-blue-300 text-left w-full">
            Help Desk
          </button>
        </div>
      </div> */}

      <div className="border border-gray-300 dark:bg-gray-100 py-8">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <div className="flex text-sm text-gray-500 dark:text-black">
            © 2025 Dhanbid. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-black hover:text-blue-500 dark:hover:text-blue-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-black hover:text-blue-500 dark:hover:text-blue-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
