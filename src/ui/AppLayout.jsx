import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen justify-center font-spartan">
      <div className="h-full w-full max-w-screen-desktop">
        <header>header</header>
        <Outlet />
        <footer>footer</footer>
      </div>
    </div>
  );
}
