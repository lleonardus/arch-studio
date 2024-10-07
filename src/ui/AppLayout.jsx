import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen justify-center font-spartan">
      <div className="relative h-full w-full max-tablet:overflow-x-hidden tablet:max-w-screen-tablet desktop:max-w-[1440px]">
        <div className="tablet:pl-[98px]">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
