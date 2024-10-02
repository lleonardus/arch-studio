import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen justify-center font-spartan">
      <div className="relative h-full w-full max-tablet:overflow-hidden tablet:max-w-screen-tablet tablet:pl-[97px] desktop:max-w-screen-desktop desktop:pl-[164px]">
        <Header />
        <Outlet />
        <footer></footer>
      </div>
    </div>
  );
}
