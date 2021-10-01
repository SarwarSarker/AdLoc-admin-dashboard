import { Menu, Transition } from "@headlessui/react";
import React from "react";
import img from "../assets/profile.jpg";
import ThemeToggler from "./context/ThemeToggler";

const Navbar = ({ showSidebar }) => {
  return (
    <>
      <header className="md:inset-y-0 flex h-16 bg-white text-black dark:bg-bgDark1 dark:text-gray-500 items-center px-4 filter drop-shadow-lg">
        <button
          className="p-2 mr-2 bg-gray-100 text-black dark:bg-gray-600 md:hidden focus:outline-none focus:bg-gray-300 hover:bg-gray-300 rounded-md"
          onClick={showSidebar}
        >
          <i className="fas fa-align-justify"></i>
        </button>
        <div className="w-full flex justify-between items-center ">
          <div className="flex justify-center flex-1 lg:mr-32">
            <div
              className="
                  relative
                  w-full
                  max-w-xl
                  mr-6
                "
            >
              <div className="absolute inset-y-0 flex items-center pl-2">
                <i className="fas fa-search text-gray-400 text-xs"></i>
              </div>
              <input
                className="
                    w-full
                    pl-8
                    pr-2
                    p-2
                    bg-gray-100
                    border-0
                    rounded-md
                    focus:bg-white
                    focus:ring-2 focus:ring-gray-300
                    dark:focus:ring-gray-800
                    focus:outline-none
                    focus:shadow-outline-purple
                    form-input
                    dark:bg-bgDark2
                    dark:text-gray-700
                  "
                type="text"
                placeholder="Search for projects"
                aria-label="Search"
              />
            </div>
          </div>

          <div className="flex items-center flex-shrink-0 space-x-6">
            <ThemeToggler />

            <Menu as="div" className="relative">
              <Menu.Button className="relative focus:outline-none">
                <i className="fas fa-bell text-xl"></i>
                <span
                  className="
                      absolute
                      top-0
                      right-0
                      w-3
                      h-3
                      transform
                      translate-x-2
                      -translate-y-2
                      bg-red-600
                      border-2 border-white
                      rounded-full
                    "
                ></span>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  as="ul"
                  className="absolute right-0 w-56 p-3 bg-white dark:bg-bgDark1 text-md font-medium border border-gray-100 dark:border-bgDark1 rounded-md shadow-md focus:outline-none"
                >
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#profile"
                        className={`px-4 py-2 flex items-center justify-between  rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <span>Messages</span>
                        <span
                          className="
                            px-2
                            py-1
                            text-xs
                            font-bold
                            leading-none
                            text-red-600
                            dark:text-white
                            bg-red-100
                            dark:bg-red-900
                            rounded-full
                          "
                        >
                          13
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#setting"
                        className={`px-4 py-2 flex items-center justify-between rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <span>Sales</span>
                        <span
                          className="
                            px-2
                            py-1
                            text-xs
                            font-bold
                            leading-none
                            text-red-600
                            dark:text-white
                            bg-red-100
                            dark:bg-red-900
                            rounded-full
                          "
                        >
                          2
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#logout"
                        className={`px-4 py-2 flex items-center justify-between rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <span>Alerts</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative">
              <Menu.Button className="focus:outline-none">
                <img
                  className="w-9 h-9 rounded-full object-cover cursor-pointer"
                  src={img}
                  alt="img"
                />
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  as="ul"
                  className="absolute right-0 w-56 p-3 bg-white dark:bg-bgDark1 text-md font-medium border border-gray-100 dark:border-bgDark1 rounded-md shadow-md focus:outline-none"
                >
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#profile"
                        className={`px-4 py-2 flex items-center  rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <i className="fas fa-user mr-3"></i>Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#setting"
                        className={`px-4 py-2 flex items-center  rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <i className="fas fa-cog mr-3"></i>Setting
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li" className="py-1">
                    {({ active }) => (
                      <a
                        href="#logout"
                        className={`px-4 py-2 flex items-center  rounded-md ${
                          active ? "bg-indigo-600 text-white" : "text-gray-500 "
                        }`}
                      >
                        <i className="fas fa-sign-out-alt mr-3"></i>Logout
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
