"use client";

import { useSidebar } from "@/app/contexts/SidebarContext";
import Image from "next/image";

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <header
      className={`sticky md:fixed top-0 ${
        isSidebarOpen ? " md:left-70" : "left-0 md:left-22 w-full md:w-auto"
      } right-0 p-4 lg:p-5`}
    >
      <nav className="flex-between">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={132}
          height={24}
          className="md:hidden w-27.25 h-5 sm:size-auto"
        />
        <div className="hidden md:flex items-center gap-2.5 bg-neutral-700 rounded-full  leading-5 pl-4 py-1 pr-1">
          Тариф
          <div className="flex items-center gap-1 bg-brand-500/15 text-brand-500 rounded-full py-1.5 pl-1.5 pr-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2476 8.99167L15.7226 4.55C15.5893 4.31667 15.3393 4.16667 15.0643 4.16667H4.95595C4.68095 4.16667 4.43095 4.30833 4.29762 4.55L1.76428 8.99167C1.59762 9.28333 1.64762 9.64167 1.88928 9.875L9.46428 17.2833C9.76428 17.575 10.2393 17.575 10.5393 17.2833L18.1143 9.875C18.3559 9.64167 18.4059 9.28333 18.2393 8.99167H18.2476ZM6.46428 10.0917L7.93095 13.6833L4.25595 10.0917H6.45595H6.46428ZM8.09762 10.0917H11.9226L10.0143 14.7667L8.10595 10.0917H8.09762ZM13.5559 10.0917H15.7559L12.0809 13.6833L13.5476 10.0917H13.5559ZM16.2976 8.60833H13.5893L12.5809 5.64167H14.6226L16.3059 8.60833H16.2976ZM10.9809 5.64167L11.9893 8.60833H8.03095L9.03928 5.64167H10.9809ZM5.40595 5.64167H7.44762L6.43928 8.60833H3.73095L5.41428 5.64167H5.40595Z"
                fill="#D93C0B"
              />
            </svg>
            Тестовый
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="size-10 shrink-0 flex-center rounded-full bg-neutral-500 overflow-hidden">
            <Image
              src="/assets/images/avatar.png"
              alt="Avatar"
              width={1024}
              height={1024}
              className="size-full object-cover"
            />
            <div className="uppercase font-medium text-lg">И</div>
          </button>

          <button className="md:hidden" onClick={toggleSidebar}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C4 7.26362 4.59695 6.66667 5.33333 6.66667H26.6667C27.403 6.66667 28 7.26362 28 8C28 8.73638 27.403 9.33333 26.6667 9.33333H5.33333C4.59695 9.33333 4 8.73638 4 8ZM14.6667 16C14.6667 15.2636 15.2636 14.6667 16 14.6667H26.6667C27.403 14.6667 28 15.2636 28 16C28 16.7364 27.403 17.3333 26.6667 17.3333H16C15.2636 17.3333 14.6667 16.7364 14.6667 16ZM4 24C4 23.2636 4.59695 22.6667 5.33333 22.6667H26.6667C27.403 22.6667 28 23.2636 28 24C28 24.7364 27.403 25.3333 26.6667 25.3333H5.33333C4.59695 25.3333 4 24.7364 4 24Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
