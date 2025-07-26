"use client";

import { useState } from "react";
import { Button } from "../components/ui/Button";

const tabs: { tab: string }[] = [
  { tab: "Все" },
  { tab: "Информационные системы" },
  { tab: "Классы сообщений" },
  { tab: "Маршруты" },
];

export default function Page() {
  const [isActiveTab, setIsActiveTAb] = useState("Все");

  return (
    <>
      <section className="space-y-10 pt-7 pb-5">
        {/* Tabs */}
        <div className="max-w-screen scroll-none overflow-auto px-4 md:px-5">
          <div className="min-w-max flex items-center gap-2">
            {tabs.map((t) => (
              <Button
                key={t.tab}
                onClick={() => setIsActiveTAb(t.tab)}
                variant={t.tab === isActiveTab ? "primary" : "secondary"}
                size="xs"
                className="inline-flex items-center justify-start gap-1  transition-colors duration-200 !rounded-full"
              >
                {t.tab === isActiveTab && (
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
                      d="M16.4226 5.24408C16.748 5.56951 16.748 6.09715 16.4226 6.42259L8.08927 14.7559C7.76383 15.0814 7.23619 15.0814 6.91075 14.7559L3.57742 11.4226C3.25198 11.0972 3.25198 10.5695 3.57742 10.2441C3.90286 9.91864 4.4305 9.91864 4.75593 10.2441L7.50001 12.9882L15.2441 5.24408C15.5695 4.91864 16.0972 4.91864 16.4226 5.24408Z"
                      fill="white"
                    />
                  </svg>
                )}

                {t.tab}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
