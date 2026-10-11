import { cn } from "cn";
import "@fontsource-variable/inter";
import { MenuIcon } from "./assets/icons/menu";
import { SparkleIcon } from "./assets/icons/sparkle";
import { PlusIcon } from "./assets/icons/plus";
import { ArrowRightIcon } from "./assets/icons/arrow-right";
import { TrendingUpIcon } from "./assets/icons/trending-up";
import { useState } from "preact/hooks";
import { CloseIcon } from "./assets/icons/close";

export function App() {
  const style = {
    "bg-blue-700": "bg-[hsl(228,99%,58%)]",
    "border-blue-200": "border-[hsl(224,100%,95%)]/30",
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={cn(
        style["bg-blue-700"],
        "w-screen min-h-screen font-['Inter_Variable'] text-white flex flex-col relative",
      )}
    >
      <header
        className={cn(
          style["border-blue-200"],
          isOpen ? "" : "border-b",
          "py-6 px-6 lg:px-10 flex items-center justify-between",
        )}
      >
        <a className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded-full" />
          <span style={{ fontWeight: "500" }}>Bridge Collective</span>
        </a>
        <button
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>
      {isOpen && (
        <aside className="absolute top-18 w-full h-[calc(100%-72px)] flex flex-col lg:flex-row z-1">
          <div className="w-full h-full bg-black/30" />
          <div
            className={cn(
              style["bg-blue-700"],
              style["border-blue-200"],
              "absolute border-t right-0 top-0 p-4 lg:h-full w-full lg:w-1/4 flex flex-col gap-4 items-center text-center lg:items-end lg:text-right py-10 px-6 lg:px-10",
            )}
          >
            <a href="#" className="text-3xl hover:underline underline-offset-4">
              About
            </a>
            <a href="#" className="text-3xl hover:underline underline-offset-4">
              Our Work
            </a>
            <a href="#" className="text-3xl hover:underline underline-offset-4">
              Partners
            </a>
            <a href="#" className="text-3xl hover:underline underline-offset-4">
              Annual Report
            </a>
            <a href="#" className="text-3xl hover:underline underline-offset-4">
              Donate
            </a>
          </div>
        </aside>
      )}
      <section className="grid lg:grid-cols-4 lg:grid-rows-2 flex-1 relative">
        <article
          className={cn(
            style["border-blue-200"],
            "border-b lg:border-r lg:col-span-2 row-span-2 min-h-80 lg:min-h-auto p-10 flex flex-col justify-center",
          )}
        >
          <div className="space-y-10 lg:w-[52%]">
            <h1 className="text-4xl lg:text-5xl" style={{ fontWeight: 500 }}>
              A classroom for every child.
            </h1>
            <p className="opacity-60">
              We fund schools, train the teachers, and measure what works - so
              every child we reach today become a graduate tomorrow.
            </p>
          </div>
        </article>
        <article
          className={cn(
            style["border-blue-200"],
            "border-b lg:border-r col-span-1 min-h-80 lg:min-h-auto p-10 flex flex-col",
          )}
        >
          <div className="flex items-center justify-between">
            <SparkleIcon />
            <p className="text-3xl">2.4M</p>
          </div>
          <div className="mt-auto">
            <p className="text-sm">Student reached</p>
            <p className="text-xs opacity-60">
              Across 31 countries since 2011.
            </p>
          </div>
        </article>
        <article
          className={cn(
            style["border-blue-200"],
            "lg:border-r col-span-1 min-h-80 lg:min-h-auto p-10 flex flex-col",
          )}
        >
          <div className="flex items-center justify-between">
            <PlusIcon />
            <p className="text-3xl">1,284</p>
          </div>
          <div className="mt-auto">
            <p className="text-sm">Schools partnered</p>
            <p className="text-xs opacity-60">
              In 14 countries, from Kenya to Guatemala.
            </p>
          </div>
        </article>
        <article
          className={cn(
            style["border-blue-200"],
            "lg:border-r border-y min-h-80 lg:min-h-auto col-span-1 p-10 flex flex-col",
          )}
        >
          <div className="flex items-center justify-between">
            <ArrowRightIcon />
            <p className="text-3xl">38K</p>
          </div>
          <div className="mt-auto">
            <p className="text-sm">Teacher trained</p>
            <p className="text-xs opacity-60">
              Equippped with modern tools and methodology.
            </p>
          </div>
        </article>
        <article
          className={cn(
            style["border-blue-200"],
            "lg:border-r border-y min-h-80 lg:min-h-auto col-span-1 p-10 flex flex-col",
          )}
        >
          <div className="flex items-center justify-between">
            <TrendingUpIcon />
            <p className="text-3xl">3.1x</p>
          </div>
          <div className="mt-auto">
            <p className="text-sm">Graduation lift</p>
            <p className="text-xs opacity-60">
              Partner schools outperform national averages 3x.
            </p>
          </div>
        </article>
      </section>
      <footer
        className={cn(
          style["border-blue-200"],
          "py-6 px-6 lg:px-10 lg:col-span-4 flex flex-col lg:flex-row lg:items-center justify-between",
        )}
      >
        <p>&copy; 2026 Bridge Collective</p>
        <p>Registered Charity 12345678</p>
      </footer>
    </main>
  );
}
