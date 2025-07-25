"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useSidebar } from "@/app/contexts/SidebarContext";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/app/hooks/useClickOutside";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar, setIsSidebarOpen } = useSidebar();
  const sideBarRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and on resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Only activate click outside when isMobile
  useClickOutside(sideBarRef, () => {
    if (isMobile) setIsSidebarOpen(false);
  });

  return (
    <>
      {/* Overlay */}
      <div
        className={`${
          isSidebarOpen ? "fixed" : ""
        } inset-0 md:hidden bg-neutral-500/80 z-40`}
      ></div>
      <aside
        className={`fixed left-0 top-0 z-50 ${
          isSidebarOpen ? "" : "md:max-h-250 -translate-x-full md:translate-x-0"
        } max-w-70 h-full flex flex-col justify-between bg-neutral-800 border-r border-neutral-500/[8%] transition-all duration-500 ease-in-out pb-20 px-5 pt-5`}
        ref={sideBarRef}
      >
        <div>
          {/* Logo */}
          <div className="flex-between mb-10">
            {isSidebarOpen && (
              <Image
                src="/assets/images/logo.svg"
                alt="Logo"
                width={132}
                height={24}
              />
            )}

            <Button
              variant="ghost"
              className={`${
                isSidebarOpen ? "!size-10" : "!size-12"
              } flex-center !rounded-lg !p-0`}
              onClick={toggleSidebar}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`shrink-0 ${isSidebarOpen ? "" : "rotate-180"}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4714 2.86189C10.7318 3.12224 10.7318 3.54435 10.4714 3.8047L6.27615 7.99996L10.4714 12.1952C10.7318 12.4556 10.7318 12.8777 10.4714 13.138C10.2111 13.3984 9.78895 13.3984 9.5286 13.138L4.86193 8.47136C4.60158 8.21101 4.60158 7.7889 4.86193 7.52855L9.5286 2.86189C9.78895 2.60154 10.2111 2.60154 10.4714 2.86189Z"
                  fill="#7E818C"
                />
              </svg>
            </Button>
          </div>

          <ul className="space-y-2 text-lg/6 font-medium">
            <li>
              <Link
                href="/"
                className="group flex items-center gap-2 bg-neutral-500/[12%] rounded-xl hover:bg-neutral-500/[12%] hover:text-white transition-colors duration-200 p-2"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-brand-500 group-hover:fill-brand-500 transition-colors duration-200"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.8952 8.11452C27.8952 9.23364 27.6022 10.0861 26.9274 10.7681C25.8466 11.8602 24.06 12.1525 22.7409 11.3421C22.5262 11.2102 22.3405 11.0969 22.1657 10.9331C22.0036 10.7807 21.8645 10.5447 21.6879 10.4253C21.4299 10.495 16.7211 13.74 16.125 14.1416C15.9475 14.261 15.4632 14.6241 15.2941 14.6697C15.3438 14.8847 15.5337 15.1557 15.6211 15.377C15.7229 15.635 15.7866 16.0844 15.9475 16.0844H21.0814C21.2252 16.0844 21.3689 15.6634 21.4821 15.4992C21.6325 15.2812 21.741 15.1412 21.9477 14.979C24.0843 13.3029 27.0122 15.4575 25.9493 17.9852L25.5764 18.5987C25.3548 18.8752 25.0061 19.1604 24.6604 19.3238C23.5503 19.8484 22.2267 19.4412 21.5139 18.4767C21.2873 18.1704 21.2415 17.8292 21.0814 17.8292H15.9475C15.7796 17.8292 15.712 18.3343 15.6283 18.5442C15.5419 18.7594 15.3361 19.0851 15.294 19.2441C15.5584 19.3153 19.6443 22.143 20.0732 22.4319C20.3519 22.6198 20.5833 22.7757 20.8572 22.9602C21.0346 23.0799 21.519 23.4429 21.6879 23.4884C21.8292 23.3928 22.7156 22.1208 24.3949 22.1208C26.1054 22.1208 27.8017 23.586 27.8017 25.3276C27.8017 26.4724 27.5984 27.2074 26.8102 28.0039C25.7995 29.0251 24.1437 29.3099 22.8539 28.6297C22.4393 28.4109 22.2038 28.1878 21.8853 27.8634C21.6076 27.5802 21.3889 27.1879 21.2337 26.7769C21.0368 26.2552 21.0346 25.8899 21.0346 25.1862C20.4692 24.8037 14.7117 20.8548 14.0809 20.5173C13.2342 20.9699 12.9054 21.2719 11.654 21.2719C11.4205 21.2719 11.294 21.2514 11.0956 21.2232C10.3284 21.1139 10.7171 20.8262 9.49838 22.8664C9.14908 23.4514 8.74845 24.0666 8.43369 24.6675C8.57291 24.8774 8.7507 25.0754 8.86058 25.3208C9.16399 25.9994 9.17759 26.9382 8.82297 27.6075C8.72444 27.7935 8.44718 28.1888 8.30157 28.3066C7.51059 28.9465 6.59293 29.2159 5.55912 28.7984C5.20829 28.6568 5.04623 28.5327 4.80517 28.2871C4.55015 28.0271 4.43304 27.9237 4.2568 27.5678C4.09889 27.2487 4.01609 26.9097 4 26.571V26.3275C4.04802 25.2916 4.70735 24.3063 5.73678 23.97C5.96259 23.8959 6.31118 23.8237 6.56703 23.8233C6.74399 23.8232 6.68165 23.8609 6.89373 23.8658L8.99389 20.3289C8.88708 20.1674 8.85112 20.1691 8.70622 20.0536C8.44126 19.8422 8.09362 19.3399 7.93559 19.0401C7.19938 17.6444 7.22493 15.9277 8.09764 14.613L8.56736 14.003C8.84864 13.6896 9.25128 13.4442 9.60058 13.208C9.65605 13.1866 9.70715 13.1665 9.75482 13.1473C9.31445 11.4874 8.87537 9.82732 8.43511 8.16735C7.01699 8.17978 5.86039 7.01548 5.86039 5.58379C5.86039 4.15677 7.00516 3 8.41725 3C9.82934 3 10.9741 4.15677 10.9741 5.58379C10.9741 6.39561 10.6036 7.11958 10.0243 7.59338C10.4742 9.29041 10.9231 10.9876 11.3733 12.6846C11.5053 12.6677 11.4476 12.642 11.6073 12.642C12.1534 12.642 12.5414 12.7319 12.9779 12.8605C14.6281 13.3471 13.3204 13.9406 15.8075 12.2647C16.2623 11.9584 20.7605 8.849 21.0346 8.7749C21.0346 7.84008 21.0689 7.26971 21.4977 6.5547C21.622 6.34768 21.7368 6.21943 21.8743 6.03931C22.7253 4.92556 24.5933 4.53292 25.9047 5.1743C26.2686 5.35227 26.5891 5.56885 26.8807 5.83874L27.2424 6.27477C27.6046 6.78132 27.8952 7.41254 27.8952 8.11452Z"
                  />
                </svg>
                {isSidebarOpen && <span>Управление шиной</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="group flex items-center gap-2 text-neutral-500 rounded-xl hover:bg-neutral-500/[12%] hover:text-white transition-colors duration-200 p-2"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-neutral-500 group-hover:fill-brand-500 transition-colors duration-200"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 5.33329C10.109 5.33329 5.33333 10.1089 5.33333 16C5.33333 18.2395 6.02353 20.3179 7.20283 22.0339C9.85882 20.7311 12.8456 20 16 20C19.1544 20 22.1412 20.7311 24.7972 22.0339C25.9765 20.3179 26.6667 18.2395 26.6667 16C26.6667 10.1089 21.891 5.33329 16 5.33329ZM26.2057 24.5808C28.1574 22.2618 29.3333 19.2682 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.6362 2.66663 2.66667 8.63616 2.66667 16C2.66667 19.2682 3.84257 22.2618 5.79436 24.5808C5.80491 24.5938 5.81568 24.6065 5.82664 24.619C8.27239 27.5029 11.9224 29.3333 16 29.3333C20.0775 29.3333 23.7276 27.5029 26.1733 24.619C26.1843 24.6065 26.1951 24.5938 26.2057 24.5808ZM22.9315 24.1077C20.8099 23.181 18.4663 22.6666 16 22.6666C13.5337 22.6666 11.1901 23.181 9.06849 24.1077C10.9328 25.7031 13.3539 26.6666 16 26.6666C18.6461 26.6666 21.0672 25.7031 22.9315 24.1077ZM16 10.6666C14.5272 10.6666 13.3333 11.8605 13.3333 13.3333C13.3333 14.8061 14.5272 16 16 16C17.4728 16 18.6667 14.8061 18.6667 13.3333C18.6667 11.8605 17.4728 10.6666 16 10.6666ZM10.6667 13.3333C10.6667 10.3878 13.0545 7.99996 16 7.99996C18.9455 7.99996 21.3333 10.3878 21.3333 13.3333C21.3333 16.2788 18.9455 18.6666 16 18.6666C13.0545 18.6666 10.6667 16.2788 10.6667 13.3333Z"
                  />
                </svg>
                {isSidebarOpen && <span>Профиль</span>}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          {isSidebarOpen && (
            <div className="relative bg-neutral-500/10 rounded-xl overflow-hidden p-4">
              <p className="font-medium text-white text-lg/7">Обновить тариф</p>
              <p className="leading-5 text-neutral-500">
                и получить больше возможностей...
              </p>

              <Image
                src="/assets/images/logo-icon-aside.svg"
                alt="Icon"
                width={104}
                height={104}
                className="absolute -right-4 -bottom-5.5"
              />
            </div>
          )}
          <Link
            href="/"
            className="group flex items-center gap-2 text-neutral-500 rounded-xl hover:bg-neutral-500/[12%] hover:text-white transition-colors duration-200 p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-neutral-500 group-hover:fill-brand-500 transition-colors duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6.66667C6.52724 6.66667 5.33333 7.86057 5.33333 9.33333V22.6667C5.33333 24.1394 6.52724 25.3333 8 25.3333H13.3333C14.8061 25.3333 16 24.1394 16 22.6667V21.3333C16 20.597 16.597 20 17.3333 20C18.0697 20 18.6667 20.597 18.6667 21.3333V22.6667C18.6667 25.6122 16.2788 28 13.3333 28H8C5.05448 28 2.66666 25.6122 2.66666 22.6667V9.33333C2.66666 6.38781 5.05448 4 8 4H13.3333C16.2788 4 18.6667 6.38781 18.6667 9.33333V10.6667C18.6667 11.403 18.0697 12 17.3333 12C16.597 12 16 11.403 16 10.6667V9.33333C16 7.86057 14.8061 6.66667 13.3333 6.66667H8ZM21.7239 9.72386C22.2446 9.20316 23.0888 9.20316 23.6095 9.72386L28.9428 15.0572C29.4635 15.5779 29.4635 16.4221 28.9428 16.9428L23.6095 22.2761C23.0888 22.7968 22.2446 22.7968 21.7239 22.2761C21.2032 21.7554 21.2032 20.9112 21.7239 20.3905L24.781 17.3333L9.33333 17.3333C8.59695 17.3333 8 16.7364 8 16C8 15.2636 8.59695 14.6667 9.33333 14.6667L24.781 14.6667L21.7239 11.6095C21.2032 11.0888 21.2032 10.2446 21.7239 9.72386Z"
              />
            </svg>
            {isSidebarOpen && <span>Выйти</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}
