import Footer from "@/components/app/footer/footer";
import Header from "@/components/app/header/header";
import SubscribeNewsLetter from "@/components/app/subscribe-news-letter";
import TogetherWeGrow from "@/components/app/together-we-grow";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="relative flex w-full flex-col overflow-y-auto">
        <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            🚧 Our new website is currently under development. 🎉 Launching on
            13th July 2025 — stay tuned for something exciting!
          </p>
        </StickyBanner>
      </div>
      <Header />
      <main className="mt-[64px]">
        <Outlet />
        <ScrollRestoration />
      </main>
      <SubscribeNewsLetter />
      <TogetherWeGrow />
      <Footer />
    </div>
  );
};

export default Layout;
