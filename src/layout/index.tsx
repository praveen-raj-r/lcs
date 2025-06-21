import Footer from "@/components/app/footer/footer";
import Header from "@/components/app/header/header";
import SubscribeNewsLetter from "@/components/app/subscribe-news-letter";
import TogetherWeGrow from "@/components/app/together-we-grow"; 
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative"> 
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
