import React from "react";
import Logo from "../images/banquee..png";

const Navber = () => {
  return (
    <div className="container max-w-[1400px] mx-auto py-5">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Features</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Compare
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Blog
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img src={Logo} alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li class="text-black">
              <a>Features</a>
            </li>
            <li class="text-black" tabindex="0">
              <a class="justify-between">
                Compare
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li class="text-black">
                  <a>Submenu 1</a>
                </li>
                <li class="text-black">
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li class="text-black">
              <a>Support</a>
            </li>
            <li class="text-black" tabindex="0">
              <a class="justify-between">
                Blog
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li class="text-black">
                  <a>Submenu 1</a>
                </li>
                <li class="text-black">
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div className="flex gap-5 items-center">
            <button class="btn btn-primary btn-link no-underline hover:no-underline">
              Login
            </button>
            <button class="btn btn-primary text-white hover:bg-accent hover:text-primary border-none">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
