import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Homepage } from "./pages/homepage/Homepage";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { AboutUs } from "./pages/about-us/AboutUs";
import { Contact } from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
